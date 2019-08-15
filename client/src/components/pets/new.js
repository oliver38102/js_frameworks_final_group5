import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from "axios";

function New() {
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);

    function handleSubmit (event) {
        event.preventDefault();

        Axios.post("/api/pets", inputs)
        .then(resp => setRedirect(true))
        .catch(err => console.log(err));
    }

    function handleInputChange (event) {

        event.persist();

        const {name, value} = event.target;

        setInputs(inputs => {
            return {
                ...inputs,
                [name]: value
            };
        });
    }

    if (redirect) return <Redirect to="/" />;

    return (
        <div className="container">
            <header>
                <h1>New Pet</h1>
            </header>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" name="name" required="required" onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input className="form-control" name="description" onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input className="form-control" name="age" onChange={handleInputChange} />
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

export default New;