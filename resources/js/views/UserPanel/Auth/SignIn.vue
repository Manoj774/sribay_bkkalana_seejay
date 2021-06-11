<template>
	<div class="emb-signIn-wrap section-gap">
		<div class="container py-0">
			<v-layout row wrap align-center justify-center>
				<v-flex sm12 md12 lg8 xl7>
					<v-layout row mx-sm-0 mx-3 wrap align-center justify-center>
						<v-flex sm6 md7 lg6 xl6 hidden-sm-and-down>
							<div class="form-img sign-in-image"></div>
						</v-flex>
						<v-flex sm10 md5 lg5 xl6>
							<div class="emb-card sign-in-form form-margin d-block white pa-6">
								<h4>User Sign In</h4>
                                <v-form ref="login_form" v-model="login_valid">
                                    <v-text-field
                                        type="email"
                                        placeholder="Email*"
                                        v-model="login.email"
                                        :rules="emailRules"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        type="password"
                                        placeholder="Password*"
                                        v-model="login.password"
                                        :rules="inputRules.basictextRules"
                                    >
                                    </v-text-field>
                                    <v-btn class="accent mb-3 ma-0" large @click="loginUser">
                                        Sign In
                                    </v-btn>
                                    <p>Don't Have account? <router-link to="/session/signup" class="accent--text">Click here to create one</router-link></p>
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
        name:'login',
        data() {
            return {
                login:{
                    email: null,
                    password: null,
                    checkbox: false
                },
                login_valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                inputRules: {
                    basictextRules: [v => !!v || 'This field should not be empty']
                }
            }
        },
        created() {
            if (JSON.parse(localStorage.getItem('user')) != null){
                this.logout();
            }
        },
        methods: {
            loginUser(){
                this.$refs.login_form.validate();
                if(this.login_valid === true){
                    axios.post(this.$serverUrl+'api/login', this.login).then(response => {
                        localStorage.setItem('token', response.data.token)
                        localStorage.setItem('role', response.data.role)
                        localStorage.setItem('user', JSON.stringify(response.data.user))
                        window.location.href = '/';
                    }).catch(error => {
                        this.$toast.open({
                            message: error.message,
                            type: 'error',
                        });
                    });
                }
            },
            logout(){
                axios.post('/api/logout').then(response => {
                    localStorage.setItem('token', null)
                    localStorage.setItem('role', null)
                    localStorage.setItem('user', null)
                    localStorage.setItem('admin-user', null)
                    this.$toast.open({
                        message: "Successfully logout",
                        type: 'success',
                    });
                    location.reload();
                }).catch(error => {
                    this.$toast.open({
                        message: error,
                        type: 'error',
                    });

                });
            }
        }
    }
</script>
