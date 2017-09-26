import React from "react"
import Card from "./card"
import "./card.css"
import Counter from "./counter"


const photos = [                                            //array of photos
  "/images/dog1.jpeg",
  "/images/dog2.jpeg",
  "/images/dog3.jpeg",
  "/images/dog4.jpeg",
  "/images/dog5.jpeg",
  "/images/dog6.jpeg",
    "/images/dog7.jpeg",
      "/images/dog8.jpeg",
  ]

class Game extends React.Component {      // class with react libary functionality

  constructor(props)              //  game is initialized
  {
    super(props)                  //makes sure that react compontent get initialized
    this.state = {
      cards: this.setupGame()
    }
  }

    setupGame = () => {
      const dupblicatedPhotos = photos.concat (photos)

      return this.shuffleArray (
        dupblicatedPhotos.map(photoUrl => {

      return {
        src: photoUrl,
        isFlipped: false,
        isMatched: false
      } // object for each photo

      })
    )
    }

    shuffleArray(array) {
   let i = array.length - 1;
   for (; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     const temp = array[i];
     array[i] = array[j];
     array[j] = temp;
   }
   return array;
 }

    renderCard = (something) => {
      return <Card src={something.src} />
    }
    render ()  {
      return (
        <div className="game">
        <h1> MEMORY GAME</h1>
      {this.state.cards.map(this.renderCard)}
        </div>
      )
    }
  }

  export default Game
