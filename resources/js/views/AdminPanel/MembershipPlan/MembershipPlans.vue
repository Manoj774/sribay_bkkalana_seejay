<template>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
                <div class="emb-card pa-4 search-box-wrap">
                    <div class="d-flex justify-end align-center">
                        <div class="action-btn-wrap">
                            <v-btn color="primary"  to="/admin-panel/product-add">
                                Members
<!--                                <v-icon>mdi-plus-thick</v-icon>-->
                            </v-btn>
                            <v-btn color="primary"  to="/sriBay-admin/add-membership-plan">
                                Add Membership Plan
                                <v-icon>mdi-plus-thick</v-icon>
                            </v-btn>
                        </div>

                    </div>
                </div>
            </v-col>

            <v-col cols="12" sm="12" md="12" lg="12">
                <v-data-table
                    :headers="tableHeaders"
                    :items="membershipPlans"
                    :items-per-page="20"
                    class="elevation-1"
                >

                    <template v-slot:top>
                        <v-dialog v-model="dialogDelete" max-width="620px">
                            <v-card>
                                <v-card-title class="text-h5">Are you sure you want to disable this membership plan ?</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </template>
                    <template v-slot:item.actions="{item}">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editItem(item.id)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            small
                            @click="deleteItem(item.id)"
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
        name: "MembershipPlans",
        data: () => ({
            tableHeaders: [
                {
                    text: '#',
                    align: 'start',
                    sortable: false,
                    value: 'count',
                },
                {
                    text: 'Subscription Plan Name',
                    value: 'name',
                    sortable: false,
                },
                {
                    text: 'Price',
                    value: 'price',
                    sortable: false,
                },
                {
                    text: 'No of Link Click Per Day',
                    value: 'no_of_link_click_per_day',
                    sortable: false,
                },
                {
                    text: 'Task Rewards',
                    value: 'task_rewards',
                    sortable: false,
                },
                {
                    text: 'Total Reward Per Day',
                    value: 'total_reward_per_day',
                    sortable: false,
                },
                {
                    text: 'Bonus Rewards',
                    value: 'bonus_rewards',
                    sortable: false,
                },
                {
                    text: 'Annual Revenue',
                    value: 'annual_revenue',
                    sortable: false,
                },
                {
                    text: 'Actions',
                    value: 'actions',
                    sortable: false,
                },

            ],
            membershipPlans:[],
            editedIndex: -1,
            editedItem: {
                count: '',
                name: 0,
                price: 0,
                no_of_link_click_per_day: 0,
                task_rewards: 0,
                total_reward_per_day: 0,
                bonus_rewards: 0,
                annual_revenue: 0,

            },
            defaultItem: {
                count: '',
                name: 0,
                price: 0,
                no_of_link_click_per_day: 0,
                task_rewards: 0,
                total_reward_per_day: 0,
                bonus_rewards: 0,
                annual_revenue: 0,
            },
            headers: null,
            dialog: false,
            dialogDelete: false,
        }),
        watch: {
            dialog (val) {
                val || this.close()
            },
            dialogDelete (val) {
                val || this.closeDelete()
            },
        },
        created() {
            this.getMembershipPlans();
        },
        methods:{
            getMembershipPlans: function() {
                axios.get(this.$serverUrl+'api/membership',{
                    headers: {'Content-Type':'application/json','Authorization': 'Bearer ' + localStorage.getItem('bigStore.jwt')}
                }).then(response => {
                    const responseData = response.data.membershipPlans;
                    this.membershipPlans = responseData;
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
            editItem (id) {
                this.$router.push('/sriBay-admin/edit-membership-plan/'+id);
            },
            deleteItem (id) {
                this.dialogDelete = true
            },
            deleteItemConfirm () {
                this.desserts.splice(this.editedIndex, 1)
                this.closeDelete()
            },
            close () {
                this.editCategory = false;
                this.editCategoryId = 0;
                this.editedIndex = 0;
                this.$router.go(this.$router.currentRoute)
            },
            closeDelete () {
                this.dialogDelete = false
            },
        }
    }
</script>

<style scoped>

</style>
