import Card from './Card.jsx'



import axios from "axios";
import { useState, useEffect } from "react";



function UsersInCard() {

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

    const colors = [
        "bg-[#42c264]", // Green
        "bg-[#6c56db]", // Violet/Purple
        "bg-[#d15b41]", // Terracotta/Red-Orange
        "bg-[#3b82f6]", // Blue
        "bg-[#06b6d4]", // Cyan
        "bg-[#ec4899]", // Pink
        "bg-[#f59e0b]", // Amber
        "bg-[#14b8a6]"  // Teal
    ];

    return (
        <>
            {data.map(item => (
                <Card
                    key={item.userid}
                    Title={item.username}
                    Description={item.description}
                    BackgroundColor={colors[item.userid % colors.length]}
                />
            ))}



        </>
    )

}

export default UsersInCard