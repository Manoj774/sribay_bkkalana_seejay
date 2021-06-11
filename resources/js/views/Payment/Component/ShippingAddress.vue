<template>
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
								<v-text-field  v-model="userInfo.phone_number" :rules="inputRules.basictextRules" label="Mobile*" required></v-text-field>
							</v-flex>
							<v-flex lg6 xl6 md6 sm12>
								<v-text-field v-model="userInfo.email" :rules="inputRules.emailRules"  label="Email*" required>
								</v-text-field>
							</v-flex>
<!--							<v-flex lg6 xl6 md6 sm6>-->
<!--								<div class="share-block">-->
<!--										<h4>Share With Others?</h4>-->
<!--										<p>If you want to share order and shipping details with someone else then enter the email of that person. We will send order updates to this email also.</p>-->
<!--									<v-text-field label="Email"></v-text-field>-->
<!--								</div>-->
<!--							</v-flex>-->
						</v-layout>
					</div>
					<div class="layout justify-start px-4">
						<v-btn pl-0 ml-0 large @click="addUserDetails" class="accent">Continue To Payment</v-btn>
					</div>
				</v-form>
			</v-card-text>
		</v-expansion-panel-content>
	</div>
</template>

<script>
	export default {
		props: ["changeStepOneForm"],
   	data () {
      	return {
         	valid: false,
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
         }
      },
      created() {
		this.getUserShippingAddress()
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
         addUserDetails(){
				this.$refs.form.validate()
				if(this.valid == true){
					this.$emit('changeStepOneForm');
					this.$store.dispatch("addUserDetails", this.userInfo);
				}
			}
      }
   }
</script>
