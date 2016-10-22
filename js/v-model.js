// vmodel.js
// =========================================
// Scott Lambert
// https://github.io/sdlambert
//
// A simple demonstration of the v-model
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
		}
	});
}

window.addEventListener("load", start);