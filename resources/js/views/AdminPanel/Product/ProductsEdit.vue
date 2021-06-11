<template>
	<v-row>
		<v-col cols="12" sm="9" md="10" lg="10" class="mx-auto">
			<v-form @submit.prevent="submitNewProductFrom" v-model="valid">
				<v-row>
					<v-col cols="12" sm="12" md="12" lg="12"  class="mb-2">
						<router-link class="pt-4 d-block font-weight-medium" to="/products">Back to Products
						</router-link>
					</v-col>
					<v-col cols="12" sm="12" md="8" lg="8" class="content-wrap pl-md-6 mt-5">
						<v-row>
							<v-col sm="12">
								<v-text-field
										class="name-input"
										label="Add product Name"
										type="text"
										v-model="product.product_name"
										required
										:rules="product_nameRules"
										:counter="250"
								>
								</v-text-field>
							</v-col>
							<v-col sm="4">
								<v-text-field
										v-model="product.market_price"
										type="number"
										label="Market Price"
										:rules="market_priceRules"
										required
								>
								</v-text-field>
							</v-col>
							<v-col sm="4">
								<v-text-field
										v-model="product.buying_price"
										type="number"
										label="Buying Price"
										required
										:rules="buying_priceRules"
										@blur="calculateSellingPrice"
								>
								</v-text-field>
							</v-col>
							<v-col sm="4">
								<v-text-field
										v-model="product.sell_price"
										type="number"
										label="Selling Price"
										required
										:rules="sell_priceRules"

								>
								</v-text-field>
							</v-col>
							<v-col sm="4">
								<v-text-field
										v-model="product.selling_margin"
										type="text"
										label="Selling Margin %"
										required
										:rules="sell_marginRules"
										readonly
								>
								</v-text-field>
							</v-col>
							<v-col sm="4">
								<v-text-field
										v-model="product.sku"
										type="text"
										label="Product Sku"
								>
								</v-text-field>
							</v-col>
							<v-col sm="4">
								<v-text-field
										v-model="product.quantity"
										type="number"
										label="Total Products"
								>
								</v-text-field>
							</v-col>
							<v-col sm="12">
								<label style="font-size: 14px;" class="mb-2">Description</label>
								<quill-editor
										v-model="product.description"
										:content="product.description"
										:options="editorOption"
										required
										:rules="descriptionRules"
								/>
							</v-col>
							<v-col sm="12">
								<div class="mt-4 border-top">
									<v-btn type="submit" :disabled="!valid" color="accent" class="mx-3" large>Create</v-btn>
									<v-btn color="white" large>Discard</v-btn>
								</div>
							</v-col>
						</v-row>
					</v-col>

					<v-col cols="12" sm="12" md="4" lg="4" class="mt-5">
						<label style="font-size: 14px;" class="mb-2">Product Images</label>
						<vue-upload-multiple-image
								@upload-success="uploadImageSuccess"
								@before-remove="beforeRemove"
								@edit-image="editImage"
								:data-images="this.product.images"
								idUpload="images"
								dragText="Drag Images"
								browseText="Browse Images"
								primaryText="Primary"
						></vue-upload-multiple-image>
						<br>
						<label style="font-size: 14px;" class="mb-2">Product Category</label>
						<v-treeview
								v-model="selected"
								:items="productCategories"
								:selection-type="selectionType"

								selectable

								open-all
						></v-treeview>
					</v-col>

				</v-row>
			</v-form>
		</v-col>
	</v-row>
</template>

