<template>
    <div>
        <h4 class="mb-6">Members</h4>
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
                :items="members"
                :items-per-page="20"
                class="elevation-1"
                :search="search"
            >

                <template v-slot:top>

                </template>
                <template v-slot:top>
                    <v-dialog v-model="payment_status_change_dialog" max-width="720px">
                        <v-card>
                            <v-card-title class="text-h5">Are you sure you want to change this this member affiliate status ?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeAffiliateStatusChangeDialog">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="changeAffiliateStatus">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </template>
                <template v-slot:item.account_amount="{item}">
                   {{item.account_amount.toFixed(2)}}
                </template>
                <template v-slot:item.status="{item}">
                    <v-switch
                        color="success"
                        :value="item.stat"
                        :input-value="item.stat"
                        @change="changeStatusCustomerDialogOpen(item.id,$event !== null, $event)"
                    ></v-switch>
                </template>
                <template v-slot:item.affiliate_status="{item}">
                    <v-switch
                        color="success"
                        :value="item.affiliate_stat"
                        :input-value="item.affiliate_stat"
                        @change="changeAffiliateStatusDialogOpen(item.id,$event !== null, $event)"
                    ></v-switch>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-dialog
                        v-model="payment_status_dialog"
                        persistent
                        max-width="600px"
                        v-if="!item.affiliate_stat"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-chip
                                class="ma-2"
                                color="orange"
                                text-color="white"
                                v-bind="attrs"
                                v-on="on"
                            >
                                Pending
                            </v-chip>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">Member Bank Payment Details</span>
                            </v-card-title>
                            <v-card-text>
                                <h6>Payment Slip Image</h6>
                                <div class="d-flex flex-column justify-space-between align-center">
                                    <v-slider
                                        v-model="width"
                                        class="align-self-stretch"
                                        min="200"
                                        max="500"
                                        step="1"
                                    ></v-slider>

                                    <v-img
                                        :aspect-ratio="16/9"
                                        :width="width"
                                        :src="item.payment_detail.payment_slip"
                                    ></v-img>
                                </div>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="payment_status_dialog = false"
                                >
                                    Close
                                </v-btn>

                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-chip
                        class="ma-2"
                        color="success"
                        text-color="white"
                       v-else
                    >
                        Approval
                    </v-chip>
                </template>
            </v-data-table>
        </div>
        <v-dialog v-model="dialog" max-width="650px">
            <v-card>
                <v-card-title class="text-h5">Are you sure you want to change this this member status ?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeStatusChangeDialog">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="changeCustomerStatus">OK</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>

</template>

<script>
    export default {
        name: "Members",
        data: () => ({
            switch1: true,
            width: 300,
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
                    text: 'Membership',
                    value: 'membership',
                    sortable: false,
                },
                {
                    text: 'Account Amount',
                    value: 'account_amount',
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
                {
                    text: 'Affiliate Status',
                    value: 'affiliate_status',
                    sortable: false,
                },
                {
                    text: 'Payment Status',
                    value: 'actions',
                    sortable: false,
                },

            ],
            members:[],
            search:null,
            dialog: false,
            changeStatus: true,
            changeStatusCustomerId:null,
            payment_status_dialog: false,
            payment_status_change_dialog: false
        }),
        watch: {
            dialog (val) {
                val || this.closeStatusChangeDialog()
            },
        },
        mounted() {
            this.getMembers()
        },
        methods:{

            getMembers(){
                axios.get('/api/users/members').then(response => {
                    this.members = [];
                    const responseData = response.data.members;
                    let count = 1;
                    for (const i in responseData){
                        this.members.push({
                            count:count,
                            name: responseData[i].first_name +" "+ responseData[i].last_name,
                            email: responseData[i].email,
                            orders:responseData[i].orders,
                            city:responseData[i].city,
                            membership:responseData[i].membership,
                            account_amount:responseData[i].account_amount,
                            date_registered:responseData[i].created_at,
                            stat:responseData[i].stat,
                            id:responseData[i].id,
                            affiliate_stat:responseData[i].affiliate_stat,
                            payment_detail:responseData[i].payment_details
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
                window.location.href="";
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
                        window.location.href="";
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
            changeAffiliateStatusDialogOpen(user_id,value, event){
                this.changeStatus = value;
                this.changeStatusCustomerId = user_id;
                this.payment_status_change_dialog = true;
            },
            closeAffiliateStatusChangeDialog () {
                this.changeStatus = null;
                this.changeStatusCustomerId = null;
                this.payment_status_change_dialog = false;
                window.location.href="";
            },
            changeAffiliateStatus(){
                let member = {
                    id:this.changeStatusCustomerId,
                    status:this.changeStatus
                }
                axios.post('/api/members/change-affiliate-status',member).then(response => {
                    this.closeAffiliateStatusChangeDialog()
                    this.$snotify.success('Member Affiliate Status Updated', {
                        closeOnClick: false,
                        pauseOnHover: false,
                        timeout: 1000,
                        showProgressBar: false,
                    });
                    setTimeout(() => {
                        window.location.href="";
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
            }
        }
    }
</script>

<style scoped>

</style>
