import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import colors from '../../../data/colors.js'
// import { Redirect } from 'react-router-dom'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      redirect: false,
      selectedColor: colors[4]
    };

    this.toggle = this.toggle.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  colorBeforeToggelModal(event) {
    let color = this.getColorFromButton(event)
    this.setState({
      colorName: 'This is ' + color.value,
      colorClass: `text-${color.key}` + (color.requireDarkBg ? ' bg-dark' : ''),
      selectedColor: color
    })
    this.toggle();
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  redirect() {
    let path = '/task-two/coloring/' + this.state.selectedColor.key
    this.props.history.push(path);
  }

  getColorFromButton(event) {
    let index = event.target.getAttribute('index')
    if (!index) {
      index = 4
    }

    return colors[index]
  }

  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="row mb-3">
          <div className="col-12">
            <h3>Task Two: Router</h3>
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
              <h6 className="card-title">COLORING BUTTONS:</h6>
              <hr/>
              {
                colors.map(function (item, index) {
                  return <Button key={index} index={index} className="m-3 btn-lg" color={item.key} onClick={(e) => this.colorBeforeToggelModal(e)}>{item.value}</Button>
                }, this)
              }
              <Modal isOpen={this.state.isOpen} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>React Learning Modal</ModalHeader>
                <ModalBody className={this.state.colorClass}>
                  {this.state.colorName}
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggle}>Close</Button>
                </ModalFooter>
              </Modal>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
              <h6 className="card-title">REDIRECT BUTTONS:</h6>
              <hr/>
              {/* {
                colors.reverse().slice(0, 2).map(function (item, index) {
                  return <Button key={index} className="m-3 btn-lg" color={item.key} onClick={this.redirect}>{item.value}</Button>
                }, this)
              } */}
              {
                colors.slice(0, 2).map(function (item, index) {
                  return <Button key={index} className="m-3 btn-lg" color={item.key} onClick={this.redirect}>{item.value}</Button>
                }, this)
              }
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
