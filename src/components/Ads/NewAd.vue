<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create New Ad</h1>
        <v-form ref="form" v-model="valid" validation class="mb-3">
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            v-model="title"
            required
            :rules="[v => !!v || 'Title is required']"></v-text-field>
          <v-textarea
            name="description"
            label="Description"
            type="text"
            v-model="description"
            required
            :rules="[v => !!v || 'Description is required']"></v-textarea>
        </v-form>

        <v-layout row>
          <v-flex xs12>
            <v-btn class="warning mb-3">Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>

            <img class="upload-image" src="">

            <v-switch
              color="primary"
              label="Ad to promo?"
              v-model="promo"
            ></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" class="success" @click="createAd">Create Ad</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        // logic
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: 'https://images.unsplash.com/photo-1506423456648-c11ccb27338d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80'
        }

        this.$store.dispatch('createAd', ad)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .upload-image {
    display: block;
    width: 250px;
    height: auto;
  }
</style>
