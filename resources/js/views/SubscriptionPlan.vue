<template>

    <v-row>
        <v-col cols="12" sm="12" md="12" lg="12">

            <v-stepper v-model="e1">
                <v-stepper-header>
                    <v-stepper-step
                        :complete="e1 > 1"
                        step="1"
                    >
                        Choose Subscription Plan
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                        :complete="e1 > 2"
                        step="2"
                    >
                        Professional Data
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 3" step="3">
                        Payment
                    </v-stepper-step>


                </v-stepper-header>

                <v-stepper-items>
                    <v-stepper-content step="1">
                        <div id="pricing-container">

                            <div id="pricing-switch"></div>

                            <div id="pricing-cards">
                                <div v-for="(item, index) in memberships" :key="index">
                                    <div class="price-card price-card--hero">

                                        <div class="price-card--header">
                                            <h4>{{item.name}}</h4>
                                            <!--                <p>for growing your business</p> -->
                                        </div>
                                        <!--                        <div class="price-card&#45;&#45;hero-text">-->
                                        <!--                            Most Popular Plan-->
                                        <!--                        </div>-->

                                        <div class="price-card--price">
                                            <div class="price-card--price-text">
                                                <div class="price-card--price-number toggle-price-content odometer"
                                                     data-price-yearly="900">{{item.price}}
                                                </div>
                                            </div>
                                            <div class="price-card--price-conditions">
                                                <div class="toggle-price-content" data-price-monthly="Billed Monthly"
                                                     data-price-yearly="Billed Annually">Billed Annually
                                                </div>
                                            </div>
                                        </div>

                                        <div class="price-card--cta">
                                            <v-btn
                                                color="teal lighten-1"
                                                @click="chooseSubscriptionPlan(item.id,item.price)"
                                            >Get Started
                                            </v-btn>
                                        </div>

                                        <div class="price-card--features">
                                            <ul class="price-card--features--list text-center">
                                                <li class="price-card--features--item ">Bonus Rewards Per Month
                                                    <v-chip
                                                        class="ma-2"
                                                        color="cyan"
                                                        label
                                                        text-color="white"
                                                    >
                                                        {{item.bonus_rewards}}
                                                    </v-chip>
                                                </li>
                                                <li class="price-card--features--item ">Daily Income
                                                    <v-chip
                                                        class="ma-2"
                                                        color="cyan"
                                                        label
                                                        text-color="white"
                                                    >
                                                        Rs. {{item.daily_income.toFixed(2)}}
                                                    </v-chip>
                                                </li>
                                                <li class="price-card--features--item ">Weekly Income
                                                    <v-chip
                                                        class="ma-2"
                                                        color="cyan"
                                                        label
                                                        text-color="white"
                                                    >
                                                        Rs. {{item.weekly_income.toFixed(2)}}
                                                    </v-chip>
                                                </li>
                                                <li class="price-card--features--item ">Monthly Income
                                                    <v-chip
                                                        class="ma-2"
                                                        color="cyan"
                                                        label
                                                        text-color="white"
                                                    >
                                                        Rs. {{item.monthly_income.toFixed(2)}}
                                                    </v-chip>
                                                </li>
                                                <li class="price-card--features--item ">Monthly Income with Bonus
                                                    <v-chip
                                                        class="ma-2"
                                                        color="cyan"
                                                        label
                                                        text-color="white"
                                                    >
                                                        Rs. {{item.monthly_income_with_bonus.toFixed(2)}}
                                                    </v-chip>
                                                </li>
                                                <li class="price-card--features--item ">Annual Revenue
                                                    <v-chip
                                                        class="ma-2"
                                                        color="cyan"
                                                        label
                                                        text-color="white"
                                                    >
                                                        Rs. {{item.annual_revenue.toFixed(2)}}
                                                    </v-chip>
                                                </li>


                                            </ul>
                                        </div>

                                        <div class="price-card--mobile-features-toggle"></div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </v-stepper-content>

                    <v-stepper-content step="2">

                        <v-row style="justify-content: center">

                            <!--                            <v-col cols="12" sm="12" md="5" lg="5">-->
                            <!--                                <div class="emb-card sign-in-form form-margin d-block white pa-6">-->
                            <!--                                    <h4>Login Your Account</h4>-->
                            <!--                                    <v-form ref="login_form" v-model="login_valid">-->
                            <!--                                        <v-text-field-->
                            <!--                                            type="email"-->
                            <!--                                            placeholder="Email*"-->
                            <!--                                            v-model="login.email"-->
                            <!--                                            :rules="emailRules"-->
                            <!--                                        >-->
                            <!--                                        </v-text-field>-->
                            <!--                                        <v-text-field-->
                            <!--                                            type="password"-->
                            <!--                                            placeholder="Password*"-->
                            <!--                                            v-model="login.password"-->
                            <!--                                            :rules="inputRules.basictextRules"-->
                            <!--                                        >-->
                            <!--                                        </v-text-field>-->
                            <!--                                        <v-btn class="accent mb-3 ma-0" large @click="loginUser">-->
                            <!--                                            Sign In-->
                            <!--                                        </v-btn>-->
                            <!--                                    </v-form>-->
                            <!--                                </div>-->
                            <!--                            </v-col>-->
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <div class="emb-card sign-in-form form-margin d-block white pa-6">
                                    <h4>Enter Your Details</h4>
                                    <v-form ref="register_form" v-model="register_valid">
                                        <v-text-field
                                            v-model="register.first_name"
                                            type="text"
                                            placeholder="First Name*"
                                            :rules="inputRules.basictextRules"
                                        >
                                        </v-text-field>
                                        <v-text-field
                                            v-model="register.last_name"
                                            type="text"
                                            placeholder="Last Name*"
                                            :rules="inputRules.basictextRules"
                                        >
                                        </v-text-field>
                                        <v-text-field
                                            v-model="register.phone_number"
                                            type="number"
                                            max=10
                                            placeholder="Mobile Number*"
                                            :rules="inputRules.basictextRules"
                                        >
                                        </v-text-field>
                                        <v-text-field
                                            v-model="register.email"
                                            type="email"
                                            placeholder="Email*"
                                            :rules="emailRules"
                                        >
                                        </v-text-field>
                                        <v-text-field
                                            v-model="register.password"
                                            type="password"
                                            placeholder="Enter Password*"
                                            :rules="inputRules.basictextRules"
                                        >
                                        </v-text-field>
                                        <v-text-field
                                            v-model="register.confirm_password"
                                            class="mb-4"
                                            type="password"
                                            placeholder="Retype Password*"
                                            :rules="inputRules.basictextRules"
                                        >
                                        </v-text-field>
                                        <v-text-field
                                            v-model="register.referral"
                                            type="text"
                                            placeholder="Referral ID"
                                        >
                                        </v-text-field>
                                        <v-btn class="accent mx-0 mb-4" large @click.stop.prevent="registerUser">
                                            Create
                                        </v-btn>

                                    </v-form>
                                </div>
                            </v-col>
                        </v-row>

                        <v-btn text class="mt-4">
                            Back
                        </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        <v-row style="justify-content: center">
                            <v-col cols="12" sm="12" md="5" lg="5">
                                <div id="card_container"></div>
                            </v-col>
                        </v-row>
                        <v-btn @click="back" text>
                            Back
                        </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="4">
                        <v-row style="justify-content: center">
                            <v-col cols="12" sm="12" md="8" lg="8">
                                <div class="emb-thankyou-wrap section-gap">
                                    <div class="container py-0">
                                        <div class="layout justify-center align-center">
                                            <v-flex sm12 md10 lg8 xl8>
                                                <div class="form-img thank-you-image text-center hidden-sm-and-down">
                                                    <h2 class="white--text">Thank You</h2>
                                                </div>
                                                <div class="layout align-center justify-center">
                                                    <v-flex xs12 md8 lg6 xl6>
                                                        <div
                                                            class="emb-card pa-6
                                                               thankyou-block
                                                               white pa-6
                                                               text-center"
                                                        >
                                                            <h4 class="px-6 pb-2 text-center">For every thing you had
                                                                done with Embryo</h4>
                                                            <v-divider class="pt-2 pb-4"></v-divider>
                                                            <div class="mx-auto text-center">
                                                                <p class="mb-4">Spread The Word</p>
                                                                <div class="mb-6 d-block">
                                                                    <emb-social-share></emb-social-share>
                                                                </div>
                                                            </div>
                                                            <v-btn block class="accent elevation-5 my-0" height="50">Buy
                                                                Embryo Now
                                                            </v-btn>
                                                        </div>
                                                    </v-flex>
                                                </div>
                                            </v-flex>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>

                        <v-btn
                            color="primary"
                            @click="finish"
                        >
                            Finish
                        </v-btn>

                    </v-stepper-content>

                </v-stepper-items>
            </v-stepper>


        </v-col>
    </v-row>


