<template>

    <v-row>
        <v-col cols="12" sm="12" md="12" lg="12">
            <v-toolbar-title><h3>Categories</h3></v-toolbar-title>
            <v-row>
                <v-col cols="12" sm="12" md="4" lg="4">
                    <v-form @submit.prevent="submitCategoryFrom">
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="12" class="mt-4">
                                <v-text-field
                                    v-model="category.name"
                                    class="name-input"
                                    label="Category"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="12">
                                <treeselect
                                    v-model="category.parent_category"
                                    :multiple="false"
                                    :options="parentCategories"
                                    placeholder="Select Parent Category..."
                                />
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="12" class="mt-2">
                                <v-btn
                                    type="submit"
                                    color="accent"
                                    class="mx-3"

                                    id="btnToggle"
                                >
                                    {{btnTitle}}
                                </v-btn>
                                <v-btn

                                    color="blue darken-4"
                                    text
                                    @click="close"
                                >
                                    Cancel
                                </v-btn>
                            </v-col>
                        </v-row>

                    </v-form>
                </v-col>
                <v-col cols="12" sm="12" md="8" lg="8">
                    <v-data-table
                        :headers="tableHeaders"
                        :items="categories"
                        :items-per-page="5"
                        class="elevation-1"
                    >
                        <template v-slot:top>
                            <v-dialog v-model="dialogDelete" max-width="540px">
                                <v-card>
                                    <v-card-title class="text-h5">Are you sure you want to disable this category ?</v-card-title>
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

        </v-col>
    </v-row>


</template>

<script>

  import Treeselect from '@riophae/vue-treeselect'
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  components: { Treeselect },
  name: "Categories",
  data: () => ({
    parentCategories: [],
    category: {
      name: "",
      parent_category: null,
    },
    tableHeaders: [
          {
            text: '#',
            align: 'start',
            sortable: false,
            value: 'count',
          },
          {
            text: 'Category Name',
            value: 'category_name',
            sortable: false,
          },
          {
            text: 'Parent Category',
            value: 'parent_category',
            sortable: false,
          },
          {
            text: 'Product Count',
            value: 'product_count',
            sortable: false,
          },
          {
            text: 'Actions',
            value: 'actions',
            sortable: false,
          },

        ],
    categories:[],
    editedIndex: -1,
      editedItem: {
        count: '',
        category_name: 0,
        parent_category: 0,
        product_count: 0,
      },
      defaultItem: {
        count: '',
        category_name: 0,
        parent_category: 0,
        product_count: 0,
      },
    headers: null,
    dialog: false,
    dialogDelete: false,
    editCategory:false,
    editCategoryId:0,
  }),
  created() {
            this.getCategories();
            this.getParentCategories();
  },
    computed: {
        btnTitle () {
            return this.editedIndex === -1 ? 'Create' : 'Update'
        },
    },
    watch: {
        dialog (val) {
            val || this.close()
        },
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },

    methods: {

    getCategories: function() {
        axios.get('/api/category').then(response => {
            const responseData = response.data.categories;
            this.categories = responseData;
          }, err => {
            const errors = err.response.body.message;
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
    getParentCategories: function() {
        axios.get('/api/category/tree-select').then(response => {

        const responseData = response.data.categories;
            for(const i in responseData) {
              this.parentCategories.push(responseData[i]);
            }

          }, err => {
            const errors = err.response.body.message;
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

        axios.get('/api/category/'+id+'/edit').then(response => {
              const responseData = response.data.category;
              this.category.name = responseData.name;
              if (responseData.parent_id > 0){
                  this.category.parent_category = responseData.parent_id
              }
              this.editCategory = true;
              this.editCategoryId = id;
              this.editedIndex = 1;
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
    submitCategoryFrom: function () {

        if (this.editCategory){
            axios.put('/api/category/'+this.editCategoryId, this.category).then(response => {
                this.$toast.open({
                    message: response.data.message,
                    type: 'success',
                });
                this.editCategory = false;
                this.editCategoryId = 0;
                this.editedIndex = 0;
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
        }else{
            axios.post('/api/category/create', this.category).then(response => {
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

    },
  },
};
</script>


