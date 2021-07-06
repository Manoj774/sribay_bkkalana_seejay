<template>
	<div class="emb-forgetpassword-wrap section-gap">
		<div class="container py-0">
			<v-layout row wrap align-center justify-center>
				<v-flex sm12 md12 lg8 xl8>
					<v-layout align-center mx-sm-0 mx-3  justify-center row wrap>
						<v-flex sm6 md6 lg6 xl6 hidden-sm-and-down>
							<div class="forgot-password-image form-img">
							</div>
						</v-flex>
						<v-flex sm10 md6 lg6 xl6 class="emb-card form-margin pa-4 d-inline-block white">
							<h3 class="accent--text">Forgot Password ?</h3>
							<h4>No Problem</h4>
							<v-form ref="form">
								<v-text-field type="email"  v-model="email" :rules="emailRules" placeholder="Enter Your Email*" required>
								</v-text-field>
								<v-btn class="accent mb-4 ma-0" large @click.stop.prevent="saveDetails">
									Submit
								</v-btn>
								<p>If have an account then <router-link to="/session/signin" class="accent--text">Sign In
									</router-link>
								</p>
							</v-form>
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
				valid: false,
                email:null,
				emailRules: [
					v => !!v || 'E-mail is required',
					v => /.+@.+/.test(v) || 'E-mail must be valid'
				]
			}
		},
		methods: {
			saveDetails() {

			    if (this.email == null){
                    this.$toast.open({
                        message: "The E-mail is required",
                        type: 'error',
                    });
                    return;
                }

                axios.post("/api/auth/reset-password", {email: this.email}).then(result => {
                    this.$toast.open({
                        message: result.data.message,
                        type: 'success',
                    });
                }).catch(error => {
                    this.$toast.open({
                        message: error.response.data.message,
                        type: 'error',
                    });
                });
			}
		}
	}
</script>
