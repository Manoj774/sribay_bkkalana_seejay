<template>
   <div class="emb-cart-wrap emb-card">
      <emb-page-title
         heading="Here's what's in your bag"
         subHeading="Our latest news and learning articles."
         >
      </emb-page-title>
      <div class="cart-content section-gap">
         <v-container grid-list-xl py-0>
            <div  v-if="cart == ''" class="text-center">
               <div class="text-center">
                  <div class="mb-6">
                     <img  alt="cart-empty" height="128" src="static/images/empty-cart.png" width="128">
                  </div>
                  <h4 > Your Shopping Bag is empty</h4>
                  <router-link class="primary--text" to="/">Go to Shopping</router-link>
               </div>
            </div>
            <div v-else class="cart-shop-list">
               <div class="emb-card mb-12 pa-6 white">
						<div v-for="(item, index) in cart" :key="index">
							<v-row class="cart-item-wrap">
								<v-col cols="12" sm="12" md="2" class="d-inline-flex align-center justify-center">
									<img :src="item.image" alt='cart-item' width="100">
								</v-col>
								<v-col cols="12" sm="7" md="5" class="d-inline-flex align-center justify-center">
									<div >
										<h5 class="mb-1" style="font-size: 14px">{{item.name}}</h5>
<!--										<p class="mb-0">Delivery in 3-4 days | Free</p>-->
<!--										<p class="mb-0"> 10 Days Replacement Policy</p>-->
									</div>
								</v-col>
								<v-col cols="6" sm="2" md="1" class="d-inline-flex align-center justify-center">
									<v-text-field class="d-inline-block" type="number" v-model="item.quantity" min="1" max="10"
										placeholder="Quantity" @change="updateCartItem(item)">
									</v-text-field>
								</v-col>
								<v-col cols="6" sm="3" md="2" class="d-inline-flex align-center justify-center">
									<h4 class="mb-0">
										<emb-currency-sign></emb-currency-sign>
                                        {{(item.quantity)*(item.price)}}
									</h4>
								</v-col>
								<v-col cols="2" sm="2" md="2" class="res-float-icon d-inline-flex align-center justify-md-center justify-end">
									<a class="accent--text remove-cart" @click="deleteProductFromCart(item)" href="javascript:void(0)">
										<v-icon>mdi-close</v-icon>

									</a>
								</v-col>
							</v-row>
						</div>
               </div>
               <v-layout align-center justify-end>
                  <vue-snotify></vue-snotify>
                  <v-flex xs12 sm12 md5 lg5 xl5 py-0>
                     <div class="layout align-center justify-space-between subtotal">
                        <p>Subtotal</p>
                        <span>
                           <emb-currency-sign></emb-currency-sign>
                           {{itemTotal}}
                        </span>
                     </div>
                     <div class="layout align-center justify-space-between subtotal">
                        <p>Shipping</p>
                        <span>
                           <emb-currency-sign></emb-currency-sign>
                           {{shipping}}
                        </span>
                     </div>
                     <div class="layout align-center justify-space-between subtotal">
                        <p>Tax(GST)</p>
                        <span>
                           <emb-currency-sign></emb-currency-sign>
                           {{tax}}
                        </span>
                     </div>
                     <v-divider class="my-3"></v-divider>
                     <div class="layout align-center justify-space-between subtotal layout-gap">
                        <h4>Total</h4>
                        <h4>
                           <emb-currency-sign></emb-currency-sign>
                           {{getTotalPrice}}
                        </h4>
                     </div>
                     <div class="layout justify-end subtotal">
                        <v-btn large class="accent mr-0" @click="buyNow()">
                           Checkout
                        </v-btn>
                     </div>
                  </v-flex>
               </v-layout>
               <emb-delete-confirmation
                  ref="deleteConfirmationDialog"
                  message="Are you sure you want to delete this product?"
                  @onConfirm="onDeleteProductFromCart"
                  >
               </emb-delete-confirmation>
            </div>
         </v-container>
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
                                                      <v-btn class="accent mx-0 mb-4" large  @click.stop.prevent="registerUser">
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
   </div>

