var vm = new Vue({
  el: '#app',
  data: {
    title: 'To-Do App',
    styleheading: {
      color: "#41B883",
       fontSize: "50px"
    },
    styleList: {
      fontSize: "40px",
      color: "#41B883"
    },
    todos: [],
    todotext: ''
  },
  methods: {
    addItem: function () {
      var value = vm.todotext;
      vm.todos.push({
        item: vm.todotext
      });
      vm.todotext = '';
    },
    removeItem: function () {
      vm.todos = vm.todos.splice(1);
    }
  }

});
