import React, { Component } from 'react';
import { searchMovie, fetchMovies, setLoading } from "../../Components/actions/searchActions"
import {connect} from "react-redux";

export class SearchFeature extends Component {

    handleChange = e => {
        this.props.searchMovie(e.target.value)
        
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }

    
    render() {   
       
        


        return ( 
            <div className="jumbotron mt-5 jumbotron-fluid bg-dark text-light text-center">
                <div className="container">
                    <h2 className="display-4 mb-5">
                        <i className="fa fa-film text-info"/> iMovie Hub
                    </h2>
                    <form id="searchForm" onSubmit={this.handleSubmit}>
                        <input 
                        type="text" 
                        className="form-control mb-3" 
                        name="searchText" 
                        placeholder="Search movie, drama or series"
                        onChange={this.handleChange} />

                        <button type="submit" className="btn btn-info text-dark btn-bg btn-lg mt-3" >Search</button>

                    </form>
                </div>

            </div>
         );
    }
}

const mapStateToProps = state => ({
text: state.movies.text,
movies: state.movies
});
 
export default connect(
    mapStateToProps,
    {searchMovie, fetchMovies, setLoading})(SearchFeature);