class StarRater extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    // 'Constrói' o Shadow DOM
    build() {
        const shadow = this.attachShadow({ mode: 'open' })

        shadow.appendChild(this.styles())

        const rater = this.createRater();
        this.stars = this.createStars();
        
        this.stars.forEach( (star) => {
            rater.appendChild(star)
        });

        this.resetRating();

        shadow.appendChild(rater);
    }

    // Define a div externa do componente
    createRater() {
        const rater = document.createElement('div')
        rater.classList.add('star-rater');

        rater.addEventListener('mouseout', this.resetRating.bind(this))

        return rater;
    }

    // Define os spans internos da div
    createStars(){
        const createStar = (_,id) => {
            const star = document.createElement('span');
            star.classList.add('star');
            star.setAttribute('data-value', Number(id) + 1);
            star.innerHTML = '&#9733';

            star.addEventListener('click', this.setRating.bind(this))
            star.addEventListener('mouseover', this.ratingHover.bind(this))

            return star;
        }
        
        return Array.from( {length : 5} , createStar);

    }

    resetRating(){
        this.currentRatingValue = this.getAttribute('data-rating') || 0
        this.hightlightRating();
    }

    setRating(event) {

        // Define o atributo 'data-rating' do objeto 'this' como 
        // o atributo 'data-value' do objeto que disparou o evento
        this.setAttribute('data-rating', event.currentTarget.getAttribute('data-value'));

    }

    ratingHover(event) {
        this.currentRatingValue = event.currentTarget.getAttribute('data-value')
        this.hightlightRating();
    }

    hightlightRating() {
        this.stars.forEach(star => {
            star.style.color = 
                star.getAttribute('data-value') <= this.currentRatingValue 
                ? 'gold' 
                : 'gray';
        })
    }

    // Define uma tag style com o CSS do componente
    styles() {
        const style = document.createElement('style')
        style.textContent = `
            .star-rater {
                background-color: lightgray;
                box-shadow: -3px 3px 0 gray;
                padding-left: 10px;
                padding-right: 10px;
            }
            .star {
                font-size: 40px;
                color: gray;
            }
        `
        return style
    }
}

// O nome da tag deve conter um '-'
customElements.define('star-rater', StarRater)