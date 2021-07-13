<template>
    <div class="emb-product-detail">
        <template v-if="selectedProduct != null">
            <emb-page-title :heading="selectedProduct.product_name"></emb-page-title>
            <div class="emb-productDetail-content white">
                <div class="product-detail section-gap">
                    <v-container grid-list-xl py-0>
                        <v-layout row wrap product-detail-row>
                            <v-flex xs12 sm12 md6 lg6 xl6 text-center>
                                <v-layout row wrap>
                                    <v-flex xs2 sm2 md2 lg2 xl2 product-gallery>
                                        <div
                                            class="detail-image-gallery d-inline-block mb-6 mx-2"
                                            v-for="(productItemImg,key) in selectedProduct.images"
                                            :key="key"
                                            @mouseover="togglePreviewImage(productItemImg.image_url)"
                                        >
                                            <a href="javascript:void(0)">
                                                <img :src="productItemImg.image_url" width="71" height="91"
                                                     alt="product image">
                                            </a>
                                        </div>
                                    </v-flex>
                                    <v-flex xs10 lg10 sm10 md10 xl10 product-detail-img>
                                        <div class="product-detail-thumb">
                                            <div class="image-wrapper emb-card">
                                                <a href="javascript:void(0)">
                                                    <img class="detailImg" :src="selectedImage" width="auto"
                                                         height="auto" alt="product detail image">
                                                </a>
                                            </div>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs12 sm12 md6 lg6 xl5>
                                <router-link to="/">Back to shop</router-link>
                                <h5>{{selectedProduct.product_name}}</h5>
                                <div  v-if="selectedProduct.countDownProduct == null">
                                    <h4 class="accent--text">
                                    <emb-currency-sign></emb-currency-sign>
                                    {{selectedProduct.sell_price.toFixed(2)}}
                                    </h4>
                                </div>
                                <div v-else>
                                    <h5 class="d-inline-block mr-1">
                                        <strike class="px-1"><emb-currency-sign class="font-color"></emb-currency-sign>{{selectedProduct.sell_price.toFixed(2)}}</strike>
                                    </h5>
                                    <h4 class="accent--text d-inline-block sec-content">
                                        Now only <emb-currency-sign class="accent--text"></emb-currency-sign>{{selectedProduct.countDownProduct.deal_price.toFixed(2)}}
                                    </h4>
                                </div>
                                <ul class="product-availablity list-unstyled pl-0 mb-4 mt-4">
                                    <li>
                                        <template v-if="selectedProduct.stat === 1">
                                            <v-chip
                                                color="success"
                                                label
                                                text-color="white"
                                            >
                                                <span class="font-weight-regular">In Stocks</span>
                                            </v-chip>

                                        </template>
                                        <template v-else>
                                            <v-chip
                                                color="red"
                                                label
                                                text-color="white"
                                            >
                                                <span class="font-weight-regular">Out Of Stocks</span>
                                            </v-chip>

                                        </template>
                                    </li>
                                    <li>
                                    </li>
                                    <li>

                                    </li>
                                </ul>

                                <div class="select-group mb-4">
                                    <v-layout wrap>

                                        <v-flex xs12 sm4 lg4 md4 lg3 xl3 pb-0>
                                            <v-select
                                                v-model="selectedProduct.quantity"
                                                :items="[1,2,3,4,5]"
                                                @change="productQuantity"
                                            >
                                            </v-select>
                                        </v-flex>
                                    </v-layout>
                                </div>
                                <div class="mb-6 btn-wrap">
                                    <v-btn
                                        v-if="ifItemExistInCart(selectedProduct)"
                                        class="accent cpx-0"
                                        large
                                        to="/cart"
                                    >
                                        View Cart
                                    </v-btn>
                                    <v-btn
                                        v-else
                                        class="accent d-inline-block cpx-0"
                                        large
                                        @click="addProductToCart(selectedProduct)"
                                    >
                                        Add To Cart
                                    </v-btn>


                                    <v-btn large @click="buyNow(selectedProduct)" class="white buyProduct cpx-0">Buy
                                        Now
                                    </v-btn>


                                </div>
                                <div >
                                    <v-row>
                                        <v-col cols="12" class="ml-3">
                                            <span class="font-weight-medium">Affiliate Commission Rate</span>
                                        </v-col>
                                        <v-col cols="12" >

                                            <v-text-field
                                                v-model="generateLink"
                                                :append-icon="'mdi-content-copy '"
                                                :prepend-icon="'mdi-reload '"
                                                label="Generate Link"
                                                type="text"
                                                ref="productLinkToCopy"
                                                @click:append="toggleCopy"
                                                @click:prepend="toggleGenerate()"
                                                v-if="role == 3 && affiliateActivate"
                                            ></v-text-field>
                                            <v-chip
                                                class="ma-2"
                                                color="pink"
                                                label
                                                text-color="white"
                                            >
                                                Commission Rate: {{this.selectedProduct.selling_margin}}%
                                            </v-chip>
                                            <v-chip
                                                class="ma-2"
                                                color="primary"
                                                label
                                                text-color="white"
                                            >
                                                Estimated Commissions:
                                                <emb-currency-sign></emb-currency-sign>
                                                {{(this.selectedProduct.sell_price *
                                                this.selectedProduct.selling_margin/100).toFixed(2)}}
                                            </v-chip>
                                        </v-col>
                                        <v-col cols="12">

                                        </v-col>
                                    </v-row>
                                </div>
                                <div>
                                    <span>Share Now</span>
                                    <emb-social-share class="mx-2"></emb-social-share>
                                </div>
                            </v-flex>
                        </v-layout>
                        <template class="mt-5">
                            <v-tabs
                                v-model="model"
                                centered
                                slider-color="red"
                                class="mt-5"
                            >
                                <v-tab
                                    :href="'#tab-description'"
                                >
                                    Description
                                </v-tab>
