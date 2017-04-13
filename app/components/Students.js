import React from 'react';

export default function Students (props) {

  const students = props.students;

  return (
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {
          students && students.map(student => (
            <tr key={student.id}>
              <td>{ student.name }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
