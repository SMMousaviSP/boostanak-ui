import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Navbar, File } from './Components';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {scheme: require("../json/scheme.json")}
  }

  render() {
    let scheme = this.state.scheme;
    let route = [];
    scheme.files.forEach(function(file, index) {
      let exactPath = "/" + file.name;
      route.push(
        <Route
          exact path={exactPath}
          render={(props) => <File {...props} file={file} />}
        />
      );
    });
    return(
      <div>
        <Navbar scheme={scheme} />
        <Switch>
          {route}
        </Switch>
      </div>
    );
  }
}

export default Main;
