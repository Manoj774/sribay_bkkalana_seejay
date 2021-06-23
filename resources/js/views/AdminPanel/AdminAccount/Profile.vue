<template>
    <div class="profile-wrapper emb-card pa-4">
        <h4>Profile Information</h4>
        <div class="pt-4">
            <div class="proflie-field mb-4">
                <label>First Name :</label>
                <span>{{profileData.first_name}}</span>
            </div>
            <div class="proflie-field mb-4">
                <label>Last Name :</label>
                <span>{{profileData.last_name}}</span>
            </div>
            <div class="proflie-field mb-4">
                <label>Mobile Number :</label>
                <span>{{profileData.phone_number}}</span>
            </div>
            <div class="proflie-field mb-4">
                <label>Location :</label>
                <span>{{profileData.address}}</span>
            </div>
            <div class="proflie-field mb-4">
                <label>E-mail :</label>
                <span>{{profileData.email}}</span>
            </div>
            <div class="proflie-field mb-4">
                <label>Role :</label>
                <span>{{profileData.role == 3 ? "Member" : profileData.role == 1 ? "Admin" : "User" }}</span>
            </div>
            <router-link :to="{name: 'AdminEditProfileInfo', query: {type: 'info'}}">
                <v-btn class="accent mx-0">Edit</v-btn>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                profileData: {
                    first_name: '',
                    last_name: '',
                    address: '',
                    phone_number: '',
                    email: '',
                    role: '',
                }
            }
        },
        created() {
            this.getProfileData();
        },
        methods: {
            getProfileData: function() {
                axios.get('/api/user/profile').then(response => {
                    this.profileData = response.data;
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
</script>
