import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit (props) {
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        Axios.get(`/api/pets/${props.match.params.id}`)
      .then(result => setInputs(result.data))
      .catch(err => console.error(err));
    }, [props]);

    function handleSubmit(event) {
        event.preventDefault();

        Axios.post("/api/pets/update", {id: props.match.params.id, ...inputs})
        .then(resp => setRedirect(true))
        .catch(err => console.error(err));
    }

    function handleInputChange(event) {
        event.persist();

        const {name, value} = event.target;

        setInputs(inputs => {
            return {
                ...inputs,
                [name]: value
            };
        });
    }

    if (redirect) return <Redirect to="/" />

    return (
    <div className="container">
      <header>
        <h1>Edit Pet</h1>
      </header>
      <div>
        <form action="/pets" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" name="name" required="required" onChange={handleInputChange} defaultValue={inputs.name} />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" name="description" onChange={handleInputChange} value={inputs.description} />
          </div>

          <div className="form-group">
            <label>Age</label>
            <textarea className="form-control" name="age" onChange={handleInputChange} value={inputs.age} />
          </div>

          <div className="form-group">
            <label>Type</label>
            <select className="form-control" name="type" required="required" onChange={handleInputChange} defaultValue={inputs.type}>
              <option value="DOG">Dog</option>
              <option value="CAT">Cat</option>
              <option value="INSECT">Insect</option>
              <option value="BIRD">Bird</option>
              <option value="ACRACNOID">Acracnoid</option>
              <option value="AMPHIBIAN">Amphibian</option>
              <option value="REPTILE">Reptile</option>
            </select>
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;