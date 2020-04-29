Vue.component("button-counter", {
	data: function() {
		let obj = {
			counter:0,
			clicked: () => {
				++this.counter
			}
		}
		return obj;
	},
	template: "<button v-on:click=\"clicked\">{{ counter }} Times Pressed</button>"
})

const app = new Vue({
	el: "#app",
	data : function(){
		return {
			myData:"Super cool VueJS web app",
			info:"Made with ❤️ by Harshit Joshi on 29 Sept 2020"
		}
	}
})