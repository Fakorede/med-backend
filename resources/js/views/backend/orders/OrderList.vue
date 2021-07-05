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
                                 <label>Date:</label><label class="clear-filters" @click="clearFilters">clear filters</label>
                                 <b-datepicker size="sm" :hide-header="true" v-model="params.date" id="datepicker-buttons" placeholder="Filter by date" today-button reset-button close-button></b-datepicker>
                             </div>
                             <div class="form-group">
                                 <label>Gender:</label>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="male" name="gender" class="custom-control-input" value="male" v-model="params.gender">
                                     <label class="custom-control-label" for="male"> Male </label>
                                 </div>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="female" name="gender" class="custom-control-input" v-model="params.gender" value="female">
                                     <label class="custom-control-label" for="female"> female </label>
                                 </div>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="all" name="gender" class="custom-control-input" checked="checked" v-model="params.gender" value="all">
                                     <label class="custom-control-label" for="all"> All </label>
                                 </div>
                             </div>
                             <div class="form-group">
                                 <label>Covid Exposure Risk:</label>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="low1" name="risk_group" class="custom-control-input" value="low" v-model="params.covidRisk">
                                     <label class="custom-control-label" for="low1"> Low </label>
                                 </div>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="medium1" name="risk_group" class="custom-control-input" v-model="params.covidRisk" value="medium">
                                     <label class="custom-control-label" for="medium1"> Medium </label>
                                 </div>
                                 <div class="custom-control custom-radio">
                                     <input type="radio" id="high1" name="risk_group" class="custom-control-input" v-model="params.covidRisk" value="high">
                                     <label class="custom-control-label" for="high1"> High </label>
                                 </div>
                             </div>
                             <div class="form-group">
                                 <label> VACCINATED ? </label>
                                 <div class="custom-control custom-checkbox custom-checkbox-color-check">
                                     <input v-model="params.vaccinated" name="vaccinated" id="vaccinated" type="checkbox" class="custom-control-input bg-primary" value="yes">
                                     <label class="custom-control-label" for="vaccinated"> YES </label>
                                 </div>
                             </div>
                             <div class="form-group">
                                 <label>Severity of Illness:</label>
                                 <div v-for="(val, key) in severitySymptoms" class="custom-control custom-checkbox custom-checkbox-color-check" :key="key">
                                     <input v-model="params.selectedIllness" type="checkbox" :id="key" class="custom-control-input bg-primary" :value="val">
                                     <label class="custom-control-label" :for="key"> {{ val }}</label>
                                 </div>
                             </div>
                             <div class="form-group">
                                 <label>Attendant Symptoms:</label>
                                 <div v-for="(l, i) in otherSymptoms" class="custom-control custom-checkbox custom-checkbox-color-check" :key="i+'_other'">
                                     <input v-model="params.selectedOtherSymptoms" type="checkbox" :id="i+'_other'" class="custom-control-input bg-primary" :value="l">
                                     <label class="custom-control-label" :for="i+'_other'"> {{ l }}</label>
                                 </div>
                                 <div v-for="(v, k) in coughSymptoms" class="custom-control custom-checkbox custom-checkbox-color-check" :key="k+'_cough'">
                                     <input v-model="params.selectedCoughSymptoms" type="checkbox" :id="k+'_cough'" class="custom-control-input bg-primary" :value="v">
                                     <label class="custom-control-label" :for="k+'_cough'"> {{ v }}</label>
                                 </div>
                                 <div v-for="(list, index) in breathingSymptoms" class="custom-control custom-checkbox custom-checkbox-color-check" :key="index+'_breathing'">
                                     <input v-model="params.selectedBreathingSymptoms" type="checkbox" :id="index+'_breathing'" class="custom-control-input bg-primary" :value="list">
                                     <label class="custom-control-label" :for="index+'_breathing'"> {{ list }}</label>
                                 </div>
                             </div>
                             <div class="form-group">
                                 <label> States: </label>
                                 <select class="form-control" id="states" name="states" @change="countyInState($event.target.value)" v-model="params.selectedState">
                                     <option value="" selected="selected"> select a state </option>
                                     <option v-for="l in locations" :value="l.name">{{ l.name }}</option>
                                 </select>
                             </div>
                             <div class="form-group" v-if="counties">
                                 <label> Select County : </label>
                                 <select class="form-control" id="county" name="county" v-model="params.selectedCounty">
                                     <option v-for="c in counties" :value="c.name">{{ c.name }}</option>
                                 </select>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
            <div class="col-xl-9 col-lg-8">
               <div class="card card-block card-stretch card-height">
                  <div class="card-header d-flex justify-content-between">
                      <div class="header-title">
                          <h4 class="card-title mb-0">All Responses<small> ( {{ responses.total }} total responses)</small></h4>
                      </div>
                      <a href="#" @click="downloadData" data-toggle="modal" class="btn btn-primary">
                          Download filtered response
                          &nbsp; <b-spinner small variant="default" class="float-right" v-if="downloading"></b-spinner>
                      </a>
                  </div>
                  <div class="card-body">
                     <b-table-simple responsive hover>
                        <b-thead>
                            <b-th>Gender</b-th>
                            <b-th>
                                <a href="#" @click.prevent="changeSort('age')">Age</a>
                                <span v-if="params.sort_field == 'age' && params.sort_direction == 'asc'">&uarr;</span>
                                <span v-if="params.sort_field == 'age' && params.sort_direction == 'desc'">&darr;</span>
                            </b-th>
                            <b-th>Exposure Risk</b-th>
                            <b-th>
                                <a href="#" @click.prevent="changeSort('high_risk_group')">High Risk Group</a>
                                <span v-if="params.sort_field == 'high_risk_group' && params.sort_direction == 'asc'">&uarr;</span>
                                <span v-if="params.sort_field == 'high_risk_group' && params.sort_direction == 'desc'">&darr;</span>
                            </b-th>
                            <b-th>
                              <a href="#" @click.prevent="changeSort('date')">Date Submitted</a>
                              <span v-if="params.sort_field == 'date' && params.sort_direction == 'asc'">&uarr;</span>
                              <span v-if="params.sort_field == 'date' && params.sort_direction == 'desc'">&darr;</span>
                            </b-th>
                            <b-th> County </b-th>
                            <b-th> State </b-th>
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
                        <b-tbody v-else-if="responses.data.length > 0">
                           <b-tr v-for="(response, index) in responses.data" :key="'response' + index">
                              <b-td>{{response.gender}}</b-td>
                              <b-td>{{response.age}}</b-td>
                              <b-td>
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
                              <b-td>{{response.state ? response.state : '-'}}</b-td>
                              <b-td>
                                <!-- Button to trigger modal -->
                                <button type="button" class="btn btn-primary btn-sm" data-id="response.id" @click="showModal(response)">
                                    <small>view response</small>
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
                                        <response-body :response="singleOrder"></response-body>
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
                              <pagination :data="responses" :limit="1" @pagination-change-page="getResponses"></pagination>
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
// import { OTHER_SYMPTOMS_LIST, BREATHING_SYMPTOMS_LIST, COUGH_SYMPTOMS_LIST, SEVERITY_OF_ILLNESS, LOCATIONS } from "../../../config/symptoms";

