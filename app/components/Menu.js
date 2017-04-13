import React from 'react';
import { Link } from 'react-router';

export default function Menu (props) {

  return (
    <menu>
      <section>
        <h4 className="menu-item">
          <Link to='/'>home</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/students'>students</Link>
        </h4>
      </section>
    </menu>
  );
}
