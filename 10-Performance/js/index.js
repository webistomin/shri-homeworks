window.addEventListener('DOMContentLoaded', () => {
    const multimediaScript = document.createElement('script');
    multimediaScript.setAttribute('src','./js/multimedia.js');
    const buttonsContainer = document.querySelector('.buttons-wrap');

    buttonsContainer.innerHTML = '<button class="button button_yellow" type="button">Да</button>' +
        '<button class="button">Нет</button>';
    
    document.querySelector('.multimedia').appendChild(multimediaScript);
});
