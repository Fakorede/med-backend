<template>
    <div class="container-fluid">
         <div class="row">
            <div class="col-lg-12">
               <div class="card card-block card-stretch card-height">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title mb-0">App Charges</h4>
                     </div>
                     <!-- Button to trigger modal -->
                     <button type="button" class="btn btn-primary btn-sm" @click="showModal">
                        Update Charges
                     </button>
                     <!-- Modal -->
                     <div class="modal fade" id="updateChargesModal" tabindex="-1" role="dialog" aria-labelledby="orderModal" aria-hidden="true">
                        <div class="modal-dialog modal-md" role="document">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <h5 class="modal-title"><strong>Add Rider</strong></h5>
                                 <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>

                              <div class="modal-body">
                                <form @submit.prevent="updateCharges">
                                  <div class="row">
                                    <div class="form-group col-md-12">
                                      <label for="dispatch_base_price">Dispatch Base Price:</label>
                                      <input 
                                        type="number"
                                        step="0.01" 
                                        class="form-control" 
                                        id="dispatch_base_price" 
                                        placeholder="Dispatch Base Price" 
                                        v-model.number="charge.dispatch_base_price" 
                                        :class="[{ 'is-invalid': errorFor('dispatch_base_price') }]"
                                      >
                                      <v-errors :errors="errorFor('dispatch_base_price')"></v-errors>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="form-group col-md-12">
                                      <label for="dispatch_price_per_km">Dispatch Price Per Km:</label>
                                      <input 
                                        type="number"
                                        step="0.01" 
                                        class="form-control" 
                                        id="dispatch_price_per_km" 
                                        placeholder="Dispatch Price Per Km" 
                                        v-model.number="charge.dispatch_price_per_km" 
                                        :class="[{ 'is-invalid': errorFor('dispatch_price_per_km') }]"
                                      >
                                      <v-errors :errors="errorFor('dispatch_price_per_km')"></v-errors>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="form-group col-md-12">
                                      <label for="errand_base_price">Errand Base Price:</label>
                                      <input 
                                        type="number"
                                        step="0.01" 
                                        class="form-control" 
                                        id="errand_base_price" 
                                        placeholder="Errand Base Price" 
                                        v-model.number="charge.errand_base_price" 
                                        :class="[{ 'is-invalid': errorFor('errand_base_price') }]"
                                      >
                                      <v-errors :errors="errorFor('errand_base_price')"></v-errors>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="form-group col-md-12">
                                      <label for="errand_price_per_km">Errand Price Per Km:</label>
                                      <input 
                                        type="number"
                                        step="0.01" 
                                        class="form-control" 
                                        id="errand_price_per_km" 
                                        placeholder="Errand Price Per Km" 
                                        v-model.number="charge.errand_price_per_km" 
                                        :class="[{ 'is-invalid': errorFor('errand_price_per_km') }]"
                                      >
                                      <v-errors :errors="errorFor('errand_price_per_km')"></v-errors>
                                    </div>
                                  </div>
                                  <button 
                                    type="submit" 
                                    class="btn btn-primary float-right mb-3" 
                                    :disabled="validating"
                                  >
                                    {{buttonText}}
                                  </button>
                                </form>            
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- ./ Modal -->
                  </div>
                  <div class="mt-3 container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                          <div class="card card-block card-stretch card-height">
                              <div class="card-header d-flex justify-content-between">
                                <div class="header-title">
                                    <div><strong>Current Charges</strong></div>
                                </div>
                              </div>
                              <div class="card-body">
                                <b-table-simple responsive>
                                    <b-tbody v-if="!loading">
                                      <b-tr>
                                        <b-td>
                                          <strong>Dispatch Base Price</strong>
                                        </b-td>
                                        <b-td>
                                          {{ charge.dispatch_base_price.toFixed(2) }}
                                        </b-td>
                                      </b-tr>
                                      <b-tr>
                                          <b-td>
                                            <strong>Dispatch Price Per Km</strong>
                                          </b-td>
                                          <b-td>
                                          {{ charge.dispatch_price_per_km.toFixed(2) }}
                                          </b-td>
                                      </b-tr>
                                      <b-tr>
                                          <b-td>
                                            <strong>Errand Base Price</strong>
                                          </b-td>
                                          <b-td>
                                            {{ charge.errand_base_price.toFixed(2) }}
                                          </b-td>
                                      </b-tr>
                                      <b-tr>
                                          <b-td>
                                            <strong>Errand Price Per Km</strong>
                                          </b-td>
                                          <b-td>
                                          {{ charge.errand_price_per_km.toFixed(2) }}
                                          </b-td>
                                      </b-tr>
                                    </b-tbody>
                                </b-table-simple>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>
<script>
import {is401, is403, is422} from '../../config/response'
import validationErrors from '../../mixins/validationErrors'
export default {
  mixins: [validationErrors],
  created() {
    this.getCharges()
  },
  async mounted() {
    await this.$broadcast()
  },
  data() {
    return {
      charge: {},
      error: null,
      status: null,
      loading: false,
      validating: false
    }
  },
  computed: {
    buttonText() {
      return this.validating === true ? 'Updating...' : 'Update'
    },
    hasErrors() {
      return 422 === this.status && this.errors !== null
    }
  },
  methods: {
    async getCharges() {
      this.loading = true

      try {
        const response = await axios.get('/api/app-charges', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('sserpxe_cigam')}` }
        })
        this.charge = response.data
      } catch (error) {
        console.log(error)
        if(is401(error)) {
          this.$logOut()
        }
        if(is403(error)) {
          this.$toasted.error("Kindly verify your account before performing any actions!")
        }
      }

      this.loading = false
    },
      async updateCharges() {
      this.errors = null
      this.status = null
      this.validating = true

      try {
        const response = await axios.put('/api/admin/app-charges', this.charge, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('sserpxe_cigam')}` }
        })

        this.charge = response.data
        $('#updateChargesModal').modal('hide')
        this.$toasted.success('App Charges has been updated')
      } catch (error) {
        console.log(error)

        if(is422(error)) {
          this.errors = error.response.data.errors
        }

        if(is401(error)) {
          $('#updateChargesModal').modal('hide')
          this.$logOut()
        }

        this.status = error.response.status
      }

      this.validating = false
    },
    showModal() {
      $('#updateChargesModal').modal('show')
    }
  },
}
</script>
