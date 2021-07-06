<template>
    <div>
        <h4 class="mb-6">Withdrawal Request List</h4>
        <div class="pa-4 pt-0 emb-card mb-6">
            <v-row >
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
                <v-col cols="12" sm="12" md="3" lg="3">
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
                        :data = "exportDataList"
                        :fields = "json_fields"
                        :name = "'WithdrawalRequest.xls'">
                        <v-btn type="primary" color="primary" size = "small"> Export EXCEL</v-btn>
                    </download-excel>
                </v-col>
                <v-col cols="12" sm="12" md="3" lg="3" >
                    <v-row justify="center" class="mt-4">
                        <v-dialog
                            v-model="dialog"
                            persistent
                            max-width="450"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    color="success"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"

                                >
                                    All Request Success
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title class="text-h5">
                                    Do you want to update request status ?
                                </v-card-title>
<!--                                <v-card-text></v-card-text>-->
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="green darken-1"
                                        text
                                        @click="dialog = false"
                                    >
                                        No
                                    </v-btn>
                                    <v-btn
                                        color="green darken-1"
                                        text
                                        @click="updateRequestStatus"
                                    >
                                        Yes
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-row>
<!--                    <v-btn color="success" @click="updateRequestStatus">All Request Success</v-btn>-->
                </v-col>
            </v-row>
        </div>
        <div class="emb-card pa-4">
            <div class="table-responsive" >
                <v-data-table
                    :headers="headers"
                    :items="requestData"
                    :items-per-page="15"
                    align='center'
                >
                    <template v-slot:item.request_status="{ item }">
                        <v-chip v-if="!item.request_status"
                                class="ma-1"
                                color="red"
                                text-color="white"
                        >
                            Pending
                        </v-chip>
                        <v-chip v-else
                                class="ma-1"
                                color="green"
                                text-color="white"
                        >
                            Success
                        </v-chip>
                    </template>
                </v-data-table>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                json_fields: {
                    "Member ID": "member_id",
                    "Member Name": "full_name",
                    "Request Number":"request_number",
                    "Request Amount": "request_amount",
                    "Bank Person Name": "bank_person_name",
                    "Bank Name": "bank_name",
                    "Bank Branch Name": "bank_branch",
                    "Bank Account Number": "bank_account_number",
                },
                json_meta: [
                    [
                        {
                            " key ": " charset ",
                            " value ": " utf- 8 "
                        }
                    ]
                ],
                dialog: false,
                form_date: null,
                to_date: null,
                form_date_modal: false,
                to_date_modal: false,
                exportDataList: [],
                headers: [
                    {
                        text: "Request No",
                        sortable: true,
                        value: "request_number"
                    },
                    {
                        text: "Request Member",
                        sortable: false,
                        value: "full_name"
                    },
                    {
                        text: "Request Date",
                        sortable: false,
                        value: "created_at"
                    },
                    {
                        text: "Request Amount",
                        sortable: false,
                        value: "request_amount"
                    },
                    {
                        text: "Request Status",
                        sortable: false,
                        value: "request_status"
                    },
                ],
                requestData: [],
                orderStatus:[
                    { status: 'Pending', value: '0' },
                    { status: 'Success', value: '1' },
                ],
                fillerOrderStatus: '0',
            };
        },
        mounted() {
            this.getRequest();
            this.getRequestExportData();
        },
        methods: {
            getRequest() {
                axios.get('/api/withdrawal').then(response => {
                    this.requestData = response.data.requests;
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

            getRequestExportData() {
                axios.get('/api/withdrawal/export-data').then(response => {
                    this.exportDataList = response.data.requests;
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

            updateRequestStatus(){
                this.dialog = false;
                axios.put('/api/withdrawal/update-requests').then(response => {
                    this.$snotify.success(response.data.message, {
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

                axios.post('/api/withdrawal/filter-requests',filterOrders).then(response => {
                    this.requestData = response.data.requests;
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
            leftPad(number, targetLength) {
                let output = number + '';
                while (output.length < targetLength) {
                    output = '0' + output;
                }
                return output;
            },

        }
    }
</script>
