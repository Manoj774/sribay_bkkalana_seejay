<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" lg="12">
            <v-toolbar-title><h3>Edit Membership Plan - <small>{{membership.name}}</small></h3></v-toolbar-title>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                    <router-link class="pt-4 d-block font-weight-medium" to="/sriBay-admin/membership-plans">Back to Memberships
                    </router-link>
                </v-col>
                <v-col cols="12" sm="12" md="12" lg="12">
                    <v-form @submit.prevent="submitUpdateMembershipPlanFrom">
                        <v-card
                            class="mx-auto"
                            max-width="800"
                        >
                            <v-card-text>
                                <div>Edit Plan</div>
                            </v-card-text>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" sm="12" md="12" lg="12">
                                        <v-text-field
                                            class="name-input"
                                            label="Membership Name"
                                            type="text"
                                            required
                                            :counter="250"
                                            v-model="membership.name"
                                            :rules="membershipNameRules"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-text-field
                                            class="name-input"
                                            label="Price"
                                            type="number"
                                            required
                                            v-model="membership.price"
                                            :rules="priceRules"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-text-field
                                            class="name-input"
                                            label="No of Link Click Per Day"
                                            type="number"
                                            required
                                            v-model="membership.no_of_link_click_per_day"
                                            :rules="nuOfLinkPerDayRules"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-text-field
                                            class="name-input"
                                            label="Task Rewards"
                                            type="number"
                                            required
                                            v-model="membership.task_rewards"
                                            :rules="taskRewardsRules"
                                            @blur="calculateDailyReward"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-text-field
                                            class="name-input"
                                            label="Total Reward Per Day"
                                            type="number"
                                            required
                                            v-model="membership.total_reward_per_day"
                                            :rules="rewardPerDayRules"
                                            readonly
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-text-field
                                            class="name-input"
                                            label="Bonus Rewards"
                                            type="number"
                                            required
                                            v-model="membership.bonus_rewards"
                                            :rules="bonusRewardsRules"
                                            @blur="calculateIncomes"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-text-field
                                            class="name-input"
                                            label="Daily Income"
                                            type="number"
                                            required
                                            readonly
                                            v-model="membership.daily_income"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-text-field
                                            class="name-input"
                                            label="Weekly Income"
                                            type="number"
                                            required
                                            readonly
                                            v-model="membership.weekly_income"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-text-field
                                            class="name-input"
                                            label="Monthly Income"
                                            type="number"
                                            required
                                            readonly
                                            v-model="membership.monthly_income"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-text-field
                                            class="name-input"
                                            label="Monthly Income with Bonus"
                                            type="number"
                                            required
                                            readonly
                                            v-model="membership.monthly_income_with_bonus"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-text-field
                                            class="name-input"
                                            label="Annual Revenue"
                                            type="number"
                                            required
                                            readonly
                                            v-model="membership.annual_revenue"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-text-field
                                            class="name-input"
                                            label="Registered Commission"
                                            type="number"
                                            required
                                            v-model="membership.registered_commission"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="4" lg="4">
                                        <v-text-field
                                            class="name-input"
                                            label="Referral Commission"
                                            type="number"
                                            required
                                            v-model="membership.referral_commission"
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn type="submit" color="accent" class="mx-3" large>Update</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-form>
                </v-col>
            </v-row>
        </v-col>

    </v-row>
</template>

<script>
    export default {
        name: "CreateMembership",
        data: () => ({
            membership:{
                name:"",
                price:"",
                no_of_link_click_per_day:"",
                task_rewards:"",
                total_reward_per_day:"",
                bonus_rewards:"",
                daily_income:"",
                weekly_income:"",
                monthly_income:"",
                monthly_income_with_bonus:"",
                annual_revenue:"",
                registered_commission:0.0,
                referral_commission:0.0,
            },
            membershipNameRules: [
                v => !!v || 'Membership Name is required',
                v => (v && v.length <= 250) || 'Membership Name must be less than 250 characters',
            ],
            priceRules: [
                v => !!v || 'Price is required',
            ],
            nuOfLinkPerDayRules: [
                v => !!v || 'No of Link Click Per Day is required',
            ],
            taskRewardsRules: [
                v => !!v || 'Task Reward is required',
            ],
            rewardPerDayRules: [
                v => !!v || 'Total Reward Per Day is required',
            ],
            bonusRewardsRules: [
                v => !!v || 'Bonus Reward is required',
            ],
        }),
        created() {
            this.getMemberShipDetails(this.$router.history.current.params.id);
        },
        methods:{
            getMemberShipDetails(id){
                axios.get(this.$serverUrl+'api/membership/'+id+'/edit',{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('sriBay.jwt')
                    },
                }).then(response => {
                    this.membership = response.data.membershipPlan;
                }, response => {
                    const errors = response.data.message;
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
            calculateDailyReward(){
                const calculateDailyReward = this.membership.task_rewards * this.membership.no_of_link_click_per_day;
                this.membership.total_reward_per_day = calculateDailyReward;
            },
            calculateIncomes(){
                const calculateDailyIncome = this.membership.total_reward_per_day * 50;
                this.membership.daily_income = calculateDailyIncome;
                const calculateWeeklyIncome = calculateDailyIncome * 7;
                this.membership.weekly_income = calculateWeeklyIncome;
                const calculateMonthlyIncome = calculateWeeklyIncome * 4;
                this.membership.monthly_income = calculateMonthlyIncome;
                const calculateMonthlyIncomeWithBonus = calculateMonthlyIncome + (this.membership.bonus_rewards * 50);
                this.membership.monthly_income_with_bonus = calculateMonthlyIncomeWithBonus;
                this.membership.annual_revenue = calculateMonthlyIncomeWithBonus * 12;
            },
            submitUpdateMembershipPlanFrom(){
                axios.put(this.$serverUrl+'api/membership/'+this.membership.id, this.membership,{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('sriBay.jwt')
                    },
                }).then(response => {
                    this.$toast.open({
                        message: response.data.message,
                        type: 'success',
                    });
                    this.$router.go(this.$router.currentRoute)
                }, response => {
                    const errors = response.data.message;
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
        },

    }
</script>
