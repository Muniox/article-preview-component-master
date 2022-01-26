//arrow and container
const arrow = document.getElementById('share-arrow');
const arrowContainer = document.getElementsByClassName('article__arrow-container');

//popup
const popup = document.getElementsByClassName('article__share');



arrowContainer[0].addEventListener('click', function() { 
    arrow.classList.toggle('article__arrow');
    arrowContainer[0].classList.toggle('article__arrow-container--active');
    popup[0].classList.toggle('article__share--active');
});
