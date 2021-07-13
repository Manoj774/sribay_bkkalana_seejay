<template>
	<div class="emb-register-wrap section-gap">
		<div class="container py-0">
			<v-layout row wrap align-center justify-center>
				<v-flex sm12 md12 lg8 xl7>
					<v-layout row mx-sm-0 mx-3  wrap align-center justify-center>
						<v-flex sm6 md7 lg6 xl6 hidden-sm-and-down>
							<div class="form-img register-image"></div>
						</v-flex>
						<v-flex sm10 md5 lg6 xl6>
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
                                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                        :maxlength="10"
                                        label="Mobile Number*"
                                        :rules="inputRules.mobileInputRules"
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
                                        :rules="passwordRules"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="register.confirm_password"
                                        class="mb-4"
                                        type="password"
                                        label="Retype Password*"
                                        :rules="confirmPasswordRules"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="register.referral_id"
                                        type="text"
                                        label="Referral ID"
                                        readonly
                                    >
                                    </v-text-field>
                                    <v-btn class="accent mx-0 mb-4" large  @click.stop.prevent="registerUser">
                                        Sign Up
                                    </v-btn>
                                    <p>Already have account? then<router-link to="/session/signin" class="accent--text"> Sign In</router-link></p>
                                </v-form>
							</div>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</div>
   </div>
</template>

<script>
	export default {
        data() {
            return {
                register: {
                    first_name: null,
                    last_name: null,
                    phone_number: null,
                    email: null,
                    password: null,
                    confirm_password: null,
                    referral_id: null
                },
                register_valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                inputRules: {
                    basictextRules: [v => !!v || 'This field should not be empty'],
                    mobileInputRules:[  v => ( v && v.length < 11 ) || "This field must have at least 10 characters"]
                },
                passwordRules: [
                    (value) => !!value || 'Please type password.',
                    (value) => (value && value.length >= 6) || 'minimum 6 characters',
                ],
                confirmPasswordRules: [
                    (value) => !!value || 'type confirm password',
                    (value) => value === this.register.password || 'The password confirmation does not match.',
                ],
            }
        },
        mounted() {
            if (this.$router.history.current.params.id != null){
                sessionStorage.setItem('referral', this.$router.history.current.params.id)
            }
            if (sessionStorage.getItem('referral') != null){
                this.register.referral_id = sessionStorage.getItem('referral');
            }
        },
        methods: {
            registerUser(){
                this.$refs.register_form.validate();
                if(this.register_valid === true){
                    axios.post('/api/register', this.register).then(response => {
                        sessionStorage.setItem('token', response.data.token)
                        sessionStorage.setItem('role', response.data.role)
                        sessionStorage.setItem('user', JSON.stringify(response.data.user))
                        if (sessionStorage.getItem('referral') != null){
                            sessionStorage.removeItem('referral')
                        }
                        window.location.href='/'
                    }).catch(error => {
                        this.$toast.open({
                            message: error.response.data.message,
                            type: 'error',
                        });
                    });
                }
            },
        }
    }
</script>
