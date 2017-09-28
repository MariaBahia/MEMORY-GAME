import React from "react"
import Card from "./card"
import "./card.css"
import Counter from "./counter"
//var shuffle = require('shuffle-array')
import shuffle from "shuffle-array"
//const uuidv4 = require('uuid/v4');
import uuidv4 from "uuid/v4"

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
      return shuffledPhotos.map((photoUrl ) => ({                                                         //shuffle functionality
              id:uuidv4(),
              key: uuidv4(),                                                     // card object for each photo
              src: photoUrl,
              isFlipped: false,
              isMatched: false
          }))
    }

//new function which will take one argument, a "whatever"
      handleCardClick = (whatever) => {
          alert("Du har klickat > ID " +whatever)
    }


      render ()  {
        return (
          <div className="game">
          <h1> MEMORY GAME</h1>
          {this.state.cards.map(this.renderCard)}
          </div>
      )
    }


// create a new instance of the Card component. with the following props:
// src : the url of the photo for the card
// onClicked: a callback function which the card can invoke when it is clicked
// so it can use this.props.src
// this will call the "onclick" function which was passed into the card
//as a prop from the Game component
// key: an unique identifier for react to use when rendering from an array
// id: an unique identifier we can use to refer to this card later
        renderCard = (card) => {
          return <
          Card src={card.src} key={card.key} id={card.id}  isFlipped= {card.isFlipped} onClick={this.handleCardClick}
//Card src={card.src} key={card.key} id={card.id}  onClick={this.handleCardClick}
        />
      }

  }

  export default Game
