import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchMovie, setLoading} from "../actions/searchActions"
import Spinner from '../Spinner';
import {Link} from "react-router-dom"


class Movie extends Component {
   componentDidMount() {
       this.props.fetchMovie(this.props.match.params.id)
       this.props.setLoading();
   }
    render() { 
        const {isLoading, movie} = this.props;

        const movieInfo = (<div className="container">
            <div className="row mt-3">
            <div className="col-md-4 card card-body bg-dark">
                <img src={movie.Poster} alt="movie poster" className="thumbnail"/>
            </div>
            <div className="col-md-8">
                <h2 className="mb-4">{movie.Title}</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Genre:</strong> {movie.Genre}
                    </li>
                    <li className="list-group-item">
                        <strong>Writer:</strong> {movie.Writer}
                    </li>
                    <li className="list-group-item">
                        <strong>Released:</strong> {movie.Released}
                    </li>
                    <li className="list-group-item">
                        <strong>Rated:</strong> {movie.Rated}
                    </li>
                    <li className="list-group-item">
                        <strong>IMDBRating:</strong> {movie.imdbRating}
                    </li>
                    <li className="list-group-item">
                        <strong>Runtime:</strong> {movie.Runtime}
                    </li>
                    <li className="list-group-item">
                        <strong>Director:</strong> {movie.Director}
                    </li>
                    <li className="list-group-item">
                        <strong>Actors:</strong> {movie.Actors}
                    </li>
                </ul>
            </div>
        </div>

        <div className="row">
            <div className="card card-body bg-lght text-dark my-5">
                <div className="col-md-12">
                <h3>About the movie</h3>
                {movie.Plot}
                <hr />
                <a href={"https://www.imdb.com/title/" + movie.imdbID} target="_blank" rel="noopener noreferrer" className="btn btn-info">
                    View on IMDB
                </a>
                <Link to="/" className="btn btn-default text-dark">
                    Go Back
                </Link>
                </div>

            </div>

        </div>
        </div>)
        const content = isLoading ? <Spinner /> : movieInfo;
        return ( 
            <div>
                {content}
            </div>
            
         );
    }
}
const mapStateToProps = state => ({
    isLoading: state.movies.isLoading,
    movie: state.movies.movie
} )

export default  connect(mapStateToProps, {fetchMovie, setLoading})(Movie); 