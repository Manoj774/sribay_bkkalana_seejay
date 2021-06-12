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
                                <v-form>
                                    <v-text-field
                                            v-model="email"
                                            type="email"
                                            placeholder="Email*"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                            v-model="password"
                                            type="password"
                                            placeholder="Password*"
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
                checkbox: false
            }
        },
        created() {
            if (JSON.parse(sessionStorage.getItem('admin-user')) != null){
                this.logout();
            }
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault()
                if (this.password.length > 0) {
                    let email = this.email
                    let password = this.password

                    axios.post('api/login', {email, password}).then(response => {
                        sessionStorage.setItem('token', response.data.token)
                        sessionStorage.setItem('role', response.data.role)
                        sessionStorage.setItem('admin-user', JSON.stringify(response.data.user))
                        let role = response.data.role
                         if (localStorage.getItem('token') != null) {
                             this.$emit('loggedInAdmin')
                             if (this.$route.params.nextUrl != null) {
                                 this.$router.push(this.$route.params.nextUrl)
                             } else {
                                 this.$router.push((role === 1 ? 'sriBay-admin' : '/login'))
                             }
                         }
                    }).catch(error => {
                        this.$toast.open({
                            message: error.message,
                            type: 'error',
                        });
                    });
                }
            },
            logout(){
                axios.post(this.$serverUrl+'api/logout').then(response => {
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('role')
                    sessionStorage.removeItem('admin-user')
                    this.$toast.open({
                        message: "Successfully logout",
                        type: 'success',
                    });
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
