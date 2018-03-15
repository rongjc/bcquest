import React from 'react'
import './Content.css'
class Content extends React.Component {
  constructor() {
    super() 
  }

  componentDidMount() {
    
  }

  _onSelectionChanged = () => {    
  }

  render() {
    return (
      <div className="container">
      {this.props.children}          

      </div>
    )
  }
}

export default Content