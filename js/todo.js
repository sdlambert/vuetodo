// todo.js
// =========================================
// Scott Lambert
// https://github.io/sdlambert
//
// A simple to-do app written using Vue.js
//
// Based off a tutorial by Ayo Isaiah
// https://ayoisaiah.com/vuejs-todolist-app/
// =========================================

"use strict";

function start() {
	new Vue({
		el: "#todo",
		data: {
			test: "Woohoo!"
		}
	});
}

window.addEventListener("load", start);