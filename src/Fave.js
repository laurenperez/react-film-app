import React, { Component } from 'react'

class Fave extends Component {
  constructor(props){
    super(props)
  }


  handleFaveClick = (e) => {
    e.stopPropagation();
    this.props.onFaveToggle()
    console.log("I've been clicked!");
  }

  render() {

    const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'

    return (
      <div className={'film-row-fave ' + isFave}  onClick={this.handleFaveClick}>
        <p className="material-icons">{isFave}</p>
      </div>
    )
  }
}


export default Fave;
