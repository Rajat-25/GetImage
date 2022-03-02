import React, { Component } from 'react';
import GetImage from './GetImage';

class Input extends Component {
  state = {
    searchText: '',
  };

  onTextChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchText: value,
    });
  };

  sendSearchText = (e) => {
    e.preventDefault();
    const term = this.state.searchText;
    this.props.setSearchText(term);
  };

  render() {
    return (
      <form onSubmit={this.sendSearchText}>
        <div className='input-main'>
          <h3 className='input-header'>GetImage &nbsp;😃</h3>
          <div className='input'>
            <input
              className='input-feild'
              type='text'
              value={this.state.searchText}
              onChange={this.onTextChange}
              placeholder='Search Image... '
            />
            <button className='btn-search'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon-search'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Input;
