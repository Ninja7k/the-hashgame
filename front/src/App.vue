<template class="red" >
  <v-app class="blue no_scroll">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.no-scroll {
  overflow: hidden;
}
</style>
