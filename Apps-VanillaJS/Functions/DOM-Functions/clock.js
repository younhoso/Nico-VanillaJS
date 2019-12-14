(function(){
    var clockContainer = document.querySelector('.js-clock'),
        clockTitle = clockContainer.querySelector('h1');

    var getTime = function() {
        var date = new Date();
        var minutes = date.getMinutes();
        var hours = date.getHours();
        var seconds = date.getSeconds();
        clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
            minutes < 10 ? `0${minutes}` : minutes 
        } : ${seconds < 10 ? `0${seconds}` : seconds}`
    };

    var init = function() {
        getTime();
        setInterval(getTime, 1000);
    };

    init();
})();