</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      tab:null,
      cart:[],
      selectDeletedProduct: null,
      total: null,
      headers: [
        {
          text: "Product",
          align: "left",
          sortable: false,
          value: "image"
        },
        { text: "Product Name", value: "name" },
        { text: "Product Quantity", value: "quantity" },
        { text: "Product Total", value: "total" },
        { text: "Remove", value: "remove" }
      ],
        dialog: false,
        login:{
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
    };
  },

  mounted() {
      if (JSON.parse(localStorage.getItem('user')) != null){
          this.user = JSON.parse(localStorage.getItem('user'));
      }else if (JSON.parse(localStorage.getItem('admin-user')) != null) {
          this.user = JSON.parse(localStorage.getItem('admin-user'));
      }
    this.getCartItems();
  },
  computed: {
    ...mapGetters(["tax", "shipping"]),


    itemTotal() {
      let productTotal = 0.0;
      if (this.cart.length > 0) {
        for (const item of this.cart) {
          productTotal += item.price * item.quantity;
        }
        return productTotal.toFixed(2);
      } else {
        return productTotal.toFixed(2);
      }
    },
    getTotalPrice() {
      let totalPrice = this.tax + this.shipping;
      if (this.cart.length > 0) {
        for (const item of this.cart) {
          totalPrice += item.price * item.quantity;
        }
        return totalPrice.toFixed(2);
      } else {
        return totalPrice.toFixed(2);
      }
    }
  },
  methods: {
      buyNow(){
          if (this.user == null){
              this.dialog = true;
          }else {
            //   this.$router.push({path:'/checkout/payment'});
              window.location.href = '/checkout/payment';
          }
      },
      registerUser(){
          this.$refs.register_form.validate();
          if(this.register_valid === true){
              axios.post(this.$serverUrl+'api/register', this.register).then(response => {
                  localStorage.setItem('token', response.data.token)
                  localStorage.setItem('role', response.data.role)
                  localStorage.setItem('user', JSON.stringify(response.data.user))
                  this.user = response.data.user;
                  window.location.href = '/checkout/payment';
                //   this.$router.push('/checkout/payment');
              }).catch(error => {
                  this.$toast.open({
                      message: error.message,
                      type: 'error',
                  });
              });
          }
      },
      loginUser(){
          this.$refs.login_form.validate();
          if(this.login_valid === true){
              axios.post(this.$serverUrl+'api/login', this.login).then(response => {
                  localStorage.setItem('token', response.data.token)
                  localStorage.setItem('role', response.data.role)
                  localStorage.setItem('user', JSON.stringify(response.data.user))
                  this.user = response.data.user;
                  window.location.href = '/checkout/payment';
                //   this.$router.push('/checkout/payment');
              }).catch(error => {
                  this.$toast.open({
                      message: error.message,
                      type: 'error',
                  });
              });
          }
      },
     updateCartItem(product){
         axios.post('/api/cart/add-to-cart',product).then(response => {
             console.log(response.data.message)
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
     getCartItems(){
          axios.get('/api/cart/get-cart-items').then(response => {
              this.cart = [];
              for (const i in response.data.cart_items){
                  this.cart.push(response.data.cart_items[i]);
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
    deleteProductFromCart(product) {
      this.$refs.deleteConfirmationDialog.openDialog();
      this.selectDeletedProduct = product;
    },
    onDeleteProductFromCart() {
      this.$refs.deleteConfirmationDialog.close();
      this.$snotify.error("Product Removing from cart", {
        closeOnClick: false,
        pauseOnHover: false,
        timeout: 1000
      });
        axios.delete('/api/cart/remove-cart-item/'+this.selectDeletedProduct.id).then(response => {
            this.getCartItems();
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
    }
  }
};
</script>

