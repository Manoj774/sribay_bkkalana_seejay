<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" lg="12">
            <div class="emb-card pa-4 search-box-wrap">
                <div class="d-flex justify-end align-center">
                    <div class="action-btn-wrap">
                        <v-btn color="primary"  to="/sriBay-admin/users/add-user">
                            Add Admin
                            <v-icon>mdi-plus-thick</v-icon>
                        </v-btn>
                    </div>

                </div>
            </div>
        </v-col>

        <v-col cols="12" sm="12" md="12" lg="12">
            <v-data-table
                :headers="headers"
                :items="users"
                :items-per-page="20"
                class="elevation-1"
            >

                <template v-slot:top>
                    <v-dialog v-model="dialog" max-width="650px">
                        <v-card>
                            <v-card-title class="text-h5">Are you sure you want to change this this customer status ?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeStatusChangeDialog">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="changeCustomerStatus">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </template>
                <template v-slot:item.role="{item}">
                   {{item.role == 1 ? "Admin": item.role==3 ? "Member" : "User"}}
                </template>
                <template v-slot:item.status="{item}">
                    <v-switch
                        color="success"
                        :value="item.stat"
                        :input-value="item.stat"
                        @change="changeStatusCustomerDialogOpen(item.id,$event !== null, $event)"
                    ></v-switch>
                </template>
            </v-data-table>

        </v-col>
    </v-row>



</template>

<script>


    export default {
        data() {
            return {
                collaborationList: null,
                open: false,
                select: null,
                valid: true,
                items: [{ text: "Admin" }],
                name: "",
                nameRules: [v => !!v || "Name is required"],
                email: "",
                emailRules: [
                    v => !!v || "E-mail is required",
                    v => /.+@.+/.test(v) || "E-mail must be valid"
                ],
                selectRules: [v => !!v || "Item is required"],
                loader: true,
                users: [],
                headers: [

                    {
                        text: "First Name",
                        sortable: false,
                        value: "first_name"
                    },
                    {
                        text: "Last Name",
                        sortable: false,
                        value: "last_name"
                    },
                    {
                        text: "Email",
                        sortable: false,
                        value: "email"
                    },
                    {
                        text: "Role",
                        sortable: false,
                        value: "role"
                    },
                    {
                        text: 'Status',
                        value: 'status',
                        sortable: false,
                    },
                ],
                selectDeletedItem: null,
                dialog: false,
                changeStatus: true,
                changeStatusCustomerId:null
            };
        },
        watch: {
            dialog (val) {
                val || this.closeStatusChangeDialog()
            },
        },
        mounted() {
            this.getAdminUsers();
        },
        methods: {
            getAdminUsers() {
                axios.get('/api/users').then(response => {
                    const responseData = response.data.users;
                    this.users = responseData;
                }, response => {
                    const errors = response.data.message;
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
            addItemToCollaborationList(item) {
                if (this.$refs.form.validate()) {
                    this.collaborationData.push(item);
                    this.open = false;
                    this.$refs.form.reset();
                } else {
                    console.log("Invalid Inputs");
                }
            },

            changeStatusCustomerDialogOpen (cus_id,value, event) {
                this.changeStatus = value;
                this.changeStatusCustomerId = cus_id;
                this.dialog = true
            },
            closeStatusChangeDialog () {
                this.changeStatus = null;
                this.changeStatusCustomerId = null;
                this.dialog = false
            },
            changeCustomerStatus(){
                let customer = {
                    id:this.changeStatusCustomerId,
                    status:this.changeStatus
                }
                axios.post('/api/users/change-status',customer).then(response => {
                    this.closeStatusChangeDialog()
                    this.$snotify.success('User Status Updated', {
                        closeOnClick: false,
                        pauseOnHover: false,
                        timeout: 1000,
                        showProgressBar: false,
                    });
                    setTimeout(() => {
                        this.getCustomers();
                    }, 2000);

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
            },
        }
    };
</script>

