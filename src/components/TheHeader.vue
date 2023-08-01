<template>
  <div class="header">
    <ul class="breadcrumb">
      <li v-for="route in routes" :key="route.path" class="breadcrumb-item">
        <router-link :to="{ path: route.path }" v-slot="{ navigate }" custom>
          <a :href="route.path" @click="navigate" class="breadcrumb-link">{{ route.meta.title }}</a>
        </router-link>
      </li>
    </ul>
    <h1 class="header-title">{{ this.$route.meta.title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  computed: {
    routes: function() {
      return this.$route.matched
    },
  }
}
</script>

<style scoped>
.header
{
  background-color: #231F20;
  padding: 204px 78px 42px;
  color: #fff;
}

.header-title
{
  text-transform: uppercase;
  font-size: 48px;
  margin-top: 22px;
}

.breadcrumb
{
  list-style: none;
}

.breadcrumb-item
{
  display: inline-block;
}

.breadcrumb-link
{
  color: rgba(255, 255, 255, .7);
  text-decoration: none;
  font-size: 14px;
}

.breadcrumb-link:hover
{
  text-decoration: underline;
}

.breadcrumb-item:not(:last-child)::after
{
  content: '–';
  margin: 0 10px;
}
</style>