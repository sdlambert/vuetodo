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
		el  : "#todo",
		data: {
			newTask: "",
			taskList: []
		},
		computed: {
			allAreSelected: function() {
				return this.taskList.every(function(task) {
					return task.checked;
				}) && this.taskList.length > 0;
			}
		},
		methods: {
			addTask: function() {
				var task = this.newTask.trim();

				if (task) {
					this.taskList.push({
						text: task,
						checked: false
					});

					this.newTask = "";
				}
			},
			removeTask: function(task) {
				var index = this.taskList.indexOf(task);
				this.taskList.splice(index, 1);
			},
			clearList: function() {
				this.taskList = [];
			},
			selectAll: function() {
				var targetValue = this.allAreSelected ? false : true;
				for (var i = 0; i < this.taskList.length; i++) {
					this.taskList[i].checked = targetValue;
				}
			}
		}
	});
}

window.addEventListener("load", start);