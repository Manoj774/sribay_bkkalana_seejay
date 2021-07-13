<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" id="affiliate_data">
            <h1 class="font-weight-bold text-h4 basil--text">
                Affiliate Dashboard - {{membership_name}}
            </h1>
            <v-tabs
                v-model="tab"
                background-color="transparent"
                color="basil"
                grow
            >
                <v-tab
                    :href="'#tab-overview'"
                >
                    Overview
                </v-tab>
                <v-tab
                    :href="'#tab-traffic-report'"
                >
                    Traffic Report
                </v-tab>
                <v-tab
                    :href="'#tab-income-report'"
                >
                    Income Report
                </v-tab>
                <v-tab
                    :href="'#tab-withdrawal'"
                >
                    Withdrawal
                </v-tab>
                <v-tab
                    :href="'#tab-referral'"
                >
                    Referral
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item
                    :value="'tab-overview'"
                >
                    <v-card>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card class="text-xs-center" height="100%" dark tile flat color="blue lighten-1"
                                            hover>
                                        <v-card-title style="font-size: 13px;">This Month Estimated Commission
                                        </v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <div class="text-center"><h3>{{currentMonthCommission.toFixed(2)}}</h3>
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card class="text-xs-center" height="100%" dark tile flat color="orange lighten-1"
                                            hover>
                                        <v-card-title style="font-size: 13px;">Last Month Estimated Commission
                                        </v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <div class="text-center"><h3>{{lastMonthCommission.toFixed(2)}}</h3></div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card class="text-xs-center" height="100%" dark tile flat color="green" hover>
                                        <v-card-title style="font-size: 13px">Account Balance</v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <div class="text-center"><h3>{{accountBalance.toFixed(2)}}</h3></div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card class="text-xs-center" height="100%" dark tile flat color="red darken-4"
                                            hover>
                                        <v-card-title style="font-size: 13px;">Weekly Points</v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <div class="text-center"><h3 style="color: #fff;">
                                                {{total_weekly_points}}</h3></div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>

                </v-tab-item>
                <v-tab-item
                    :value="'tab-traffic-report'"
                >
                    <v-card>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card class="text-xs-center" height="100%" dark tile flat color="red darken-4"
                                            hover>
                                        <v-card-title style="font-size: 13px;">Total Unique Click</v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <div class="text-center"><h3 style="color: #fff;">
                                                {{generateLinkTotalUniqueClick}}</h3></div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card class="text-xs-center" height="100%" dark tile flat color="orange darken-3"
                                            hover>
                                        <v-card-title style="font-size: 13px;">Total Click</v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <div class="text-center"><h3 style="color: #fff;">
                                                {{generateLinkTotalClick}}</h3></div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card class="text-xs-center" height="100%" dark tile flat
                                            color="deep-purple darken-2"
                                            hover>
                                        <v-card-title style="font-size: 13px;">Total Desktop Click
                                        </v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <div class="text-center"><h3 style="color: #fff;">
                                                {{generateLinkTotalDesktopClick}}</h3></div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card class="text-xs-center" height="100%" dark tile flat color="indigo darken-2"
                                            hover>
                                        <v-card-title style="font-size: 13px;">Total Mobile Click
                                        </v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <div class="text-center"><h3 style="color: #fff;">
                                                {{generateLinkTotalMobileClick}}</h3></div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card class="text-xs-center" height="100%" dark tile flat
                                            color="light-blue darken-3"
                                            hover>
                                        <v-card-title style="font-size: 13px;">Total Tablet Click
                                        </v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <div class="text-center"><h3 style="color: #fff;">
                                                {{generateLinkTotalTabletClick}}</h3></div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card class="text-xs-center" height="100%" dark tile flat color="teal lighten-1"
                                            hover>
                                        <v-card-title style="font-size: 13px;">Total Other Click
                                        </v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <div class="text-center"><h3 style="color: #fff;">
                                                {{generateLinkTotalOtherClick}}</h3></div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item
                    :value="'tab-income-report'"
                >
                    <v-card>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <div class="emb-card pa-4 search-box-wrap">
                                        <div class="d-flex justify-end align-center">
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-data-table
                                        :headers="headers"
                                        :items="earnData"
                                        :items-per-page="5"
                                        class="elevation-1"
                                    ></v-data-table>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>

                </v-tab-item>
                <v-tab-item
                    :value="'tab-withdrawal'"
                >
                    <v-card>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <div class="emb-card pa-4 search-box-wrap">
                                        <div class="d-flex justify-end align-center">
                                            <div class="action-btn-wrap" id="sendWithdrawalButton">
                                                <v-btn color="primary" :disabled="!withdrawalAvailable" @click="sendWithdrawalRequest">Withdrawal Request</v-btn>
                                            </div>

                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-data-table
                                        :headers="withdrawalTableHeaders"
                                        :items="withdrawalData"
                                        :items-per-page="5"
                                        class="elevation-1"
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
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item
                    :value="'tab-referral'"
                >
                    <v-card>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-card color="grey lighten-3">
                                        <v-card-text>
                                            <v-text-field
                                                v-model="generateLink"
                                                :append-icon="'mdi-content-copy'"
                                                label="Referral Link"
                                                type="text"
                                                ref="linkToCopy"
                                                @click:append="toggleCopy"
                                            ></v-text-field>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-data-table
                                        :headers="referralTableHeaders"
                                        :items="referralTableData"
                                        :items-per-page="5"
                                        class="elevation-1"
                                    >

                                    </v-data-table>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-col>
    </v-row>
