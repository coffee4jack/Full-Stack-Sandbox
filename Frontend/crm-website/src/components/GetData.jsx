import axios from "axios";
import { useState, useEffect } from "react";


function GetData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/users/")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <h1>Data</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.username}</li>
                ))}
            </ul>
        </div>
    );
}

export default GetData