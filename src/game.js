import React from "react"
import Card from "./card"
import "./card.css"
import Counter from "./counter"
//var shuffle = require('shuffle-array')
import shuffle from "shuffle-array"

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

class Game extends React.Component {              // class with react libary functionality

  constructor(props)                                           //  game is initialized
  {
    super(props)                                                    //makes sure that react compontent get initialized
    this.state = {                                                //det som ligger i constructorn
      cards: this.setupGame()                             // värdet =array cards generates cards array from photos array
    }
  }

    setupGame = () => {
      const dupblicatedPhotos = photos.concat (photos)     // dublicate photo array = sätter ihop bilder med bilder
      const shuffledPhotos =shuffle(dupblicatedPhotos)
      return shuffledPhotos.map((photoUrl, index) => ({                                                         //shuffle functionality

                key: index,                                                     // card object for each photo
            src: photoUrl,
            isFlipped: false,
            isMatched: false

          }))
    }

    render ()  {
      return (
        <div className="game">
        <h1> MEMORY GAME</h1>
      {this.state.cards.map(this.renderCard)}
        </div>
      )
    }

      renderCard = (card) => {
        return <Card src={card.src} key={card.key}/>
      }

  }

  export default Game
