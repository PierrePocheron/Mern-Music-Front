import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArtisteCard from './ArtisteCard';

class ShowArtisteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistes: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/artistes')
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
              <h2 className="display-4 text-center">Artistes List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-artiste" className="btn btn-outline-secondary float-right">
                + Add New Artiste
              </Link>
              <Link to="/" className="btn btn-outline-secondary float-left">
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