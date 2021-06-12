<template>
   <div class="address-block-wrap emb-card pa-4">
      <h4 class="mb-6">Address Infomation</h4>
      <v-layout row wrap>
         <v-flex xs12 sm5 md5 lg5 xl5>
            <h5>Billing Address</h5>
            <div class="pt-4">
               <address class="mb-6">
                   {{billingAddress.address}}<br>
                   {{billingAddress.city}}<br>
                   {{billingAddress.first_name +' '+ billingAddress.last_name}}<br>
                   Zip - {{billingAddress.zip_code}}<br>
                   {{billingAddress.state}}<br>
               </address>
                 <router-link :to="{name: 'EditAddress', query: {type: 'address'}}" > <v-btn class="accent mx-0">Edit</v-btn></router-link>
            </div>
         </v-flex>
         <v-flex xs12 sm5 md5 lg5 xl5>
            <h5>Shipping Address</h5>
            <div class="pt-4">
               <address class="mb-6">
                   {{shippingAddress.address}}<br>
                   {{shippingAddress.city}}<br>
                   {{shippingAddress.first_name +' '+ shippingAddress.last_name}}<br>
                   Zip - {{shippingAddress.zip_code}}<br>
                   {{shippingAddress.state}}<br>
               </address>
               <router-link :to="{name: 'EditAddress', query: {type: 'ship-address'}}" ><v-btn class="accent mx-0" >Edit</v-btn></router-link>
            </div>
         </v-flex>
      </v-layout>
   </div>
</template>

<script>
	export default{
   	data () {
      	return {
         	valid: false,
          	inputRules: {
               basictextRules: [v => !!v || 'This field should not be empty']
            },
            billingAddress:[],
            shippingAddress:[]
		}
      },
        created() {
   	        this.getAddressData();
        },
        methods: {
            getAddressData: function() {

                    axios.get('/api/user/profile').then(response => {
                        this.billingAddress = response.data;
                    }, response => {
                        const errors = response.body.message;
                        var html = '';
                        for (const i in errors){
                            html += errors[i];
                        }
                        this.$toast.open({
                            message: html,
                            type: 'error',
                        });
                    });

                    axios.get('/api/users/shipping-address').then(response => {
                        this.shippingAddress = response.data.shipping_address;
                    }, response => {
                        const errors = response.body.message;
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
			saveDetails(){
				this.$refs.form.validate()
				if(this.valid == true){
					this.$store.dispatch("addUserDetails", this.userInfo);
				}
			}
		}
   }
</script>
