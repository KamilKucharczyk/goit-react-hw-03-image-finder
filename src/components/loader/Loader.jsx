import React, { Component } from 'react';

import { DNA } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
}

export default Loader;
