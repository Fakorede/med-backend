<template>
  <div>
    <template v-if="loading">Loading...</template>
    <template v-else>
      <div class="ml-4 mb-4">
        <router-link :to="{name: 'app.order-list'}">
          <span class="text-primary">&larr; Go back</span>
        </router-link>
      </div>
      <div class="row mb-4 ml-2 mt-2">
        <div class="col-md-6"><strong>ORDER DATE:</strong> {{order.date | dateFilter}}</div>
        <div class="col-md-3">
          <strong>ORDER TYPE:</strong>
          <template v-if="order.order_type === 'Dispatch'">
            <span class="badge badge-primary">
              {{ order.order_type }}
            </span>
          </template>
          <template v-if="order.order_type === 'Errand'">
            <span class="badge badge-info">
              {{ order.order_type }}
            </span>
          </template>
        </div>
        <div class="col-md-3">
          <strong>ORDER STATUS:</strong>
           <template v-if="order.order_status === 'Created'">
              <span class="badge badge-1">{{ order.order_status }}</span>
            </template>
            <template v-if="order.order_status === 'Processed'">
              <span class="badge badge-2">{{ order.order_status }}</span>
            </template>
            <template v-if="order.order_status === 'Assigned'">
              <span class="badge badge-3">{{ order.order_status }}</span>
            </template>
            <template v-if="order.order_status === 'In-Transit'">
              <span class="badge badge-4">{{ order.order_status }}</span>
            </template>
            <template v-if="order.order_status === 'Delivered'">
              <span class="badge badge-5">{{ order.order_status }}</span>
            </template>
        </div>
      </div>
      <div class="row mb-4 ml-2">
        <div class="col-md-4">
          <strong>TOTAL AMOUNT: </strong>&#8358;{{new Intl.NumberFormat().format(order.total_amount)}}
        </div>
        <div class="col-md-4">
          <strong>PAYMENT STATUS:</strong>
          <template v-if="order.payment_status === 'Paid'">
            <span class="badge badge-success">
              {{ order.payment_status }}
            </span>
          </template>
          <template v-else-if="order.payment_status === 'Not Paid'">
            <span class="badge badge-danger">
              {{ order.payment_status }}
            </span>
          </template>
          <template v-else>
            <span class="badge badge-warning">
              {{ order.payment_status }}
            </span>
          </template>
        </div>
        <div class="col-md-4">
          <strong>TRACKING NUMBER:</strong> {{order.tracking_number}}
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <div><strong>Order Items</strong></div>
              </div>
              <div class="card-body">
                <div class="table-responsive pricing pt-2">
                    <b-table-simple foot-clone responsive outlined striped hover>
                        <b-thead>
                            <b-th>#</b-th>
                            <b-th>Item</b-th>
                            <b-th>Quantity</b-th>
                            <b-th>Amount(&#8358;)</b-th>
                            <b-th>Description</b-th>
                        </b-thead>
                        <b-tbody>
                            <b-tr v-for="(orderItem, index) in order.order_items" :key="'order-item' + index">
                                <b-th>{{index+1}}</b-th>
                                <b-th>{{orderItem.item}}</b-th>
                                <b-th>{{orderItem.quantity}}</b-th>
                                <b-td>&#8358;{{new Intl.NumberFormat().format(orderItem.price)}}</b-td>
                                <b-td>{{orderItem.description}}</b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
         <div class="row">
            <div class="col-lg-12">
               <div class="card card-block card-stretch card-height">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <div><strong>User Information</strong></div>
                     </div>
                  </div>
                  <div class="card-body">
                     <b-table-simple responsive>
                        <b-tbody>
                          <b-tr>
                            <b-td>
                              <strong>User Details</strong>
                            </b-td>
                            <b-td>
                              <span v-if="order.user">{{ order.user.first_name }}</span> <span v-if="order.user">{{ order.user.last_name }}</span> - <span v-if="order.user">{{ order.user.email }}</span>
                            </b-td>
                          </b-tr>
                          <b-tr>
                            <b-td>
                              <strong>Personnel Option</strong>
                            </b-td>
                            <b-td>
                              {{ order.personnel_option }}
                            </b-td>
                          </b-tr>
                           <b-tr>
                              <b-td>
                                <strong>Sender Name</strong>
                              </b-td>
                              <b-td>
                               {{ order.sender_name}}
                              </b-td>
                           </b-tr>
                           <b-tr>
                              <b-td>
                                <strong>Sender Mobile</strong>
                              </b-td>
                              <b-td>
                                {{ order.sender_mobile}}
                              </b-td>
                           </b-tr>
                           <b-tr>
                              <b-td>
                                <strong>Receiver Name</strong>
                              </b-td>
                              <b-td>
                               {{ order.receiver_name}}
                              </b-td>
                           </b-tr>
                           <b-tr>
                              <b-td>
                                <strong>Receiver Mobile</strong>
                              </b-td>
                              <b-td>
                                {{ order.receiver_mobile}}
                              </b-td>
                           </b-tr>
                           <b-tr>
                              <b-td>
                                <strong>Pickup Address</strong>
                              </b-td>
                              <b-td>
                               {{ order.pickup_address}}
                              </b-td>
                           </b-tr>
                           <b-tr>
                              <b-td>
                                <strong>Dropoff Address</strong>
                              </b-td>
                              <b-td>
                                {{ order.dropoff_address}}
                              </b-td>
                           </b-tr>
                        </b-tbody>
                     </b-table-simple>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="container-fluid">
         <div class="row">
            <div class="col-lg-12">
               <div class="card card-block card-stretch card-height">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <div>
                          <strong>Rider Information</strong>
                          <!-- <a 
                            v-if="successMsg==''" 
                            class="font-italic text-danger cursor-pointer"
                            @click="reload"
                          ><u>refresh</u></a> -->
                        </div>
                     </div>
                  </div>
                  <div class="card-body">
                    <div v-if="order.rider">
                      <b-table-simple responsive>
                          <b-tbody>
                            <b-tr>
                                <b-td>
                                  <strong>Rider Name</strong>
                                </b-td>
                                <b-td>
                                <span v-if="order.rider">{{ order.rider.first_name }}</span> 
                                <span v-if="order.rider">{{ order.rider.last_name }}</span> 
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>
                                  <strong>Rider Email</strong>
                                </b-td>
                                <b-td>
                                  <span v-if="order.rider.email">{{ order.rider.email }}</span>
                                </b-td>
                            </b-tr>
                            <!-- <b-tr>
                                <b-td>
                                  <strong>Current Location</strong>
                                </b-td>
                                <b-td>
                                {{ order.rider.address}}
                                </b-td>
                            </b-tr> -->
                        
                          </b-tbody>
                      </b-table-simple>
                    </div>
                    <div v-else>
                      <div class="row">
                        <label class="ml-3">Assign a Rider to this Order</label>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <select 
                            class="form-control" name="rider-select" id="rider-select" 
                            v-model="selectedRider"
                          >
                            <option value="">
                              --------------------Select Rider--------------------
                            </option>
                            <option 
                              v-for="rider in availableRiders" 
                              :key="rider.id"  
                              :value="rider.id"
                            >
                              {{ rider.first_name }} {{ rider.last_name }} @ a distance of {{ rider.distance }} to the User.
                            </option>
                          </select>
                        </div>
                        <div class="col-md-6">
                          <button 
                            @click.prevent="assignRider" 
                            class="btn btn-primary"
                            :disabled="assigning || this.selectedRider === ''"
                          >{{ buttonText }}</button>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="container-fluid">
         <div class="row">
            <div class="col-lg-12">
               <div class="card card-block card-stretch card-height">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <div><strong>Other Information</strong></div>
                     </div>
                  </div>
                  <div class="card-body">
                    <b-table-simple responsive>
                        <b-tbody>
                          <b-tr v-if="order.order_type=='Errand'">
                            <b-td>
                              <strong>Order Type</strong>
                            </b-td>
                            <b-td>
                              {{ order.order_type }}
                            </b-td>
                          </b-tr>
                          <b-tr v-if="order.order_type=='Errand'">
                            <b-td>
                              <strong>Store Name</strong>
                            </b-td>
                            <b-td>
                              {{ order.store_name }}
                            </b-td>
                          </b-tr>
                          <b-tr>
                              <b-td>
                                <strong>Payment Method</strong>
                              </b-td>
                              <b-td>
                              {{ order.payment_method }}
                              </b-td>
                          </b-tr>
                          <b-tr>
                              <b-td>
                                <strong>Delivery Note</strong>
                              </b-td>
                              <b-td>
                              {{ order.delivery_note ? order.delivery_note : '-' }}
                              </b-td>
                          </b-tr>
                          <b-tr v-if="order.payment_verified">
                              <b-td>
                                <strong>Payment Date</strong>
                              </b-td>
                              <b-td>
                                {{ order.paid_at || dateFilter }}
                              </b-td>
                          </b-tr>
                          <b-tr v-if="order.delivered_at">
                              <b-td>
                                <strong>Delivery Date</strong>
                              </b-td>
                              <b-td>
                                {{ order.delivered_at || dateFilter }}
                              </b-td>
                          </b-tr>
                        </b-tbody>
                    </b-table-simple>
                  </div>
               </div>
            </div>
         </div>
      </div>

        <!-- <div v-if="response.vaccination && response.vaccination.status === 'yes'" class="container-fluid timeline-page">
            <div class="row">
                <div class="col-lg-6">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title">
                                <h4 class="card-title">Brand: {{response.vaccination.brand}}</h4>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="mm-timeline0 m-0 d-flex align-items-center justify-content-between position-relative">
                                <ul class="list-inline p-0 m-0">
                                    <li>
                                        <div class="timeline-dots1 border-primary text-primary"><i class="ri-number-1"></i></div>
                                        <h6 class="float-left mb-1">Date of first dose</h6>
                                        <div class="d-inline-block w-100">
                                            <p>{{ response.vaccination.date_of_first_dose | dateFilter }}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="timeline-dots1 border-warning text-warning"><i class="ri-map-pin-fill"></i></div>
                                        <h6 class="float-left mb-1">Place of first dose</h6>
                                        <div class="d-inline-block w-100">
                                            <p>{{ response.vaccination.place_of_first_dose }}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="timeline-dots1 border-info text-info"><i class="ri-number-2"></i></div>
                                        <h6 class="float-left mb-1">Date of second dose</h6>
                                        <div class="d-inline-block w-100">
                                            <p v-if="response.vaccination.date_of_second_dose">{{ response.vaccination.date_of_second_dose | dateFilter }}</p>
                                            <p v-else> not yet taken </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="timeline-dots1 border-danger text-danger"><i class="ri-map-pin-fill"></i>
                                        </div>
                                        <h6 class="float-left mb-1">Place of second dose</h6>
                                        <div class="d-inline-block w-100">
                                            <p v-if="response.vaccination.place_of_second_dose">{{ response.vaccination.place_of_second_dose }}</p>
                                            <p v-else>not yet taken</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </template>
  </div>
</template>

<script>
  export default {
    name: 'OrderBody',
    props: ['order', 'loading'],
    data() {
      return {
        availableRiders: [],
        selectedRider: '',
        assigning: false,
        successMsg: '',
      }
    },
    mounted() {
      this.getAvailableRiders()
    },
    computed: {
      buttonText() {
        return this.assigning === true ? 'Assigning...' : 'Assign Rider'
      },
    },
    methods: {
      async getAvailableRiders() {
        const resp = await axios.get(`/api/admin/available/riders/${this.order.id}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('sserpxe_cigam')}` }
        })
        this.availableRiders = resp.data
      },
      async assignRider() {
        this.assigning = true

        try {
          const resp = await axios.post(`/api/admin/assign/rider`, {
            'order_id': this.order.id,
            'rider_id': this.selectedRider,
          }, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('sserpxe_cigam')}` }
          })

          await this.$toasted.success(resp.data.message)
          await this.reload()
        } catch (error) {
          if(is400(error)) {
            this.errors = error.response.data.error
            this.$toasted.error(error.response.data.error)
          }

          this.$toasted.error(error.response.data.error)
        }

        this.assigning = false
      },
      async reload() {
        const resp = await axios.get(`/api/admin/order/${this.order.id}`)
        this.order = resp.data.data
      }
    }
  }
</script>

<style scoped>
  .prc-box {
    padding: 5px
  }
  .cursor-pointer {
    cursor: pointer;
  }
</style>