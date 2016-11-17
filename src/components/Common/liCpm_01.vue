<template>
  <li>{{ title }}
    <button v-on:click="$emit('remove')">X</button>
  </li>
</template>

<script>
    export default{
      props: ['title']
    }
</script>
