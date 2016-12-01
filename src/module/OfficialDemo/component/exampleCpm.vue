<template id="Examples">
  <div class="panel panel-primary example">
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
        if (url === '') {
          return null
        } else {
          let newurl = this.utilHelper.getLocalUrl()
          window.open(newurl + url)
        }
      }
    }
  }
</script>
