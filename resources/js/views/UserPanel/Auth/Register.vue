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
                                        placeholder="Retype Passowrd*"
                                        :rules="inputRules.basictextRules"
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
                    confirm_password: null
                },
                register_valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                inputRules: {
                    basictextRules: [v => !!v || 'This field should not be empty']
                }
            }
        },
        methods: {
            registerUser(){
                this.$refs.register_form.validate();
                if(this.register_valid === true){
                    axios.post(this.$serverUrl+'api/register', this.register).then(response => {
                        localStorage.setItem('token', response.data.token)
                        localStorage.setItem('role', response.data.role)
                        localStorage.setItem('user', JSON.stringify(response.data.user))
                        this.$router.push('/')
                    }).catch(error => {
                        this.$toast.open({
                            message: error.message,
                            type: 'error',
                        });
                    });
                }
            },
        }
    }
</script>
