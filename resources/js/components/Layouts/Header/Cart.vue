<template>
	<div class="mr-3">
		<v-menu transition="scale-transition" class="cart" min-width="300" max-width="300" offset-y light>
			<template v-slot:activator="{ on }">
				<v-btn class="cart-btn" fab dark small color="accent" v-on="on" v-if="cart.length > 0">
					<v-badge right large color="accent" >
						<template >
							<span slot="badge">{{cart.length}}</span>
						</template>
						<v-icon dark>mdi-cart-minus</v-icon>
					</v-badge>
				</v-btn>
                <v-btn class="cart-btn" fab dark small color="accent" v-on="on" v-else>
                    <v-icon dark>mdi-cart-minus</v-icon>
                </v-btn>
			</template>
			<div v-if="cart && cart.length > 0" class="cart-menu-list white">
				<emb-perfect-scrollbar class="scroll-area" style="max-height:280px">
					<v-list class="cart-list-items py-0" v-for="(cart, index) in cart" :key="index">
						<v-layout row wrap align-center cart-item ma-0>
							<v-flex sm12 md12 lg12 xl12 pa-0>
								<v-layout row wrap align-center class="ma-0">
									<v-flex xs3 sm3 md3 lg3 xl3 pa-0>
										<img :src="cart.image" width="60" height="70">
									</v-flex>
									<v-flex xs9 sm9 md9 lg9 xl9 pa-0>
										<div class="pl-1">
											<h6 class="word-wrap-break">{{cart.name}}</h6>
											<span>
												<emb-currency-sign></emb-currency-sign>{{cart.price * cart.quantity}}
											</span>
										</div>
									</v-flex>
									<v-flex sm4 md4 lg4 xl4 text-center pa-0 cart-action>
										<v-btn class="primary d-inline-block" icon @click.stop="dialog = true"
											@click="deleteProductFromCart(cart)">
											<v-icon>mdi-cart-remove</v-icon>
										</v-btn>
										<v-btn class="primary d-inline-block ml-2 d-inline-flex align-items-center" icon
											to="/cart">
											<v-icon>mdi-pencil-box-multiple-outline</v-icon>
										</v-btn>
									</v-flex>
								</v-layout>
							</v-flex>
						</v-layout>
					</v-list>
				</emb-perfect-scrollbar>
				<emb-delete-confirmation ref="deleteConfirmationDialog"
					message="Are you sure you want to delete this product?" @onConfirm="onDeleteProductFromCart">
				</emb-delete-confirmation>
				<v-layout align-center pa-3>
					<v-btn class="accent white--text" block to="/cart">View Cart</v-btn>
				</v-layout>
			</div>
			<div v-else class="text-center white pa-6">
				<v-icon size="31" class="accent--text">
                    mdi-cart-minus
				</v-icon>
				<h5>No Product Found</h5>
			</div>
		</v-menu>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import VuePerfectScrollbar from 'vue-perfect-scrollbar';

	export default {
		components: {
			embPerfectScrollbar: VuePerfectScrollbar,
		},
		data() {
			return {
				selectDeletedProduct: null,
				settings: {
					maxScrollbarLength: 160
				},
                cart:[],

			};
		},
		computed: {
			...mapGetters(["selectedCurrency", "currencies"]),
			getTotalPrice() {
				let totalPrice = 0;
				if (this.cart.length > 0) {
					for (const item of this.cart) {
						totalPrice += item.total;
					}
					return totalPrice.toFixed(2);
				}
				else {
					return totalPrice;
				}
			}
		},
        mounted() {
            this.getCartItems();
            if (JSON.parse(sessionStorage.getItem('user')) != null){
                this.user = JSON.parse(sessionStorage.getItem('user'));
            }
		},
        methods: {
            buyNow(){
                if (this.user == null){
                    this.dialog = true;
                }else {
                    this.$router.push({path:'/checkout/payment'});
                }
            },
            registerUser(){
                this.$refs.register_form.validate();
                if(this.register_valid === true){
                    axios.post(this.$serverUrl+'api/register', this.register).then(response => {
                        sessionStorage.setItem('token', response.data.token)
                        sessionStorage.setItem('role', response.data.role)
                        sessionStorage.setItem('user', JSON.stringify(response.data.user))
                        this.user = response.data.user;
                        //this.$router.push({path:'/checkout/payment'});
                    }).catch(error => {
                        this.$toast.open({
                            message: error.message,
                            type: 'error',
                        });
                    });
                }
            },
            loginUser(){
                this.$refs.login_form.validate();
                if(this.login_valid === true){
                    axios.post(this.$serverUrl+'api/login', this.login).then(response => {
                        sessionStorage.setItem('token', response.data.token)
                        sessionStorage.setItem('role', response.data.role)
                        sessionStorage.setItem('user', JSON.stringify(response.data.user))
                        this.user = response.data.user;
                        this.$router.push({path:'/checkout/payment'});
                    }).catch(error => {
                        this.$toast.open({
                            message: error.message,
                            type: 'error',
                        });
                    });
                }
            },

            getCartItems(){
                axios.get('/api/cart/get-cart-items').then(response => {
                    this.cart = [];
                    for (const i in response.data.cart_items){
                        this.cart.push(response.data.cart_items[i]);
                    }
                }, response => {
                    const errors = response.data.message;
                    var html = '';
                    for (const i in errors){
                        html += errors[i];
                    }
                    this.$toast.open({
                        message: html,
                        type: 'error',
                    });
                });
            },
            deleteProductFromCart(product) {
                this.$refs.deleteConfirmationDialog.openDialog();
                this.selectDeletedProduct = product;
            },
            onDeleteProductFromCart() {
                this.$refs.deleteConfirmationDialog.close();
                this.$snotify.error("Product Removing from cart", {
                    closeOnClick: false,
                    pauseOnHover: false,
                    timeout: 1000
                });
                axios.delete('/api/cart/remove-cart-item/'+this.selectDeletedProduct.product_id).then(response => {
                    window.location.href = "/cart";
                }, response => {
                    const errors = response.data.message;
                    var html = '';
                    for (const i in errors){
                        html += errors[i];
                    }
                    this.$toast.open({
                        message: html,
                        type: 'error',
                    });
                });
            }
		}
	}
</script>
