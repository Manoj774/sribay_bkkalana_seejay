<template>
    <div>
        <h4 class="mb-6">Order List</h4>
        <div class="pa-4 pt-0 emb-card mb-6">
            <v-row >
                <v-col cols="12"sm="12" md="4" lg="4">
                    <v-text-field v-model="search" label="Search" single-line hide-details>
                    </v-text-field>
                </v-col>
                <v-col cols="12"sm="12" md="4" lg="4">
                    <v-row>
                        <v-col
                            cols="12"
                            sm="12"
                            md="6"
                        >
                            <v-dialog
                                ref="dialog"
                                v-model="form_date_modal"
                                :return-value.sync="form_date"
                                persistent
                                width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="form_date"
                                        label="From Date"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="form_date"
                                    scrollable
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="form_date_modal = false"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="$refs.dialog.save(form_date)"
                                    >
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-dialog>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="12"
                            md="6"
                        >
                            <v-dialog
                                ref="dialog1"
                                v-model="to_date_modal"
                                :return-value.sync="to_date"
                                persistent
                                width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="to_date"
                                        label="To Date"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="to_date"
                                    scrollable
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="to_date_modal = false"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="$refs.dialog1.save(to_date)"
                                    >
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-dialog>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12"sm="12" md="2" lg="2">
                    <v-select
                        v-model="fillerOrderStatus"
                        :items="orderStatus"
                        label="Order Status"
                        item-text="status"
                        item-value="value"
                        persistent-hint
                        return-object
                        single-line
                        @change="filterOrder"
                    ></v-select>
                </v-col>
                <v-col cols="12"sm="12" md="2" lg="2" class="mt-4">
                    <download-excel
                        class = "export-excel-wrapper"
                        :data = "invoiceData"
                        :fields = "json_fields"
                        name = "Orders.xls">
                        <v-btn type="primary" color="red" size = "small"> Export EXCEL </v-btn>
                    </download-excel>
                </v-col>
            </v-row>
        </div>
        <div class="emb-card pa-4">
            <div class="table-responsive" >
            <v-data-table
                :headers="headers"
                :items="invoiceData"
                :items-per-page="15"
                :search="search"
                align='center'
            >
                <template v-slot:item.action="{ item }">
                    <v-btn text icon color="grey" class="mr-3"  @click="openDialog(item)" small slot="activator">
                        <v-icon class="primary--text">mdi-eye</v-icon>
                    </v-btn>
<!--                    <v-btn text icon color="grey" small  @click="deleteItemFromInvoicesList(item)" slot="activator">-->
<!--                        <v-icon class="error&#45;&#45;text">mdi-delete</v-icon>-->
<!--                    </v-btn>-->
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
                                        <h4>Rs. {{selectViewItem.net_amount.toFixed(2)}}</h4>
                                    </div>
                                    <v-divider class="my-4"></v-divider>
                                </div>

                            </div>
                            <div class="py-6 text-center bg-grey">
                                <h4>Change Order Status</h4>
                                <v-row align="center" class="pl-2" style="justify-content: center">
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-select
                                            v-model="selectedOrderStatus"
                                            :items="orderStatus"
                                            label="Order Status"
                                            item-text="status"
                                            item-value="value"
                                            persistent-hint
                                            return-object
                                            single-line
                                        ></v-select>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="2"
                                    >
                                        <v-btn color="accent" @click="updateOrderStatus(selectViewItem.id)">Update</v-btn>
                                    </v-col>
                                </v-row>
                            </div>

                            <div class="layout align-center justify-space-between ma-0 my-6">
                                <v-btn color="accent" @click="printOrder">Download PDF</v-btn>
                            </div>
                        </v-flex>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <emb-delete-confirmation-2
                ref="deleteConfirmationDialog"
                messageTitle="Are You Sure You Want To Delete?"
                messageDescription="Are you sure you want to delete this invoice permanently?"
                @onConfirm="ondeleteItemFromInvoicesList"
                btn1="Cancel"
                btn2="Yes"
            >
            </emb-delete-confirmation-2>
        </div>
        </div>
    </div>
</template>

