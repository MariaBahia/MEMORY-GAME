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
      return photos.map(photoUrl => {
      return {src: photoUrl, isFlipped: false, isMatched: false} // object for each photo

      })
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
