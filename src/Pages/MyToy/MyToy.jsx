import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const MyToy = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/mytoy/${user?.email}`)
        .then(res=> res.json())
        .then(data=> {
            setToys(data)
        })
    },[user])
    return (
        <div>
            <h1>my toy: {toys.length}</h1>
        </div>
    );
};

export default MyToy;