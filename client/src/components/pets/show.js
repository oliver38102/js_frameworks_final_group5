import React, { useEffect, useState } from "react";
import Axios from "axios";

function Show(props) {
    const [pet, setPet] = useState([]);

    useEffect(() => {
        Axios.get(`/api/pets/${props.match.params.id}`)
        .then(result => setPet(result.data))
        .catch(err => console.log(err));
    }, [props]);

    return (
    <div className="container">
      <header>
        <h1>{pet && pet.name}</h1>
      </header>

      <div>
        {pet && pet.description}
      </div>
      <div>
        {pet && pet.age}
      </div>
      <div>
        {pet && pet.type}
      </div>
    </div>
  );
}

export default Show;