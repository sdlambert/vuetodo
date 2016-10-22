// v-on.js
// =========================================
// Scott Lambert
// https://github.io/sdlambert
//
// A simple demonstration of the v-on
// directive in Vue.js.
//
// Based off a tutorial by Ayo Isaiah
// https://ayoisaiah.com/vuejs-todolist-app/
// =========================================

"use strict";

function start() {
	new Vue({
		el: "#main",
		data: {
			location: "Albany, NY"
		},
		methods: {
			alertLocation: function() {
				alert("You are located in " + this.location);
			}
		}
	});
}

window.addEventListener("load", start);