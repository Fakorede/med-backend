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
        loading: true,
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
          const {data} = await axios.get(`/backend/dashboard/order/${this.$route.params.id}`)
          this.order = data[0]
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