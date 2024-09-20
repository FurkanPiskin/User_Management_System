import React, { useEffect,useState } from 'react'
import "./view.css";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';

export const View = () => {
    const [user,setUser]=useState({});
    const {id}=useParams();

    useEffect(()=>{
      if(id){
        getSingleUser(id);
      }  
    },[id]);

    const getSingleUser=async (id)=>{
        const res=await axios.get(`http://localhost:5000/users/${id}`);
        if(res.status===200){
            setUser({...res.data});
        }
    }
  return (
   <div className="view">
    <div className="view-item">
        <b>ID:</b> <span>{user.id}</span>
    </div>
    <div className="view-item">
        <b>NAME:</b> <span>{user.name}</span>
    </div>
    <div className="view-item">
        <b>EMAİL:</b> <span>{user.email}</span>
    </div>
    <div className="view-item">
        <b>COUNTRY:</b> <span>{user.country}</span>
    </div>
    <div className="view-item">
        <b>CONTACT:</b> <span>{user.contact}</span>
    </div>
    <div className='buttons'>
    <Link to={`/update/${user.id}`}><button className='success'>Edit</button></Link>
    <Link to={"/"}><button className='primary'>Back</button></Link>
    </div>
   </div>
  )
}
