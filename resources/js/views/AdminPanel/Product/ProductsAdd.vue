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
                                <v-col sm="8" class="mt-4">
                                    <treeselect
                                        v-model="product.product_categories"
                                        :multiple="true"
                                        :options="parentCategories"
                                        :flat="true"
                                        :default-expand-level="1"
                                        placeholder="Select Category..."
                                    />
                                </v-col>
                                <v-col sm="4">
                                    <v-checkbox
                                        v-model="product.is_featured"
                                        label="Is featured product"
                                    ></v-checkbox>
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
					</v-col>

				</v-row>
				</v-form>
			</v-col>
		</v-row>
</template>

<script>

	import VueUploadMultipleImage from 'vue-upload-multiple-image'
    import Treeselect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'

    export default {
		components: {
			VueUploadMultipleImage,
            Treeselect
		},
		data() {
			return {
				product: {
					product_name: "",
					images: [],
					product_categories: null,
                    is_featured: false,
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
				selection: [],
				productCategories: [],
			};
		},
		created() {
			this.getParentCategories();
		},
        methods: {
			validate () {
				this.$refs.form.validate()
			},
			getParentCategories: function() {
                axios.get('/api/category/tree-select').then(response => {
					const responseData = response.data.categories;
					 for(const i in responseData) {
						 this.parentCategories.push(responseData[i]);
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
			handleImages(files){
				this.product.images = files;
			},
			submitNewProductFrom: function () {
				const formData = new FormData();

				if(this.product.images == null){
                    this.$toast.open({
                        message: "Please add images to this product...!",
                        type: 'error',
                    });
                    return;
                }

                if(this.product.product_categories == null){
                    this.$toast.open({
                        message: "Please add category to this product...!",
                        type: 'error',
                    });
                    return;
                }


                for( var i = 0; i < this.product.images.length; i++ ){
				 	let file = this.product.images[i];
				 	formData.append('images[' + i + ']', file);
				 }

				for( var i2 = 0; i2 < this.product.product_categories.length; i2++ ){
					let subCat = this.product.product_categories[i2];
					formData.append('product_category[' + i2 + ']', subCat);
				}
				formData.append('product_name', this.product.product_name)
				formData.append('market_price', this.product.market_price)
				formData.append('buying_price', this.product.buying_price)
				formData.append('sell_price', this.product.sell_price)
                formData.append('is_featured', this.product.is_featured)
				formData.append('selling_margin', this.product.selling_margin)
				formData.append('quantity', this.product.quantity)
				formData.append('sku', this.product.sku)
				formData.append('description', this.product.description)

                axios.post('/api/product/create',formData).then(response => {
				 	this.$toast.open({
				 		message: response.data.message,
				 		type: 'success',
				 	});
				 	this.$router.go(this.$router.currentRoute)
				 }, err => {
				 	const valid_errors = err.response.data.errors;
                    const errors = err.response.data.message;
				 	let html = '';

				 	if (valid_errors != null){
                        for (const i in valid_errors){
                            html += valid_errors[i];
                        }
                    }else if (errors != null){
                        html += errors;
                    }
				 	this.$toast.open({
				 		message: html,
				 		type: 'error',
				 	});
				 });
			},
			calculateSellingPrice:function () {
				const calculateSellingPrice = this.product.market_price * 10/100;
				this.product.sell_price = parseFloat(this.product.market_price) + calculateSellingPrice;
				this.calculateSellingMargin();
			},
			calculateSellingMargin:function () {
				const calculateSellingMargin = ((this.product.market_price-this.product.buying_price )/ this.product.market_price * 100)*65/100;
				this.product.selling_margin = calculateSellingMargin.toFixed(2);
			},
			uploadImageSuccess(formData, index, fileList) {

				for(var pair of formData.entries()){
					this.product.images[index] = pair[1];
				}

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
