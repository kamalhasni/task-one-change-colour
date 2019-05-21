import React from 'react'
import colors from '../../../data/colors.js'
import { Jumbotron } from 'reactstrap'

class Display extends React.Component {
  getText() {
    const { match: { params } } = this.props

    if (params.text) {
      return params.text
    } else {
      let color = colors.find(e => e.key === params.colorKey)

      if (color) {
        return color.value
      } else {
        return colors.find(e => e.isDefault).value
      }
    }    
  }

  render() {
    return (<div>
        <Jumbotron>
            <h1 className="display-3">{this.getText()}</h1>
        </Jumbotron>
      </div>)
    }
}

export default Display
