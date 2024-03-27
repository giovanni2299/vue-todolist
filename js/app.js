
const { createApp } = Vue

  createApp({
    data() {
      return {
        todos:[
            {
                text:'Fare la spesa',
                done:false,
            },
            {
                text:'Compare il cibo per cani',
                done:true,
            },
            {
                text:'Pagare i debiti',
                done:false,
            },
            {
                text:'Fare una poliza assicurativa sulla vita',
                done:true,
            },
            {
                text:'Non avvisare le autorità di competenza',
                done:false,
            },
            {
                text:'Preparare gli inviti al funerale',
                done:true,
            },
        ]

      }
    }
 }).mount('#app')
