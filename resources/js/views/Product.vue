<template>
	<div class="emb-gadget-wrap">
		<emb-page-title v-if="$route.name == 'Shop'" :heading="$route.name" subHeading="Explore your favourite fashion style.">
		</emb-page-title>
		<emb-page-title v-else :heading="$route.name">
		</emb-page-title>
		<div class="gadget-content section-gap">
			<ais-instant-search :search-client="searchClient" index-name="ikea">

		</ais-instant-search>
            <v-container grid-list-xl py-0>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md4 lg4 xl3>
                        <template>
                            <div class="sidebar-filter-wrap">
                                <div class="search-box emb-card white mb-4 pt-6 pl-6 pr-6">
                                    <v-text-field
                                        solo
                                        label="Search Product"
                                        append-icon="mdi-magnify"
                                        @keyup="productFilter"
                                        v-model="product.searchText"
                                    ></v-text-field>
                                </div>
                                <div class="category-block emb-card white mb-6 pa-6">
                                    <h5>CATEGORIES</h5>
                                    <template>
                                        <ul style="list-style: none">
                                            <li v-for="(megaitem,key) in productCategories" :key="key">
                                                <a  :id="selectCategory != null ? selectCategory == megaitem.id ? 'select-category-color':'main-category' :'main-category'" :href="'/products/'+megaitem.id">{{$t(megaitem.name)}}</a>
                                                <ul style="list-style: none">
                                                    <li v-for="(submega,submegakey) in megaitem.children" :key="submegakey">
                                                        <a :id="selectCategory != null ? selectCategory == submega.id ? 'select-category-color':'sub-category' :'sub-category'" :href="'/products/'+submega.id">{{$t(submega.name)}}</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </template>
                                </div>

                                <div class="emb-card white mb-6 pa-6">
                                    <h5>PRICE</h5>
                                    <v-row>
                                        <v-col xl="4" md="4" sm="12">
                                            <v-text-field
                                                solo
                                                type="number"
                                                placeholder="0"
                                                v-model="product.minPrice"
                                            ></v-text-field>
                                        </v-col>

                                        <v-col xl="4" md="4" sm="12" >
                                            <v-text-field
                                                solo
                                                type="number"
                                                placeholder="50000"
                                                v-model="product.maxPrice"
                                            ></v-text-field>
                                        </v-col>

                                        <v-col xl="2" md="2" sm="12" class="mt-1"><v-btn class="accent" @click="productFilter">GO</v-btn></v-col>

                                    </v-row>
                                </div>
                                <div class="emb-card white pa-6">
                                    <div class="ais-ClearRefinements">
                                        <v-btn @click="getProductsData" class="cpx-0 v-size--large font-weight-medium accent ais-ClearRefinements-button">
                                            Clear all filters
                                        </v-btn>
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
<!--                                        <div class="d-sm-flex">-->
<!--                                            <div class="app-selectbox-sm">-->
<!--                                                <ais-sort-by-->
<!--                                                    :items="[-->
<!--                                                             { value: 'ikea', label: 'Default' },-->
<!--                                                             { value: 'ikea_price_asc',label: 'Lowest price'},-->
<!--                                                             { value: 'ikea_price_desc',  label: 'Highest price'},-->
<!--                                                        ]"-->
<!--                                                />-->
<!--                                            </div>-->
<!--                                            <div class="app-selectbox-sm ml-sm-4 mt-sm-0 mt-6">-->
<!--                                                <ais-hits-per-page-->
<!--                                                    :items="[-->
<!--                                                            { label: '8 hits per page', value: 8, default: true },-->
<!--                                                            { label: '12 hits per page', value: 12},-->
<!--                                                            { label: '15 hits per page', value: 16 },-->
<!--                                                        ]"-->
<!--                                                />-->
<!--                                            </div>-->
<!--                                        </div>-->
                                    </v-flex>
                                    <v-flex xs12 sm12 md12 lg5 xl5 cpx-7 py-0 pr-0 mb-4>
                                        <div class="text-lg-right">
<!--                                            <ais-stats></ais-stats>-->
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
                searchText:null,
                minPrice:0,
                maxPrice:null,
            },
            selectCategory:null,
		}
	},
    mounted() {
        this.getParentCategories();
        if (this.$router.history.current.params.category != null) {
            this.selectCategory = this.$router.history.current.params.category;
            this.getProductsDataWithCategory(this.$router.history.current.params.category);
        }else if(this.$router.history.current.params.searchText != null){
            this.product.searchText = this.$router.history.current.params.searchText;
            this.productFilter();
        }else{
            this.getProductsData();
        }
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
            this.listData = [];
            this.product = {
                    product_categories: null,
                    searchText:null,
                    minPrice:0,
                    maxPrice:null,
            }
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

        getProductsDataWithCategory(category) {
            this.listData = [];
            axios.get('/api/product-by-category/'+category
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

            if (this.product.searchText === ''){
                this.getProductsData();
            }else{
                this.listData = [];
                axios.post('/api/product/filter',this.product).then(response => {
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
            }
        }

    }
}
</script>

<style>
    #main-category{
        font-size: 18px;
    }
    #sub-category{
        font-size: 16px;
        color: #000000;
    }
    #select-category-color{
        font-size: 16px;
        color: #ff5722 !important;
    }
</style>
