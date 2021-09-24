<template>
    <div class="container-fluid">
         <div class="row">
             <div class="col-xl-3 col-lg-4">
                 <div class="card">
                     <div class="card-header d-flex justify-content-between">
                         <div class="header-title">
                             <h4 class="card-title">
                                 <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-filter"></i> </a> FILTER
                             </h4>
                         </div>
                     </div>
                     <div class="card-body">
                         <form>
                             <div class="form-group">
                                 <label><strong>Date:</strong></label><label class="clear-filters" @click="clearFilters">clear filters</label>
                                 <b-datepicker size="sm" :hide-header="true" v-model="params.date" id="datepicker-buttons" placeholder="Filter by date" today-button reset-button close-button></b-datepicker>
                             </div>
                             <div class="form-group">
                                 <label><strong>Order Type:</strong></label>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="Dispatch" name="order_type" class="custom-control-input" value="Dispatch" v-model="params.order_type">
                                     <label class="custom-control-label" for="Dispatch">Dispatch</label>
                                 </div>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="Errand" name="order_type" class="custom-control-input" v-model="params.order_type" value="Errand">
                                     <label class="custom-control-label" for="Errand"> Errand </label>
                                 </div>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="all" name="order_type" class="custom-control-input" checked="checked" v-model="params.order_type" value="all">
                                     <label class="custom-control-label" for="all"> All </label>
                                 </div>
                             </div>
                             <div class="form-group">
                                 <label><strong>Order Status:</strong></label>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="Created" name="order_status" class="custom-control-input" value="Created" v-model="params.order_status">
                                     <label class="custom-control-label" for="Created">Created</label>
                                 </div>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="Processed" name="order_status" class="custom-control-input" v-model="params.order_status" value="Processed">
                                     <label class="custom-control-label" for="Processed">Processed</label>
                                 </div>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="Assigned" name="order_status" class="custom-control-input" v-model="params.order_status" value="Assigned">
                                     <label class="custom-control-label" for="Assigned">Assigned</label>
                                 </div>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="In-Transit" name="order_status" class="custom-control-input" v-model="params.order_status" value="In-Transit">
                                     <label class="custom-control-label" for="In-Transit">In Transit</label>
                                 </div>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="Delivered" name="order_status" class="custom-control-input" v-model="params.order_status" value="Delivered">
                                     <label class="custom-control-label" for="Delivered">Delivered</label>
                                 </div>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="all" name="order_status" class="custom-control-input" checked="checked" v-model="params.order_status" value="all">
                                     <label class="custom-control-label" for="all"> All </label>
                                 </div>
                             </div>
                            <div class="form-group">
                                 <label><strong>Personnel Option:</strong></label>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="Sender" name="personnel_option" class="custom-control-input" value="Sender" v-model="params.personnel_option">
                                     <label class="custom-control-label" for="Sender">Sender</label>
                                 </div>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="Receiver" name="personnel_option" class="custom-control-input" v-model="params.personnel_option" value="Receiver">
                                     <label class="custom-control-label" for="Receiver"> Receiver </label>
                                 </div>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="Third-party" name="personnel_option" class="custom-control-input" v-model="params.personnel_option" value="Third-party">
                                     <label class="custom-control-label" for="Third-party"> Third-party </label>
                                 </div>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="all" name="personnel_option" class="custom-control-input" checked="checked" v-model="params.personnel_option" value="all">
                                     <label class="custom-control-label" for="all"> All </label>
                                 </div>
                             </div>
                             <div class="form-group">
                                 <label><strong>PAID ?</strong></label>
                                 <div class="custom-control custom-checkbox custom-checkbox-color-check">
                                     <input v-model="params.payment_status" name="payment_status" id="payment_status" type="checkbox" class="custom-control-input bg-primary" value="Paid">
                                     <label class="custom-control-label" for="payment_status"> YES </label>
                                 </div>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
            <div class="col-xl-9 col-lg-8">
               <div class="card card-block card-stretch card-height">
                  <div class="card-header d-flex justify-content-between">
                      <div class="header-title">
                          <h4 class="card-title mb-0">All Orders<small> ( {{ orders.total }} total orders)</small></h4>
                      </div>
                      <!-- <a href="#" @click="downloadData" data-toggle="modal" class="btn btn-primary">
                          Download filtered response
                          &nbsp; <b-spinner small variant="default" class="float-right" v-if="downloading"></b-spinner>
                      </a> -->
                  </div>
                  <div class="card-body">
                     <b-table-simple responsive hover>
                        <b-thead>
                            <b-th>Amount(&#8358;)</b-th>
                            <b-th>Pickup Address</b-th>
                            <b-th>Dropoff Address</b-th>
                            <b-th>
                                <a href="#" @click.prevent="changeSort('order_type')">Order Type</a>
                                <span v-if="params.sort_field == 'order_type' && params.sort_direction == 'asc'">&uarr;</span>
                                <span v-if="params.sort_field == 'order_type' && params.sort_direction == 'desc'">&darr;</span>
                            </b-th>
                            <b-th>
                              <a href="#" @click.prevent="changeSort('order_status')">Order Status</a>
                              <span v-if="params.sort_field == 'order_status' && params.sort_direction == 'asc'">&uarr;</span>
                              <span v-if="params.sort_field == 'order_status' && params.sort_direction == 'desc'">&darr;</span>
                            </b-th>
                            <b-th>
                              <a href="#" @click.prevent="changeSort('created_at')">Order Date</a>
                              <span v-if="params.sort_field == 'created_at' && params.sort_direction == 'asc'">&uarr;</span>
                              <span v-if="params.sort_field == 'created_at' && params.sort_direction == 'desc'">&darr;</span>
                            </b-th>
                            <b-th>View Details</b-th>
                        </b-thead>
                         <b-tr class="text-center" v-if="loading">
                             <b-td></b-td>
                             <b-td></b-td>
                             <b-td></b-td>
                             <b-td><b-spinner variant="primary" type="grow" label="Spinning"></b-spinner></b-td>
                             <b-td></b-td>
                             <b-td></b-td>
                         </b-tr>
                        <b-tbody v-else-if="orders.data.length > 0">
                           <b-tr v-for="(order, index) in orders.data" :key="'order' + index">
                              <b-td>&#8358;{{new Intl.NumberFormat().format(order.total_price)}}</b-td>
                              <b-td>{{order.pickup_address}}</b-td>
                              <b-td>{{order.dropoff_address}}</b-td>
                              <b-td>
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
                              </b-td>
                              <b-td>{{order.order_status}}</b-td>
                              <b-td>{{order.created_at | dateFilter}}</b-td>
                              <!-- <b-td>
                                <template v-if="response.exposure_risk == 'high'">
                                  <span class="badge badge-danger">High</span>
                                </template>
                                <template v-else-if="response.exposure_risk == 'medium'">
                                  <span class="badge badge-warning">Medium</span>
                                </template>
                                <template v-else>
                                  <span class="badge badge-success">Low</span>
                                </template>
                              </b-td>
                              <b-td>
                                <template v-if="response.high_risk_group">
                                  <span class="badge badge-danger">High Risk</span>
                                </template>
                                <template v-else>
                                  <span class="badge badge-success">Not High Risk</span>
                                </template>
                              </b-td>
                              <b-td>{{response.date_difference}}</b-td>
                              <b-td>{{response.county ? response.county : '-'}}</b-td>
                              <b-td>{{response.state ? response.state : '-'}}</b-td> -->
                              <b-td>
                                <!-- Button to trigger modal -->
                                <button type="button" class="btn btn-primary btn-sm" data-id="order.id" @click="showModal(order)">
                                    <small>view order</small>
                                </button>
                                <!-- Modal -->
                                <div class="modal fade" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="orderModal" aria-hidden="true">
                                  <div class="modal-dialog modal-xl" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title"><strong>DETAILED RESPONSE FOR: #{{singleOrder.id}}</strong></h5>
                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                        <order-body :order="singleOrder"></order-body>
                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <!-- ./ Modal -->
                              </b-td>
                           </b-tr>
                        </b-tbody>
                         <b-tbody v-else>
                             <b-tr class="text-center">
                                 <b-td colspan="6"> No result match your search.</b-td>
                             </b-tr>
                         </b-tbody>
                     </b-table-simple>
                      <!-- paginate -->
                      <div class="row mt-5">
                          <div class="col-xl-4 col-lg-5">
                              <div class="card-header-toolbar d-flex">
                                  Per page: &nbsp;&nbsp;<b-dropdown  id="dropdownMenuButton1" right variant="none p-0" data-toggle="dropdown" class="dropdown shadow-none">
                                      <template v-slot:button-content>
                                        <span class="dropdown-toggle dropdown-bg btn btn-outline-primary btn-sm" id="dropdownMenuButton4"
                                              data-toggle="dropdown" aria-expanded="false">
                                            {{params.perPage}} <i class="ri-arrow-down-s-line ml-1"></i>
                                        </span>
                                      </template>
                                      <b-dropdown-item @click="changePageParam(10)">{{ ('10') }}</b-dropdown-item>
                                      <b-dropdown-item @click="changePageParam(20)">{{ ('20') }}</b-dropdown-item>
                                      <b-dropdown-item @click="changePageParam(50)">{{ ('50') }}</b-dropdown-item>
                                      <b-dropdown-item @click="changePageParam(100)">{{ ('100') }}</b-dropdown-item>
                                  </b-dropdown>
                              </div>
                          </div>
                          <div class="col-xl-8 col-lg-7">
                              <pagination :data="orders" :limit="1" @pagination-change-page="getOrders"></pagination>
                          </div>
                      </div>
                  </div>
               </div>
            </div>
         </div>
    </div>
</template>
<script>
import OrderBody from './OrderModal'
import { is401 } from '../../../config/response'

export default {
  name:'OrderList',
  components: {OrderBody},
  async mounted() {
    await this.getOrders()
    await this.$broadcast()
  },
  data() {
    return {
      loading: false,
      downloading: false,
      orders: {},
      singleOrder: {},
      params: {
        perPage: 10,
        sort_field: 'created_at',
        sort_direction: 'desc',
        order_type: '',
        order_status: '',
        payment_status: '',
        personnel_option: '',
        // high_risk_group: '',
        // date: '',
        // gender: '',
        // covidRisk: '',
        // selectedIllness: [],
        // selectedCoughSymptoms: [],
        // selectedBreathingSymptoms: [],
        // selectedOtherSymptoms: [],
      },
      otherSymptoms: [],
      coughSymptoms: [],
      breathingSymptoms: [],
      severitySymptoms: [],
      locations: [],
      counties: null
    }
  },
  watch: {
    params: {
      handler() {
        if(this.params.gender === 'all') {
          this.params.gender = ''
        }
        this.getOrders()
      },
      deep: true
    }
  },
  methods: {
    async getOrders(page=1) {
      this.loading = true
      try {
        const response = await axios.get('/api/admin/orders/'+this.params.perPage, {
          params: {
            page,
            ...this.params
          },
          headers: { 'Authorization': `Bearer ${localStorage.getItem('sserpxe_cigam')}` }
        })
        this.loading = false
        this.orders = response.data
      } catch (error) {
        console.log(error)
        this.loading = false
        if(is401(error)){
          this.$logOut()
        }
      }
    },
    async changeSort(field) {
      if(this.params.sort_field === field) {
        this.params.sort_direction = this.params.sort_direction === 'asc' ? 'desc': 'asc'
      } else {
        this.params.sort_field = field
        this.params.sort_direction = 'asc'
      }

      this.getOrders()
    },
    showModal(order) {
      this.singleOrder = {}
      $('#orderModal').modal('show')
      this.singleOrder = order
    },
    changePageParam (val) {
      this.params.perPage = parseInt(val)
    },
    countyInState (val) {
    //     const list = this.locations.filter((state) => state.name === val)

    //     if (list.length > 0) {
    //         this.counties = list[0].counties
    //     }else {
    //         this.counties = null
    //     }
    },
    clearFilters () {
    //     this.params.sort_field = 'date'
    //     this.params.sort_direction = 'desc'
    //     this.params.high_risk_group = ''
    //     this.params.date = ''
    //     this.params.gender = ''
    //     this.params.covidRisk = ''
    //     this.params.selectedIllness = []
    //     this.params.selectedCoughSymptoms = []
    //     this.params.selectedBreathingSymptoms = []
    //     this.params.selectedOtherSymptoms = []
    //     this.params.perPage = 10
    //     this.params.selectedCounty = null
    //     this.params.selectedState = ''
    //     this.counties = null

    //     this.getOrders()
    },
    async downloadData () {
    //     this.downloading = true
    //     try {
    //         const response = await axios.get('/backend/response/download', {
    //             params: {
    //                 ...this.params
    //             }
    //         })
    //         this.downloading = false
    //         this.forceDownload(response.data)
    //     } catch (error) {
    //         console.log(error)
    //         this.downloading = false
    //         if(is401(error)){
    //             this.$logOut()
    //         }
    //         this.$toasted.error('Error: unable to download orders')
    //     }
    },
    forceDownload (response) {
    //       const blob = new Blob([response], { type: 'data:application/octet-stream' })
    //       const blobURL = window.URL.createObjectURL(blob)
    //       const tempLink = document.createElement('a')
    //       tempLink.style.display = 'none'
    //       tempLink.href = blobURL
    //       tempLink.setAttribute('download', 'ORDERS.csv')
    //       if (typeof tempLink.download === 'undefined') {
    //           tempLink.setAttribute('target', '_blank')
    //       }
    //       document.body.appendChild(tempLink)
    //       tempLink.click()
    //       document.body.removeChild(tempLink)
    //       setTimeout(() => {
    //           window.URL.revokeObjectURL(blobURL)
    //       }, 100)
    },
  },
}
</script>

<style scoped>
  .clear-filters {
    float: right;
    text-decoration: underline;
    font-style: italic;
    color: darkred;
    cursor: pointer;
  }
</style>