<!--                                <v-tab-->
<!--                                    :href="'#tab-reviews'"-->
<!--                                >-->
<!--                                    Reviews-->
<!--                                </v-tab>-->
                            </v-tabs>
                            <v-tabs-items v-model="model">
                                <v-tab-item
                                    :value="'tab-description'"
                                >
                                    <v-card flat>
                                        <v-card-text style="justify-content: center"
                                                     v-html="selectedProduct.description">

                                        </v-card-text>
                                    </v-card>
                                </v-tab-item>
<!--                                <v-tab-item-->
<!--                                    :value="'tab-reviews'"-->
<!--                                >-->
<!--                                    <v-card flat>-->
<!--                                        <v-card-text></v-card-text>-->
<!--                                    </v-card>-->
<!--                                </v-tab-item>-->
                            </v-tabs-items>
                        </template>
                    </v-container>
                </div>

                <template>
                    <v-row justify="center">
                        <v-col sm="12">
                            <v-dialog
                                v-model="dialog"
                                persistent
                                max-width="500px"
                            >
                                <v-card>
                                    <v-card-title>
                                        <span class="text-h5">User Profile</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-tabs
                                            v-model="tab"
                                            background-color="transparent"
                                            color="basil"
                                            grow
                                        >
                                            <v-tab
                                                :href="'#tab-register'"
                                            >
                                                Register
                                            </v-tab>
                                            <v-tab
                                                :href="'#tab-signin'"
                                            >
                                                Sign In
                                            </v-tab>
                                        </v-tabs>
                                        <v-tabs-items v-model="tab">
                                            <v-tab-item
                                                :value="'tab-register'"
                                            >
                                                <v-card>
                                                    <v-card-text>
                                                        <v-form ref="register_form" v-model="register_valid">
                                                            <v-row>
                                                                <v-col sm="12" md="6" xl="6">
                                                                    <v-text-field
                                                                        v-model="register.first_name"
                                                                        type="text"
                                                                        placeholder="First Name*"
                                                                        :rules="inputRules.basictextRules"
                                                                    >
                                                                    </v-text-field>
                                                                </v-col>
                                                                <v-col sm="12" md="6" xl="6">
                                                                    <v-text-field
                                                                        v-model="register.last_name"
                                                                        type="text"
                                                                        placeholder="Last Name*"
                                                                        :rules="inputRules.basictextRules"
                                                                    >
                                                                    </v-text-field>
                                                                </v-col>
                                                                <v-col sm="12" md="6" xl="6">
                                                                    <v-text-field
                                                                        v-model="register.phone_number"
                                                                        type="number"
                                                                        max=10
                                                                        placeholder="Mobile Number*"
                                                                        :rules="inputRules.basictextRules"
                                                                    >
                                                                    </v-text-field>
                                                                </v-col>
                                                                <v-col sm="12" md="6" xl="6">
                                                                    <v-text-field
                                                                        v-model="register.email"
                                                                        type="email"
                                                                        placeholder="Email*"
                                                                        :rules="emailRules"
                                                                    >
                                                                    </v-text-field>
                                                                </v-col>
                                                                <v-col sm="12" md="6" xl="6">
                                                                    <v-text-field
                                                                        v-model="register.password"
                                                                        type="password"
                                                                        placeholder="Enter Password*"
                                                                        :rules="inputRules.basictextRules"
                                                                    >
                                                                    </v-text-field>
                                                                </v-col>
                                                                <v-col sm="12" md="6" xl="6">
                                                                    <v-text-field
                                                                        v-model="register.confirm_password"
                                                                        class="mb-4"
                                                                        type="password"
                                                                        placeholder="Retype Passowrd*"
                                                                        :rules="inputRules.basictextRules"
                                                                    >
                                                                    </v-text-field>
                                                                </v-col>
                                                            </v-row>
                                                            <v-btn class="accent mx-0 mb-4" large
                                                                   @click.stop.prevent="registerUser">
                                                                Sign Up
                                                            </v-btn>
                                                        </v-form>
                                                    </v-card-text>
                                                </v-card>
                                            </v-tab-item>
                                            <v-tab-item
                                                :value="'tab-signin'"
                                            >
                                                <v-card>
                                                    <v-card-text>
                                                        <v-form ref="login_form" v-model="login_valid">
                                                            <v-text-field
                                                                type="email"
                                                                label="Email*"
                                                                v-model="login.email"
                                                                :rules="emailRules"
                                                            >
                                                            </v-text-field>
                                                            <v-text-field
                                                                type="password"
                                                                label="Password*"
                                                                v-model="login.password"
                                                                :rules="inputRules.basictextRules"
                                                            >
                                                            </v-text-field>
                                                            <v-btn class="accent mb-3 ma-0" large @click="loginUser">
                                                                Sign In
                                                            </v-btn>
                                                        </v-form>
                                                    </v-card-text>
                                                </v-card>
                                            </v-tab-item>
                                        </v-tabs-items>

                                        <small>*indicates required field</small>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="dialog = false"
                                        >
                                            Close
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-col>

                    </v-row>
                </template>

            </div>
        </template>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        computed: {
            ...mapGetters(["cart", "wishlist"]),
        },
        mounted() {

            if (JSON.parse(sessionStorage.getItem('user')) != null) {
                this.getAffiliateData();
                this.user = JSON.parse(sessionStorage.getItem('user'));
            }
            if (this.$router.history.current.params.id != null && this.$router.history.current.params.user != null) {
                this.getProductDetailWithUser(this.$router.history.current.params.id, this.$router.history.current.params.user);
            } else {
                this.getProductDetails(this.$router.history.current.params.id);
            }


        },
        data() {
            return {
                tab: null,
                title: "",
                id: "",
                selectedImage: null,
                selectedProduct: null,
                generateLink: null,
                model: 'tab-2',
                role: sessionStorage.getItem('role'),
                dialog: false,
                login: {
                    email: null,
                    password: null,
                    checkbox: false
                },
                login_valid: false,
                register: {
                    first_name: null,
                    last_name: null,
                    phone_number: null,
                    email: null,
                    password: null,
                    confirm_password: null
                },
                register_valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                inputRules: {
                    basictextRules: [v => !!v || 'This field should not be empty']
                },
                user: null,
                buyNowItem: null,
                affiliateActivate:0,
            }
        },
        methods: {

            buyNow(item) {
                this.buyNowItem = item;
                if (this.user == null) {
                    this.dialog = true;
                } else {
                    this.buyNowAndCart()
                }
            },

            buyNowAndCart() {
                let newProduct = {
                    product_id: this.buyNowItem.id,
                    image: this.buyNowItem.images[0].image_url,
                    name: this.buyNowItem.product_name,
                    price: this.buyNowItem.countDownProduct == null ? this.buyNowItem.sell_price : this.buyNowItem.countDownProduct.deal_price,
                    quantity: this.buyNowItem.quantity ? this.buyNowItem.quantity : 1,
                    total: this.buyNowItem.countDownProduct == null ? this.buyNowItem.sell_price : this.buyNowItem.countDownProduct.deal_price * (this.buyNowItem.quantity ? this.buyNowItem.quantity : 1),
                    aff_user_id: this.selectedProduct.user
                }
                axios.post('/api/cart/add-to-cart', newProduct).then(response => {
                    window.location.href = '/checkout/payment';
                }, error => {
                    const errors = error.response.data.message;
                    var html = '';
                    for (const i in errors) {
                        html += errors[i];
                    }
                    this.$toast.open({
                        message: html,
                        type: 'error',
                    });
                });
            },
            registerUser() {
                this.$refs.register_form.validate();
                if (this.register_valid === true) {
                    axios.post('/api/register', this.register).then(response => {
                        sessionStorage.setItem('token', response.data.token)
                        sessionStorage.setItem('role', response.data.role)
                        sessionStorage.setItem('user', JSON.stringify(response.data.user))
                        this.user = response.data.user;
                        this.buyNowAndCart()
                        //window.location.href = '/checkout/payment';
                        // this.$router.push({path:'/checkout/payment'});
                    }).catch(error => {
                        this.$toast.open({
                            message: error.response.data.message,
                            type: 'error',
                        });
                    });
                }
            },
            loginUser() {
                this.$refs.login_form.validate();
                if (this.login_valid === true) {
                    axios.post('/api/login', this.login).then(response => {
                        sessionStorage.setItem('token', response.data.token)
                        sessionStorage.setItem('role', response.data.role)
                        sessionStorage.setItem('user', JSON.stringify(response.data.user))
                        this.user = response.data.user;
                        this.buyNowAndCart()
                        window.location.href = '/checkout/payment';
                        // this.$router.push({path:'/checkout/payment'});
                    }).catch(error => {
                        this.$toast.open({
                            message: error.response.data.message,
                            type: 'error',
                        });
                    });
                }
            },
            toggleCopy() {
                let textToCopy = this.$refs.productLinkToCopy.$el.querySelector('input')
                textToCopy.select()
                document.execCommand("copy");
            },

            toggleGenerate() {
                axios.post( '/api/product/link-generate', {productId: this.selectedProduct.id}).then(response => {
                    this.generateLink = decodeURIComponent(response.data.generateLink);
                }, error => {
                    const errors = error.response.data.message;
                    var html = '';
                    for (const i in errors) {
                        html += errors[i];
                    }
                    this.$toast.open({
                        message: html,
                        type: 'error',
                    });
                });
            },

            getProductDetails(id) {

                axios.get('/api/product/' + id + '',).then(response => {
                    const productDetails = response.data.product;
                    this.selectedProduct = productDetails;
                    this.selectedProduct.quantity = 1;
                    this.selectedImage = productDetails.images[0].image_url
                }, error => {
                    const errors = error.response.data.message;
                    var html = '';
                    for (const i in errors) {
                        html += errors[i];
                    }
                    this.$toast.open({
                        message: html,
                        type: 'error',
                    });
                });
            },

            getProductDetailWithUser(id, user) {
                axios.get('/api/product/' + id + '/' + user + '').then(response => {
                    const productDetails = response.data.product;
                    this.selectedProduct = productDetails;
                    this.selectedProduct.quantity = 1;
                    this.selectedImage = productDetails.images[0].image_url
                }, error => {
                    const errors = error.response.data.message;
                    var html = '';
                    for (const i in errors) {
                        html += errors[i];
                    }
                    this.$toast.open({
                        message: html,
                        type: 'error',
                    });
                });
            },

            productQuantity(value) {
                this.selectedProduct.quantity = value;
            },

            /* for opening the popup **/
            showReviewPopup() {
                this.$refs.productReviewPopup.open();
            },
            /* for toggling image **/
            togglePreviewImage(image) {
                this.selectedImage = image;
            },
            /* for adding product in car	**/
            addProductToCart(item) {
                this.$snotify.success('Product adding to the cart', {
                    closeOnClick: false,
                    pauseOnHover: false,
                    timeout: 1000,
                    showProgressBar: false,
                });
                setTimeout(() => {
                    let newProduct = {
                        product_id: item.id,
                        image: item.images[0].image_url,
                        name: item.product_name,
                        price: item.countDownProduct == null ? item.sell_price : item.countDownProduct.deal_price,
                        quantity: item.quantity ? item.quantity : 1,
                        total: item.countDownProduct == null ? item.sell_price : item.countDownProduct.deal_price * (item.quantity ? item.quantity : 1),
                        aff_user_id: item.user
                    }
                    axios.post('/api/cart/add-to-cart', newProduct).then(response => {
                        window.location.href = this.$router.history.current.path;
                    }, error => {
                        const errors = error.response.data.message;
                        var html = '';
                        for (const i in errors) {
                            html += errors[i];
                        }
                        this.$toast.open({
                            message: html,
                            type: 'error',
                        });
                    });
                }, 50);
            },
            /* check weather the product exist in cart
                * retun the boolean
            */
            ifItemExistInCart(result) {
                let exists = false;
                for (let item of this.cart) {
                    if (item.id == result.objectID) {
                        exists = true;
                    }
                }
                return exists;
            },
            /* to add a product in wishlist */
            addItemToWishlist(product) {
                if (this.ifItemExistInWishlist(product)) {
                    this.$snotify.error('Product already exist in the wishlist', {
                        showProgressBar: false,
                    });
                } else {
                    this.$snotify.success('Product adding to the wishlist', {
                        closeOnClick: false,
                        pauseOnHover: false,
                        timeout: 1000,
                        showProgressBar: false,
                    });
                    setTimeout(() => {
                        this.$store.dispatch("addItemToWishlist", product);
                    }, 2000);
                }
            },
            /* check weather the product exist in the wishlist
             * Return boolean
            */
            ifItemExistInWishlist(result) {
                let exists = false;
                for (let item of this.wishlist) {
                    if (item.id == result.objectID) {
                        exists = true;
                    }
                }
                return exists;
            },
            getAffiliateData() {
                axios.get('/api/users/affiliate').then(response => {
                    this.affiliateActivate = response.data.affiliate_activate;
                }, err => {
                    const errors = err.response.data.message;
                    var html = '';
                    for (const i in errors) {
                        html += errors[i];
                    }
                    this.$toast.open({
                        message: html,
                        type: 'error',
                    });
                });
            },
        }
    }
</script>
