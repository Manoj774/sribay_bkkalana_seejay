<template>
   <div class="shop-content-wrap">
<!--		<template v-if="gridListView==true && listData != null">-->
<!--			<v-row>-->
<!--				<v-col-->
<!--					v-for="(category,index) in listData"-->
<!--					cols="12"-->
<!--					sm="6"-->
<!--					md="4"-->
<!--					lg="3"-->
<!--					:key="index"-->
<!--				>-->
<!--					<product-item :data="category" @deleteProduct="itemDeleted"></product-item>-->
<!--				</v-col>-->
<!--			</v-row>-->
<!--		</template>-->
		<template >
			<product-items-list-view :data="listData" @deleteProduct="itemDeleted"></product-items-list-view>
		</template>

   </div>
</template>

<script>
import ProductItem from "./ProductItem";
import ProductItemsListView from "./ProductItemsListView.vue";
//import api from "../../api";

export default {
  props: ["colxs", "colsm", "colmd", "collg", "colxl", "gridListView"],
  data() {
    return {
      products: null,
      headersForListView: [
        {
          text: "ID",
          sortable: false,
          value: "count"
        },
        {
          text: "Image",
          sortable: false,
          value: "image"
        },
        {
          text: "Name",
          sortable: false,
          value: "name"
        },
        {
          text: "Price",
          sortable: false,
          value: "price"
        },
        {
          text: "Action",
          sortable: false,
          value: "action"
        }
      ],
      listData: []
    };
  },
  mounted() {
    this.getProductsData();
  },
  methods: {
    itemDeleted(item) {
      let deletedToDoList = this.listData;
      let index = deletedToDoList.indexOf(item);
      this.listData.splice(index, 1);
    },
    getProductsData(value) {

        if (value != null && value !== ''){

            axios.post('/api/product/filter',{searchText:value}).then(response => {
                this.listData =[];
                this.products = response.data.products;
                let count = 1;
                for (let categoryKey in this.products) {
                    this.listData.push(
                        {
                            'count': count++,
                            'image': this.products[categoryKey].image_url,
                            'name' : this.products[categoryKey].product_name,
                            'price': this.products[categoryKey].sell_price,
                            'id'   : this.products[categoryKey].id
                        }
                    );
                }
            }).catch(error => {
                const errors = error.response.data.message;
                var html = '';
                for (const i in errors){
                    html += errors[i];
                }
                this.$toast.open({
                    message: html,
                    type: 'error',
                });
            });
        }else{
            axios.get('/api/product').then(response => {
                this.listData =[];
                this.products = response.data.products;
                let count = 1;
                for (let categoryKey in this.products) {
                    this.listData.push(
                        {
                            'count': count++,
                            'image': this.products[categoryKey].image_url,
                            'name' : this.products[categoryKey].product_name,
                            'price': this.products[categoryKey].sell_price,
                            'id'   : this.products[categoryKey].id
                        }
                    );
                }
            }).catch(error => {
                console.log(error);
            });
        }

    }
  },
  components: {
    ProductItem,
    ProductItemsListView
  }
};
</script>
