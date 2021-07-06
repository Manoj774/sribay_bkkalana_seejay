<template>
    <div class="table-responsive">
        <v-data-table
            :headers="headers"
            :items="data"
        >
            <template v-slot:item.image="{ item }">
                <img :src="item.image" width="50px">

            </template>
            <template v-slot:item.name="{ item }">
                {{item.name.substring(0,50)+'....'}}
            </template>
            <template v-slot:item.action="{ item }">
                <v-btn icon color="black" small>
                    <v-icon @click="countDownProductDialog(item.id)">mdi-clock-time-eight</v-icon>
                </v-btn>
                <router-link :to="'/sriBay-admin/product-edit/'+item.id">
                    <v-btn
                        small icon
                        class="primary--text"
                    >
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </router-link>
                <v-btn icon color="grey" small>
                    <v-icon class="error--text" @click="deleteItem(item)">mdi-delete</v-icon>
                </v-btn>

            </template>
        </v-data-table>
        <v-dialog
            v-model="dialog"
            persistent
            max-width="500"
        >
            <v-card>
                <v-card-title>
                    <h5>Countdown Product</h5>
                    <v-form ref="form">
                        <v-row>
                            <v-col sm="12" cols="12" md="12" lg="12">
                                <v-text-field
                                    v-model="countDownProduct.title"
                                    label="Title"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col sm="12" cols="12" md="12" lg="12">
                                <v-text-field
                                    v-model="countDownProduct.subtitle"
                                    label="Sub Title"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col sm="12" cols="12" md="12" lg="12">
                                <v-text-field
                                    v-model="countDownProduct.dealPrice"
                                    label="Deal Price"
                                    type="number"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col sm="12" cols="12" md="12" lg="12">
                                <v-textarea
                                    v-model="countDownProduct.description"
                                    solo
                                    name="input-7-4"
                                    label="Description"
                                ></v-textarea>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="12">
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="12"
                                        md="6"
                                    >
                                        <v-datetime-picker label="Select From Datetime" v-model="countDownProduct.form_date"> </v-datetime-picker>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="12"
                                        md="6"
                                    >
                                        <v-datetime-picker label="Select To Datetime" v-model="countDownProduct.to_date"> </v-datetime-picker>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="3" sm="3" md="3" lg="3">
                                <v-btn class="primary" @click="countDownProductConfirm">Save</v-btn>
                            </v-col>
                            <v-col cols="3" sm="3" md="3" lg="3">
                                <v-btn class="default-color1" @click="countDownProductDialogClose">Cancel</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>

                </v-card-title>
            </v-card>
        </v-dialog>
        <emb-delete-confirmation-2
            ref="deleteConfirmationDialog"
            messageTitle="Are You Sure You Want To Delete?"
            messageDescription="Are you sure you want to delete this product permanently?"
            @onConfirm="ondeleteItemFromListView"
            btn1="Cancel"
            btn2="Yes"
        >
        </emb-delete-confirmation-2>
    </div>

</template>


<script>
    export default {
        props: ["data", "deleteProduct"],
        data() {
            return {
                dialog: false,
                to_date_modal:false,
                form_date_modal:false,
                countDownProduct:{
                    product_id:null,
                    form_date: null,
                    to_date: null,
                    title:"",
                    subtitle:"",
                    description:"",
                    dealPrice:"",
                },
                headers: [
                    {
                        text: "ID",
                        sortable: false,
                        value: "count"
                    },
                    {
                        text: "Image",
                        sortable: false,
                        value: "image"
                    },
                    {
                        text: "Name",
                        sortable: false,
                        value: "name"
                    },
                    {
                        text: "Price",
                        sortable: false,
                        value: "price"
                    },
                    {
                        text: "Action",
                        sortable: false,
                        value: "action"
                    }
                ],
                selectedItem: null,
            };
        },
        methods: {

            countDownProductDialog(item) {
                this.dialog = true;
                this.countDownProduct.product_id = item;
            },

            countDownProductDialogClose() {
                this.dialog = false;
                this.countDownProduct.product_id = null;
            },

            countDownProductConfirm() {
                axios.post('/api/product/create-countdown-product',this.countDownProduct).then(response => {
                    this.$snotify.success(response.data.message, {
                        closeOnClick: false,
                        pauseOnHover: false,
                        timeout: 1000,
                        showProgressBar: false,
                    });
                    setTimeout(() => {
                        window.location.href = '';
                    }, 2000);

                }, err => {
                    const errors = err.response.data.message;
                    let html = '';
                    for (const i in errors) {
                        html += errors[i];
                    }
                    this.$toast.open({
                        message: html,
                        type: 'error',
                    });
                });
            },

            deleteItem(data) {
                this.$refs.deleteConfirmationDialog.openDialog();
                this.selectedItem = data;
            },
            ondeleteItemFromListView() {
                this.$refs.deleteConfirmationDialog.close();
                axios.delete('/api/product/' + this.selectedItem.id).then(response => {
                    this.$snotify.success(response.data.message, {
                        closeOnClick: false,
                        pauseOnHover: false,
                        timeout: 1000,
                        showProgressBar: false,
                    });
                    setTimeout(() => {
                        window.location.href = '';
                    }, 2000);

                }, err => {
                    const errors = err.response.data.message;
                    let html = '';
                    for (const i in errors) {
                        html += errors[i];
                    }
                    this.$toast.open({
                        message: html,
                        type: 'error',
                    });
                });
            }
        }
    };
</script>
