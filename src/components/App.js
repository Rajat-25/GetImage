import React, { Component } from 'react';
import Input from './Input';
import GetImage from './GetImage';
import Pagination from './pagination/Pagination';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    searchText: '',
    imgArr: [],
    currPage: 1,
    imagesArr: [],
  };

  setSearchText = (term) => {
    this.setState(
      { searchText: term, currPage: 1, imgArr: [], imagesArr: [] },
      () => {
        this.searchImage(term);
      }
    );
  };

  searchImage = async (term) => {
    const { currPage, imagesArr } = this.state;
    const url = 'https://api.unsplash.com/search/photos';
    const client_id = process.env.REACT_APP_CLIENT_ID;

    const response = await axios.get(
      `${url}?page=${currPage}&query=${term}&client_id=${client_id}`
    );
    const responseArr = response.data.results;
    const newArr = [];

    if (currPage === 1 && imagesArr.length < 1) {
      newArr.push(responseArr);
      this.setState({
        imagesArr: newArr,
      });
    } else if (currPage > imagesArr.length) {
      imagesArr.forEach((e) => newArr.push(e));
      newArr.push(responseArr);
      this.setState({
        imagesArr: newArr,
      });
    }
    this.setState({ imgArr: responseArr });
  };

  changePage = (page, newArr) => {
    this.setState({ currPage: page, imagesArr: newArr }, () =>
      this.searchImage(this.state.searchText)
    );
  };

  goToCurr = (pageNo) => {
    this.setState({ currPage: pageNo }, () => {
      this.searchImage(this.state.searchText);
    });
  };

  render() {
    const { imagesArr, imgArr, currPage } = this.state;
    return (
      <div className='main'>
        <Input setSearchText={this.setSearchText} />
        <GetImage imgArr={imgArr} />
        {imagesArr.length > 0 ? (
          <Pagination
            changePage={this.changePage}
            pageNo={currPage}
            imagesArr={imagesArr}
            goToCurr={this.goToCurr}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
