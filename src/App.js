import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/index.js';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

import CreateAlbum from './components/CreateAlbum';
import ShowAlbumList from './components/ShowAlbumList';
import ShowAlbumDetails from './components/ShowAlbumDetails';
import UpdateAlbumInfo from './components/UpdateAlbumInfo';

import CreateArtiste from './components/CreateArtiste';
import ShowArtisteList from './components/ShowArtisteList';
import ShowArtisteDetails from './components/ShowArtisteDetails';
import UpdateArtisteInfo from './components/UpdateArtisteInfo';

import Exercice1 from './components/ShowAlbumList-Exercice1';
import Exercice2 from './components/ShowArtisteList-Exercice2';
import Exercice3 from './components/ShowAlbumList-Exercice3';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomePage} />

          <Route path='/books' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} />

          <Route path='/albums' component={ShowAlbumList} />
          <Route path='/create-album' component={CreateAlbum} />
          <Route path='/edit-album/:id' component={UpdateAlbumInfo} />
          <Route path='/show-album/:id' component={ShowAlbumDetails} />

          <Route path='/artistes' component={ShowArtisteList} />
          <Route path='/create-artiste' component={CreateArtiste} />
          <Route path='/edit-artiste/:id' component={UpdateArtisteInfo} />
          <Route path='/show-artiste/:id' component={ShowArtisteDetails} />

          <Route path='/exercice1' component={Exercice1} />
          <Route path='/exercice2' component={Exercice2} />
          <Route path='/exercice3' component={Exercice3} />
        </div>
      </Router>
    );
  }
}

export default App;
