<template 
>
  <div class="gradiente_dark_blue size_all">
    <v-dialog
      persistent
      v-model="dialog"
      max-width="700px"
      class="elevation-18"
    >
      <v-card>
        <v-card-title class="gradiente_dark_blue"
          >Escolha as cores, símbolos e usernames
        </v-card-title>
        <v-card-text class="mx-auto d-flex flex mt-8">
          <!-- PLAYER 1 -->
          <div class="" style="width: 50%">
            <div class="d-flex align-">
              <h3>Player 1</h3>
              <h1 class="ml-2 retro-font font-weight-light">
                {{ set_players[0].username }}
              </h1>
            </div>

            <v-radio-group v-model="set_players[0].color">
              <v-radio value="red" color="red" label="Vermelho"> </v-radio>
              <v-radio value="blue" color="blue" label="Azul">> </v-radio>
              <v-radio value="green" color="green" label="Verde"></v-radio>
              <v-radio
                value="orange"
                color="orange"
                label="Laranjado"
              ></v-radio>
              <v-radio
                value="pink lighten-2"
                color="pink lighten-2"
                label="Rosa"
              ></v-radio>
              <v-radio
                value="purple lighten-2"
                color="purple lighten-2"
                label="Roxo"
              ></v-radio>
            </v-radio-group>
            <div class="d-flex align-center">
              <v-text-field
                :rules="rules"
                counter
                maxlength="8"
                hide-details
                class="mr-2 my-4"
                label="Username do player 1"
                v-model="set_players[0].username"
                outlined
                :color="set_players[0].color"
                dense
                style="max-width: 200px"
              />
              <v-icon
                class="ml-4"
                v-if="set_players[0].icon"
                size="50"
                :color="set_players[0].color"
                >{{ set_players[0].icon }}</v-icon
              ><v-icon v-else size="50" class="ml-4">mdi-help</v-icon>
            </div>
            <v-col>
              <v-chip-group
                class="ml-n2"
                active-class="text--accent-4"
                v-model="set_players[0].icon"
              >
                <div>
                  <v-chip
                    :color="set_players[0].color"
                    v-for="ic in icons"
                    :key="ic"
                    :value="ic"
                    class="elevation-0 text-center"
                  >
                    <v-icon size="">{{ ic }}</v-icon>
                  </v-chip>
                </div>
              </v-chip-group>
            </v-col>
          </div>
          <v-divider vertical class="mx-4"></v-divider>
          <!-- PLAYER 2 -->
          <div class="" style="width: 50%">
            <div class="d-flex align-">
              <h3>Player 2</h3>
              <h1 class="ml-2 retro-font font-weight-light">
                {{ set_players[1].username }}
              </h1>
            </div>

            <v-radio-group v-model="set_players[1].color">
              <v-radio value="red" color="red" label="Vermelho"> </v-radio>
              <v-radio value="blue" color="blue" label="Azul">> </v-radio>
              <v-radio value="green" color="green" label="Verde"></v-radio>
              <v-radio
                value="orange"
                color="orange"
                label="Laranjado"
              ></v-radio>
              <v-radio
                value="pink lighten-2"
                color="pink lighten-2"
                label="Rosa"
              ></v-radio>
              <v-radio
                value="purple lighten-2"
                color="purple lighten-2"
                label="Roxo"
              ></v-radio>
            </v-radio-group>
            <div class="d-flex align-center">
              <v-text-field
                :rules="rules"
                counter
                maxlength="8"
                hide-details
                class="mr-2 my-4"
                label="Username do player 1"
                v-model="set_players[1].username"
                outlined
                :color="set_players[1].color"
                dense
                style="max-width: 200px"
              />
              <v-icon
                class="ml-4"
                v-if="set_players[1].icon"
                size="50"
                :color="set_players[1].color"
                >{{ set_players[1].icon }}</v-icon
              ><v-icon v-else size="50" class="ml-4">mdi-help</v-icon>
            </div>
            <v-col>
              <v-chip-group
                class="ml-n2"
                active-class="text--accent-4"
                v-model="set_players[1].icon"
              >
                <div>
                  <v-chip
                    :color="set_players[1].color"
                    v-for="ic in icons"
                    :key="ic"
                    :value="ic"
                    class="elevation-0 text-center"
                  >
                    <v-icon size="">{{ ic }}</v-icon>
                  </v-chip>
                </div>
              </v-chip-group>
            </v-col>
          </div>
          <!-- <div class="" style="width: 50%">
            <h3>Player 2</h3>
            <v-radio-group v-model="set_players[1].color">
              <v-radio value="red" color="red" label="Vermelho"> </v-radio>
              <v-radio value="blue" color="blue" label="Azul">> </v-radio>
              <v-radio value="green" color="green" label="Verde"></v-radio>
              <v-radio value="yellow" color="yellow" label="Amarelo"></v-radio>
              <v-radio
                value="pink lighten-2"
                color="pink lighten-2"
                label="Rosa"
              ></v-radio>
              <v-radio
                value="purple lighten-2"
                color="purple lighten-2"
                label="Roxo"
              ></v-radio>
            </v-radio-group>
          </div> -->
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
  computed: {},
  methods: {
    setPLayers() {
      if (!this.set_players[0].color && !this.set_players[1].color) {
        alert("Insira as cores");
      }
      if (
        this.set_players[0].color &&
        this.set_players[1].color &&
        this.set_players[0].color === this.set_players[1].color
      ) {
        alert("Cores não podem ser iguais!");
      }
      if (
        this.set_players[0].color &&
        this.set_players[1].color &&
        this.set_players[0].color != this.set_players[1].color
      ) {
        console.log("OK");
        this.dialog = false;
        this.player_current.color = this.set_players[0].color;

        this.players[0].color = this.set_players[0].color;
        this.players[1].color = this.set_players[1].color;
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
      icons: [
        "mdi-close",
        "mdi-close-outline",
        "mdi-circle-outline",
        "mdi-close-thick",
        "mdi-circle-double",
      ],

      color_1: "",

      dialog: true,

      player_current: { color: "", player: 0, icon: "mdi-close" },

      set_players: [
        { color: "", icon: "", player: 0 },
        { color: "", icon: "", player: 1 },
      ],

      players: [
        { color: "", player: 0, icon: "mdi-close" },
        { color: "", player: 1, icon: "mdi-circle-outline" },
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
      rules: [(v) => v.length <= 8 || "Máximo de 8 carácteres"],
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
.retro-font {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
