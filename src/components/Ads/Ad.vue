<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img src="https://v1.vuetifyjs.com/static/doc-images/carousel/planet.jpg" class="ad-image"></v-img>
          <v-card-text>
            <h1 class="text--primary">lorem</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, unde.</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat class="warning">Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .ad-image {
    width: 100%;
    height: auto;
  }
</style>
