<template>
   <div v-if="$route.query.type == 'address' || $route.query.type =='ship-address'">
      <div class="edit-address-wrap emb-card pa-4">
			<h4 v-if="$route.query.type == 'ship-address'">Edit shipping Information</h4>
			<h4 v-else>Edit Billing Information</h4>
         <v-form ref="form" v-model="valid">
            <v-layout row wrap>
               <v-flex xs12 sm12 md12 lg6 xl6>
                  <v-layout row wrap>
                     <v-flex xs12 sm12 md12 lg12 xl12 py-2 v-if="$route.query.type == 'ship-address'">
                        <v-text-field label="First Name" v-model="profileData.first_name" :rules="inputRules.basictextRules"></v-text-field>
                     </v-flex>
                      <v-flex xs12 sm12 md12 lg12 xl12 py-2 v-if="$route.query.type == 'ship-address'">
                          <v-text-field label="Last Name" v-model="profileData.last_name" :rules="inputRules.basictextRules"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12 lg12 xl12 py-2>
                          <v-text-field label="Address" v-model="profileData.address" :rules="inputRules.basictextRules"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12 lg12 xl12 py-2>
                          <v-text-field label="City" v-model="profileData.city" :rules="inputRules.basictextRules"></v-text-field>
                      </v-flex>
                     <v-flex xs12 sm12 md12 lg12 xl12 py-2>
                        <v-text-field label="State" v-model="profileData.state" :rules="inputRules.basictextRules"></v-text-field>
                     </v-flex>
                     <v-flex xs12 sm12 md12 lg12 xl12 py-2>
                        <v-text-field label="Zip Code" v-model="profileData.zip_code" :rules="inputRules.basictextRules"></v-text-field>
                     </v-flex>
                     <v-flex xs12 sm12 md12 lg12 xl12 py-2>
                        <v-text-field type="email" v-model="profileData.email" v-if="$route.query.type == 'ship-address'" label="Email" :rules="inputRules.emailRules"></v-text-field>
                     </v-flex>
                      <v-flex xs12 sm12 md12 lg12 xl12 py-2>
                          <v-text-field type="tel" max="10" v-model="profileData.phone_number" v-if="$route.query.type == 'ship-address'" label="Phone Number" :rules="inputRules.basictextRules"></v-text-field>
                      </v-flex>
                     <v-flex xs12 sm12 md12 lg12 xl12 py-2>
                        <v-btn class="accent mx-0 mb-4"  @click.stop.prevent="saveDetails" type="billing">Save</v-btn>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex xs12 sm12 md6 lg6 xl6 reciept-bg edit-profile hidden-md-and-down>
               </v-flex>
            </v-layout>
         </v-form>
      </div>
   </div>
</template>

<script>
	export default{
   	data () {
      	return {
         	valid: false,
          	inputRules: {
               basictextRules: [v => !!v || 'This field should not be empty'],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
            },

            profileData: {
                first_name: '',
                last_name: '',
                address: '',
                email: '',
                phone_number: '',
                city: '',
                state: '',
                zip_code: '',

            }
         }
      },
      created() {
        this.getAddressData();
   	  },
      methods: {

          getAddressData: function() {
              if (this.$route.query.type === 'address'){
                  axios.get('/api/user/profile').then(response => {
                      this.profileData = response.data;
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
              }else{
                  axios.get('/api/users/shipping-address').then(response => {
                      if (response.data.shipping_address != null){
                          this.profileData = response.data.shipping_address;
                      }
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
              }
          },

         saveDetails(){
            this.$refs.form.validate()

            if(this.valid == true){

                if (this.$route.query.type === 'address'){
                    axios.put('/api/users/'+this.profileData.id, this.profileData).then(response => {
                        this.$snotify.success("Billing address update successful",{
                            closeOnClick: false,
                            pauseOnHover: false,
                            timeout: 1000,
                            showProgressBar:false,
                        });
                        setTimeout(() => {
                            this.$router.push({ path: '/account/address'});
                        }, 50);
                    }, error => {
                        const errors = error.response.data.message;
                        var html = '';
                        for (const i in errors){
                            html += errors[i];
                        }
                        this.$toast.open({
                            message: html,
                            type: 'error',
                        });
                    });
                }else{
                    axios.post('/api/users/create-shipping-address', this.profileData).then(response => {
                        this.$snotify.success("Shipping address update successful",{
                            closeOnClick: false,
                            pauseOnHover: false,
                            timeout: 1000,
                            showProgressBar:false,
                        });
                        setTimeout(() => {
                            this.$router.push({ path: '/account/address'});
                        }, 50);
                    }, error => {
                        const errors = error.response.data.message;
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
			}
         }
      }
   }
</script>
