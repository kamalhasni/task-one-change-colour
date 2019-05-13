import React from 'react';
import ChangeColour from '../cards/change-colour';

function Content() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row mb-3">
        <div className="col-12">
          <h3><span class="glyphicon glyphicon-tasks"> </span> React.Js Tasks</h3>
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <ChangeColour />
        </div>
      </div>
    </div>
  );
}

export default Content;
