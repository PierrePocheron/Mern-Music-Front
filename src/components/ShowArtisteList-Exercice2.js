import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArtisteCard from './ArtisteCard-Exercice2';

class ShowArtisteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistes: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/artistes/exercice2')
      .then(res => {
        this.setState({
          artistes: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowArtisteList');
      })
  };


  render() {
    const artistes = this.state.artistes;
    console.log("PrintArtiste: " + artistes);
    let artisteList;

    if(!artistes) {
      artisteList = "there is no artiste record!";
    } else {
      artisteList = artistes.map((artiste, k) =>
        <ArtisteCard artiste={artiste} key={k} />
      );
    }

    return (
      <div className="ShowArtisteList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Artistes List - Exercice 2</h2>
              <h4 className="display-5 text-center">Order by artist's name ASC</h4>
            </div>

            <div className="col-md-11">
              <Link to="/create-artiste" className="btn btn-outline-danger float-right">
              ➕ Add New Artiste
              </Link>
              <Link to="/" className="btn btn-outline-danger float-left">
              ⬅️ Return
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {artisteList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowArtisteList;