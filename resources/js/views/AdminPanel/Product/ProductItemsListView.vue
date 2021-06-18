<template>
   <div class="table-responsive">
		<v-data-table
			:headers="headers"
			:items="data"
		>	<template v-slot:item.image="{ item }">
				<img :src="item.image" width="50px">

			</template>
            <template v-slot:item.name="{ item }">
                {{item.name.substring(0,50)+'....'}}
            </template>
			<template v-slot:item.action="{ item }">
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
      selectedItem: null
    };
  },
  methods: {
    deleteItem(data) {
      this.$refs.deleteConfirmationDialog.openDialog();
      this.selectedItem = data;
    },
    ondeleteItemFromListView() {
      this.$refs.deleteConfirmationDialog.close();
      this.$emit("deleteProduct", this.selectedItem);
    }
  }
};
</script>
