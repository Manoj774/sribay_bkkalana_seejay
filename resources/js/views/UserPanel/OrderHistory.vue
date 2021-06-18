<template>
   <div class="order-history-wrap emb-card pa-4">
      <h4 class="mb-4">Order History</h4>
      <v-data-table
         :headers="headers"
			:items="tableData"
			hide-default-footer
      >
          <template v-slot:item.id="{ item }">
             {{leftPad(item.id,6)}}
          </template>
         <template v-slot:item.action="{ item }">
             <v-btn text icon color="grey" class="mr-3"  @click="openDialog(item)" small slot="activator">
                 <v-icon class="primary--text">mdi-eye</v-icon>
             </v-btn>
		 </template>
      </v-data-table>
       <v-dialog v-model="editDialog" max-width="800px" class="pa-2" >
           <v-card class="emb-FinalReceipt-wrap" v-if="selectViewItem != null" >
               <v-card-text class="pa-4">
                   <v-flex xs12>
                       <div class="text-center bg-grey px-4 py-6">
                           <h4>Payment Status</h4>
                           <h5 class="mb-6">Payment is successfully processed</h5>
                           <h6 class="mb-6">Transaction ID: {{selectViewItem.transaction_id}}</h6>
                           <img src="/static/images/checked.png" width="64" height="64" alt="Success">
                       </div>
                       <div class="mt-12 mx-4" id="order">
                           <v-layout row wrap mb-10 mx-0 mt-0>
                               <v-flex xs12 sm6 md6 lg6 xl6 text-left pa-0 >
                                   <h6>Summary</h6>
                                   <p class="mb-1">Order ID : {{leftPad(selectViewItem.id, 6)}}</p>
                                   <p class="mb-1">Order Date : {{selectViewItem.created_at}}</p>
                                   <p class="mb-1">Order Total : Rs. {{selectViewItem.net_amount.toFixed(2)}}</p>
                               </v-flex>
                               <v-flex xs12 sm6 md6 lg6 xl6 text-left pa-0>
                                   <h6>Shipping Address</h6>
                                   <p class="mb-1">{{selectViewItem.shipping_first_name +" "+ selectViewItem.shipping_last_name}}</p>
                                   <p class="mb-1">{{selectViewItem.shipping_address}}</p>
                                   <p class="mb-1">{{selectViewItem.shipping_city}}</p>
                                   <p class="mb-1">{{selectViewItem.sipping_zip_code}}</p>
                                   <p class="mb-1">{{selectViewItem.shipping_state}}</p>
                                   <p class="mb-1">Contact No. {{selectViewItem.shipping_phone_number}}</p>
                               </v-flex>
                           </v-layout>

                           <h4 class="pt-8 mb-7 text-sm-left text-center">Ordered Details</h4>
                           <div class="layout row wrap align-center d-flex ma-0" v-for="(product,key) in selectViewItem.order_items" :key="key">
                               <v-flex xs12 sm12 md2 lg2 xl3>
                                   <img alt="cart Image" width="100" :src="product.image_url">
                               </v-flex>
                               <v-flex xs12 sm12 md5 lg5 xl3>
                                   <h6>Product Name</h6>
                                   <p class="font-weight-bold">{{product.product_name}}</p>
                               </v-flex>
                               <v-flex xs12 sm12 md2 lg2 xl3>
                                   <h6>Quantity</h6>
                                   <p>{{product.quantity}}</p>
                               </v-flex>
                               <v-flex xs12 sm12 md3 lg3 xl3>
                                   <h6>Price</h6>
                                   <p>Rs. {{product.total.toFixed(2)}}</p>
                               </v-flex>
                           </div>

                           <v-divider class="my-6"></v-divider>
                           <div class="pt-6 pr-4">
                               <div class="layout align-center justify-space-between ma-0">
                                   <p>Subtotal</p>
                                   <span>Rs. {{selectViewItem.sub_total.toFixed(2)}}</span>
                               </div>
                               <div class="layout align-center justify-space-between ma-0">
                                   <p>Shipping</p>
                                   <span>Rs. {{selectViewItem.shipping_cost.toFixed(2)}}</span>
                               </div>
                               <div class="layout align-center justify-space-between ma-0">
                                   <p>Tax(GST)</p>
                                   <span>Rs. {{selectViewItem.tax.toFixed(2)}}</span>
                               </div>
                               <v-divider class="my-4"></v-divider>
                               <div class="layout align-center justify-space-between ma-0">
                                   <h4>Total</h4>
                                   <h4>Rs. {{selectViewItem.net_amount}}</h4>
                               </div>
                               <v-divider class="my-4"></v-divider>
                           </div>

                       </div>
                       <div class="py-6 text-center bg-grey">
                           <h4>Order Status</h4>
                           <h5>{{selectViewItem.order_stat}}</h5>

                       </div>

                       <div class="layout align-center justify-space-between ma-0 my-6">
                           <v-btn color="accent" @click="printOrder">Download PDF</v-btn>
                       </div>
                   </v-flex>
               </v-card-text>
           </v-card>
       </v-dialog>
   </div>
</template>

<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default {
   data(){
      return{
          editDialog: false,
          selectViewItem:null,
         headers: [
            // {
            // text: 'No',
            // align: 'left',
            // sortable: false,
            // value: 'count'
            // },
            { text: 'Order Id', value: 'id' },
            { text: 'Shipping Address', value: 'shipping_address' },
            { text: 'Net Amount', value: 'net_amount' },
            { text: 'Order Date', value: 'created_at' },
            { text: 'Status', value: 'order_stat' },
            { text: 'Action', value: 'action' }
         ],
         tableData: []
      }
   },
    mounted() {

    },
    created() {
        this.getUserOrderData();
        // this.getUserOrderData();
    },
    methods:{
        openDialog(item) {
            console.log(item)
            this.selectViewItem = item;
            this.editDialog = true;
        },
        printOrder() {
            let pdf = new jsPDF();
            let element = document.getElementById('order');
            let width= element.style.width;
            let height = element.style.height;
            html2canvas(element).then(canvas => {
                let image = canvas.toDataURL('image/png');
                pdf.addImage(image, 'JPEG', 10, 10,width,height);
                pdf.save('order'+new Date()+'.pdf');
            });
        },
        getUserOrderData() {
            axios.get('/api/orders/user-orders').then(response => {
                let orderdata = response.data.orders;

                let count = 1;
                for (let key in orderdata) {
                    this.tableData.push(orderdata[key]);
                    count++;
                }
            }).catch(error => {
                console.log(error.response.data.message);
            });
        },
        leftPad(number, targetLength) {
            let output = number + '';
            while (output.length < targetLength) {
                output = '0' + output;
            }
            return output;
        }
    }
}
</script>

