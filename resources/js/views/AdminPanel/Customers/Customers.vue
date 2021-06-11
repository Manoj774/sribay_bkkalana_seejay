<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" lg="12">
            <v-toolbar-title><h3>Customers</h3></v-toolbar-title>
            <v-data-table
                :headers="tableHeaders"
                :items="customers"
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
        name: "Customers",
        data: () => ({
            tableHeaders: [
                {
                    text: '#',
                    align: 'start',
                    sortable: false,
                    value: 'count',
                },
                {
                    text: 'Name',
                    value: 'name',
                    sortable: false,
                },
                {
                    text: 'Username',
                    value: 'username',
                    sortable: false,
                },
                {
                    text: 'Date Registered',
                    value: 'date_registered',
                    sortable: false,
                },
                {
                    text: 'Email',
                    value: 'email',
                    sortable: false,
                },
                {
                    text: 'Orders',
                    value: 'orders',
                    sortable: false,
                },
                {
                    text: 'Total Spend',
                    value: 'total_spend',
                    sortable: false,
                },
                {
                    text: 'City',
                    value: 'city',
                    sortable: false,
                },
                {
                    text: 'Postal Code',
                    value: 'postal_code',
                    sortable: false,
                },
                {
                    text: 'AOV',
                    value: 'aov',
                    sortable: false,
                },
                {
                    text: 'Actions',
                    value: 'actions',
                    sortable: false,
                },

            ],
            customers:[],
        }),
    }
</script>

<style scoped>

</style>
