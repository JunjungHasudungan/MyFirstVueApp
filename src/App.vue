<template>
    <!-- call components -->
    <shoes-list v-for="shoe in shoes" :key="shoe.id"
    :id= shoe.id
    :title="shoe.title"
    :image-url="shoe.imageUrl"
    :is-favorite="shoe.isFavorite"
    @favorite-toogle="favoriteToggle"
    ></shoes-list>
</template>

<script>
export default {
  data(){
    return{
      // data yang dimiliki parent
      shoes:[
        {
          id: 1,
          title: 'Adidas', 
          imageUrl: 'https://api.lorem.space/image/shoes',
          // add properties to handle like
          isFavorite: false
        }, 
        {
          id: 2,
          title: 'Air Walk', 
          imageUrl: 'https://api.lorem.space/image/shoes',
          isFavorite: false
        }, 
        {
          id: 3,
          title: 'Converse70s', 
          imageUrl: 'https://api.lorem.space/image/shoes',
          isFavorite: true
        }, 
        {
          id: 4,
          title: 'Vans', 
          imageUrl: 'https://api.lorem.space/image/shoes',
          isFavorite: false
        }, 
      ]
    }
  },
// registrasi methods
  methods: {
    // gunakan method yang dibuat dari child dan menggunakan parameter
    favoriteToggle(shoeId){
      // mencari shoe per item dari array shoes menggunakan method find
      let selectShoe = this.shoes.find(shoe => shoe.id === shoeId)

      selectShoe.isFavorite = !selectShoe.isFavorite
    }
  }
}
</script>