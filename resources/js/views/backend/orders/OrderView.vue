<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <order-body :order="order" :loading="loading"></order-body>
    </div>
  </div>
</template>

<script>
  import OrderBody from './OrderModal'
  import {is401} from '../../../config/response'

  export default {
    name:'OrderView',
    components: {OrderBody},
    data() {
      return {
        order: {},
        loading: false,
        errors: null,
      }
    },
    created() {
      this.getOrder()
    },
    methods: {
      async getOrder() {
        this.loading = true

        try {
          const {data} = await axios.get(`/api/admin/order/${this.$route.params.id}`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('sserpxe_cigam')}` }
          })
          this.order = data.data
        } catch (error) {
          console.log(error)
          if(is401(error)) {
            this.$logOut()
          }
        }

        this.loading = false
      }
    }
  }
</script>