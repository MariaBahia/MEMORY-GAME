import React from "react"
import Card from "./card"
import "./card.css"
import Counter from "./counter"

const Game = () => (
<div className="game">
<h1> MEMORY GAME</h1>
<Counter/>
<Card src="/images/dog1.jpeg"/>
<Card src="/images/dog2.jpeg"/>
<Card src="/images/dog3.jpeg"/>
<Card src="/images/dog4.jpeg"/>
<Card src="/images/dog5.jpeg"/>
<Card src="/images/dog6.jpeg"/>
<Card src="/images/dog7.jpeg"/>
<Card src="/images/dog8.jpeg"/>
</div>
)

export default Game
