import React from 'react'
import { Button } from 'reactstrap';
import ModalColour from './modal';

class ColourChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colour: 'No colour Selected'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  ColourModalRef = ({toggle}) => {
    this.showModal = toggle;
  }
 
  handleClick = (event) => {
    console.log(event.target.getAttribute('id'));
    let color = this.getColours()[event.target.getAttribute('id')]
    this.setState({
      colour: color.value
    });
    this.showModal();
  }

  getColours() {
    return [{
      key: 'primary',
      value: 'Blue'
    }, {
      key: 'danger',
      value: 'Red'
    }, {
      key: 'warning',
      value: 'Yellow',
      requireDarkBg: true
    }, {
      key: 'light',
      value: 'White',
      requireDarkBg: true
    }, {
      key: 'dark',
      value: 'Black'
    },{
      key: 'info',
      value: 'Cloud Blue'
    }]
  }
 
  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="row mb-3">
          <div className="col-12">
            <h3>Task: Change Colour</h3>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <h6 className="card-title">OBJECTIVES:</h6>
            <hr/>
            <ol>
              {/* <li>To create first react app.</li> */}
              <li>To create components for the folowing items:</li>
                <ul>
                  <li>Modal</li>
                  <li>Buttons</li>
                </ul>
              <li>To change colour based on clicking buttons.</li>
            </ol>
          </div>
          <div className="col-md-8">
            <h6 className="card-title">RESULT:</h6>
            <hr/>
            {
              this.getColours().map(function (item, index) {
                return <Button key={index} id={index} className="m-3 btn-lg" color={item.key} onClick={(e) => this.handleClick(e)}>{item.value}</Button>
              }, this)                                
            }
            <ModalColour colour={ this.state.colour } title={ this.state.colour } ref={this.ColourModalRef} />
          </div>
        </div>
      </div>
    );
    
  }
}
export default ColourChange