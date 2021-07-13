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
                                <h4>Admin Login</h4>
                                <v-form ref="login_form" v-model="login_valid">
                                    <v-text-field
                                            v-model="email"
                                            type="email"
                                            placeholder="Email*"
                                            :rules="emailRules"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                            v-model="password"
                                            type="password"
                                            placeholder="Password*"
                                            :rules="passwordRules"
                                    >
                                    </v-text-field>
                                    <div class="layout align-center justify-space-between">
                                        <v-checkbox
                                                v-model="checkbox"
                                                label="Remember Me"
                                        ></v-checkbox>
                                        <router-link to="/session/forgot-password" class=" text-lg-right">Forgot Password ?</router-link>
                                    </div>
                                    <v-btn class="accent mb-3 ma-0" @click="handleSubmit">
                                        Login In
                                    </v-btn>
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
        name:'admin-login',
        data() {
            return {
                email: "",
                password: "",
                checkbox: false,
                login_valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    (value) => !!value || 'Please type password.',
                    (value) => (value && value.length >= 6) || 'minimum 6 characters',
                ],
            }
        },
        created() {
            if (sessionStorage.getItem('user') != 0 && JSON.parse(sessionStorage.getItem('user')) != null){
                this.logout();
            }
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault()
                this.$refs.login_form.validate();
                if (this.login_valid === true) {
                    let email = this.email
                    let password = this.password

                    axios.post('/api/admin-sribay/admin-login', {email, password}).then(response => {
                        sessionStorage.setItem('token', response.data.token)
                        sessionStorage.setItem('role', response.data.role)
                        sessionStorage.removeItem('user')
                        sessionStorage.setItem('user', JSON.stringify(response.data.user))
                        let role = response.data.role
                         if (sessionStorage.getItem('token') != null) {
                             this.$emit('loggedIn')
                             if (this.$route.params.nextUrl != null) {
                                 this.$router.push(this.$route.params.nextUrl)
                             } else {
                                 this.$router.push((role === 1 ? 'sriBay-admin' : '/login'))
                             }
                         }
                    }).catch(error => {
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
            },
            logout(){
                axios.post('/api/logout').then(response => {
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('role')
                    sessionStorage.removeItem('user')
                    this.$toast.open({
                        message: "Successfully logout",
                        type: 'success',
                    });
                }).catch(error => {
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
</script>
