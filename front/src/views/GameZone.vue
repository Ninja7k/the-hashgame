<template 
>
  <div>
    <v-dialog
      persistent
      v-model="dialog"
      :max-width="$vuetify.breakpoint.mobile ? '330px' : '700px'"
      min-width="300px"
      class="elevation-18"
    >
      <!-- MODAL INICIO DE JOGO  -->
      <v-card class="glass-2 dark" dark>
        <v-card-title class="gradiente_dark_blue"
          >Escolha as cores, símbolos e usernames
        </v-card-title>
        <v-card-text class="mx-auto d-flex flex mt-8">
          <v-row>
            <!-- PLAYER 1 -->
            <v-col cols="12" md="6" class="">
              <div class="d-flex align-">
                <h3 class="font-italic">Player 1</h3>
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
                  counter
                  maxlength="8"
                  hide-details
                  class="mr-2 my-4"
                  label="Username do player 1"
                  v-model="set_players[0].username"
                  outlined
                  :color="set_players[0].color"
                  dense
                  style="max-width: 100%"
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
            </v-col>
            <!-- <v-divider
              v-if="$vuetify.breakpoint.md"
              vertical
              class="mx-4"
            ></v-divider> -->
            <!-- PLAYER 2 -->
            <v-col cols="12" md="6">
              <div class="d-flex align-">
                <h3 class="font-italic">Player 2</h3>
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
                  counter
                  maxlength="8"
                  hide-details
                  class="mr-2 my-4"
                  label="Username do player 2"
                  v-model="set_players[1].username"
                  outlined
                  :color="set_players[1].color"
                  dense
                  style="max-width: 100%"
                />
                <v-icon
                  class="ml-4"
                  v-if="set_players[1].icon"
                  size="50"
                  :color="set_players[1].color"
                  >{{ set_players[1].icon }}</v-icon
                >
                <v-icon v-else size="50" class="ml-4">mdi-help</v-icon>
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
            </v-col>
          </v-row>
        </v-card-text>
        <div class="d-flex flex-column">
          <v-btn class="gradiente_dark_blue ma-4" @click="setPLayers()"
            >JOGAR
          </v-btn>
        </div>
      </v-card>
      <!-- DIALOG DE ALERTA -->
      <v-dialog v-model="dialog_alert" max-width="550px">
        <v-card class="pa-6 mx-auto">
          <div class="d-flex align-end justify-center flex my-6">
            <v-icon color="red" size="40">mdi-alert</v-icon>
            <h2 class="mx-2 red--text">{{ message_alert }}</h2>
          </div>
          <div class="mt-6 d-flex my-6">
            <v-btn
              class="px-14 mt-4 mx-auto gradiente_dark_blue"
              @click="dialog_alert = false"
              >OK</v-btn
            >
          </div>
        </v-card>
      </v-dialog>
    </v-dialog>
    <!-- PLACAR DE JOGADORES -->
    <v-row
      class="
        glass-1
        dark
        px-4
        align-center
        white--text
        mx-auto
        d-flex
        justify-space-between
        pt-10
        pb-16
        mt-md-16
      "
      style="min-width: 300px; max-width: 600px; max-height: 220px"
    >
      <v-col cols="4"
        ><div class="d-flex flex-column align-start">
          <v-icon v-if="set_players[0].icon" size="50" :color="players[0].color"
            >{{ players[0].icon }}
          </v-icon>
          <v-icon v-else size="50" color="white" class="">mdi-help</v-icon>

          <h3 class="text-right font-weight-light font-italic">Player 1</h3>

          <h2 class="text-right" v-if="players[0].username">
            {{ players[0].username }}
          </h2>
        </div></v-col
      >
      <v-col cols="4"
        ><div class="mx-auto mt-6 d-flex align-center">
          <h1 class="mx-auto">
            {{ this.players[1].points + " - " + this.players[0].points }}
          </h1>
        </div></v-col
      >
      <v-col cols="4">
        <div class="d-flex align-end flex-column justify-center">
          <v-icon v-if="set_players[1].icon" size="50" :color="players[1].color"
            >{{ players[1].icon }}
          </v-icon>
          <v-icon v-else size="50" color="white" class="align-right"
            >mdi-help</v-icon
          >
          <h3 class="text-right font-weight-light font-italic">Player 2</h3>
          <h2 class="text-right" v-if="players[1].username">
            {{ players[1].username }}
          </h2>
        </div></v-col
      >
      <div class="mx-auto">
        <h2 class="font-italic font-weight-light">
          vez de
          <v-icon size="30" :color="player_current.color">{{
            player_current.icon
          }}</v-icon>
        </h2>
      </div>
    </v-row>
    <!-- TABULEIRO - HASH -->
    <div class="d-flex size_all" @click="Win()">
      <v-row
        class="gradient mx-auto mt-8"
        :style="
          $vuetify.breakpoint.mobile
            ? 'min-width: 300px; max-width: 300px; min-height: 300px; max-height: 300px;'
            : 'min-width: 600px; max-width: 600px; min-height: 600px; max-height: 600px;'
        "
      >
        <v-col
          :style="
            $vuetify.breakpoint.mobile
              ? 'border: solid 1px white; min-width: 100px; max-width: 100px; min-height: 100px; max-height: 100px;'
              : 'border: solid 1px white; min-width: 200px; max-width: 200px; min-height: 200px; max-height: 200px;'
          "
          class="mx-auto elevation-10 flex d-flex align-center justify-center"
          cols="4"
          v-for="(card, i) in cards"
          :key="i"
          :aspect-ratio="1 / 1"
          @click="handleThrow(i)"
        >
          <v-icon
            :color="card.color"
            v-if="card.used === true"
            :size="$vuetify.breakpoint.mobile ? 60 : 140"
            >{{ card.icon }}</v-icon
          >

          <!-- <v-card
              class="
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
              class="mx-auto d-flex align-center justify-center elevation-0"
              style="width: 80px; height: 80px"
            >
              <v-icon :color="card.color" size="150">{{ card.icon }}</v-icon>
            </v-card> -->
        </v-col>
        <!-- dialogo win  -->
        <v-dialog persistent v-model="dialog_win" max-width="400px">
          <v-card class="pa-6 pt-10 text-center glass-2" dark>
            <div
              v-if="player_win && message_win != 'VELHA'"
              class="d-flex align-center"
            >
              <v-icon size="30" class="mr-2" :color="color_win">
                {{ icon_win }}
              </v-icon>
              <h2>{{ message_win }}</h2>
              <h2>
                O Jogador
                <i>
                  <b>{{ player_win }}</b>
                </i>
                venceu!
              </h2>
            </div>
            <h2 v-else>iiiiih, DEU VELHA !</h2>

            <v-img
              class="mx-auto mt-2 rounded-xl mt-6"
              max-width="290px"
              :aspect-ratio="1 / 1"
              :src="photo_win"
            >
            </v-img>
            <br />
            <div class="d-flex flex-column">
              <v-btn
                class="mt-2 mx-auto gradiente_dark_blue"
                @click="PlayAgain()"
              >
                <v-icon>mdi-refresh</v-icon>
                JOGAR DE NOVO
              </v-btn>
              <v-btn
                class="mt-6 mx-auto gradiente_dark_blue"
                @click="newGame()"
              >
                <v-icon>mdi-plus</v-icon>
                NOVO JOGO
              </v-btn>
            </div>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- <v-card
        class="white mx-auto mt-16"
        style="
          min-width: 500px;
          max-width: 500px;
          min-height: 500px;
          max-height: 500px;
        "
      >
      </v-card> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "GameZone",
  computed: {},
  methods: {
    newGame() {
      this.dialog_win = false;
      this.player_win = null;

      this.dialog = true;
      this.cards.filter(
        (v) => ((v.player = null), (v.color = "white"), (v.used = false))
      );
      this.set_players.filter(
        (v) => ((v.color = ""), (v.username = ""), (v.icon = "mdi-help"))
      );
      this.players.filter((v) => (v.points = "0"));
    },
    PlayAgain() {
      this.player_win = null;
      this.dialog_win = false;
      this.cards.filter(
        (v) => ((v.player = null), (v.color = "white"), (v.used = false))
      );
    },
    Win() {
      if (
        (this.cards[0].player === 0 &&
          this.cards[1].player === 0 &&
          this.cards[2].player === 0) ||
        (this.cards[3].player === 0 &&
          this.cards[4].player === 0 &&
          this.cards[5].player === 0) ||
        (this.cards[6].player === 0 &&
          this.cards[7].player === 0 &&
          this.cards[8].player === 0) ||
        (this.cards[0].player === 0 &&
          this.cards[3].player === 0 &&
          this.cards[6].player === 0) ||
        (this.cards[1].player === 0 &&
          this.cards[4].player === 0 &&
          this.cards[7].player === 0) ||
        (this.cards[2].player === 0 &&
          this.cards[5].player === 0 &&
          this.cards[8].player === 0) ||
        (this.cards[0].player === 0 &&
          this.cards[4].player === 0 &&
          this.cards[8].player === 0) ||
        (this.cards[2].player === 0 &&
          this.cards[4].player === 0 &&
          this.cards[6].player === 0)
      ) {
        this.dialog_win = true;
        this.message_win = null;
        this.photo_win =
          "https://www.lance.com.br/galerias/wp-content/uploads/2022/03/luva-de-pedreiro-memes-1-636x474.jpg";
        this.players[0].points++;
        // this.message_win = `o Jogador ${this.players[1].username} venceu!`;
        this.player_win = this.players[1].username;
        this.icon_win = this.players[1].icon;
        this.color_win = this.players[1].color;
      }
      if (
        (this.cards[0].player === 1 &&
          this.cards[1].player === 1 &&
          this.cards[2].player === 1) ||
        (this.cards[3].player === 1 &&
          this.cards[4].player === 1 &&
          this.cards[5].player === 1) ||
        (this.cards[6].player === 1 &&
          this.cards[7].player === 1 &&
          this.cards[8].player === 1) ||
        (this.cards[0].player === 1 &&
          this.cards[3].player === 1 &&
          this.cards[6].player === 1) ||
        (this.cards[1].player === 1 &&
          this.cards[4].player === 1 &&
          this.cards[7].player === 1) ||
        (this.cards[2].player === 1 &&
          this.cards[5].player === 1 &&
          this.cards[8].player === 1) ||
        (this.cards[0].player === 1 &&
          this.cards[4].player === 1 &&
          this.cards[8].player === 1) ||
        (this.cards[2].player === 1 &&
          this.cards[4].player === 1 &&
          this.cards[6].player === 1)
      ) {
        this.dialog_win = true;
        this.players[1].points++;
        this.message_win = null;
        // this.message_win = `o Jogador ${this.players[0].username} venceu a partida!`;
        this.player_win = this.players[0].username;
        this.photo_win =
          "https://www.lance.com.br/galerias/wp-content/uploads/2022/03/luva-de-pedreiro-memes-1-636x474.jpg";
        this.icon_win = this.players[0].icon;
        this.color_win = this.players[0].color;
      }
      var used = this.cards.filter((a) => a.used === true);
      if (used.length === 9 && this.player_win === null) {
        this.message_win = "VELHA";
        this.photo_win =
          "https://st.depositphotos.com/1912933/4270/i/450/depositphotos_42708415-stock-photo-old-woman-with-pistol.jpg";
        this.icon_win = null;
        this.player_win = null;
        this.color_win = null;
        this.dialog_win = true;
      }
      return console.log("Ainda não!");
    },
    setPLayers() {
      if (!this.set_players[0].color || !this.set_players[1].color) {
        // alert("Insira as cores");
        this.dialog_alert = true;
        this.message_alert = "Escolha as cores !";
      }
      if (!this.set_players[0].icon || !this.set_players[1].icon) {
        // alert("Insira as cores");
        this.dialog_alert = true;
        this.message_alert = "Escolha os ícones !";
      }
      if (!this.set_players[0].username || !this.set_players[1].username) {
        // alert("Insira as cores");
        this.dialog_alert = true;
        this.message_alert = "Insira os username !";
      }
      if (
        this.set_players[0].color &&
        this.set_players[1].color &&
        this.set_players[0].color === this.set_players[1].color
      ) {
        // alert("Cores não podem ser iguais!");
        this.dialog_alert = true;
        this.message_alert = "As cores não podem ser iguais !";
      }
      if (
        this.set_players[0].icon &&
        this.set_players[1].icon &&
        this.set_players[0].icon === this.set_players[1].icon
      ) {
        // alert("Cores não podem ser iguais!");
        this.dialog_alert = true;
        this.message_alert = "Os ícones não podem ser iguais !";
      }
      if (
        this.set_players[0].username &&
        this.set_players[1].username &&
        this.set_players[0].username === this.set_players[1].username
      ) {
        // alert("Cores não podem ser iguais!");
        this.dialog_alert = true;
        this.message_alert = "Os usernames não podem ser iguais !";
      }
      if (
        this.set_players[0].color &&
        this.set_players[1].color &&
        this.set_players[0].username &&
        this.set_players[1].username &&
        this.set_players[0].icon &&
        this.set_players[1].icon &&
        this.set_players[0].color != this.set_players[1].color &&
        this.set_players[0].icon != this.set_players[1].icon &&
        this.set_players[0].username != this.set_players[1].username
      ) {
        this.dialog = false;
        if (this.player_current.player === 1) {
          this.player_current.color = this.set_players[0].color;
          this.player_current.icon = this.set_players[0].icon;
          this.player_current.player = this.set_players[0].player;
        }
        if (this.player_current.player === 0) {
          this.player_current.color = this.set_players[1].color;
          this.player_current.icon = this.set_players[1].icon;
          this.player_current.player = this.set_players[1].player;
        }

        this.players[0].color = this.set_players[0].color;
        this.players[1].color = this.set_players[1].color;
        this.players[0].icon = this.set_players[0].icon;
        this.players[1].icon = this.set_players[1].icon;
        this.players[0].username = this.set_players[0].username;
        this.players[1].username = this.set_players[1].username;
      }
    },
    handleThrow(i) {
      if (this.cards[i].used === false) {
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
      }
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

      dialog_win: false,
      color_win: false,
      message_win: "",
      icon_win: "",
      player_win: null,
      photo_win: "",

      dialog: true,

      dialog_alert: false,
      message_alert: "",

      player_current: { color: "", player: 1, icon: "" },

      set_players: [
        { color: "", icon: "", player: 0 },
        { color: "", icon: "", player: 1 },
      ],

      players: [
        { color: "", player: 0, icon: "mdi-help", points: 0 },
        { color: "", player: 1, icon: "mdi-help", points: 0 },
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
.glass-1 {
  border-radius: 10px;
  box-shadow: 5px 5px 125px 5px rgb(255, 255, 255, 0.2);
  color: white;
  background: linear-gradient(
    125deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(6, 42, 133, 0.5) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
}
.glass-2 {
  border-radius: 10px;
  box-shadow: 5px 5px 125px 5px rgba(132, 130, 243, 0.938);
  color: white;
  background: linear-gradient(
    125deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(6, 42, 133, 0.9) 50%,
    rgba(0, 0, 0, 0.9) 100%
  );
}
.size_all {
  width: 100%;
  height: 100%;
}
.hero {
  position: fixed;
  margin: 0;
  background: rgb(121, 26, 26);
  background: linear-gradient(
    125deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(42, 179, 0, 0.8) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
}
.hero-1 {
  position: fixed;

  margin: 0 !important;
  background: rgb(121, 26, 26);
  background: linear-gradient(
    125deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(6, 42, 133, 0.8) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
}
.gradiente_dark_blue {
  background: rgb(238, 2, 95);
  background: linear-gradient(
    125deg,
    rgba(43, 42, 42, 0.8) 0%,
    rgba(34, 61, 128, 0.8) 50%,
    rgba(63, 63, 63, 0.8) 100%
  );
}
.no_scroll {
  overflow: hidden;
}
.retro-font {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.gradient {
  background: rgb(203, 228, 228, 0.7);

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.7) 32%
  );
}
</style>
