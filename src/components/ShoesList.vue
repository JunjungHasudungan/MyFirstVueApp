<template>
    <div class="border rounded shadow px-2 py-3">
        <h3 class="font-semibold text-xl px-2 py-2 text-center"> {{ title }} </h3>
        <div>
        <!-- cara 1  menggunakan tag image dan lakukan binding ke scr-->
            <!-- <img :src="imageUrl" alt="poster"> -->

            <!-- cara 2 menggunakan tag div menggunakan class bg-cover/bg auto, binding ke style tailwind css-->
            <div class="bg-contain bg-center h-52" :style="{backgroundImage: 'url('+ imageUrl + ')' }"></div>
            <!-- component button like -->
            <div class="py-2 pr-3">
            <!-- function on click yang sudah diregistrasi dichild -->
                <button @click="favoriteToggle"> 
                    <svg class="w-6 h-6"
                    :fill="isFavorite ? 'red' : 'none' " 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg" 
                    aria-hidden="true">
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         // object
    //         movies: {
    //             id: 1,
    //             title: 'Spider Man', 
    //             imageUrl: 'https://api.lorem.space/image/movie'
    //         }
    //     }
    // },

    // menggunakan props untuk mengambil data properti dari parent
    // props berguna untuk berkomunikasi properties parent ke child 
    props:
    // cara 1. deklarasi nama properties tanpa  dengan menggunakan array
 /*    [
        // dapat juga membuat secara detail
        'id', 'title', 'imageUrl'
    ] */
    // cara ke 2. deklarasi nama properties secara detail dengan menggunakan {} sebagai objek
    {
        id:{
            // menjelaskan key dan value pada properti yang digunakan
            type: Number,
            required: true 
        }, 
        title: {
            type: String,
            required: true
        }, 
        imageUrl: {
            type: String,
            required: true
        },
        isFavorite:{
            type: Boolean,
            required: true
        }
    }, 
    // registrasi emits
    emits: [
        'favorite-toogle'
    ],
    // registrasi methods
    methods:{
        // method yang ada di child
        favoriteToggle(){
            // komunikasi child ke parent
            this.$emit('favorite-toogle', this.id);
            // alert(this.title)
            // this.isFavorite = !this.isFavorite
        }
    }
}
</script>