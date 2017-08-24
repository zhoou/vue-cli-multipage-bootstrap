<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="demo highdemo" v-cloak>
        <div class="dsOperation">
          <button class="btn btn-info" @click='openDialog'>create</button>
        </div>
        <table class="table table-bordered">
          <thead>
          <tr>
            <th v-for="colname in gridColumns">{{ colname.name }}</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          <tr v-if="showNoData">
            <td :colspan="this.gridColumns.length" style="text-align:center;background-color:#eee">
              <small>No data</small>
            </td>
          </tr>
          <tr v-for="(item, index) in gridData">
            <td v-for="col in gridColumns">
              <span v-if="col.isKey">
                <a href="javascript:void(0)" @click="loadEntry(item[col.name])">{{ item[col.name] }}</a>
              </span>
              <span v-else>{{ item[col.name] }}</span>
            </td>
            <td>
              <button class="btn btn-danger" @click="deleteNotice(item)">delete</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
      <div class="col-xs-6">
        <div class="zero-clipboard"><span class="btn-clipboard">js</span></div>
        <div class="highlight">
          <pre>
            <code class="javascript">
              // 方式一
               var demo = new Vue({
                el: '#app',
                data () {
                  return {
                    gridColumns: [
                      {name: 'customerId', isKey: true},
                      {name: 'companyName'},
                      {name: 'contactName'},
                      {name: 'phone'}
                    ],
                    gridData: [],
                    apiUrl: 'http://211.149.193.19:8080/api/customers',
                    showNoData: false,
                    showDialog: false,
                    deleteDialog: false,
                    item: {}
                  }
                },
                components: {
                  vModal
                },
                mounted () {
                  this.$nextTick(function () { // 保证 this.$el 已经插入文档
                    this.getCustomers()
                  })
                },
                methods: {
                  loadEntry (name) {
                    var self = this
                    self.gridData.forEach(function (item) {
                      if (name === item.customerId) {
                        self.item = item
                        self.showDialog = true
                        return
                      }
                    })
                  },
                  openDialog () {
                    let self = this
                    self.item = {}
                    self.showDialog = true
                  },
                  deleteNotice (item) {
                    let self = this
                    self.item = item
                    self.deleteDialog = true
                  },
                  // get 方法获取数据
                  getCustomers () {
                    var self = this
                    self.$http.get(this.apiUrl).then((response) => {
                      let result = response.data
                      if (result && result.length > 0) {
                        // this.$set('gridData', result)
                        self.gridData = result
                      } else {
                        self.showNoData = true
                      }
                    }, (response) => {
                      // error back coding...
                    }).catch(function (response) {
                      console.log(response)
                    })
                  },
                  // post 方法提交数据
                  createCustomer () {
                    let self = this
                    console.log(self.item)
                    self.$http.post(self.apiUrl, self.item).then((response) => {
                      self.item = {}
                      self.getCustomers()
                    })
                  },
                  // put 方法更新数据
                  updateCustomer () {
                    let self = this
                    self.$http.put(this.apiUrl + '/' + self.item.customerId, self.item)
                      .then((response) => {
                        self.getCustomers()
                      })
                  },
                  // delete 方法删除数据
                  deleteEntry () {
                    let self = this
                    self.$http.delete(self.apiUrl + '/' + self.item.customerId)
                      .then((response) => {
                        self.getCustomers()
                      })
                  },
                  receiveChildState (state) {
                    let self = this
                    if (state != null) {
                      self.showDialog = state.show
                      self.deleteDialog = state.show
                      if (state.theResult) {
                        self.item.customerId ? (state.name === 'deleteDialog' ? self.deleteEntry() : self.updateCustomer()) : self.createCustomer()
                      }
                    }
                  }
                }
              })
            </code>
          </pre>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="zero-clipboard"><span class="btn-clipboard">js</span></div>
        <div class="highlight">
          <pre>
            <code class="javascript">
              // 方式二
               var demo = new Vue({
                el: '#app',
                data () {
                  return {
                    gridColumns: [
                      {name: 'customerId', isKey: true},
                      {name: 'companyName'},
                      {name: 'contactName'},
                      {name: 'phone'}
                    ],
                    gridData: [],
                    apiUrl: 'http://211.149.193.19:8080/api/customers',
                    showNoData: false,
                    showDialog: false,
                    deleteDialog: false,
                    item: {}
                  }
                },
                components: {
                  vModal
                },
                mounted () {
                  this.$nextTick(function () { // 保证 this.$el 已经插入文档
                    this.getCustomers()
                  })
                },
                methods: {
                  loadEntry (name) {
                    var self = this
                    self.gridData.forEach(function (item) {
                      if (name === item.customerId) {
                        self.item = item
                        self.showDialog = true
                        return
                      }
                    })
                  },
                  openDialog () {
                    let self = this
                    self.item = {}
                    self.showDialog = true
                  },
                  deleteNotice (item) {
                    let self = this
                    self.item = item
                    self.deleteDialog = true
                  },
                  // get 方法获取数据
                  getCustomers () {
                    let self = this
                    let resource = self.$resource(self.apiUrl)
                    resource.get().then((response) => {
                      let result = response.data
                      if (result && result.length > 0) {
                        // this.$set('gridData', result)
                        self.gridData = result
                      } else {
                        self.showNoData = true
                      }
                    }, (response) => {
                      // error back coding...
                    }).catch(function (response) {
                      console.log(response)
                    })
                  },
                  // save 方法提交数据
                  createCustomer () {
                    let self = this
                    let resource = self.$resource(self.apiUrl)
                    resource.save(self.apiUrl, self.item).then((response) => {
                      self.item = {}
                      self.getCustomers()
                    })
                  },
                  // update 方法更新数据
                  updateCustomer () {
                    let self = this
                    let resource = self.$resource(self.apiUrl)
                    resource.update({id: self.item.customerId}, self.item)
                      .then((response) => {
                        self.getCustomers()
                      })
                  },
                  // remove 方法删除数据
                  deleteEntry () {
                    let self = this
                    let resource = self.$resource(self.apiUrl)
                    resource.remove({id: self.item.customerId})
                      .then((response) => {
                        self.getCustomers()
                      })
                  },
                  receiveChildState (state) {
                    let self = this
                    if (state != null) {
                      self.showDialog = state.show
                      self.deleteDialog = state.show
                      if (state.theResult) {
                        self.item.customerId ? (state.name === 'deleteDialog' ? self.deleteEntry() : self.updateCustomer()) : self.createCustomer()
                      }
                    }
                  }
                }
              })
            </code>
          </pre>
        </div>
      </div>
    <v-modal :show="showDialog" effect="zoom" width="400" @backUpState="receiveChildState">
      <div slot="modal-body" class="form-horizontal modal-body" role="form">
        <div class="form-group" v-show="item.customerId">
          <label class="col-sm-4 control-label">Customer Id</label>
          <div class="col-sm-6">
            <input v-model="item.customerId" type="text" disabled="disabled" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-4 control-label">Company Name</label>
          <div class="col-sm-6">
            <input v-model="item.companyName" type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-4 control-label">Contact Name</label>
          <div class="col-sm-6">
            <input v-model="item.contactName" type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-4 control-label">Phone</label>
          <div class="col-sm-6">
            <input v-model="item.phone" type="text" class="form-control">
          </div>
        </div>
      </div>
    </v-modal>
    <v-modal :show='warnDialog' name="warnDialog" @backUpState="receiveChildState" okText="Sure" small>
      <div slot="modal-body" class="form-horizontal modal-body" role="form">
        {{ errorCode }}
      </div>
    </v-modal>
    <v-loading :showLoading='showLoading'></v-loading>
    <v-alert :show='showAlert' placement="top" :duration="3000" type="danger" width="500px" dismissable @changeState="receiveChildState">
      <i class="iconfont">&#xe72a;</i>
      <strong>404! 操作失败！</strong>
      Sorry ， it's failed，Please refresh and retry！
    </v-alert>
  </div>
