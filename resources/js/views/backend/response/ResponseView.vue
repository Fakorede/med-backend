<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <response-body :response="response" :loading="loading"></response-body>
    </div>
  </div>
</template>
<script>
import ResponseBody from './ResponseModal'
import {is401} from '../../../config/response'
export default {
  name:'ResponseView',
  components: {ResponseBody},
  data() {
    return {
      response: {},
      loading: true,
      errors: null,
    }
  },
  created() {
    this.getResponse()
  },
  methods: {
    async getResponse() {
      this.loading = true

      try {
        const {data} = await axios.get(`/backend/dashboard/response/${this.$route.params.id}`)
        this.response = data[0]
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