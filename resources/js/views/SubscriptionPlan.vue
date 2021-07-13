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
                        <div class="row">
                            <div class="col-md-12 mb-5">
                                <h2 class="main-head">Subscription Plans</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3" v-for="(item, index) in memberships" :key="index">
                                <div class="pricing-table turquoise">
                                    <!-- Table Head -->
                                    <div class="pricing-label">Fixed Price</div>
                                    <h2>{{item.name}}</h2>
<!--                                    <h5>Billed Annually</h5>-->
                                    <!-- Features -->
                                    <div class="pricing-features">
                                        <div class="feature">Bonus Rewards Per Month<span>{{item.bonus_rewards}}</span></div>
                                        <div class="feature">Daily Income<span>Rs. {{item.daily_income.toFixed(2)}}</span></div>
                                        <div class="feature">Weekly Income<span>Rs. {{item.weekly_income.toFixed(2)}}</span></div>
                                        <div class="feature">Monthly Income<span>Rs. {{item.monthly_income.toFixed(2)}}</span></div>
                                        <div class="feature">Income with Bonus<span>Rs. {{item.monthly_income_with_bonus.toFixed(2)}}</span></div>
                                        <div class="feature">Annual Revenue<span>Rs. {{item.annual_revenue.toFixed(2)}}</span></div>
                                    </div>
                                    <!-- Price -->
                                    <div class="price-tag">
                                        <span class="symbol">Rs. </span>
                                        <span class="amount">{{item.price}}</span>
<!--                                        <span class="after">/Annually</span>-->
                                    </div>
                                    <!-- Button -->
                                    <v-btn
                                        style="background: #44cdd2;color: white"
                                        @click="chooseSubscriptionPlan(item.id,item.price)"
                                        :disabled="user != null && user.membership === item.id"
                                    >
                                        Get Started
                                    </v-btn>
                                </div>
                            </div>
                            <!-- Red Table -->

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
                                            label="First Name*"
                                            :rules="inputRules.basictextRules"
                                        >
                                        </v-text-field>
                                        <v-text-field
                                            v-model="register.last_name"
                                            type="text"
                                            label="Last Name*"
                                            :rules="inputRules.basictextRules"
                                        >
                                        </v-text-field>
                                        <v-text-field
                                            v-model="register.phone_number"
                                            type="number"
                                            max=10
                                            label="Mobile Number*"
                                            :rules="inputRules.basictextRules"
                                        >
                                        </v-text-field>
                                        <v-text-field
                                            v-model="register.email"
                                            type="email"
                                            label="Email*"
                                            :rules="emailRules"
                                        >
                                        </v-text-field>
                                        <v-text-field
                                            v-model="register.password"
                                            type="password"
                                            label="Enter Password*"
                                            :rules="inputRules.basictextRules"
                                        >
                                        </v-text-field>
                                        <v-text-field
                                            v-model="register.confirm_password"
                                            class="mb-4"
                                            type="password"
                                            label="Retype Password*"
                                            :rules="inputRules.basictextRules"
                                        >
                                        </v-text-field>
                                        <v-text-field
                                            v-model="register.referral_id"
                                            type="text"
                                            label="Referral ID"
                                            readonly
                                        >
                                        </v-text-field>
                                        <v-btn class="accent mx-0 mb-4" large @click.stop.prevent="registerUser">
                                            Create
                                        </v-btn>

                                    </v-form>
                                </div>
                            </v-col>
                        </v-row>

