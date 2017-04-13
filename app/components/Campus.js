import React from 'react';
import StudentContainer from '../containers/StudentsContainer';

export default function Campus (props) {

  const campus = props.selectedCampus;

  return (
    <div className="campus">
      <div>
        <h3>{ campus.name }</h3>
        <img src={ campus.imageUrl } className="img-thumbnail"/>
      </div>
      <StudentContainer students={campus.student} />
    </div>
  );
}
