import React from 'react'
import tasks from '../data/tasks'
import MainCard from './MainCard'

class Home extends React.Component {
  render() {
    return (
      <div className="container mt-5 pt-5">
      <div className="row mb-3">
        <div className="col-12">
          <h3><span className="glyphicon glyphicon-tasks"> </span> React.Js Tasks</h3>
          <hr/>
        </div>
      </div>
      <div className="row">
        {
          tasks.map((item, index) => (
            <div key={item.id} className="col-md-4">
              <MainCard item={item}  />
            </div>
          ))
        }
      </div>
    </div>      
    );
  }
}

export default Home;