<!--                        <v-btn text class="mt-4">-->
<!--                            Back-->
<!--                        </v-btn>-->
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        <v-tabs
                            v-model="tab"
                            centered
                            slider-color="red"
                            class="mt-5"
                        >
                            <v-tab :href="'#tab-card-payment'">
                                Card Payment
                            </v-tab>
                            <v-tab :href="'#tab-bank-payment'">
                                Bank Payment
                            </v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                            <v-tab-item
                                :value="'tab-card-payment'"
                            >
                                <v-card
                                    flat
                                >
                                    <v-card-text>
                                        <v-row style="justify-content: center">
                                            <v-col cols="12" sm="12" md="5" lg="5">
                                                <div id="card_container"></div>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item
                                :value="'tab-bank-payment'"
                            >
                                <v-card
                                    flat
                                >
                                    <v-card-text>
                                        <div class="row justify-content-center" style="justify-content: center">
                                            <div class="col-sm-6">
                                                <h5 class="font-italic">nulla dolor dicta laborum unde molestias ab magni.Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quibusdam cum blanditiis voluptas,
                                                    voluptates hic eius maxime dolorum saepe quae animi eveniet nulla dolor dicta laborum unde molestias ab
                                                    magni.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quibusdam cum blanditiis
                                                    voluptas,
                                                    voluptates hic eius maxime dolorum saepe quae animi eveniet nulla dolor dicta laborum unde molestias ab
                                                    magni.</p>
                                                <v-form ref="bank_payment_form"  v-model="bank_payment_valid">
                                                    <v-file-input
                                                        :rules="paymentSlipRules"
                                                        accept="image/png, image/jpeg, image/bmp"
                                                        placeholder="Pick an avatar"
                                                        prepend-icon="mdi-camera"
                                                        label="Payment Slip"
                                                        @change="selectFile"
                                                    ></v-file-input>

                                                    <v-btn color="red lighten-1" @click="submitBankPayment" style="color: aliceblue" >Confirm Bank Payment</v-btn>
                                                </v-form>
                                            </div>

                                        </div>

                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>

<!--                        <v-btn @click="back" text>-->
<!--                            Back-->
<!--                        </v-btn>-->
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
            tab: null,
            memberships: [],
            e1: 1,
            planId: 0,
            planPrice: 0,
            userId: 0,
            payment_slip:null,
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
                referral_id: null
            },
            user: JSON.parse(sessionStorage.getItem('user')),
            login_valid: false,
            register_valid: false,
            bank_payment_valid:false,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            inputRules: {
                basictextRules: [v => !!v || 'This field should not be empty']
            },
            paymentSlipRules: [
                v => !!v || 'E-mail is required',
                value => !value || value.size < 2000000 || 'Payment slip size should be less than 2 MB!',
            ],
        }),
        created() {
            this.getSubscriptionPlans();
        },
        mounted() {

            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', 'https://cdn.directpay.lk/dev/v1/directpayCardPayment.js?v=1')
            document.head.appendChild(recaptchaScript)

            if (sessionStorage.getItem('referral') != null){
                this.register.referral_id = sessionStorage.getItem('referral');
            }

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
            registerUser() {
                this.$refs.register_form.validate();
                if (this.register_valid === true) {
                    axios.post('/api/users/create-member-user', this.register).then(response => {
                        // sessionStorage.setItem('token', response.data.token)
                        // sessionStorage.setItem('role', response.data.role)
                        // sessionStorage.setItem('user', JSON.stringify(response.data.user))
                        this.$toast.open({
                            message: "User Account Successfully Created..",
                            type: 'success',
                        });
                        if (sessionStorage.getItem('referral') != null){
                            sessionStorage.removeItem('referral')
                        }
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
                }

            },
            selectFile(file) {
                this.payment_slip = file;
            },
            submitBankPayment(){
                this.$refs.bank_payment_form.validate();
                if (this.bank_payment_valid){
                    let user_id = this.user.id;
                    let planId = this.planId;
                    let planPrice = this.planPrice;
                    const formData = new FormData();
                    formData.append('bank_slip', this.payment_slip);
                    formData.append('user', user_id);
                    formData.append('subscription_plan', planId);
                    formData.append('payment_method', "Bank Payment");
                    formData.append('amount', planPrice);
                    formData.append('payment_stat', 0);
                    axios.post('/api/users/register-membership', formData).then(response => {
                        this.$toast.open({
                            message: response.data.message,
                            type: 'success',
                        });
                        setTimeout(
                            function () {
                                window.location.href = '/';
                            }, 4000);

                    }).catch(error => {
                        this.$toast.open({
                            message: error.response.data.message,
                            type: 'error',
                        });
                    });
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