</template>

<script>
    import BuyOrSell from "../../components/Widgets/BuyOrSell";

    export default {
        name: "AffiliateProgram",
        components: {
            BuyOrSell
        },
        data() {
            return {
                tab: null,
                generateLink: null,
                currentMonthCommission: 0.0,
                lastMonthCommission: 0.0,
                accountBalance: 0.0,
                membership_name: null,
                userHasMembershipID: 0,
                generateLinkTotalUniqueClick: 0.0,
                generateLinkTotalClick: 0.0,
                generateLinkTotalDesktopClick: 0.0,
                generateLinkTotalMobileClick: 0.0,
                generateLinkTotalTabletClick: 0.0,
                generateLinkTotalOtherClick: 0.0,
                affiliateActivate : false,
                total_weekly_points:0,
                headers: [
                    {
                        text: '#',
                        align: 'start',
                        sortable: false,
                        value: 'count',
                    },
                    {text: 'Description', value: 'description'},
                    {text: 'Amount', value: 'earn_amount'},
                    {text: 'Date', value: 'created_at'},
                ],
                earnData: [],
                withdrawalAvailable: false,
                withdrawalTableHeaders: [
                    {
                        text: '#',
                        align: 'start',
                        sortable: false,
                        value: 'count',
                    },
                    {text: 'Request Number', value: 'request_number'},
                    {text: 'Request Date', value: 'created_at'},
                    {text: 'Request Amount', value: 'request_amount'},
                    {text: 'Request Status', value: 'request_status'},
                ],
                withdrawalData: [],
                referralTableHeaders: [
                    {text: '#',align: 'start',sortable: false,value: 'count'},
                    {text: 'Full Name', value: 'full_name'},
                    {text: 'Email', value: 'email'},
                    {text: 'Membership', value: 'membership'},
                    {text: 'Register Date', value: 'created_at'},
                ],
                referralTableData: [],
            }
        },
        created() {
            this.getAffiliateData();
            this.toggleGenerate();

        },
        mounted() {
            this.checkAvailableWithdrawal();
            this.getMemberWithdrawalRequestHistory();
        },
        methods: {

            getAffiliateData() {
                axios.get('/api/users/affiliate').then(response => {

                    this.affiliateActivate = response.data.affiliate_activate;
                    console.log(this.affiliateActivate)
                    if (this.affiliateActivate == 1){

                        this.currentMonthCommission = response.data.currentMonthCommission;
                        this.lastMonthCommission = response.data.lastMonthCommission;
                        this.membership_name = response.data.membership_name;
                        this.userHasMembershipID = response.data.userHasMembershipID;

                        this.accountBalance = response.data.accountBalance;
                        this.generateLinkTotalUniqueClick = response.data.generateLinkTotalUniqueClick;
                        this.generateLinkTotalClick = response.data.generateLinkTotalClick;
                        this.generateLinkTotalDesktopClick = response.data.generateLinkTotalDesktopClick;
                        this.generateLinkTotalMobileClick = response.data.generateLinkTotalMobileClick;
                        this.generateLinkTotalOtherClick = response.data.generateLinkTotalOtherClick;
                        this.total_weekly_points = response.data.weeklyPoints;

                        let count = 1;
                        for (const key in response.data.referral) {
                            this.referralTableData.push({
                                count: count++,
                                full_name: response.data.referral[key].first_name + " " + response.data.referral[key].last_name,
                                email: response.data.referral[key].email,
                                membership: response.data.referral[key].referralMembership,
                                created_at: response.data.referral[key].created_at,
                                // total_commission: response.data.referral[key].referralEarnCommission,
                                // last_commission_date: response.data.referral[key].lastEarnCommissionDate,
                            });
                        }

                        let count1 = 1;
                        for (const key in response.data.earnHistory) {
                            this.earnData.push({
                                count: count1++,
                                description: response.data.earnHistory[key].description,
                                earn_amount: response.data.earnHistory[key].earn_amount.toFixed(2),
                                created_at: response.data.earnHistory[key].created_at,
                            });
                        }

                    }

                    else {
                        let html = '<h1 class="font-weight-bold text-h4 basil--text text-center mt-16 text-danger" style="color: red;">';
                        html += 'Waiting for activate';
                        html += '</h1>';
                        $('#affiliate_data').html(html);
                    }

                }, err => {
                    const errors = err.response.data.message;
                    var html = '';
                    for (const i in errors) {
                        html += errors[i];
                    }
                    this.$toast.open({
                        message: html,
                        type: 'error',
                    });
                });
            },

            toggleCopy() {
                let textToCopy = this.$refs.linkToCopy.$el.querySelector('input')
                textToCopy.select()
                document.execCommand("copy");
            },

            toggleGenerate() {
                axios.get('/api/users/referral-link').then(response => {
                    this.generateLink = decodeURIComponent(response.data.referralLink);
                }, error => {
                    const errors = error.response.data.message;
                    var html = '';
                    for (const i in errors) {
                        html += errors[i];
                    }
                    this.$toast.open({
                        message: html,
                        type: 'error',
                    });
                });
            },

            clickToggleDrawer() {
                this.drawer = !this.drawer
            },

            clickDeleteTask(task) {
                const i = this.tasks.indexOf(task)
                this.tasks.splice(i, 1)
            },

            getMemberWithdrawalRequestHistory(){
                axios.get('/api/withdrawal/history').then(response => {
                    let count = 1;
                    for (const key in response.data.withdrawalHistory) {
                        this.withdrawalData.push({
                            count: count++,
                            request_number: response.data.withdrawalHistory[key].request_number,
                            request_amount: response.data.withdrawalHistory[key].request_amount.toFixed(2),
                            created_at: response.data.withdrawalHistory[key].created_at,
                            request_status: response.data.withdrawalHistory[key].request_status,
                        });
                    }
                }, error => {
                    const errors = error.response.data.message;
                    let html = '';
                    for (const i in errors) {
                        html += errors[i];
                    }
                    this.$toast.open({
                        message: html,
                        type: 'error',
                    });
                });
            },

            checkAvailableWithdrawal(){
                axios.get('/api/withdrawal/check-available').then(response => {

                    if(response.data.check){
                        this.withdrawalAvailable = true;
                    }

                }, error => {
                    const errors = error.response.data.message;
                    let html = '';
                    for (const i in errors) {
                        html += errors[i];
                    }
                    this.$toast.open({
                        message: html,
                        type: 'error',
                    });
                });
            },
            sendWithdrawalRequest(){

                const withdrawalData = {
                    'userMembership':this.userHasMembershipID,
                    'withdrawalAmount':this.accountBalance
                }

                axios.post('/api/withdrawal/create',withdrawalData).then(response => {

                    this.$snotify.success(response.data.message,{
                        closeOnClick: false,
                        pauseOnHover: false,
                        timeout: 1000,
                        showProgressBar:false,
                    });
                    setTimeout(() => {
                       window.location.href="";
                    }, 100);

                }, error => {
                    const errors = error.response.data.message;
                    let html = '';
                    for (const i in errors) {
                        html += errors[i];
                    }
                    this.$toast.open({
                        message: html,
                        type: 'error',
                    });
                });
            }

        },

    }
</script>
<h1 class="font-weight-bold text-h4 basil--text text-center mt-16 text-danger" style="color: red;">
    Waiting for activate
</h1>
<style scoped>

</style>
