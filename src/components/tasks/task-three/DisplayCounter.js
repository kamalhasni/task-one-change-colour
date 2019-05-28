import React from 'react'
import { Jumbotron, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { setCounter } from '../../../actions'

class DisplayCounter extends React.Component {
  constructor(props) {
    super(props);
    this.redirectBack = this.redirectBack.bind(this);
  }

  getColor() {
    const { match: { params } } = this.props

    if (params.newCounter) {
      return 'text-warning'
    } else {
      return 'text-' + params.colorKey
    }
  }

  getText() {
    const { match: { params } } = this.props

    if (params.newCounter) {
      this.props.setCounter(params.newCounter)
      return params.newCounter
    } else {
      return this.props.count
    }
  }

  redirectBack() {
    this.props.history.push('/task-three');
  }

  render() {
    return (<div className="container mt-5 pt-5">
              <div className="row mb-3">
                <div className="col-12">
                  <Jumbotron className={this.getColor()}>
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

const mapStateToProps = (state) => {
  return ({
    count: state.count
  })
 }

export default connect(mapStateToProps, { setCounter })(DisplayCounter)
