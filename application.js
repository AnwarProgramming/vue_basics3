
Vue.component('message-board', {
    props:['title'],
    template: `
    <div>
    <h4>{{title}}</h4>        <!-- this title is title of message board in html page -->
    Your name : <input type="text" v-model="visitor_name"><br>
    Your message : <input type="text" v-model="visitor_message"><br>
    <button v-on:click="sayHi">Say Hi</button> <!--v-on:click="sayHi" here sayHi is a method -->

    <ul>
        <li v-for="message in messages">{{message["visitor_name"]}} : {{message["visitor_message"]}}</li>
    </ul>
    </div>
    `,
    data: function () {
        return {
            visitor_name: "",
            visitor_message: "",
            messages: []
        }
    },
    methods: {
        sayHi: function () { // When someone clicks on say hi it triggers the function
            this.messages.push({ 
                "visitor_name": this.visitor_name,
                "visitor_message": this.visitor_message
            });
            this.visitor_name = "";
            this.visitor_message = "";
            this.$emit("add-to-global-total");
        },
    },
    computed: {
        count: function () {
            return this.messages.length; // This will return length of the visitors array
        }
    }
})


var app = new Vue({
    el: "#app", //el is id of the html tag
    data: {
        global_count : 0,
    },
    methods:{
        count_global: function(){
            this.global_count += 1;
        }
    }
})