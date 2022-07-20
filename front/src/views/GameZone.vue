<template 
>
  <div class="gradiente_dark_blue size_all">
    <div class="d-flex size_all">
      <v-card class="white mx-auto my-auto" style="min-width: 800px">
        <v-row class="mx-16 px-16">
          {{ cards }}
          <v-col
            class="flex d-flex"
            cols="4"
            v-for="(card, i) in cards"
            :key="i"
          >
            <v-card
              :aspect-ratio="1 / 1"
              class="pa-16"
              v-if="card.used === false"
              @click="handleThrow(i)"
              >X</v-card
            >
            <v-card v-if="card.used === true" class="pa-16">{{
              card.player
            }}</v-card>
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
    handleThrow(i) {
      this.cards[i].color = this.player_current.color;
      if (this.player_current.player === 0) {
        this.player_current.player = 1;
        this.player_current.color = this.players[1].color;
      } else {
        this.player_current.player = 0;
        this.player_current.color = this.players[0].color;
      }

      this.cards[i].player = this.player_current.player;
      this.cards[i].used = true;
    },
  },
  data() {
    return {
      player_current: { color: "blue", player: 0 },

      players: [
        { color: "blue", player: 0 },
        { color: "red", player: 1 },
      ],

      cards: [
        { used: false, color: "white", player: null },
        { used: false, color: "white", player: null },
        { used: false, color: "white", player: null },
        { used: false, color: "white", player: null },
        { used: false, color: "white", player: null },
        { used: false, color: "white", player: null },
        { used: false, color: "white", player: null },
        { used: false, color: "white", player: null },
        { used: false, color: "white", player: null },
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
