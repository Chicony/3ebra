<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
*
{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
</style>