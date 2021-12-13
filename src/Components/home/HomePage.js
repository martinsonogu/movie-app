import React, { Component } from 'react';
import SearchFeature from './SearchFeature';
import {connect} from "react-redux"
import Spinner from "../Spinner"
import MoviesContainer from "./MoviesContainer"


class HomePage extends Component {
    
    render() { 
       const {isLoading} =  this.props;
        return ( 
            <div className="container">
                <SearchFeature />
                {isLoading ? <Spinner /> : <MoviesContainer />  }
                
            </div>
         );
    }
}

const mapStateToProps = state => ({
    isLoading: state.movies.isLoading
})
 
export default connect(mapStateToProps) (HomePage);