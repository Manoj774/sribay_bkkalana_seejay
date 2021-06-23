<template>
    <div class="editInfo-wrap emb-card pa-4">
        <div class="">
            <h4>Edit Profile Information</h4>
            <v-form ref="form" v-model="valid" class="mb-2">
                <v-layout row wrap>
                    <v-flex xs12 sm12 md12 lg6 xl6>
                        <v-layout row wrap>
                            <v-flex xs12 sm12 md12 lg12 xl12 py-1>
                                <v-text-field label="First Name" v-model="profileData.first_name" :rules="inputRules.basictextRules"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12 md12 lg12 xl12 py-1>
                                <v-text-field label="Last Name" v-model="profileData.last_name" :rules="inputRules.basictextRules"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12 md12 lg12 xl12 py-1>
                                <v-text-field label="Mobile No" v-model="profileData.phone_number" :rules="inputRules.basictextRules"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12 md12 lg12 xl12 py-1>
                                <v-text-field label="Location" v-model="profileData.address" :rules="inputRules.basictextRules"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12 md12 lg12 xl12 py-1>
                                <v-text-field label="Email" v-model="profileData.email" :rules="emailRules"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12 md12 lg12 xl12 pt-1 pb-0>
                                <v-btn class="accent mx-0 mb-4" @click.stop.prevent="saveDetails">Save</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs12 sm12 md6 lg6 xl6 user-bg edit-profile hidden-md-and-down></v-flex>
                </v-layout>
            </v-form>
        </div>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                val: '',
                valid: false,
                inputRules: {
                    basictextRules: [v => !!v || 'This field should not be empty']
                },
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                profileData: {
                    first_name: '',
                    last_name: '',
                    address: '',
                    phone_number: '',
                    email: '',
                }
            }
        },
        created() {
            this.getProfileData();
        },
        methods: {

            getProfileData: function() {
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
            },

            saveDetails(){
                this.$refs.form.validate()
                if(this.valid == true){
                    axios.put('/api/users/'+this.profileData.id, this.profileData).then(response => {
                        this.$snotify.success(response.data.message,{
                            closeOnClick: false,
                            pauseOnHover: false,
                            timeout: 1000,
                            showProgressBar:false,
                        });
                        setTimeout(() => {
                            this.$router.push({path:'/sriBay-admin/account/profile'})
                        }, 50);
                    }, response => {
                        const errors = response.error;
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
            save (date) {
                this.$refs.menu.save(date)
            }
        }
    }
</script>
