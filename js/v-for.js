// v-for.js
// =========================================
// Scott Lambert
// https://github.io/sdlambert
//
// A simple demonstration of the v-for
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
			products: [
				{name: "Brother MFC-J6925DW"},
				{name: "HP Officejet X576dw"},
				{name: "HP Deskjet 3630"},
				{name: "Canon Maxify MB5320"},
				{name: "Epson WorkForce Pro WF-4630"}
			]
		}
	});
}

window.addEventListener("load", start);