</template>

<script>
    export default {
        name: "SubscriptionPlan",
        data: () => ({
            memberships: [],
            e1: 1,
            planId: 0,
            planPrice: 0,
            userId: 0,
            login: {
                email: null,
                password: null
            },
            register: {
                first_name: null,
                last_name: null,
                phone_number: null,
                email: null,
                password: null,
                confirm_password: null,
                referral: null
            },
            user: null,
            login_valid: false,
            register_valid: false,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            inputRules: {
                basictextRules: [v => !!v || 'This field should not be empty']
            }
        }),
        created() {
            this.getSubscriptionPlans();
        },
        mounted() {
            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', 'https://cdn.directpay.lk/dev/v1/directpayCardPayment.js?v=1')
            document.head.appendChild(recaptchaScript)
        },
        methods: {
            getSubscriptionPlans() {
                axios.get('/api/membership').then(response => {
                    const responseData = response.data.membershipPlans;
                    this.memberships = responseData;
                }, error => {
                    const errors = error.response.data.message
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

            chooseSubscriptionPlan(planId, price) {
                this.planId = planId;
                this.planPrice = price;
                if (sessionStorage.getItem('token') != null) {
                    this.user = JSON.parse(sessionStorage.getItem('user'));
                    this.initPayment();
                    this.e1 = 3;
                } else {
                    this.e1 = 2;
                }

            },
            // loginUser(){
            //     this.$refs.login_form.validate();
            //     if(this.login_valid === true){
            //         axios.post('/api/login', this.login).then(response => {
            //             sessionStorage.setItem('token', response.data.token)
            //             sessionStorage.setItem('role', response.data.role)
            //             sessionStorage.setItem('user', JSON.stringify(response.data.user))
            //             this.user = response.data.user;
            //             this.initPayment();
            //             this.e1 = 3;
            //         }).catch(error => {
            //             this.$toast.open({
            //                 message: error.response.data.message,
            //                 type: 'error',
            //             });
            //         });
            //     }
            // },
            registerUser() {
                this.$refs.register_form.validate();
                if (this.register_valid === true) {
                    axios.post('/api/create-member-user', this.register).then(response => {
                        // sessionStorage.setItem('token', response.data.token)
                        // sessionStorage.setItem('role', response.data.role)
                        // sessionStorage.setItem('user', JSON.stringify(response.data.user))
                        this.$toast.open({
                            message: "User Account Successfully Created..",
                            type: 'success',
                        });
                        this.user = response.data.user;
                        this.initPayment();
                        this.e1 = 3;
                    }).catch(error => {
                        this.$toast.open({
                            message: error.response.data.message,
                            type: 'error',
                        });
                    });
                }
            },
            initPayment() {
                let referenceNo = Math.floor(1000 + Math.random() * 9000);
                let user_id = this.user.id;
                let planId = this.planId;
                let planPrice = this.planPrice;
                let toast = this.$toast;


                DirectPayCardPayment.init({
                    container: 'card_container',
                    merchantId: 'IC02070',
                    amount: this.planPrice,
                    refCode: referenceNo,
                    currency: 'LKR',
                    type: 'ONE_TIME_PAYMENT',
                    customerEmail: '',
                    customerMobile: this.user.phone_number,
                    description: 'online payment',
                    debug: true,
                    responseCallback: responseCallback,
                    errorCallback: errorCallback,
                    logo: 'https://s3.us-east-2.amazonaws.com/directpay-ipg/directpay_logo.png',
                    apiKey: '5feaa9339bfd7251b1b6574498cb7cc29446bfe8c14eed86f3ecfbd594550e2b',
                    style: {
                        button: {
                            borderRadius: '50',
                            textColor: 'white',
                            color: '#fd5f00',
                            borderColor: '#fd5f00',
                            mouseHoverColor: '#ed1c24',
                            text: 'Pay: Rs ' + this.planPrice
                        },
                        showMerchantDetails: false
                    }
                });

                function responseCallback(result) {
                    const payment = {
                        user: user_id,
                        subscription_plan: planId,
                        payment_method: "CARD",
                        card_number: result.data.card.number,
                        received_date: result.data.dateTime,
                        transaction_id: result.data.transactionId,
                        amount: planPrice,
                        payment_stat: 2,
                    }
                    axios.post('/api/users/register-membership', payment).then(response => {
                        // this.user = response.data.userData;
                        // sessionStorage.removeItem('role')
                        // sessionStorage.removeItem('user')
                        // sessionStorage.setItem('role', this.user.role)
                        // sessionStorage.setItem('user', JSON.stringify(this.user))
                        toast.open({
                            message: response.data.message,
                            type: 'success',
                        });
                        setTimeout(
                            function () {
                                window.location.href = '/session/signin';
                            }, 4000);

                    }).catch(error => {
                        toast.open({
                            message: error.response.data.message,
                            type: 'error',
                        });
                    });

                }

                function errorCallback(result) {
                    this.$toast.open({
                        message: result.data.description,
                        type: 'error',
                    });
                    console.log(result);
                }

            },
            finish() {
                this.intervalid1 = setInterval(() => {
                    this.$router.go(this.$router.currentRoute)
                }, 2000);
            },
            back() {
                let b = this.e1 - 1;
                this.e1 = b;
            }

        }
    }


</script>

<style scoped>

</style>
