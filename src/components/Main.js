import React from 'react';
import { Navbar } from './Components';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {scheme: require("../json/scheme.json")}
  }

  render() {
    let scheme = this.state.scheme;
    return(
      <div>
        <Navbar scheme={scheme} />
      </div>
    );
  }
}

export default Main;
