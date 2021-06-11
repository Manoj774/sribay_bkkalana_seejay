<template>
	<div class="shop-content-wrap">
		<div class="shop-header">
			<v-layout row wrap my-0 align-center>
				<v-flex xs12 sm12 md12 lg7 xl7 py-0 cpx-7 mb-4>
					<div class="d-sm-flex">
						<div class="app-selectbox-sm">
							<ais-sort-by
							  :items="[
								 { value: 'ikea', label: 'Default' },
								 { value: 'ikea_price_asc',label: 'Lowest price'},
								 { value: 'ikea_price_desc',  label: 'Highest price'},
							  ]"
							/>
						</div>
						<div class="app-selectbox-sm ml-sm-4 mt-sm-0 mt-6">
							<ais-hits-per-page
							  :items="[
										{ label: '8 hits per page', value: 8, default: true },
										{ label: '12 hits per page', value: 12},
										{ label: '15 hits per page', value: 16 },
									]"
							  />
						</div>
					</div>
				</v-flex>
				<v-flex xs12 sm12 md12 lg5 xl5 cpx-7 py-0 pr-0 mb-4>
					<div class="text-lg-right">
						<ais-stats></ais-stats>
					</div>
				</v-flex>
			</v-layout>
		</div>

        <template>
            <v-row>
                <v-col
                    v-for="(category,index) in listData"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="4"
                    :key="index"
                >
                    <product-item :data="category"></product-item>
                </v-col>
            </v-row>
        </template>


	</div>
</template>

<script>
    import ProductItem from "./ProductItem";
    //import ProductItemsListView from "./ProductItemsListView.vue";
    //import api from "../../api";

    export default {
        props: ["colxs", "colsm", "colmd", "collg", "colxl"],
        data() {
            return {
                products: null,
                listData: []
            };
        },
        mounted() {
            this.getProductsData();
        },
        methods: {
            onPageChange() {
                window.scrollTo(0, 0);
            },
            itemDeleted(item) {
                let deletedToDoList = this.listData;
                let index = deletedToDoList.indexOf(item);
                this.listData.splice(index, 1);
            },
            getProductsData() {
                this.$http.get(this.$serverUrl+'api/product',{
                    headers: {'Content-Type':'application/json','Authorization': 'Bearer ' + localStorage.getItem('bigStore.jwt')}
                }).then(response => {
                    this.products = response.body.products;
                    let count = 1;
                    for (let categoryKey in this.products) {
                        this.listData.push(
                            {
                                'count':count++,
                                'image': this.products[categoryKey].image_url,
                                'name': this.products[categoryKey].product_name,
                                'price': this.products[categoryKey].sell_price,
                                'id': this.products[categoryKey].id
                            }
                        );
                    }
                    console.log(this.listData);
                })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        components: {
            ProductItem,
            //ProductItemsListView
        }
    };
</script>
