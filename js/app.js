
const { createApp } = Vue

  createApp({
    data() {
      return {
        newTask:'',
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
    },
    methods:{
        removeTodo(todo,i){
            this.todos.splice(i,1)
        },
        addTask(){
            console.log(this.newTask)
            if(this.newTask !== ''){
                this.newTask ={
                    text: this.newTask,
                    done: false,
                }
            }
            this.todos.push(this.newTask)
            this.newTask = '';
        },
        doit(todo){
            if(todo.done === false){
                todo.done = true;
            }else{
                todo.done = false;
            }
        }
    }
 }).mount('#app')
