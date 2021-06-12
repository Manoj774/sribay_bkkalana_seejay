<template>
   <div class="emb-payment-wrap">
		<emb-page-title heading="Payment Information"></emb-page-title>
		<div class="emb-payment-content section-gap overflow-x-hidden">
			<v-container grid-list-xl py-0>
				<template v-if="cart.length > 0">
					<emb-sidebar-panel class="mb-12"></emb-sidebar-panel>
					<v-expansion-panels v-model="panel" multiple >
						<v-expansion-panel>
                            <div>
                                <v-expansion-panel-header class="primary"><h4 class="mx-2 mb-0 white--text">Enter Your Shipping Address</h4></v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-card-text>
                                        <v-form ref="form" v-model="valid">
                                            <v-layout row wrap>
                                                <v-flex lg6 xl4 xs12 sm6 md6>
                                                    <v-text-field v-model="userInfo.first_name" :rules="inputRules.basictextRules" label="First Name*" required></v-text-field>
                                                </v-flex>
                                                <v-flex lg6 xl4 xs12 sm6 md6>
                                                    <v-text-field v-model="userInfo.last_name" :rules="inputRules.basictextRules" label="Last Name*" required></v-text-field>
                                                </v-flex>
                                                <v-flex lg12 xl6 sm12 md12 xs12>
                                                    <v-text-field v-model="userInfo.address" :rules="inputRules.basictextRules" label="Address*" required ></v-text-field>
                                                </v-flex>
                                                <v-flex lg4 xl4 xs12 sm6 md6>
                                                    <v-text-field v-model="userInfo.state" :rules="inputRules.basictextRules" label="State*" required ></v-text-field>
                                                </v-flex>
                                                <v-flex lg4 xl6 md6 sm6 xs12>
                                                    <v-text-field v-model="userInfo.city" :rules="inputRules.basictextRules" label="City*" required></v-text-field>
                                                </v-flex>
                                                <v-flex lg4 xl6 sm6 md6 xs12>
                                                    <v-text-field v-model="userInfo.zip_code" :rules="inputRules.basictextRules" label="Zip Code*" required></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                            <div class="contact-info d-block pt-4">
                                                <h4>Enter Contact Information</h4>
                                                <v-layout row wrap>
                                                    <v-flex lg6 xl6 md6 sm12>
                                                        <v-text-field  v-model="userInfo.phone_number" :rules="inputRules.basictextRules" max="10" label="Mobile*" required></v-text-field>
                                                    </v-flex>
                                                    <v-flex lg6 xl6 md6 sm12>
                                                        <v-text-field v-model="userInfo.email" :rules="inputRules.emailRules"  label="Email*" required>
                                                        </v-text-field>
                                                    </v-flex>

                                                </v-layout>
                                            </div>
                                            <div class="layout justify-start px-4">
                                                <v-btn pl-0 ml-0 large @click="enableStepOneForm" class="accent">Continue To Payment</v-btn>
                                            </div>
                                        </v-form>
                                    </v-card-text>
                                </v-expansion-panel-content>
                            </div>
<!--							<shipping-address @changeStepOneForm="enableStepOneForm"></shipping-address>-->
						</v-expansion-panel>
<!--						<v-expansion-panel :disabled="!stepOneFormValid" :class="{'contracted': !stepOneFormValid}">-->
<!--							<promo-codes @changePanel="changePanelValue"></promo-codes>-->
<!--						</v-expansion-panel>-->
						<v-expansion-panel :disabled="!stepOneFormValid" :class="{'contracted': !stepOneFormValid}">
                            <v-card flat>
                                <v-card-text class="pa-0">
                                    <div class="header text-center bg-grey pt-12 pb-4">
                                        <div class="mb-6">
                                            <img  alt="discount" src="/static/images/card.png">
                                        </div>
                                        <h4 class="mb-12 font-weight-medium">Payment Details</h4>
                                    </div>
                                    <div class="layout row wrap">
                                        <v-flex xs12 sm12 md12 lg8 xl8>
                                            <div id="payment_container"></div>
                                        </v-flex>
                                        <v-flex xs12 sm12 md12 lg3 xl2 hidden-md-and-down d-flex justify-center align-center card-visibility>
                                            <img src="/static/images/credit-card.png" slt="Credit card" width="128" height="128">
                                        </v-flex>
                                    </div>
                                </v-card-text>
                            </v-card>
						</v-expansion-panel>
					</v-expansion-panels>
				</template>
				<template v-else>
					<div class="text-center">
						<div class="mb-6">
							<img  alt="cart-empty" height="128" src="/static/images/empty-cart.png" width="128">
						</div>
						<h4 > Your Shopping Bag is empty.</h4>
						<router-link class="primary--text" to="/">Go to Shopping</router-link>
					</div>
				</template>
			</v-container>
		</div>
   </div>
</template>

