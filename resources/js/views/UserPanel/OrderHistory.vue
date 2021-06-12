<template>
   <div class="order-history-wrap emb-card pa-4">
      <h4 class="mb-4">Order History</h4>
      <v-data-table
         :headers="headers"
			:items="tableData"
			hide-default-footer
      >
         <template v-slot:item.action="{ item }">
				<a href="javascript:void(0)"><v-icon class="accent--text">mdi-eye</v-icon></a>
			</template>
      </v-data-table>
   </div>
</template>

<script>
export default {
   data(){
      return{
         headers: [
            {
            text: 'No',
            align: 'left',
            sortable: false,
            value: 'count'
            },
            { text: 'Order Id', value: 'orderId' },
            { text: 'Shipping Address', value: 'address' },
            { text: 'Net Amount', value: 'net_amount' },
            { text: 'Order Date', value: 'created_at' },
            { text: 'Status', value: 'status' },
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
        getUserOrderData() {
            axios.get('/api/orders/user-orders').then(response => {
                let orderdata = response.data.orders;

                let count = 1;
                for (let key in orderdata) {
                    this.tableData.push({
                        'count'     : count,
                        'orderId'   : this.leftPad(orderdata[key].id, 6),
                        'address'   : orderdata[key].address +', '+ orderdata[key].city +', '+ orderdata[key].state+', '+ orderdata[key].zip_code,
                        'net_amount': orderdata[key].net_amount.toFixed(2),
                        'created_at': orderdata[key].created_at,
                        'status'    : orderdata[key].order_stat
                    });
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