</template>
<script>
  import Vue from 'vue'
  import vModal from 'components/Common/vModal'
  import vLoading from 'components/Common/vLoading'
  import vAlert from 'components/Common/vAlert'

  export default {
    data () {
      return {
        gridColumns: [
          {name: 'customerId', isKey: true},
          {name: 'companyName'},
          {name: 'contactName'},
          {name: 'phone'}
        ],
        gridData: [],
        apiUrl: 'http://211.149.193.19:8080/api/customers',
        showNoData: false,
        showDialog: false,
        warnDialog: false,
        showLoading: false,
        showAlert: false,
        errorCode: '你确定要删除吗？',
        item: {}
      }
    },
    components: {
      vModal,
      vLoading,
      vAlert
    },
    beforeCreate () {
      let self = this
      Vue.http.interceptors.push((request, next) => {
        // 请求发送前的处理逻辑
        self.showLoading = true
        next((response) => {
          // 请求发送后的处理逻辑
          if (!response.ok) {
            self.errorCode = response.status
            self.showAlert = true
          }
          self.showLoading = false
          return response
        })
      })
    },
    mounted () {
      this.$nextTick(function () { // 保证 this.$el 已经插入文档
        this.getCustomers()
      })
    },
    methods: {
      getCustomers () {
        let self = this
        let resource = self.$resource(self.apiUrl)
        resource.get().then((response) => {
          let result = response.data
          if (result && result.length > 0) {
            // this.$set('gridData', result)
            self.gridData = result
          } else {
            self.showNoData = true
          }
        }, (response) => {
          // error back coding...
        }).catch(function (response) {
          console.log(response)
        })
      },
      loadEntry (name) {
        var self = this
        self.gridData.forEach(function (item) {
          if (name === item.customerId) {
            self.item = item
            self.showDialog = true
            return
          }
        })
      },
      openDialog () {
        let self = this
        self.item = {}
        self.showDialog = true
      },
      deleteNotice (item) {
        let self = this
        self.item = item
        self.warnDialog = true
      },
      createCustomer () {
        let self = this
        let resource = self.$resource(self.apiUrl)
        resource.save(self.apiUrl, self.item).then((response) => {
          self.item = {}
          self.getCustomers()
        })
      },
      updateCustomer () {
        let self = this
        let resource = self.$resource(self.apiUrl)
        resource.update({id: self.item.customerId}, self.item)
          .then((response) => {
            self.getCustomers()
          })
      },
      deleteEntry () {
        let self = this
        let resource = self.$resource(self.apiUrl)
        resource.remove({id: self.item.customerId})
          .then((response) => {
            self.getCustomers()
          })
      },
      receiveChildState (state) {
        let self = this
        if (state != null) {
          self.showDialog = state.show
          self.warnDialog = state.show
          self.showAlert = state.show
          if (state.theResult) {
            self.item.customerId ? (state.name === 'warnDialog' ? self.deleteEntry() : self.updateCustomer()) : self.createCustomer()
          }
        }
      }
    }
  }
</script>
<style>
  .dsOperation{
    background-color: #eef;
    padding: 5px;
  }
</style>
