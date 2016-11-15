<template id="BaseDemo">
  <div class="container">
    <div class="panel panel-primary">
      <div class="panel-heading">二、Vue.js 基础</div>
      <div class="panel-body">
        <div class="bs-example">
          <h4>在模板中绑定表达式是非常便利的，但是它们实际上只用于简单的操作。任何复杂逻辑应当使用计算属性。</h4>
          <demoCpm08></demoCpm08>
        </div>
        <div class="bs-example">
          <h4>在模板中绑定表达式是非常便利的，但是它们实际上只用于简单的操作。任何复杂逻辑应当使用计算属性。</h4>
          <demoCpm09></demoCpm09>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import demoCpm08 from 'components/Base/demoCpm_08'
    import demoCpm09 from 'components/Base/demoCpm_09'

    export default{
      name: 'BaseDemo',
      components: {
        demoCpm08,
        demoCpm09
      }
    }
</script>
