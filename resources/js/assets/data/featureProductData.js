export default {
    data: () => ({
        featuresData:[],
    }),
    computed() {
        this.getFeaturesProduct();
    },
    method:{
        getFeaturesProduct: function() {
            this.$http.get(this.$serverUrl+'api/product').then(response => {
                const responseData = response.body.products;
                for (const i in responseData){
                    this.featuresData.push({
                        objectID: responseData[i].id,
                        image: responseData[i].image_url,
                        name: responseData[i].product_name,
                        price: responseData[i].sell_price,
                        rating: 0
                    });
                }

            }, response => {
                const errors = response.body.message;
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
    }
}
