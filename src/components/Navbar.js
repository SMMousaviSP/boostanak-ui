import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let scheme = this.props.scheme;
    let list = [];
    scheme.files.forEach(function(file, index) {
      list.push(
        <li key={index} class="nav-item active">
          <Link class="nav-link" to={file.name}>{file.name}</Link>
        </li>
      );
    });

    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <Link class="navbar-brand" to="">Boostanak</Link>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            {list}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
