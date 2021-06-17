<template>
    <div>
        <h4 class="mb-6">Customers</h4>
        <div class="pa-4 pt-0 emb-card mb-6">
            <v-row >
                <v-col cols="12"
                       sm="8" md="5" lg="5">
                    <v-text-field v-model="search" label="Search" single-line hide-details>
                    </v-text-field>
                </v-col>
            </v-row>
        </div>
        <div class=" pa-4">
            <v-data-table
                :headers="tableHeaders"
                :items="customers"
                :items-per-page="20"
                class="elevation-1"
                :search="search"
            >

                <template v-slot:top>
                    <v-dialog v-model="dialog" max-width="650px">
                        <v-card>
                            <v-card-title class="text-h5">Are you sure you want to change this this customer status ?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeStatusChangeDialog">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="changeCustomerStatus">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </template>
                <template v-slot:item.status="{item}">
                        <v-switch
                              color="success"
                              :value="item.stat"
                              :input-value="item.stat"
                              @change="changeStatusCustomerDialogOpen(item.id,$event !== null, $event)"
                        ></v-switch>
                </template>
            </v-data-table>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Customers",
        data: () => ({
            switch1: true,
            tableHeaders: [
                {
                    text: '#',
                    align: 'start',
                    sortable: false,
                    value: 'count',
                },
                {
                    text: 'Name',
                    value: 'name',
                    sortable: false,
                },
                {
                    text: 'Email',
                    value: 'email',
                    sortable: false,
                },
                {
                    text: 'Orders',
                    value: 'orders',
                    sortable: true,
                },
                {
                    text: 'City',
                    value: 'city',
                    sortable: false,
                },
                {
                    text: 'Postal Code',
                    value: 'postal_code',
                    sortable: false,
                },
                {
                    text: 'Date Registered',
                    value: 'date_registered',
                    sortable: true,
                },
                {
                    text: 'Status',
                    value: 'status',
                    sortable: false,
                },
                // {
                //     text: 'Actions',
                //     value: 'actions',
                //     sortable: false,
                // },

            ],
            customers:[],
            search:null,
            dialog: false,
            changeStatus: true,
            changeStatusCustomerId:null
        }),
        watch: {
            dialog (val) {
                val || this.closeStatusChangeDialog()
            },
        },
        mounted() {
            this.getCustomers()
        },
        methods:{

            getCustomers(){
                axios.get('/api/users/customers').then(response => {
                    this.customers = [];
                    const responseData = response.data.customers;
                    let count = 1;
                    for (const i in responseData){
                        this.customers.push({
                            count:count,
                            name: responseData[i].first_name +" "+ responseData[i].last_name,
                            email: responseData[i].email,
                            orders:responseData[i].orders,
                            city:responseData[i].city,
                            postal_code:responseData[i].zip_code,
                            date_registered:responseData[i].created_at,
                            stat:responseData[i].stat,
                            id:responseData[i].id,
                        });
                        count++;
                    }
                    this.users = responseData;
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

            changeStatusCustomerDialogOpen (cus_id,value, event) {
                this.changeStatus = value;
                this.changeStatusCustomerId = cus_id;
                this.dialog = true
            },
            closeStatusChangeDialog () {
                this.changeStatus = null;
                this.changeStatusCustomerId = null;
                this.dialog = false
            },
            changeCustomerStatus(){
                let customer = {
                    id:this.changeStatusCustomerId,
                    status:this.changeStatus
                }
                axios.post('/api/users/change-status',customer).then(response => {
                    this.closeStatusChangeDialog()
                    this.$snotify.success('User Status Updated', {
                        closeOnClick: false,
                        pauseOnHover: false,
                        timeout: 1000,
                        showProgressBar: false,
                    });
                    setTimeout(() => {
                        this.getCustomers();
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
        }
    }
</script>

<style scoped>

</style>
