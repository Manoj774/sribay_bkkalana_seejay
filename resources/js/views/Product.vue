<template>
	<div class="emb-gadget-wrap">
		<emb-page-title v-if="$route.name == 'Shop'" :heading="$route.name" subHeading="Explore your favourite fashion style.">
		</emb-page-title>
		<emb-page-title v-else-if="$route.params.title.toLowerCase() == 'Gadgets'.toLowerCase()" :heading="$route.params.title.charAt(0).toUpperCase()+ $route.params.title.slice(1)" subHeading="Checkout our new gadgets.">
		</emb-page-title>
		<emb-page-title v-else-if="$route.params.title == 'Accessories'" :heading="$route.params.title" subHeading="Choose the wide range of best accessories.">
		</emb-page-title>
		<emb-page-title v-else :heading="$route.name">
		</emb-page-title>
		<div class="gadget-content section-gap">
			<ais-instant-search :search-client="searchClient" index-name="ikea">
				<v-container grid-list-xl py-0>
					<v-layout row wrap>
						<v-flex xs12 sm12 md4 lg4 xl3>
                            <template>
                                <div class="sidebar-filter-wrap">
                                    <div class="search-box emb-card white mb-6 pa-6">
                                        <ais-search-box placeholder="Search a product"></ais-search-box>
                                    </div>
                                    <div class="cateogary-block emb-card white mb-6 pa-6">
                                        <h5>CATEGORIES</h5>
                                        <v-treeview
                                            v-model="product.product_categories"
                                            :items="productCategories"
                                            :selection-type="selectionType"
                                            selectable
                                            return-object
                                        	open-all
                                         ></v-treeview>
                                    </div>

                                    <div class="emb-card white mb-6 pa-6">
                                        <h5>PRICE</h5>
                                        <ais-range-input attribute="price"></ais-range-input>
                                    </div>
                                    <div class="emb-card white pa-6">
                                        <div class="ais-ClearRefinements">
                                            <button class="v-btn v-btn--contained cpx-0 v-size--large font-weight-medium accent ais-ClearRefinements-button">
                                                Clear all filters
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </template>
						</v-flex>
						<v-flex xs12 sm12 md8 lg8 xl9>
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
                                            v-for="(product,index) in listData"
                                            cols="12"
                                            sm="6"
                                            md="4"
                                            lg="4"
                                            :key="index"
                                        >
                                            <product-item :data="product"></product-item>
                                        </v-col>
                                    </v-row>
                                </template>
                            </div>
						</v-flex>
					</v-layout>
			</v-container>
		</ais-instant-search>
		</div>
	</div>
</template>

<script>
import AppConfig from "../constants/AppConfig";
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/algolia-min.css';
import ProductItem from "../components/Ecommerce/ProductItem";
export default {
	components:{
        ProductItem
	},
	data(){
		return{
			searchClient: algoliasearch(
         	'latency',
				AppConfig.algoliaApiKey

			),
            listData: [],
            productCategories:[],
            selectionType:'independent',
            product: {
                product_categories: null,
            },
		}
	},
    mounted() {
        this.getProductsData();
        this.getParentCategories();
    },
    methods:{
        onPageChange() {
            window.scrollTo(0, 0);
        },
        itemDeleted(item) {
            let deletedToDoList = this.listData;
            let index = deletedToDoList.indexOf(item);
            this.listData.splice(index, 1);
        },

        getProductsData() {
            axios.get('/api/product'
            ).then(response => {
                this.products = response.data.products;
                let count = 1;
                for (let categoryKey in this.products) {
                    this.listData.push(this.products[categoryKey]);
                }
                // console.log(this.listData);
            })
                .catch(error => {
                    console.log(error);
                });
        },

        getParentCategories: function() {
            axios.get('/api/category/tree-view').then(response => {
                const responseData = response.data.categories;
                for(const i in responseData) {
                    this.productCategories.push(responseData[i]);
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



        productFilter(){

        }

    }
}
</script>
