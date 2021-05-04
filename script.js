const app= new Vue({

  el: '#app',
  data:{
    messaggio : "hello world!",
    classeColore : 'red',
    image : 'https://plb.s6img.com/society6/img/EUgSiL2eOCjhoggOpLb6NZqpF3U/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/b685c269e33c436bb51c294c3158e5de/~~/fdgdf-prints.jpg',

  },
  methods:{
    cambioColore(colore){
    this.classeColore = colore;
    },
    upTasto(event){
    console.log(event);
    }
  },
})