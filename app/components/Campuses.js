import React from 'react';
import {Link} from 'react-router';

export default function Campuses (props) {

  const campuses = props.campuses;
  const selectCampus = props.selectCampus;

  return (
    <div>
      <h3>Campuses</h3>
      <div className="row">
        {
          campuses.map(campus => (
            <div className="col-xs-4" key={ campus.id }>
              <a className="thumbnail" href="#" onClick={() => selectCampus(campus.id)}>
                <img src={ campus.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ campus.name }</span>
                  </h5>
                  <small>{ campus.students.length } students</small>
                </div>
              </a>
            </div>
          ))
        }
      </div>
    </div>
  );
};
