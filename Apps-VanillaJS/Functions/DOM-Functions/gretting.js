(function(){
    var form = document.querySelector('.js-form'),
        input = form.querySelector('input'),
        greeting = document.querySelector('.js-greetings');

    var userLs = "currentUser",
        showing_cn = "showing";

    var saveName = function(text) {
        localStorage.setItem(userLs, text)
    };

    var paintGreeting = function(text) {
        form.classList.remove(showing_cn);
        greeting.classList.add(showing_cn);
        greeting.innerText = `Hello ${text}`
    }

    var handleSubmit = function(e){
        e.preventDefault();
        var currentValue = input.value;
        paintGreeting(currentValue);
        saveName(currentValue);
    }

    var askForNmae = function() {
        form.classList.add(showing_cn);
        form.addEventListener('submit', handleSubmit);
    };

    var loadNmae = function() {
        var currentUser = localStorage.getItem(userLs);
        if(currentUser === null){
            askForNmae();
        } else {
            paintGreeting(currentUser)
        }
    };

    var init = function() {
        loadNmae();
    };

    init();
})();