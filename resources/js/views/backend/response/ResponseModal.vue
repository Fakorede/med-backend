<template>
  <div>
    <template v-if="loading">Loading...</template>
    <template v-else>
      <div class="row mb-3 ml-2">
        <div class="col-md-6"><strong>RESPONSE DATE:</strong> {{response.date | dateFilter}}</div>
        <div class="col-md-3"><strong>RESPONDENT AGE:</strong> {{response.age}}</div>
        <div class="col-md-3"><strong>RESPONDENT GENDER:</strong> {{response.gender}}</div>
      </div>
      <div class="row mb-3 ml-2">
        <div class="col-md-6"><strong>STATE:</strong> {{response.state}}</div>
        <div class="col-md-6"><strong>COUNTY:</strong> {{response.county}}</div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
                <div class="card-body">
                  <div class="table-responsive pricing pt-2">
                      <table id="my-table" class="table">
                        <thead>
                            <tr>
                              <th class="text-center prc-wrap"></th>
                              <th class="text-center prc-wrap">
                                  <a href="#" class="btn btn-outline-primary mt-3">Yes</a>
                              </th>
                              <th class="text-center prc-wrap">
                                  <a href="#" class="btn btn-primary mt-3">No</a>
                              </th>
                              <th class="text-center">
                                  <a href="#" class="btn btn-primary-dark mt-3">Dont&nbsp;know</a>
                              </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <th class="text-center" scope="row">
                                Did you or anyone in your family become exposed to someone with a fever or a cough in the past 2 weeks?
                              </th>
                              <td class="text-center child-cell">
                                <i v-if="response.exposed == 'yes'" class="ri-check-line ri-2x active"></i>
                                <i v-else class="ri-close-line i_close"></i>
                              </td>
                              <td class="text-center child-cell">
                                <i v-if="response.exposed == 'no'" class="ri-check-line ri-2x active"></i>
                                <i v-else class="ri-close-line i_close"></i>
                              </td>
                              <td class="text-center child-cell">
                                <i v-if="response.exposed == 'dont_know'" class="ri-check-line ri-2x active"></i>
                                <i v-else class="ri-close-line i_close"></i>
                              </td>
                            </tr>
                            <tr>
                              <th class="text-center" scope="row">Do you feel week or fatigued?</th>
                              <td class="text-center child-cell">
                                <i v-if="response.fatigued == 'yes'" class="ri-check-line ri-2x active"></i>
                                <i v-else class="ri-close-line i_close"></i>
                              </td>
                              <td class="text-center child-cell">
                                <i v-if="response.fatigued == 'no'" class="ri-check-line ri-2x active"></i>
                                <i v-else class="ri-close-line i_close"></i>
                              </td>
                              <td class="text-center child-cell">
                                <i v-if="response.fatigued == 'dont_know'" class="ri-check-line ri-2x active"></i>
                                <i v-else class="ri-close-line i_close"></i>
                              </td>
                            </tr>
                            <tr>
                              <th class="text-center" scope="row">
                                Did you have a fever in the last 14 days?
                                </th>
                              <td class="text-center child-cell">
                                <i v-if="response.fever == 'yes'" class="ri-check-line ri-2x active"></i>
                                <i v-else class="ri-close-line i_close"></i>
                              </td>
                              <td class="text-center child-cell">
                                <i v-if="response.fever == 'no'" class="ri-check-line ri-2x active"></i>
                                <i v-else class="ri-close-line i_close"></i>
                              </td>
                              <td class="text-center child-cell">
                                <i v-if="response.fever == 'dont_know'" class="ri-check-line ri-2x active"></i>
                                <i v-else class="ri-close-line i_close"></i>
                              </td>
                            </tr>
                            <tr>
                              <th class="text-center" scope="row">Do you currently have a cough?</th>
                              <td class="text-center child-cell">
                                <i v-if="response.cough == 'yes'" class="ri-check-line ri-2x active"></i>
                                <i v-else class="ri-close-line i_close"></i>
                              </td>
                              <td class="text-center child-cell">
                                <i v-if="response.cough == 'no'" class="ri-check-line ri-2x active"></i>
                                <i v-else class="ri-close-line i_close"></i>
                              </td>
                              <td class="text-center child-cell">
                                <i v-if="response.cough == 'dont_know'" class="ri-check-line ri-2x active"></i>
                                <i v-else class="ri-close-line i_close"></i>
                              </td>
                            </tr>
                        </tbody>
                      </table>
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
                        <h4 class="card-title mb-0">Symptoms</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <b-table-simple responsive>
                        <b-tbody>
                           <b-tr>
                              <b-td>
                                Coughing Symptoms
                              </b-td>
                              <b-td>
                                <template v-if="response.attendant_symptoms">
                                  <template v-if="Array.isArray(response.attendant_symptoms.cough)">
                                    <span v-for="(c, i) in response.attendant_symptoms.cough" :key="i">
                                        {{c}} <span v-if="i !== response.attendant_symptoms.cough.length-1">, </span>
                                    </span>
                                  </template>
                                  <template v-else>None</template>
                                  <template v-else>{{response.attendant_symptoms.cough}}</template>
                                </template>
                              </b-td>
                           </b-tr>
                           <b-tr>
                              <b-td>
                                Other Symptoms
                              </b-td>
                              <b-td>
                                <template v-if="response.attendant_symptoms">
                                  <template v-if="Array.isArray(response.attendant_symptoms.others)">
                                    <span v-for="(o, i) in response.attendant_symptoms.others" :key="i">
                                      {{o}} <span v-if="i !== response.attendant_symptoms.others.length-1">, </span>
                                    </span>
                                  </template>
                                    <template v-else>None</template>
                                  <template v-else>{{response.attendant_symptoms.others}}</template>
                                </template>
                              </b-td>
                           </b-tr>
                           <b-tr>
                              <b-td>
                                Breathing Symptoms
                              </b-td>
                              <b-td>
                                <template v-if="response.attendant_symptoms">
                                  <template v-if="Array.isArray(response.attendant_symptoms.breathing)">
                                    <span v-for="(b, i) in response.attendant_symptoms.breathing" :key="i">
                                      {{b}} <span v-if="i !== response.attendant_symptoms.breathing.length-1">, </span>
                                    </span>
                                  </template>
                                    <template v-else>None</template>
                                  <template v-else>{{response.attendant_symptoms.breathing}}</template>
                                </template>
                              </b-td>
                           </b-tr>
                           <b-tr>
                              <b-td>
                                Underlying Conditions
                              </b-td>
                              <b-td>
                                <template v-if="response.underlying_condition">
                                  <template v-if="Array.isArray(response.underlying_condition.conditions)">
                                    <span v-for="(c, i) in response.underlying_condition.conditions" :key="i">
                                      {{c}} <span v-if="i !== response.underlying_condition.conditions.length-1">, </span>
                                    </span>
                                  </template>
                                </template>
                                <template v-else>None</template>
                                <template v-else>{{response.underlying_condition.conditions}}</template>
                              </b-td>
                           </b-tr>
                        </b-tbody>
                     </b-table-simple>
                  </div>
               </div>
            </div>
         </div>
      </div>
       <div class="row mb-2 ml-2">
        <div class="col-md-6"><strong>Cough Duration:</strong> {{response.cough_duration}} days</div>
        <div class="col-md-6"><strong>Breathing Rate:</strong> {{response.breathing_rate}}</div>
      </div>
      <div class="row mb-3 ml-2">
        <div class="col-md-6"><strong>Exposure Risk:</strong>
          <template v-if="response.exposure_risk == 'high'">
            <span class="badge badge-danger">High</span>
          </template>
          <template v-else-if="response.exposure_risk == 'medium'">
            <span class="badge badge-warning">Medium</span>
          </template>
          <template v-else>
            <span class="badge badge-success">Low</span>
          </template>
        </div>
        <div class="col-md-6"><strong>High Risk Group:</strong>
          <template v-if="response.high_risk_group">
            <span class="badge badge-danger">High Risk</span>
          </template>
          <template v-else>
            <span class="badge badge-success">Not High Risk</span>
          </template>
        </div>
      </div>
        <div class="row mb-3 ml-2">
            <div class="col-md-6">
                <strong>Vaccinated:</strong>
                <template v-if="response.vaccination && response.vaccination.status === 'yes'">
                    <span class="badge badge-success">YES</span>
                </template>
                <template v-else>
                    <span class="badge badge-danger">NO</span>
                </template>
            </div>
        </div>
        <div v-if="response.vaccination && response.vaccination.status === 'yes'" class="container-fluid timeline-page">
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
        </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ResponseBody',
  props: ['response', 'loading']
}
</script>
<style scoped>
.prc-box {
    padding: 5px
}
</style>
