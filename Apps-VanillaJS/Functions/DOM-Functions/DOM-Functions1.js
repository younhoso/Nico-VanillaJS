(function(){
    var list = document.querySelectorAll('.list li');
    for(var i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function(){
            this.style.color = 'blue'
        });
    }
    


    var title = document.querySelector('.title');
    var clickedClass = "clicked";

    var handleClick = function(){
        title.classList.toggle(clickedClass)
        // var hasClass = title.classList.contains(clickedClass);
        // if(hasClass){
        //     title.classList.remove(clickedClass);
        // } else {
        //     title.classList.add(clickedClass);
        // } 
    };

    var init = function() {
        title.addEventListener('click', handleClick);
    };
    init();
})();