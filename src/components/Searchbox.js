import { useState } from "react"

export default function Searchbox () {

    const [name, setName] = useState("");
    const handleChange=(event) =>{
        setName(event.target.value);
    }
    return (
        <div className="container mt-5 w-25 justify-content-center">
            <form className="justify-content-center">
            <div className="mx-auto col-10">
                        <label>List View</label>
                    </div>
                    <div className="mt-3 mx-auto col-10">
                    <input id="name" type="text" className="form-control" value={name} onChange={handleChange} required/>
                    </div>
            </form>
        </div>
    )
}