<template>
	<div>
		<div class="emb-card pa-4 search-box-wrap">
			<div class="d-flex justify-start align-center">
				<div class="dash-title-wrap">
					<h5 class="dash-title mb-0">Search</h5>
				</div>
				<div class="search-input d-flex justify-space-between align-center">
					<div class="input-wrap">
							<v-text-field label="Search Projects" v-model="searchText">
								</v-text-field>
					</div>
					<div class="action-btn-wrap">
						<v-btn color="primary" class="mr-3" @click="productSearch(searchText)">Search</v-btn>
						<v-btn color="primary"  to="/sriBay-admin/product-add">
							Add Product
							<v-icon>mdi-plus-thick</v-icon>
						</v-btn>
					</div>
				</div>
			</div>
		</div>
		<v-layout row wrap class="pt-12 ma-0">
			<v-flex xs12 sm8 md9 py-0>
				<h5 class="mb-0 pt-2">Product grid</h5>
			</v-flex>
			<v-flex xs12 sm4 md3 py-0 text-right>
				<v-icon class="pa-2" @click="switchToGridView(true)">mdi-apps</v-icon>
				<v-icon class="pa-2" @click="switchToListView(false)">mdi-format-list-bulleted </v-icon>
			</v-flex>
		</v-layout>
		<div class="d-md-inline-flex mb-5">
<!--			<v-select class="mr-md-5" :items="typeItems" label="Type"></v-select>-->
<!--			<v-select class="mr-md-5" :items="recentItems" label="Recent"></v-select>-->
<!--			<v-select class="mr-md-5" :items="noOfItems" label="No of Items"></v-select>-->
		</div>

		<product-items ref="products" :gridListView="gridView" :cols="6" :colxl="3" :collg="3" :colmd="4" :colsm="4" :colxs="12">
		</product-items>
	</div>
</template>

<script>
import ProductItems from "./ProductItems.vue";

export default {
  data() {
    return {
      gridView: true,
      listView: false,
      searchText:null,
      search: null,
    };
  },
  components: {
    ProductItems
  },
  methods: {
    switchToGridView(value) {
      this.gridView = value;
    },
    switchToListView(value) {
      this.gridView = value;
    },
    productSearch(){
        this.$refs.products.getProductsData(this.searchText);
    }
  }
};
</script>

