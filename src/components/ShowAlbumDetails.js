import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showAlbumDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/albums/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showAlbumDetails-API-response: " + res.data);
        this.setState({
          album: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowAlbumDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/albums/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowAlbumDetails_deleteClick");
      })
  };


  render() {

    const album = this.state.album;
    let AlbumItem = <div>
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
            <td>{ album.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ album.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{ album.isbn }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{ album.publisher }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ album.published_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ album.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowAlbumDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Album List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Album's Record</h1>
              <p className="lead text-center">
                  View Album's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { AlbumItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,album._id)}>Delete Album</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-album/${album._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Album
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Album</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Album</button> */}

        </div>
      </div>
    );
  }
}

export default showAlbumDetails;