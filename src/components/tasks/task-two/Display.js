import React from 'react'
import colors from '../../../data/colors.js'
import { Jumbotron, Button } from 'reactstrap'

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.redirectBack = this.redirectBack.bind(this);
  }

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

  redirectBack() {    
    this.props.history.push('/task-two');
  }

  render() {
    return (<div className="container mt-5 pt-5">
              <div className="row mb-3">
                <div className="col-12">
                  <Jumbotron>
                      <h1 className="display-3">{this.getText()}</h1>
                  </Jumbotron>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-4">
                <Button className="m-3 btn-lg" color="info" onClick={this.redirectBack}>Back</Button>
              </div>
            </div>
          </div>)
    }
}

export default Display
