import React from "react"


class Counter extends React.Component   {  // adds functionality from dictornary (react)

  state = {
count:10

  }

  handelButtonClick = () => {
  this.setState({ count: this.state.count +1})
  }

  handelButtonClickRemove = () => {
  this.setState({ count: this.state.count -2})
  }
render () {
return (

<div>
<button onClick={this.handelButtonClick}>ADD ME!</button>
Count:{this.state.count}
<button onClick={this.handelButtonClickRemove}>REMOVE ME!</button>
</div>
)
}
}

export default Counter
