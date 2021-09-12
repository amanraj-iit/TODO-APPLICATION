 let todos = [{
    name:"DD seminar",
    complete: false,
},{
    name:"webinar at 4pm",
    complete: true
},{
    name: "Check Discord",
    complete: false
}];

new Vue({
    
    el:`#app`,

   
    template:"#app-template",

    
    data:()=>(
        {
            todos,
            text:``,
            showComplete:true,
        }
    ),

 
    computed:{

       
        filteredTodos(){
            return this.todos
                .filter(todo=>this.showComplete ? true : !todo.complete);
        },

      
        submitIsDisabled(){
            return this.text == "";
        }
    },

   
    methods:{
        
        addTodo(){
            todos.push({
                name:this.text,
                complete:false
            });

         
            this.text = ``;
        },
    }
});