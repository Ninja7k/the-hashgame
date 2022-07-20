<template 
>
  <div class="gradiente_dark_blue size_all">
    <v-dialog
      persistent
      v-model="dialog"
      max-width="500px"
      class="elevation-18"
    >
      <v-card>
        <v-card-title class="gradiente_dark_blue"
          >Escolha as cores</v-card-title
        >
        <v-card-text class="mx-auto d-flex flex mt-8">
          <div class="" style="width: 50%">
            <h3>Player 1:</h3>
            <v-radio-group v-model="player_color_0">
              <v-radio value="red" label="Vermelho"> </v-radio>
              <v-radio value="blue" label="Azul">> </v-radio>
            </v-radio-group>
          </div>
          <div class="" style="width: 50%">
            <h3>Player 2:</h3>
            <v-radio-group v-model="player_color_1">
              <v-radio value="red" label="Vermelho"> </v-radio>
              <v-radio value="blue" label="Azul"> </v-radio>
            </v-radio-group>
          </div>
        </v-card-text>
        <div class="d-flex flex-column">
          <v-btn class="gradiente_dark_blue ma-4" @click="setPLayers()"
            >JOGAR</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
    <div class="d-flex size_all">
      <v-card
        class="white mx-auto my-auto"
        style="
          min-width: 500px;
          max-width: 500px;
          min-height: 500px;
          max-height: 500px;
        "
      >
        <v-row class="">
          <v-col
            class="pa-8 elevation-10 flex d-flex"
            cols="4"
            v-for="(card, i) in cards"
            :key="i"
            :aspect-ratio="1 / 1"
          >
            <v-card
              class="
                ma-4
                white
                mx-auto
                d-flex
                align-center
                justify-center
                elevation-0
              "
              style="width: 80px; height: 80px"
              v-if="card.used === false"
              @click="handleThrow(i)"
            >
            </v-card>
            <v-card
              v-if="card.used === true"
              class="
                ma-4
                mx-auto
                d-flex
                align-center
                justify-center
                elevation-0
              "
              style="width: 80px; height: 80px"
            >
              <v-icon :color="card.color" size="100">{{ card.icon }}</v-icon>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameZone",
  methods: {
    setPLayers() {
      if (!this.player_color_0 && !this.player_color_1) {
        alert("Insira as cores");
      }
      if (
        this.player_color_0 &&
        this.player_color_1 &&
        this.player_color_0 === this.player_color_1
      ) {
        alert("Cores não podem ser iguais!");
      }
      if (
        this.player_color_0 &&
        this.player_color_1 &&
        this.player_color_0 != this.player_color_1
      ) {
        alert("OK");
        this.dialog = false;
      }
    },
    handleThrow(i) {
      this.cards[i].color = this.player_current.color;
      this.cards[i].icon = this.player_current.icon;
      if (this.player_current.player === 0) {
        this.player_current.player = 1;
        this.player_current.icon = this.players[1].icon;
        this.player_current.color = this.players[1].color;
      } else {
        this.player_current.player = 0;
        this.player_current.color = this.players[0].color;
        this.player_current.icon = this.players[0].icon;
      }

      this.cards[i].player = this.player_current.player;
      this.cards[i].used = true;
    },
  },
  data() {
    return {
      dialog: true,
      player_current: { color: "blue", player: 0, icon: "mdi-close" },

      player_color_0: "",
      player_color_1: "",

      players: [
        { color: "blue", player: 0, icon: "mdi-close" },
        { color: "red", player: 1, icon: "mdi-circle-outline" },
      ],

      cards: [
        { used: false, color: "white", player: null, icon: "" },
        {
          used: false,
          color: "white",
          player: null,
          icon: "",
        },
        { used: false, color: "white", player: null, icon: "" },
        {
          used: false,
          color: "white",
          player: null,
          icon: "",
        },
        { used: false, color: "white", player: null, icon: "" },
        {
          used: false,
          color: "white",
          player: null,
          icon: "",
        },
        { used: false, color: "white", player: null, icon: "" },
        {
          used: false,
          color: "white",
          player: null,
          icon: "",
        },
        { used: false, color: "white", player: null, icon: "" },
      ],
    };
  },

  components: {},
};
</script>
<style scoped>
.size_all {
  width: 100%;
  height: 100%;
}
.gradiente_dark_blue {
  background: rgb(238, 2, 95);
  background: linear-gradient(
    90deg,
    rgba(238, 2, 95, 0.2) 0%,
    rgba(2, 238, 216, 0.2) 50%,
    rgba(238, 2, 214, 0.2) 100%
  );
}
.no_scroll {
  overflow: hidden;
}
</style>
