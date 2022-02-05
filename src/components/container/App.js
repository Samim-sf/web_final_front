import React, {Fragment} from "react";
import Header from "../common/Header";
import MovieCard from "../movie/MovieCard";
import AddMovieInfo from "../movie/AddMovieInfo";
import {Route, Switch} from 'react-router-dom';
import UpdateMovieInfo from "../movie/UpdateMovieInfo";

function App() {
    return (
        <Fragment>
            <Header/>
            <div className="d-flex justify-content-center">
                <Switch>
                    <Route path="/" exact component={MovieCard}/>
                    <Route path="/add-movie" exact render={()=> <AddMovieInfo />}/>
                    <Route path="/edit-movie" exact render={()=> <UpdateMovieInfo movieName="asf" releaseYear="gdse" desc="asgfdgdf" />}/>
                </Switch>
            </div>
        </Fragment>
    );
}

export default App;
