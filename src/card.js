import React from 'react'; // we need react to use react
import "./card.css"


// Defining a "card" component.
// That component is ineriting functions from React.component.

class Card extends React.Component {

  // render () is a required function for our component.
  // React will invoke this function when it mounts the component
  // Compontent needs a render function
   render (){   // render function definition. Not using the fat arrow.
     // render nees to return JSX.
     // JSX is basically HTML but yu use compontents as well
     // for exemple, when we render this card we do so in the
     // Game compontents by using <Card/>
     // Props become an object so, className="foo" becomes {className : "foo"}
     // on this.props, and onClick becomes { onClick () => {}}
    return(
      <div onClick={this.handleClick} className={this.setClassname()} >
      <img src={this.props.src} alt="hund"/>
        </div>
            )
  }

  // the function we call form onClick. we give it a name "handelClick"
  // and it takes no arguments

    handleClick = () => {
      this.props.onClick (this.props.id)
      console.log ("ÄGD!" )
    }

    // functinto return a diffrent class name when the props "isFlipped"
    // is true or false. it needs to return the correct value.
    // isFlipped is a boolen which will be toggled
    setClassname = () => {
      if (this.props.isFlipped){
        return ("card flipped")
      }
        else {
        return ("card notflipped")
    }
}
}

// to be able to use  import card from "./card", we need to export it.
export default Card