<script>

	import VueUploadMultipleImage from 'vue-upload-multiple-image'

	export default {
		components: {
			VueUploadMultipleImage
		},
		data() {
			return {
				product: {
					product_name: "",
					images: [],
					product_categories: [13,14],
					market_price: "",
					buying_price: "",
					sell_price: "",
					selling_margin: "",
					quantity: 0,
					sku: "",
					description: "<h4>Example Description</h4>",
				},
				fileList: [],
				formData: null,
				search: null,
				content: '<h4>Example Description</h4>',
				editorOption: {},
				valid: true,
				product_nameRules: [
					v => !!v || 'Product Name is required',
					v => (v && v.length <= 250) || 'Name must be less than 250 characters',
				],
				market_priceRules: [
					v => !!v || 'Product Market Price is required',
				],
				buying_priceRules: [
					v => !!v || 'Product Buying Price is required',
				],
				sell_priceRules: [
					v => !!v || 'Product Selling Price is required',
				],
				sell_marginRules: [
					v => !!v || 'Product Selling Margin is required',
				],
				descriptionRules: [
					v => !!v || 'Product description is required',
				],
				parentCategories:[],
				SubCategories:[],
				selectionType: 'independent',
                selected: [],
				productCategories: [],
			};
		},
		created() {
			this.getParentCategories();
            this.getProductDetails(this.$router.history.current.params.id);
            this.check([13,14]);
		},
		methods: {
			validate () {
				this.$refs.form.validate()
			},
            getProductDetails(id){

                axios.get(this.$serverUrl+'api/product/'+id+'/edit',{
                    headers: {'Content-Type':'application/json','Authorization': 'Bearer ' + localStorage.getItem('sriBay.jwt')}
                }).then(response => {
                     const productDetails = response.data.product;
                     this.product = productDetails;
                    // const productCategories = [];

                    // for(const i in response.data.product_category){
                    //     productCategories[i] = {'id': response.data.product_category[i].id}
                    // }
                    //
                    // this.product.product_categories = productCategories;
                    //
                    // console.log(this.product.product_categories);

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
            check: function(arr) {
                this.selected = arr
            },
			getParentCategories: function() {
                axios.get(this.$serverUrl+'api/category/tree-view',{
					headers: {'Content-Type':'application/json','Authorization': 'Bearer ' + localStorage.getItem('sriBay.jwt')}
				}).then(response => {
					const responseData = response.data.categories;
					for(const i in responseData) {
						this.productCategories.push(responseData[i]);
					}

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
			submitNewProductFrom: function () {
			    console.log(this.product.product_categories);
				// const formData = new FormData();
				// for( var i = 0; i < this.product.images.length; i++ ){
				// 	let file = this.product.images[i];
				// 	formData.append('images[' + i + ']', file);
				// }
				// for( var i2 = 0; i2 < this.product.product_categories.length; i2++ ){
				// 	let subCat = this.product.product_categories[i2];
				// 	formData.append('product_category[' + i2 + ']', subCat.id);
				// }
				// formData.append('product_name', this.product.product_name)
				// formData.append('market_price', this.product.market_price)
				// formData.append('buying_price', this.product.buying_price)
				// formData.append('sell_price', this.product.sell_price)
				// formData.append('selling_margin', this.product.selling_margin)
				// formData.append('quantity', this.product.quantity)
				// formData.append('sku', this.product.sku)
				// formData.append('description', this.product.description)
                //
				// this.$http.post(this.$serverUrl+'api/product/', formData,{
				// 	headers: {
				// 		'Content-Type': 'multipart/form-data',
				// 		'Authorization': 'Bearer ' + localStorage.getItem('bigStore.jwt')
				// 	},
				// }).then(response => {
				// 	this.$toast.open({
				// 		message: response.body.message,
				// 		type: 'success',
				// 	});
				// 	//this.$router.go(this.$router.currentRoute)
				// }, response => {
				// 	const errors = response.body.message;
				// 	var html = '';
				// 	for (const i in errors){
				// 		html += errors[i];
				// 	}
				// 	this.$toast.open({
				// 		message: html,
				// 		type: 'error',
				// 	});
				// });
			},
			calculateSellingPrice:function () {
				const calculateSellingPrice = this.product.market_price * 10/100;
				this.product.sell_price = parseFloat(this.product.market_price) + calculateSellingPrice;
				console.log(((500-400 )/ 500 * 100)*65/100)
				this.calculateSellingMargin();
			},
			calculateSellingMargin:function () {
				const calculateSellingMargin = ((this.product.market_price-this.product.buying_price )/ this.product.market_price * 100)*65/100;
				this.product.selling_margin = calculateSellingMargin;
			},
			uploadImageSuccess(formData, index, fileList) {

				for(var pair of formData.entries()){
					this.product.images[index] = pair[1];
				}
				console.log(fileList)

			},
			beforeRemove (index, done, fileList) {
				console.log('index', index, fileList)
				var r = confirm("remove image")
				if (r == true) {
					done()
				}
			},
			editImage (formData, index, fileList) {
				console.log('edit data', formData, index, fileList)
			}
		},


	}
</script>