<script>
// import ShippingAddress from './Component/ShippingAddress'
// import PromoCodes from './Component/PromoCodes'
// import PaymentOption from './Component/PaymentOption'
 import { mapGetters } from 'vuex';

export default {
	data(){
		return{
			stepOneFormValid: false,
			expansionPanel: [0],
            cart:[],
            valid: false,
            user:null,
            userInfo:{
                first_name : '',
                last_name :'',
                address :'',
                city :'',
                state :'',
                zip_code :'',
                phone_number :'',
                email :'',
            },
            inputRules: {
                basictextRules: [v => !!v || 'This field should not be empty.'],
                emailRules: [
                    v => !!v || "This field should not be empty.",
                    v =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        "E-mail must be valid"
                ]
            },
            totalPrice:0.0,
            cartSubTotal:0.0
		}
	},
    mounted() {
        this.getCartItems();
        this.getUserShippingAddress();
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://cdn.directpay.lk/dev/v1/directpayCardPayment.js?v=1')
        document.head.appendChild(recaptchaScript)
        this.user = JSON.parse(sessionStorage.getItem('user'));
    },
	// components:{
	// 	shippingAddress:ShippingAddress,
	// 	promoCodes:PromoCodes,
	// 	paymentOption:PaymentOption
	// },
	computed: {
        ...mapGetters(["tax", "shipping"]),
		panel: {
			get() {
				return this.expansionPanel;
			},
			set(val) {
				if(val.includes(0)){
					this.expansionPanel = [0];
					this.stepOneFormValid = false;
				}else if(val.includes(1) && this.expansionPanel != 1){
					this.expansionPanel = [1];
				}else if(val.includes(2)){
					this.expansionPanel = [2];
				}else{
					this.expansionPanel= [];
				}
			}
		}
	},
	methods: {
        getUserShippingAddress(){
            axios.get('/api/users/shipping-address').then(response => {
                if (response.data.shipping_address !== null){
                    this.userInfo = response.data.shipping_address;
                }
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
		enableStepOneForm(){
            this.$refs.form.validate()
            if(this.valid === true){
                axios.post('/api/users/create-shipping-address',this.userInfo).then(response => {
                    this.userInfo = response.data.shipping_address;
                    this.stepOneFormValid = true;
                    this.expansionPanel = [1];
                    this.getTotalPrice();
                    this.getItemTotal();
                    this.initPayment();
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
		changePanelValue(){
			this.expansionPanel = [2];
		},
        getCartItems(){
            axios.get('/api/cart/get-cart-items').then(response => {
                this.cart = [];
                for (const i in response.data.cart_items){
                    this.cart.push(response.data.cart_items[i]);
                }
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
        getTotalPrice(){
            let totalPrice = this.tax + this.shipping ;
            if (this.cart.length > 0) {
                for (const item of this.cart) {
                    totalPrice += (item.total*item.quantity);
                }
                this.totalPrice = totalPrice.toFixed(2);
            }
            else {
                this.totalPrice = totalPrice.toFixed(2);
            }
        },
        getItemTotal(){
            let productTotal = 0.0;
            if (this.cart.length > 0) {
                for (const item of this.cart) {
                    productTotal += (item.total*item.quantity);
                }
                this.cartSubTotal = productTotal.toFixed(2);
            }
            else {
                this.cartSubTotal = productTotal.toFixed(2);
            }
        },
        initPayment(){

            let referenceNo = Math.floor(1000 + Math.random() * 9000);
            let userData = this.user;
            let sipping_address = this.userInfo;
            let cartData = this.cart;3
            let sub_total = this.cartSubTotal;
            let orderTotal = this.totalPrice;
            let shipping_cost = this.shipping;
            let tax = this.tax;

            DirectPayCardPayment.init({
                container: 'payment_container',
                merchantId: 'IC02070',
                amount: orderTotal,
                refCode: referenceNo,
                currency: 'LKR',
                type: 'ONE_TIME_PAYMENT',
                customerEmail: '',
                customerMobile: userData.phone_number,
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
                        text: 'Pay: Rs ' + orderTotal
                    },
                    showMerchantDetails: false
                }
            });

            function responseCallback(result) {

                const paymentInfo = {
                    user : userData,
                    cart : cartData,
                    shippingAddress: sipping_address,
                    payment_method : "CARD",
                    card_number : result.data.card.number,
                    received_date : result.data.dateTime,
                    transaction_id : result.data.transactionId,
                    amount : orderTotal,
                    subtotal: sub_total,
                    shippingCost: shipping_cost,
                    taxAmount: tax,
                    payment_stat : 2,
                }

                axios.post('/api/orders/create', paymentInfo).then(response => {
                    this.$toast.open({
                        message: response.data.message,
                        type: 'success',
                    });
                    setTimeout(() => {
                    window.location.href = '/products';
                    }, 500);
                }).catch(error => {
                    this.$toast.open({
                        message: error.data.message,
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
	}
}
</script>
