<template  >
  <v-app class="no_scroll red">
    <v-main class="transparent">
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
.gradiente_dark_blue {
  background: rgb(238, 2, 95);
  background: linear-gradient(
    90deg,
    rgba(20, 0, 81, 0.66) 0%,
    rgba(2, 238, 216, 0.2) 50%,
    rgba(238, 2, 214, 0.2) 100%
  );
}
.no-scroll {
  overflow: hidden;
}
.size_all {
  width: 100%;
  height: 100%;
}
.theme--light.v-application {
  background: rgb(238, 2, 95, 0);
}

/* #app {
  background: url("https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg")
    no-repeat center center fixed !important;
  background-size: cover;
} */
</style>
