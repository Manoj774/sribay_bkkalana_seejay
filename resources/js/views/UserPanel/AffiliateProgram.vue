<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" lg="12">
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
                                            <div class="text-center"><h3>{{currentMonthCommission.toFixed(2)}}</h3></div>
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

                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-layout class="emb-card mb-6">
                                        <app-card
                                            customClasses="pa-6"
                                            colClasses="xl12 lg12 md12 xs12 sm12"
                                            heading="Click History"
                                        >
                                            <buy-or-sell></buy-or-sell>
                                        </app-card>
                                    </v-layout>
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
                                            <div class="text-center"><h3 style="color: #fff;">{{generateLinkTotalUniqueClick}}</h3></div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card class="text-xs-center" height="100%" dark tile flat color="orange darken-3"
                                            hover>
                                        <v-card-title style="font-size: 13px;">Total Click</v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <div class="text-center"><h3 style="color: #fff;">{{generateLinkTotalClick}}</h3></div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card class="text-xs-center" height="100%" dark tile flat color="deep-purple darken-2"
                                            hover>
                                        <v-card-title style="font-size: 13px;">Total Desktop Click
                                        </v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <div class="text-center"><h3 style="color: #fff;">{{generateLinkTotalDesktopClick}}</h3></div>
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
                                            <div class="text-center"><h3 style="color: #fff;">{{generateLinkTotalMobileClick}}</h3></div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card class="text-xs-center" height="100%" dark tile flat color="light-blue darken-3"
                                            hover>
                                        <v-card-title style="font-size: 13px;">Total Tablet Click
                                        </v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <div class="text-center"><h3 style="color: #fff;">{{generateLinkTotalTabletClick}}</h3></div>
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
                                            <div class="text-center"><h3 style="color: #fff;">{{generateLinkTotalOtherClick}}</h3></div>
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
                    :value="'tab-referral'"
                >
                    <v-card>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-card>
                                        <v-card-text>
                                            <v-text-field
                                            v-model="generateLink"
                                            :append-icon="'mdi-content-copy'"
                                            label="Referral Link"
                                            type="text"
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
                                    ></v-data-table>
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
                generateLinkTotalUniqueClick: 0.0,
                generateLinkTotalClick: 0.0,
                generateLinkTotalDesktopClick: 0.0,
                generateLinkTotalMobileClick: 0.0,
                generateLinkTotalTabletClick: 0.0,
                generateLinkTotalOtherClick: 0.0,
                headers: [
                    {
                        text: '#',
                        align: 'start',
                        sortable: false,
                        value: 'count',
                    },
                    { text: 'Description', value: 'description' },
                    { text: 'Amount', value: 'earn_amount' },
                    { text: 'Date', value: 'created_at' },
                ],
                earnData: [],
                referralTableHeaders: [
                    {
                        text: '#',
                        align: 'start',
                        sortable: false,
                        value: 'count',
                    },
                    { text: 'Full Name', value: 'full_name' },
                    { text: 'Email', value: 'email' },
                    { text: 'Membership', value: 'membership' },
                    { text: 'Register Date', value: 'created_at' },
                    { text: 'Total Commission', value: 'total_commission' },
                    { text: 'Last Commission Date', value: 'last_commission_date' },
                ],
                referralTableData: [],
            }
        },
        created() {
            this.getAffiliateData();
            this.toggleGenerate();
        },
        methods: {

            getAffiliateData() {
                axios.get('/api/users/affiliate').then(response => {

                    this.currentMonthCommission = response.data.currentMonthCommission;
                    this.lastMonthCommission = response.data.lastMonthCommission;
                    this.membership_name = response.data.membership_name;
                    this.accountBalance = response.data.accountBalance;
                    this.generateLinkTotalUniqueClick = response.data.generateLinkTotalUniqueClick;
                    this.generateLinkTotalClick = response.data.generateLinkTotalClick;
                    this.generateLinkTotalDesktopClick = response.data.generateLinkTotalDesktopClick;
                    this.generateLinkTotalMobileClick = response.data.generateLinkTotalMobileClick;
                    this.generateLinkTotalOtherClick = response.data.generateLinkTotalOtherClick;

                    let count = 1;
                    for (const key in response.data.earnHistory){
                        this.earnData.push({
                            count: count++,
                            description: response.data.earnHistory[key].description,
                            earn_amount: response.data.earnHistory[key].earn_amount,
                            created_at: response.data.earnHistory[key].created_at,
                        });
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
                this.marker = !this.marker
            },

            toggleGenerate() {
                axios.get( '/api/users/referral-link').then(response => {
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
        },

    }
</script>

<style scoped>

</style>
