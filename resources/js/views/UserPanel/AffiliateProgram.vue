<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" lg="12">
            <h1 class="font-weight-bold text-h4 basil--text">
                Affiliate Dashboard
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
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item
                        :value="'tab-overview'"
                    >
                        <v-card>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-card class="text-xs-center" height="100%" dark tile flat color="blue lighten-1" hover>
                                            <v-card-title style="font-size: 13px;">This Month Estimated Commission</v-card-title>
                                            <v-card-text>
                                                <div class="text-center"><h3>0.00</h3></div>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-card class="text-xs-center" height="100%" dark tile flat color="orange lighten-1" hover>
                                            <v-card-title style="font-size: 13px;">Last Month Estimated Commission</v-card-title>
                                            <v-card-text>
                                                <div class="text-center"><h3>0.00</h3></div>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-card class="text-xs-center" height="100%" dark tile flat color="green" hover>
                                            <v-card-title style="font-size: 13px">Account Balance</v-card-title>
                                            <v-card-text>
                                                <div class="text-center"><h3>0.00</h3></div>
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
                                    <v-col cols="12" sm="12" md="4" lg="4">

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
        components:{
            BuyOrSell
        },
        data () {
            return {
                tab:null
            }
        },
        methods: {
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
