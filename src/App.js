import React, { useState, useEffect } from "react";
import CelebrityList from "./CelebrityList";
import jsonData from "./data.json"; // Importing data.json from the same folder
import './App.css'
const App = () => {
    const [celebrities, setCelebrities] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // Using jsonData directly instead of fetch for local JSON data
        const updatedData = jsonData.map((celebrity) => ({
            ...celebrity,
            age: calculateAge(new Date(celebrity.dob)),
            name: `${celebrity.first} ${celebrity.last}`, // Combine first and last name into name
        }));
        setCelebrities(updatedData);
    }, []);

    const calculateAge = (dob) => {
        const diff = Date.now() - dob.getTime();
        const ageDt = new Date(diff);
        return Math.abs(ageDt.getUTCFullYear() - 1970);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredCelebrities = celebrities.filter((celebrity) =>
        celebrity.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Celebrity Management</h1>
            <input
                type="text"
                placeholder="Search by celebrity name..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <CelebrityList
                celebrities={filteredCelebrities}
                setCelebrities={setCelebrities} // Consider if this prop is needed
            />
        </div>
    );
};

export default App;