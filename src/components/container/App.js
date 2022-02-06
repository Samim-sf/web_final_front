import React, {Fragment} from "react";
import Header from "../common/Header";
import MovieCardAsGrid from "../movie/MovieCardAsGrid";
import AddNewMovie from "../movie/AddNewMovie";
import {Route, Switch} from 'react-router-dom';
import UpdateMovieInfo from "../movie/UpdateMovieInfo";
import MovieCardsGrid from "../movie/MovieCardsGrid";
import MovieCardAsList from "../movie/MovieCardAsList";
import UpdateMovieInfoHandle from "../movie/UpdateMovieInfoHandle";

function App() {
    return (
        <Fragment>
            <Header/>
            <div className="d-flex justify-content-center">
                <Switch>
                    <Route path="/" exact component={MovieCardsGrid}/>
                    {/*<Route path="/" exact component={()=> <MovieCardAsGrid id={1} movieName={"ge"} desc={"geasf"} releaseYear={"25"} posterUrl="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}/>*/}
                    {/*<Route path="/" exact component={()=> <MovieCardAsList id={1} movieName={"geg"} desc={"geasf"} releaseYear={"25"} posterUrl={""} />}/>*/}
                    <Route path="/add-movie" exact render={()=> <AddNewMovie />}/>
                    <Route path="/edit-movie/:id" exact render={(props)=> <UpdateMovieInfoHandle  {...props} />}/>
                </Switch>
            </div>
        </Fragment>
    );
}

export default App;
