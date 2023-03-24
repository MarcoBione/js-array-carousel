/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.

Consigli del giorno:
1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
*/

/*
template html
`
<div class="img-box">
    <img src="./img/01.webp" alt="image">
</div>
`
*/
function myCarousel() {

    //next img
    function goNext() {
        //remove d-block from previous img
        document.querySelectorAll('.img-box')[currentCounter].classList.remove('d-block');
        //remove opacity 100
        document.querySelectorAll('.imgs')[currentCounter].classList.remove('opacity-100');

        if (currentCounter === imgContainer.length - 1) {
            currentCounter = 0;
        } else {
            currentCounter++;
        }

        //add d-block from previous img
        document.querySelectorAll('.img-box')[currentCounter].classList.add('d-block');
        //add opacity 100
        document.querySelectorAll('.imgs')[currentCounter].classList.add('opacity-100');
    }

    //previous img
    function goPrev() {
        //remove d-block from previous img
        document.querySelectorAll('.img-box')[currentCounter].classList.remove('d-block');
        //remove opacity 100
        document.querySelectorAll('.imgs')[currentCounter].classList.remove('opacity-100');

        if (currentCounter === 0) {
            currentCounter = imgContainer.length - 1;
        } else {
            currentCounter--;
        }

        //add d-block from previous img
        document.querySelectorAll('.img-box')[currentCounter].classList.add('d-block');
        //add opacity 100
        document.querySelectorAll('.imgs')[currentCounter].classList.add('opacity-100');
    }

    function startSlider() {
        let startCarouselSlider = setInterval(goNext, 1000);
    }

    function stopSlider() {
        let startCarouselSlider = clearInterval(goNext);
    }

    //img array
    let imgContainer = [
        'img/01.webp', //0
        'img/02.webp', //1
        'img/03.webp', //2
        'img/04.webp', //3
        'img/05.webp', //4
    ];
    //console.log(imgContainer.length);

    //initialize slider
    const slider = document.querySelector('.slider');

    //selector
    const selector = document.querySelector('.selector');

    //create element for html
    let carousel = '';
    let imgColumSelector = '';
    let currentCounter = 0;

    //stamp cycle
    for (let i = 0; i < imgContainer.length; i++) {
        carousel += `
    <div class="img-box">
        <img src="./${imgContainer[i]}" alt="character">
    </div>
    `
        imgColumSelector += `
    <div class="imgs opacity-25 border border-light">
        <img src="./${imgContainer[i]}" alt="character">
    </div>
    `
    }

    //stamp in html element w/class slider
    slider.innerHTML += carousel;

    //stamp in html element w/class selector
    selector.innerHTML += imgColumSelector;

    //add active class to img
    document.querySelectorAll('.img-box')[currentCounter].classList.add('d-block');
    document.querySelectorAll('.imgs')[currentCounter].classList.add('opacity-100');

    //add button listener
    const nextImg = document.querySelector('.next');
    const prevImg = document.querySelector('.prev');

    //click listener
    //next img
    nextImg.addEventListener('click', goNext);

    //previous img
    prevImg.addEventListener('click', goPrev);

    //const start = slider.addEventListener('mouseout', startSlider);
    //slider.addEventListener('mouseover', startSlider);


}


myCarousel();
















