<template>
	<div>
		<div class="main">
			<div class="banner">
				<v-container grid-list-xl>
					<v-layout row wrap>
						<v-flex xs12 sm12 md12 lg8 xl8>
							<emb-home-main-banner
								:data="homeBannerData"
							>
							</emb-home-main-banner>
						</v-flex>
						<v-flex xs12 sm12 md12 lg4 xl4>
							<v-layout row wrap text-center mx-0>
								<v-flex xs12 sm6 md6 lg12 xl12 px-0>
									<emb-aside-banner-v1
										img="/static/images/aside-1.jpg"
									>
									</emb-aside-banner-v1>
								</v-flex>
								<v-flex xs12 sm6 md6 lg12 xl12 px-0>
									<emb-aside-banner-v2
										img="/static/images/aside-2.jpg"
									>
									</emb-aside-banner-v2>
								</v-flex>
							</v-layout>
						</v-flex>
					</v-layout>
				</v-container>
			</div>
			<emb-features
				:data="featuresData"
			>
			</emb-features>
			<emb-feature-product
				secTitle="Featured Products"
                :data="featureProductData"
			>
			</emb-feature-product>
			<emb-day-deal v-if="countDownProductData != null"
				:data="countDownProductData"
			>
			</emb-day-deal>
			<emb-detail-offer></emb-detail-offer>

<!--			<embTestimonial-->
<!--				secTitle="Customer Reviews"-->
<!--				:data="TestimonialData"-->
<!--			>-->
<!--			</embTestimonial>-->

			<emb-subscribe
				heading="Subscribe our Newsletter"
				description="Stay up to date with our latest new and products">
			</emb-subscribe>
<!--			<emb-shop-card-->
<!--				secTitle="Shop By Brands"-->
<!--				:data="shopCard"-->
<!--			>-->
<!--			</emb-shop-card>-->
		</div>
	</div>
</template>
<script>
// layout components
import HomeMainBanner from "../components/Layouts/Banner/HomeMainBanner";
import AsideBannerV1 from "../components/Layouts/Banner/AsideBannerV1";
import AsideBannerV2 from "../components/Layouts/Banner/AsideBannerV2";

// widgets
import Features from "../components/Widgets/Feature";
import FeatureProduct from "../components/Widgets/FeatureProduct";
import DayDeal from "../components/Widgets/DayDeal";
import DetailOffer from "../components/Widgets/DetailOffer";
import Testimonial from "../components/Widgets/Testimonial";
import Blog from "../components/Widgets/Blog";
import ShopCard from "../components/Widgets/ShopCard";
import Subscribe from "../components/Widgets/Subscribe";

// data
import homeBannerData from "../assets/data/homeBannerData";
import featuresData from "../assets/data/featuresData";
//import featureProductData from "../assets/data/featureProductData";
import dayDealData from "../assets/data/dayDealData";
import latestArrivalData from "../assets/data/latestArrivalData";
import TestimonialData from "../assets/data/TestimonialData";
import shopCard from "../assets/data/shopCard";

//import api from "Api";

export default {
  components: {
    embHomeMainBanner: HomeMainBanner,
    embAsideBannerV1: AsideBannerV1,
    embAsideBannerV2: AsideBannerV2,
    embFeatures: Features,
    embFeatureProduct: FeatureProduct,
    embDayDeal: DayDeal,
    embDetailOffer: DetailOffer,
    embTestimonial: Testimonial,
    embBlog: Blog,
    embSubscribe: Subscribe,
    embShopCard: ShopCard
  },
  data() {
    return {
      homeBannerData,
      featuresData,
      featureProductData:[],
        countDownProductData:null,
      latestArrivalData,
      TestimonialData,
      shopCard,
      blogData: null
    };
  },
  mounted() {
    this.getCountDownProduct();
      this.getFeaturesProduct();
  },
  methods: {
      getFeaturesProduct: function() {
          axios.get('/api/product/feature-products').then(response => {
              const responseData = response.data.products;
              this.featureProductData = responseData;
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
    getCountDownProduct() {
        axios.get('/api/product/count-down-product').then(response => {
            const responseData = response.data.product;
            this.countDownProductData = responseData;

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
  }
};
</script>
