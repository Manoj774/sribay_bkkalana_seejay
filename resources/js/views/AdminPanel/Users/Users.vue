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
                    <emb-delete-confirmation-2
                        ref="deleteConfirmationDialog"
                        messageTitle="Are you sure you want to delete?"
                        messageDescription="Are you sure you want to delete this user permanently?"
                        @onConfirm="ondeleteItemFromCollaborationList"
                        btn1="Cancel"
                        btn2="Yes"
                    >
                    </emb-delete-confirmation-2>
                </template>
                <template v-slot:item.profile_picture="{ item }">
                    <img :src="item.profile_picture" width="40">
                </template>
                <template v-slot:item.action="{item}">
                    <v-icon
                        small
                        @click="deleteItemFromCollaborationList(item.id)"
                    >
                        mdi-delete
                    </v-icon>
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
                        text: "Image",
                        sortable: false,
                        value: "profile_picture"
                    },
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
                        text: "Action",
                        sortable: false,
                        value: "action"
                    }
                ],
                selectDeletedItem: null
            };
        },
        mounted() {
            this.getAdminUsers();
        },
        methods: {
            getAdminUsers() {
                axios.get(this.$serverUrl+'api/users',{
                    headers: {'Content-Type':'application/json','Authorization': 'Bearer ' + localStorage.getItem('sriBay.jwt')}
                }).then(response => {
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

            deleteItemFromCollaborationList(item) {
                this.$refs.deleteConfirmationDialog.openDialog();
                this.selectDeletedItem = item;
            },
            ondeleteItemFromCollaborationList() {
                this.$refs.deleteConfirmationDialog.close();
                let index = this.collaborationData.indexOf(this.selectDeletedItem);
                this.collaborationData.splice(index, 1);
            }
        }
    };
</script>