<script>

    import jsPDF from 'jspdf'
    import html2canvas from "html2canvas"

    export default {
        data() {
            return {
                json_fields: {
                    "Order ID": "orderId",
                    "Buyer": "full_name",
                    "Date": "created_at",
                    "Net Amount": "net_amount",
                    "Order Status": "order_stat",
                    "Transaction Number": "transaction_id",
                    "Shipping Address": "shipping_address",
                    "Shipping Phone Number":"shipping_phone_number",
                },
                json_meta: [
                    [
                        {
                            " key ": " charset ",
                            " value ": " utf- 8 "
                        }
                    ]
                ],
                form_date: null,
                to_date: null,
                form_date_modal: false,
                to_date_modal: false,
                editDialog: false,
                invoiceList: null,
                headers: [
                    // {
                    //     text: "No.",
                    //     sortable: false,
                    //     value: "count"
                    // },
                    {
                        text: "Order ID",
                        sortable: true,
                        value: "orderId"
                    },
                    {
                        text: "Buyer",
                        sortable: false,
                        value: "full_name"
                    },
                    {
                        text: "Date",
                        sortable: false,
                        value: "created_at"
                    },
                    {
                        text: "Net Amount",
                        sortable: false,
                        value: "net_amount"
                    },
                    {
                        text: "Status",
                        sortable: false,
                        value: "order_stat"
                    },
                    {
                        text: "Actions",
                        sortable: false,
                        value: "action"
                    }
                ],
                selectDeletedItem: null,
                selectViewItem:null,
                invoiceData: [],
                search:null,
                orderStatus:[
                    { status: 'Pending', value: 'Pending' },
                    { status: 'Shipped', value: 'Shipped' },
                    { status: 'Delivered', value: 'Delivered' },
                    { status: 'Cancel', value: 'Cancel' }
                ],
                selectedOrderStatus:null,
                fillerOrderStatus: 'Pending',
                downloadLoading: false,
            };
        },
        mounted() {
            this.getInvoice();
        },
        methods: {

            openDialog(item) {
                this.selectViewItem = item;
                this.selectedOrderStatus = item.order_stat;
                this.editDialog = true;
            },

            deleteItemFromInvoicesList(item) {
                this.$refs.deleteConfirmationDialog.openDialog();
                this.selectDeletedItem = item;
            },

            ondeleteItemFromInvoicesList() {
                this.$refs.deleteConfirmationDialog.close();
                let index = this.invoiceData.indexOf(this.selectDeletedItem);
                this.invoiceData.splice(index, 1);
            },

            getInvoice() {
                axios.get('/api/orders').then(response => {
                    this.invoiceData = response.data.orders;
                    console.log(this.invoiceData)
                }, err => {
                    const errors = err.response.data.message;
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

            updateOrderStatus(id){
                let updateOrderStatus = {
                    id:id,
                    status: this.selectedOrderStatus.value
                }
                axios.put('/api/orders/update-status',updateOrderStatus).then(response => {
                    this.$snotify.success('Order Status Updated', {
                        closeOnClick: false,
                        pauseOnHover: false,
                        timeout: 1000,
                        showProgressBar: false,
                    });
                    setTimeout(() => {
                       window.location.href='';
                    }, 2000);

                }, err => {
                    const errors = err.response.data.message;
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

            filterOrder(){
                let filterOrders = {
                    dateFrom:this.form_date,
                    dateTo:this.to_date,
                    status: this.fillerOrderStatus.value
                }

                axios.put('/api/orders/filter-orders',filterOrders).then(response => {
                    this.invoiceData = response.data.orders;
                }, err => {
                    const errors = err.response.data.message;
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

            leftPad(number, targetLength) {
                let output = number + '';
                while (output.length < targetLength) {
                    output = '0' + output;
                }
                return output;
            },

            exportOrders() {

                let filterOrders = {
                    dateFrom:this.form_date,
                    dateTo:this.to_date,
                    status: this.fillerOrderStatus.value
                }
                // this.url = "/api/orders/export-orders/" + filterOrders;

                window.location.href = "/api/orders/export-orders/"+ filterOrders;

                // axios.post('/api/orders/export-orders/',{'orders':this.invoiceData}).then(response => {
                //     this.downloadFile(response, 'customFilename')
                // }, err => {
                //     const errors = err.response.data.message;
                //     var html = '';
                //     for (const i in errors){
                //         html += errors[i];
                //     }
                //     this.$toast.open({
                //         message: html,
                //         type: 'error',
                //     });
                // });
            },

        }
    }
</script>
