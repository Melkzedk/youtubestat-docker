import React, { Component } from 'react';
import Tags from './metrics/Tags';
import Info from './metrics/Info';

class Results extends Component {
  render() {
    return (
      <div className="w-full container mx-auto mt-24">
        <div id="tags" className="px-2">
          <div className="flex flex-wrap -mx-2">
            <Tags tags={this.props.tags} />
            <Info
              title={this.props.title}
              channelTitle={this.props.channelTitle}
              views={this.props.views}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
