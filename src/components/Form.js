import React, { Component } from 'react';

class Form extends Component {
  state = {
    term: ''
  }

  handleChange = (event) => {
    this.setState({ term: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <h3 className="text-4xl text-center font-bold text-red-600 mb-10">Video Stats</h3>
        <form className="w-full max-w-xl mx-auto" onSubmit={this.handleSubmit}>
          <div className="flex items-center border-b-2 border-red-700 py-2">
            <input
              className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter the Video ID"
              value={this.state.term}
              onChange={this.handleChange}
            />
            <button
              className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