export default {
  name:'OrderList',
  components: {OrderBody},
  created() {
    this.getOrders()
  },
  data() {
    return {
      loading: false,
      downloading: false,
      orders: {},
      params: {
        sort_field: 'date',
        sort_direction: 'desc',
        high_risk_group: '',
        date: '',
        gender: '',
        covidRisk: '',
        selectedIllness: [],
        selectedCoughSymptoms: [],
        selectedBreathingSymptoms: [],
        selectedOtherSymptoms: [],
        perPage: 10,
        selectedState: '',
        selectedCounty: '',
        vaccinated: ''
      },
      singleOrder: {},
      otherSymptoms: OTHER_SYMPTOMS_LIST,
      coughSymptoms: COUGH_SYMPTOMS_LIST,
      breathingSymptoms: BREATHING_SYMPTOMS_LIST,
      severitySymptoms: SEVERITY_OF_ILLNESS,
      locations: LOCATIONS,
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
        const response = await axios.get('/backend/dashboard/responses/'+this.params.perPage, {
          params: {
            page,
            ...this.params
          }
        })
        this.loading = false
        this.responses = response.data
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

      this.getResponses()
    },
    showModal(response) {
      this.singleOrder = {}
      $('#orderModal').modal('show')
      this.singleOrder = response
    },
    changePageParam (val) {
        this.params.perPage = parseInt(val)
    },
    countyInState (val) {
        const list = this.locations.filter((state) => state.name === val)

        if (list.length > 0) {
            this.counties = list[0].counties
        }else {
            this.counties = null
        }
    },
    clearFilters () {
        this.params.sort_field = 'date'
        this.params.sort_direction = 'desc'
        this.params.high_risk_group = ''
        this.params.date = ''
        this.params.gender = ''
        this.params.covidRisk = ''
        this.params.selectedIllness = []
        this.params.selectedCoughSymptoms = []
        this.params.selectedBreathingSymptoms = []
        this.params.selectedOtherSymptoms = []
        this.params.perPage = 10
        this.params.selectedCounty = null
        this.params.selectedState = ''
        this.counties = null

        this.getResponses()
    },
    async downloadData () {
        this.downloading = true
        try {
            const response = await axios.get('/backend/response/download', {
                params: {
                    ...this.params
                }
            })
            this.downloading = false
            this.forceDownload(response.data)
        } catch (error) {
            console.log(error)
            this.downloading = false
            if(is401(error)){
                this.$logOut()
            }
            this.$toasted.error('Error: unable to download responses')
        }
    },
    forceDownload (response) {
          const blob = new Blob([response], { type: 'data:application/octet-stream' })
          const blobURL = window.URL.createObjectURL(blob)
          const tempLink = document.createElement('a')
          tempLink.style.display = 'none'
          tempLink.href = blobURL
          tempLink.setAttribute('download', 'RESPONSES.csv')
          if (typeof tempLink.download === 'undefined') {
              tempLink.setAttribute('target', '_blank')
          }
          document.body.appendChild(tempLink)
          tempLink.click()
          document.body.removeChild(tempLink)
          setTimeout(() => {
              window.URL.revokeObjectURL(blobURL)
          }, 100)
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
