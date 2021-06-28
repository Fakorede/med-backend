<template>
  <div>
    <Loader/>
    <div class="wrapper">
      <div class="container-fluid container-md hotel-container">
        <Header />
        <div class="content-page">
          <transition name="router-anim">
            <router-view/>
          </transition>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import {core} from "../config/pluginInit"
import Loader from "../components/loader/Loader"
import Header from "../components/partials/backend/Header"
import Footer from "../components/partials/backend/Footer"
export default {
  name: 'DashboardLayout',
  components: {
    Header,
    Footer,
    Loader
  },
   mounted(){
    document.body.classList='box-bg mm-hotel'
    core.iconanimate()
  },
  destroyed () {
    document.body.classList='box-bg mm-hotel'
  }
  
}
</script>
<style>
</style>
