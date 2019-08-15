import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
    const [pets, setPets] = useState( [] );

    useEffect(() => {
        Axios.get("/api/pets")
        .then(result => setPets(result.data))
        .catch(err => console.error(err));
    }, []);
    return (
        <div className="container">
            <header>
                <h1>All Pets</h1>
            </header>

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Age</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pets.map(pet => (
                            <tr key={pet._id}>
                                <td>
                                    <Link to={`/pets/${pet._id}`}>{pet.name}</Link>
                                </td>
                                <td>{pet.description}</td>
                                <td>{pet.age}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/pets/${pet._id}/edit`}>Edit</Link> | 
                                    <Link to={`/pets/${pet._id}/destroy`}> Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Index;
