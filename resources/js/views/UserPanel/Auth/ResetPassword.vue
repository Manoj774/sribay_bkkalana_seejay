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
                            <h4 class="accent--text">Reset Password ?</h4>
                            <v-form ref="form" v-model="valid">
                                <v-text-field type="email" v-model="resetPassword.email" :rules="emailRules" placeholder="Enter Your Email*">
                                </v-text-field>
                                <v-text-field
                                    v-model="resetPassword.password"
                                    type="password"
                                    label="Enter Password*"
                                    :rules="inputRules.basictextRules"
                                    required
                                >
                                </v-text-field>
                                <v-text-field
                                    v-model="resetPassword.password_confirmation"
                                    class="mb-4"
                                    type="password"
                                    label="Retype Password*"
                                    :rules="inputRules.basictextRules"
                                    required
                                ></v-text-field>
                                <v-btn class="accent mb-4 ma-0" large @click.stop.prevent="saveDetails">
                                    Submit
                                </v-btn>
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
                resetPassword: {
                    token: this.$route.params.token,
                    email:null,
                    password: null,
                    password_confirmation: null,
                },
                valid: false,

                inputRules: {
                    basictextRules: [v => !!v || 'This field should not be empty'],
                },
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ]
            }
        },
        methods: {
            saveDetails() {

                if (this.resetPassword.email == null){
                    this.$toast.open({
                        message: "The E-mail is required",
                        type: 'error',
                    });
                    return;
                }

                if (this.resetPassword.password == null){
                    this.$toast.open({
                        message: "The Password field should not be empty",
                        type: 'error',
                    });
                    return;
                }

                if (this.resetPassword.password_confirmation == null){
                    this.$toast.open({
                        message: "The Confirm password field should not be empty",
                        type: 'error',
                    });
                    return;
                }

                if (this.resetPassword.password.length < 8){
                    this.$toast.open({
                        message: "The password must be at least 8 characters",
                        type: 'error',
                    });
                    return;
                }

                if (this.resetPassword.password_confirmation.length < 8){
                    this.$toast.open({
                        message: "The Confirm password must be at least 8 characters",
                        type: 'error',
                    });
                    return;
                }

                if (this.resetPassword.password !== this.resetPassword.password_confirmation){
                    this.$toast.open({
                        message: "The password confirmation does not match.",
                        type: 'error',
                    });
                    return;
                }

                axios.post("/api/auth/reset/password", this.resetPassword).then(result => {
                    this.$toast.open({
                        message: result.data.message,
                        type: 'success',
                    });
                    window.location.href='/session/signin';
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
