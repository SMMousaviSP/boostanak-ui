import React from 'react';


class File extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let file = this.props.file;
    return(
      <div>
        <span>{file.name}</span>
      </div>
    );
  }
}

export default File;
