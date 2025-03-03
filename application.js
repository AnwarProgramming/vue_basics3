
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
    },
    beforeCreate: function(){
        console.log("component beforeCreate");
    },
    created: function(){
        console.log("component created");
    },
    beforeMount: function() {
        console.log("component beforemount");
    },
    mounted: function() {
        console.log("component mounted");
    },
    beforeUpdate: function() {
        console.log("component beforeUpdate");
    },
    updated: function() {
        console.log("component updated");
    },
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
    },
    beforeCreate: function(){
        console.log("app beforeCreate");
        console.log(this.global_count);
    },
    created: function(){
        console.log("app created");
        console.log(this.global_count);
    },
    beforeMount: function() {
        console.log("app beforemount");
    },
    mounted: function() {
        // fetch data from backend(most of the poeple fetch data here)
        console.log("app mounted");
        console.log(this.$el);
    },
    beforeUpdate: function() {
        console.log("app beforeUpdate");
    },
    updated: function() {
        console.log("app updated");
    },

})