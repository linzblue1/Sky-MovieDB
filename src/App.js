/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import './App.css';
import logo from "./images/PAXMDB.svg";
import Movie from './components/Movie';


class App extends Component {

  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=9e0f685feeb8c6b73e1db5af73029cec&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();

      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map(movie => (<Movie key={movie.id} movie={movie} />))}
      </div>
    );
  }
}

export default App