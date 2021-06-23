
<template>
    <div class="edit-wrap" >
        <div class="edit-profile-wrap emb-card pa-4">
            <div class="card-info">
                <h4> Bank Information</h4>
                <v-form ref="form" v-model="valid">
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md12 lg6 xl6>
                            <v-layout row wrap>
                                <v-flex xs12 sm12 md8 lg12 xl8>
                                    <v-text-field v-model="bankDetails.bank_person_name" label="Name" :rules="inputRules.basictextRules"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md4 lg12 xl4>
                                    <v-text-field v-model="bankDetails.bank_account_number" type="number" label="Account Number" :rules="inputRules.basictextRules"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md12 lg12 xl12>
                                    <v-text-field v-model="bankDetails.bank_name" label="Bank Name" :rules="inputRules.basictextRules"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md12 lg12 xl12>
                                    <v-text-field v-model="bankDetails.bank_branch" label="Branch" :rules="inputRules.basictextRules"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12 md12 lg12 xl12>
                                    <v-btn class="accent mx-0 mb-4" @click.stop.prevent="saveDetails">Save</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm12 md6 lg6 xl6 card-bg edit-profile hidden-md-and-down>
                        </v-flex>
                    </v-layout>
                </v-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "BankDetails",
        data () {
            return {
                valid: false,
                inputRules: {
                    basictextRules: [v => !!v || 'This field should not be empty']
                },
                bankDetails: {
                    bank_person_name: '',
                    bank_account_number: '',
                    bank_name: '',
                    bank_branch: '',
                },
                user: JSON.parse(sessionStorage.getItem('user')),
            }
        },
        created() {
            this.getBankDetails();
        },
        methods: {

            getBankDetails(){
                axios.get('/api/members/bank-info/'+this.user.id).then(response => {
                    this.bankDetails = response.data.bankInfo;
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
                this.$refs.form.validate();

                if(this.valid == true){
                    axios.put('/api/members/update-bank-info/'+this.user.id, this.bankDetails).then(response => {
                        this.$snotify.success(response.data.message,{
                            closeOnClick: false,
                            pauseOnHover: false,
                            timeout: 1000,
                            showProgressBar:false,
                        });
                        setTimeout(() => {
                           window.location.href="/account/bank-details";
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

        }
    }
</script>
