(function(){
    var toDoForm = document.querySelector('.js-toDoForm'),
        toDoInput = toDoForm.querySelector('input'),
        toDoList = document.querySelector('.js-toDoList');
    
    var ToDos_LS = 'toDos';
    var toDos = [];

    var saveToDos = function() {
        localStorage.setItem(ToDos_LS , JSON.stringify(toDos));
    };

    var paintToDo = function(text) {
         var li = document.createElement('li');
         var delBtn = document.createElement('button');
         var span = document.createElement('span');
         var newId = toDos.length + 1;
         delBtn.innerHTML = '❌';
         span.innerHTML = text;
         li.appendChild(span);
         li.appendChild(delBtn);
         li.id = newId;
         toDoList.appendChild(li);
         
         var toDoObj = {
            id: newId,
            text: text
         };
         toDos.push(toDoObj);
         saveToDos();
    };

    var handleSubmit = function(e) {
        e.preventDefault();
        var currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = '';
    };

    var loadToDos = function() {
        var loadedToDos = localStorage.getItem(ToDos_LS);
        if(loadedToDos !== null) {
            var parsedToDos = JSON.parse(loadedToDos);
            parsedToDos.forEach(function(toDo){
                paintToDo(toDo.text);
            });
        }
    };

    var init = function() {
        loadToDos();
        toDoForm.addEventListener('submit', handleSubmit)
    };

    init();


})();