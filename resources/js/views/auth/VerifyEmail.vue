<template>
  <section class="login-content">
    <div class="container h-100">
      <div class="row mt-5 justify-content-center h-100">
        <div class="col-md-5">
          <template v-if="errors">
            <v-error variant="danger" icon="alert">{{errors}}</v-error>
          </template>
          <div class="card">
              <div class="card-body">
                <template v-if="verifying">
                  <div class="text-center">
                    <h5>Verifying...</h5>
                    <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
                  </div>
                </template>
                <template v-else>
                  <div class="text-center">
                    <h5 class="mb-2">Verify Email</h5>
                    <p>{{message}}</p>
                  </div>
                </template>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name:'VerifyEmail',
  data() {
    return {
      message: null,
      'errors': null,
      'verifying': false
    }
  },
  created() {
    this.verify()
  },
  methods: {
    async verify() {
      this.errors = null
      this.verifying = true

      try {
        const {data} = await axios.post(`/api${this.$route.fullPath}`)
        this.message = data.message
        this.$toasted.success(data.message)
      } catch(error) {
        this.errors = error.response.data.errors.message
      }

      this.verifying = false
    }
  }
}
</script>