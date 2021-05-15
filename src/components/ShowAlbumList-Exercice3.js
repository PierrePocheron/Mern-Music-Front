import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AlbumCard from './AlbumCard-Exercice3';

class ShowAlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/albums/exercice3')
      .then(res => {
        this.setState({
          albums: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowAlbumList');
      })
  };


  render() {
    const albums = this.state.albums;
    console.log("PrintAlbum: " + albums);
    let albumList;

    if(!albums) {
      albumList = "there is no album record!";
    } else {
      albumList = albums.map((album, k) =>
        <AlbumCard album={album} key={k} />
      );
    }

    return (
      <div className="ShowAlbumList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Albums List - Exercice 3</h2>
              <h4 className="display-5 text-center">Order by album's price ASC & album's name ASC</h4>
            </div>

            <div className="col-md-11">
              <Link to="/create-album" className="btn btn-outline-warning float-right">
              ➕ Add New Album
              </Link>

              <Link to="/" className="btn btn-outline-warning float-left">
              ⬅️ Return
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {albumList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowAlbumList;