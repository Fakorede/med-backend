<template>
     <section class="login-content">
        <div class="container-fluid h-100">
        <div class="row align-items-center justify-content-center h-100">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                    <div class="row align-items-center">
                        <div class="text-center col-lg-12">
                            <!-- <img src="../../assets/images/logo.png" class="img-fluid" width="80" alt=""> -->
                            <h2 class="mt-3 mb-0">Success!</h2>
                            <p class="mb-1">
                                A email has been sent to your email. Please check for an
                                email from us and click on the included link to reset your password.
                            </p>
                            <div class="d-inline-block w-100">
                                <button type="submit" class="mt-3 btn btn-primary">
                                <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <router-link :to="{name:'auth.login'}">
                                    <span class="text-white"> Back to Login</span>
                                </router-link> 
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:'ConfirmMail',
    computed: {
        ...mapGetters('auth', {
            authenticated: 'authenticated'
        })
    },
    created() {
        if(this.authenticated) {
            this.$router.push({name: 'app.dashboard'})
        }
   },
}
</script>