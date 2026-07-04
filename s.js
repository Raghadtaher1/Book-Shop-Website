function addHoverEffect() {

    const productCards = document.querySelectorAll('.product-card');



    productCards.forEach(card => {



        card.addEventListener('mouseover', () => {

            card.querySelector('h3').style.color = 'blue';

        });



        card.addEventListener('mouseout', () => {

            card.querySelector('h3').style.color = 'black';



        });

    });

}



addHoverEffect();

