<template id="Examples">
  <div class="panel panel-primary">
    <div class="panel-heading">{{ headtitle }}</div>
    <div class="panel-body">
      <div class="row">
        <div class="col-xs-4" v-for='item in projectsList' @click='choiceProjects(item.url)'>
          <div class="items">
            <p class="name">{{ item.pname }}</p>
            <small class="text">{{item.text}}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .items {
    text-align:center;
    border:1px solid #42b983;
    padding:10px;
    margin-bottom:20px;
    min-height:104px;
  }
  .name {
    font-size:16px;
    font-weight:bold;
    padding-top:10px;
  }
</style>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Examples',
    computed: {
      ...mapState({
        headtitle: state => state.exampleDemo.title,
        projectsList: state => state.exampleDemo.Lists
      })
    },
    methods: {
      choiceProjects (url) {
        let newurl = this.utilHelper.getLocalUrl()
        window.open(newurl + url)
      }
    }
  }
</script>
