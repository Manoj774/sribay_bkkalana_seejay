<template>
    <v-row class="justify-content-center">
        <v-col cols="12" sm="12" md="4" lg="4">
            <v-card class="text-xs-center" height="100%" dark tile flat color="red lighten-1"
                    hover>
                <v-card-title><h6 style="color: white;text-transform: uppercase;">Total Orders Income</h6></v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <div class="text-center"><h3 style="color: white">{{dashBoardData.totalOrderIncome.toFixed(2)}}</h3></div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
            <v-card class="text-xs-center" height="100%" dark tile flat color="indigo darken-1" hover>
                <v-card-title style="font-size: 14px"><h6 style="color: white;text-transform: uppercase;">Total Orders</h6></v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <div class="text-center"><h3 style="color: white">{{dashBoardData.totalOrders}}</h3></div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
            <v-card class="text-xs-center" height="100%" dark tile flat color="purple lighten-1"
                    hover>
                <v-card-title><h6 style="color: white;text-transform: uppercase;">Total Membership Income</h6></v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <div class="text-center"><h3 style="color: white">{{dashBoardData.totalMembershipIncome.toFixed(2)}}</h3></div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
            <v-card class="text-xs-center" height="100%" dark tile flat color="cyan darken-3" hover>
                <v-card-title style="font-size: 13px"><h6 style="color: white;text-transform: uppercase;">Current Month Orders Income</h6></v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <div class="text-center"><h3 style="color: white">{{dashBoardData.currentMonthOrderIncome.toFixed(2)}}</h3></div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
            <v-card class="text-xs-center" height="100%" dark tile flat color="green" hover>
                <v-card-title style="font-size: 13px"><h6 style="color: white;text-transform: uppercase;">Current Month Orders</h6></v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <div class="text-center"><h3 style="color: white">{{dashBoardData.currentMonthOrders}}</h3></div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
            <v-card class="text-xs-center" height="100%" dark tile flat color="yellow darken-4" hover>
                <v-card-title style="font-size: 13px"><h6 style="color: white;text-transform: uppercase;">Current Month Membership <br> Income</h6></v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <div class="text-center"><h3 style="color: white">{{dashBoardData.currentMonthMembershipIncome.toFixed(2)}}</h3></div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
            <v-card class="text-xs-center" height="100%" dark tile flat color="deep-orange darken-4" hover>
                <v-card-title style="font-size: 13px"><h6 style="color: white;text-transform: uppercase;">Total Members</h6></v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <div class="text-center"><h3 style="color: white">{{dashBoardData.totalMembers}}</h3></div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
            <v-card class="text-xs-center" height="100%" dark tile flat color="cyan accent-4" hover>
                <v-card-title style="font-size: 13px"><h6 style="color: white;text-transform: uppercase;">Total Customers</h6></v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <div class="text-center"><h3 style="color: white">{{dashBoardData.totalCustomers}}</h3></div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
            <v-card class="text-xs-center" height="100%" dark tile flat color="brown darken-4" hover>
                <v-card-title style="font-size: 13px"><h6 style="color: white;text-transform: uppercase;">Total Unique Visitors<br><small>(Member link click)</small></h6></v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <div class="text-center"><h3 style="color: white">{{dashBoardData.totalUniqueVisitors}}</h3></div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "DashBoard",

        data() {
            return {
                dashBoardData:{
                    totalOrderIncome:0,
                    totalOrders:0,
                    totalMembershipIncome:0,
                    currentMonthOrderIncome:0,
                    currentMonthOrders:0,
                    currentMonthMembershipIncome:0,
                    totalMembers:0,
                    totalCustomers:0,
                    totalUniqueVisitors:0,
                }
            }
        },
        created() {
            this.getDashBoardData();
        },
        methods:{
            getDashBoardData(){
                axios.get( '/api/dash-board').then(response => {
                    this.dashBoardData = response.data.dashboardData;
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
        }

    }
</script>

<style scoped>

</style>
