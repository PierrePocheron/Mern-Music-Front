import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showArtisteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artiste: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/artistes/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showArtisteDetails-API-response: " + res.data);
        this.setState({
          artiste: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowArtisteDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/artistes/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowArtisteDetails_deleteClick");
      })
  };


  render() {

    const artiste = this.state.artiste;
    let ArtisteItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ artiste.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ artiste.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{ artiste.isbn }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{ artiste.publisher }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ artiste.published_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ artiste.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowArtisteDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Artiste List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Artiste's Record</h1>
              <p className="lead text-center">
                  View Artiste's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { ArtisteItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,artiste._id)}>Delete Artiste</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-artiste/${artiste._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Artiste
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Artiste</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Artiste</button> */}

        </div>
      </div>
    );
  }
}

export default showArtisteDetails;