let deck = {};

var cardorder = 5;

httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = () => {

  if (httpRequest.readyState == XMLHttpRequest.DONE) {

    let response = JSON.parse(httpRequest.response);

    if (response.success) {

      deck.id = response.deck_id;

    }

    getTwoCards();

  }

};

httpRequest.open(

  'GET',

  'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

);

httpRequest.send();

function getTwoCards() {

  let cardHttpRequest = new XMLHttpRequest();

  cardHttpRequest.onreadystatechange = () => {

    if (cardHttpRequest.readyState == XMLHttpRequest.DONE) {

      let response = JSON.parse(cardHttpRequest.response);

      if (response.success) {

        // display them to html

        document.getElementById('card1').src = response.cards[0].image;

        document.getElementById('card2').src = response.cards[1].image;

        document.getElementById('card3').src = response.cards[2].image;

        document.getElementById('card4').src = response.cards[3].image;

        document.getElementById('card' + cardorder).src = response.cards[cardorder - 1].image;

      }

    }

  };

  cardHttpRequest.open(

    'GET',

    `https://deckofcardsapi.com/api/deck/${deck.id}/draw/?count=20`

  );

  cardHttpRequest.send();

}

function hitme(){

  

  let cardHttpRequest = new XMLHttpRequest();

  cardHttpRequest.onreadystatechange = () => {

    if (cardHttpRequest.readyState == XMLHttpRequest.DONE) {

      let response = JSON.parse(cardHttpRequest.response);

      console.log(response);

      if (response.success) {

        $(".flex").append(`<img id="card${cardorder}" src="${response.cards[0].image}">`);
      
      }

    }

  };

  cardHttpRequest.open(

    'GET', 

    `https://deckofcardsapi.com/api/deck/${deck.id}/draw/?count=1`

  );

  cardHttpRequest.send();
  
  

}

function hitme2(){

  

  let cardHttpRequest = new XMLHttpRequest();

  cardHttpRequest.onreadystatechange = () => {

    if (cardHttpRequest.readyState == XMLHttpRequest.DONE) {

      let response = JSON.parse(cardHttpRequest.response);

      console.log(response);

      if (response.success) {

        $(".flex2").append(`<img id="card${cardorder}" src="${response.cards[0].image}">`);
      
      }

    }

  };

  cardHttpRequest.open(

    'GET', 

    `https://deckofcardsapi.com/api/deck/${deck.id}/draw/?count=1`

  );

  cardHttpRequest.send();
  
  

}