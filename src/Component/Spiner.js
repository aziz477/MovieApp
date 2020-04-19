import Loader from 'react-loader-spinner';
import React from "react";


  const Spinner =(props)=> {
    //other logic

        return(
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={5000} //5 secs

            />
        );
    }
;export default Spinner