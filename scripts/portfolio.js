// slider portfolio

const sliderPortfolio = document.querySelector('.slider-portfolio');
const srcEnCoursSlider = document.querySelector('.img-visible-slider');
const allPicPortfolio = Array.from(document.querySelectorAll('.grid-item img'))
console.log(allPicPortfolio);
const rightPortfolio = document.querySelector('.btn-right');
const leftPortfolio = document.querySelector('.btn-left');
const fermerSlide = document.querySelector('.btn-fermer-slider')


let photoEnCours;
let indexEnCours;

allPicPortfolio.forEach(item => {
    item.addEventListener('click', (e) => {
        sliderPortfolio.style.display = 'block';
        srcEnCoursSlider.src = e.target.src;
        photoEnCours = e.target;
        indexEnCours = allPicPortfolio.indexOf(photoEnCours);
    })
})

rightPortfolio.addEventListener('click', () => {

    if(indexEnCours === 11){
        indexEnCours = 0;
        srcEnCoursSlider.src = allPicPortfolio[indexEnCours].src;
        photoEnCours = allPicPortfolio[indexEnCours];
        return;
    }
    srcEnCoursSlider.src = allPicPortfolio[indexEnCours + 1].src;
    photoEnCours = allPicPortfolio[indexEnCours + 1];
    indexEnCours = allPicPortfolio.indexOf(photoEnCours);
})

leftPortfolio.addEventListener('click', () => {

    if(indexEnCours === 0){
        indexEnCours = 11;
        srcEnCoursSlider.src = allPicPortfolio[indexEnCours].src;
        photoEnCours = allPicPortfolio[indexEnCours];
        return;
    }
    srcEnCoursSlider.src = allPicPortfolio[indexEnCours - 1].src;
    photoEnCours = allPicPortfolio[indexEnCours - 1];
    indexEnCours = allPicPortfolio.indexOf(photoEnCours);
})

fermerSlide.addEventListener('click', () => {
    sliderPortfolio.style.display = 'none';
})