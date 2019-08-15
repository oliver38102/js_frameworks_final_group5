import React, { useEffect} from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

function Destroy(props){
    useEffect(() => {
        Axios.post("/api/pets/destroy",{ 
        id: props.match.params.id})
    }, [props])

    return <Redirect to="/"/>
}

export default Destroy