import React from 'react'
import { Button } from 'reactstrap'
import colors from '../../../data/colors.js'
import { increaseCounter, decreaseCounter } from '../../../actions'
import { connect } from 'react-redux'

class Main extends React.Component {
  constructor(props) {
    super(props)
        
    this.increase = this.increaseCounter.bind(this)
    this.decrease = this.decreaseCounter.bind(this)
  }

  increaseCounter() {
    this.props.increaseCounter(this.props.count)    
  }

  decreaseCounter() {    
    this.props.decreaseCounter(this.props.count)    
  }

  redirect(event) {
    console.log(event.target)
    let path = '/task-three/display-counter/' + event.target.getAttribute('colorkey')
    this.props.history.push(path)
  }

  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="row mb-3">
          <div className="col-12">
            <h3>Task Three: Redux</h3>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-4">
            <h6 className="card-title">OBJECTIVES:</h6>
            <hr/>
            <ol>
              <li>Alot</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
              <h6 className="card-title">INCREMENT BUTTONS:</h6>
              <hr/>
              {
                colors.slice(2, 4).map(function (item, index) {
                  return <Button key={index} index={index} className="m-3 btn-lg" color={item.key} onClick={index === 0 ? this.increase : this.decrease}>{item.value}</Button>
                }, this)
              }
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
              <h6 className="card-title">REDIRECT BUTTONS:</h6>
              <hr/>
              {
                colors.slice(0, 2).map(function (item, index) {
                  return <Button key={index} colorkey={item.key} className="m-3 btn-lg" color={item.key} onClick={(e) => this.redirect(e)}>{item.value}</Button>
                }, this)
              }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    count: state.count
  })
 }


export default connect(mapStateToProps, { increaseCounter, decreaseCounter })(Main)
