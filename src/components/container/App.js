import React, {Fragment, useState} from "react";
import Header from "../common/Header";
import AddNewMovie from "../movie/AddNewMovie";
import {Route, Switch} from 'react-router-dom';
import UpdateMovieInfoHandle from "../movie/UpdateMovieInfoHandle";
import SearchMovieCardsGrid from "../movie/SearchMovieCardGrid";
import MovieCards from "../movie/MovieCards";

function App() {
    const [isGrid, setIsGrid] = useState(true);
    const changeModel=(change)=>{
        setIsGrid(change);
    }
    return (
        <Fragment>
            <Header changeModel={changeModel}/>
            <div className="d-flex justify-content-center flex-wrap">
                <Switch>
                    <Route path="/" exact render={()=><MovieCards isGrid={isGrid}/>}/>
                    <Route path="/add-movie" exact render={() => <AddNewMovie/>}/>
                    <Route path="/edit-movie/:id" exact render={(props) => <UpdateMovieInfoHandle  {...props} />}/>
                    <Route path="/search-movie/:text" exact render={(props) => <SearchMovieCardsGrid  {...props} />}/>
                </Switch>
            </div>
        </Fragment>
    );
}

export default App;
