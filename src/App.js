import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MoviePage from "./Component/MoviePage";
import Spinner from "./Component/Spiner";




class App extends React.Component{



    render() {



        return (
            <div className="App">
                <Spinner/>
                <MoviePage/>

            </div>
        );
    }

    }

export default App;
