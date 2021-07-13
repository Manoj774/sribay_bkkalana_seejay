<template>
    <v-row class="justify-content-center">
        <v-col cols="12" sm="12" md="12" lg="12">
            <v-toolbar-title class="text-center"><h3>Add New Admin</h3></v-toolbar-title>
            <v-card
                class="mx-auto"
                max-width="500"
            >
                <v-card-text>
                    <div>Create Admin</div>
                </v-card-text>
                <v-card-text>
            <v-row >
                <v-col cols="12" sm="12" md="12" lg="12">
                    <v-form ref="form" v-model="valid">
                        <v-text-field
                            v-model="user.first_name"
                            type="text"
                            label="First Name*"
                            :rules="inputRules.basictextRules"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="user.last_name"
                            type="text"
                            label="Last Name*"
                            :rules="inputRules.basictextRules"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="user.email"
                            type="email"
                            label="Email*"
                            :rules="emailRules"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="user.password"
                            type="password"
                            label="Enter Password*"
                            :rules="passwordRules"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="user.confirmPassword"
                            class="mb-4"
                            type="password"
                            label="Confirm Password*"
                            :rules="confirmPasswordRules"
                        >
                        </v-text-field>
                        <v-btn class="accent mx-0 mb-4" large  @click.stop.prevent="saveDetails">
                            Create
                        </v-btn>
                    </v-form>
                </v-col>
            </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default{
        data () {
            return {
                user:{
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    is_admin: true,
                },
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                inputRules: {
                    basictextRules: [v => !!v || 'This field should not be empty']
                },
                passwordRules: [
                    (value) => !!value || 'Please type password.',
                    (value) => (value && value.length >= 6) || 'minimum 6 characters',
                ],
                confirmPasswordRules: [
                    (value) => !!value || 'type confirm password',
                    (value) => value === this.user.password || 'The password confirmation does not match.',
                ],
            }
        },
        methods: {
            saveDetails(){
                this.$refs.form.validate();
                if(this.valid == true){
                    axios.post(this.$serverUrl+'api/users/create', this.user,{
                        headers: {'Content-Type':'application/json','Authorization': 'Bearer ' + localStorage.getItem('sriBay.jwt')}
                    }).then(response => {
                        this.$toast.open({
                            message: response.data.message,
                            type: 'success',
                        });
                        this.$router.go(this.$router.currentRoute)
                    }, err => {
                        const errors = err.response.data.message;
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
</script>

