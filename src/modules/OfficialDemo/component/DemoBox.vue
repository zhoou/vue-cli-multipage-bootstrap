<template>
  <div class="row">
    <!--效果展示-->
    <div class="col-xs-4 example-effectHtml">
        <slot name="effectHtml"></slot>
    </div>
    <div class="col-xs-8">
    <!--代码描述-->
      <div class="example-codeDescription" v-show="showDemo">
          <slot name="codeDescription"></slot>
      </div>

      <!--代码展示-->
      <div class="example-codeHighlight" v-show="showDemo">
          <slot name="codeHighlight" v-if="showCode"></slot>
          <div class="example-codeHighlight-showCode" @click="showCodeToggle()">
              <span :class="['glyphicon', showCode?'glyphicon-triangle-top':'glyphicon-triangle-bottom']" aria-hidden="true"></span>
              <span>{{showCode ? '收起代码' : '显示代码'}}</span>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-box',
  props: {
    showDemo: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showCode: true
    }
  },
  methods: {
    showCodeToggle () {
      this.showCode = !this.showCode
    }
  }
}
</script>
<style scoped>
.example-effectHtml{
    margin-top:20px;
}
.example-codeHighlight pre {
  background-color: #333;
}
.example-codeHighlight code {
    font-family: Menlo,Monaco,Consolas,Courier,monospace;
    line-height: 1.2;
    font-size: 12px;
}

.example-codeDescription-title {
    font-weight: 500;
    margin: 30px 0 10px;
    position: relative;
}

.example-codeDescription-title:before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #e9e9e9;
    position: absolute;
    top: 10px;
    left: 0;
}

.example-codeDescription-title-span {
    display: inline-block;
    background: #fff;
    padding: 0 5px 0 18px;
    position: relative;
    margin-left: 30px;
    font-size: 14px;
    color: #C5C0B0;
}

.example-codeHighlight {
    margin-top: 20px;
    margin-bottom: 0px;
    border-top: 1px dotted #e9e9e9;
    border-bottom: 1px solid #e9e9e9;

}

.example-codeHighlight-showCode {
    text-align: center;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    color: darkgreen;
    font-size: 14px;
    background-color: antiquewhite;
}

.example-codeHighlight-showCode:hover {
    color: #ED5C43;
}
</style>
