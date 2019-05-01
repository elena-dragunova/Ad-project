export default {
  state: {
    ads: [
      {
        title: 'First Ad',
        description: 'I am description',
        promo: false,
        imageSrc:
          'https://v1.vuetifyjs.com/static/doc-images/carousel/planet.jpg',
        id: 0
      },
      {
        title: 'Second Ad',
        description: 'I am description',
        promo: true,
        imageSrc:
          'https://v1.vuetifyjs.com/static/doc-images/carousel/sky.jpg',
        id: 1
      },
      {
        title: 'Third Ad',
        description: 'I am description',
        promo: true,
        imageSrc:
          'https://v1.vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
        id: 2
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({ commit }, payload) {
      payload.id = Math.random()

      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => ad.promo)
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
