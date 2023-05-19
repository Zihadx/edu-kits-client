import { useEffect, useState } from "react";
import Toys from "./Toys";

const AllToys = () => {
    const [toys , setToys] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    },[])
    return (
        <div className="mt-16">
            <h1 className="text-5xl font-bold text-center">All Toys {toys.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    toys.map(toy => <Toys
                    key={toy._id}
                    toy={toy}
                    ></Toys>)
                }
            </div>
        </div>
    );
};

export default AllToys;