<template>
	<div>
	<div class="product-item-wrap emb-card" style="max-height: 400px; min-height: 400px;">
		<div>
			<div class="thumb-warp" >
				<router-link :to="'/product-detail/'+data.id">
					<img alt="product" :src="data.image_url" style="max-height: 280px;min-height: 280px;">
				</router-link>
<!--				<div class="wishlist-icon">-->
<!--					<v-btn @click="addItemToWishlist(data)" icon >-->
<!--						<v-icon class="grey&#45;&#45;text">mdi-cards-heart </v-icon>-->
<!--					</v-btn>-->
<!--				</div>-->
				<div class="add-to-cart">
					<v-btn
						class="accent"
						small icon
						@click="addProductToCart(data)"
					>
						<v-icon>mdi-cart-plus </v-icon>
					</v-btn>
				</div>
			</div>
			<div class="emb-card-content pa-4">
				<h6 class="font-weight-medium text-capitalize">{{data.product_name.toLowerCase().substring(0,50)+'....'}}</h6>
				<div class="emb-meta-info layout align-center justify-space-between">
					<div class="inline-block">
						<h6 class="accent--text">
							<emb-currency-sign></emb-currency-sign>{{data.sell_price}}
						</h6>
					</div>
					<div class="inline-block">
<!--						<v-rating-->
<!--							v-model="data.rating"-->
<!--							small-->
<!--							background-color="warning"-->
<!--							readonly-->
<!--							color="warning"-->
<!--						></v-rating>-->
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {

	props: ['data'],
	computed: {
	  ...mapGetters(["wishlist"])
	},
	methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
		/**
		 * method for adding item to cart
		*/
        addProductToCart(item) {
            console.log(item);
            let newProduct = {
                product_id: item.id,
                image: item.image_url,
                name: item.product_name,
                price: item.sell_price,
                quantity: item.quantity ? item.quantity : 1,
                total: item.sell_price * (item.quantity ? item.quantity : 1),
                aff_user_id: item.user
            }
            axios.post('/api/cart/add-to-cart', newProduct).then(response => {
                this.$snotify.success('Product adding to the cart', {
                    closeOnClick: false,
                    pauseOnHover: false,
                    timeout: 1000,
                    showProgressBar: false,
                });
                setTimeout(() => {
                    window.location.href = this.$router.history.current.path;
                }, 50);

                // console.log(this.$router.history.current);
                // console.log(response.data.message)
            }, error => {
                const errors = error.response.data.message;
                var html = '';
                for (const i in errors) {
                    html += errors[i];
                }
                this.$toast.open({
                    message: html,
                    type: 'error',
                });
            });

        },
		/**
		 * method for checking if item exists in cart
		*/
		ifItemExistInCart(result) {
			let exists = false;
			for (let item of this.cart) {
				if (item.id == result.objectID) {
					exists = true;
				}
			}
			return exists;
		},
		 // this method is use to add a product in wishlist
		addItemToWishlist(data) {
			if(this.ifItemExistInWishlist(data)) {
				this.$snotify.error('Product already exist in the wishlist',{
					showProgressBar:false,
				});
			}
			else {
				this.$snotify.success('Product adding to the wishlist',{
					closeOnClick: false,
					pauseOnHover: false,
					timeout: 1000,
					showProgressBar:false,
				});
				setTimeout(() => {
					this.$store.dispatch("addItemToWishlist", data);
				}, 2000);
			}
		},
		/**
		 * This Function Is use to check weather the product exist in the wishlist
		 * Return boolean
		*/
		ifItemExistInWishlist(result) {
			let exists = false;
			for (let item of this.wishlist) {
				if (item.id == result.objectID) {
					exists = true;
				}
			}
			return exists;
		},
  	}
};
</script>
