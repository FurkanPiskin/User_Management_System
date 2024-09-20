import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./home.css";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");
    console.log(res.data);
    if (res.status === 200) {
      setData(res.data);
    }
  };

  /* const onDeleteUser=async(id)=>{
    if(window.confirm("Are you sure?")){
      console.log(id);
      const res=await axios.delete(`http://localhost:5000/users/${parseInt(id)}`);
      if(res.status===200){
        getUsers();
      }
   
      
    }
   
  
  }*/
  const onDeleteUser = async (id) => {
    if (window.confirm("Are you sure?")) {
      // DOM'dan hemen kaldırmak yerine geçici olarak silme işlemi gerçekleştiriliyor
      setData((prevData) => prevData.filter((user) => user.id !== id));

      // API'den silme işlemi
      setTimeout(async () => {
        const res = await axios.delete(
          `http://localhost:5000/users/${parseInt(id)}`
        );
        if (res.status === 200) {
          getUsers(); // Verileri tekrar yükleme
        }
      }, 600); // Animasyonun süresi kadar bekleme (600 ms)
    }
  };

  const updateUser2 = async (data, id) => {
    const res = await axios.put(`http://localhost:5000/users/${id}`, data);
    if (res.status === 200) {
      toast.success(res.data);
    }
  };
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.09, // Delay between children
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };
  return (
    <div className="table-wrapper">
      <motion.table
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>

        <motion.tbody>
          <AnimatePresence>
            {data &&
              data.map((user, index) => (
                <motion.tr
                  
                  key={user.id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={rowVariants}
                  transition={{ duration: 0.6, delay: index * 0.5 }}
                 
                 
                >
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.country}</td>
                  <td>{user.contact}</td>
                  <td>
                    <div className="buttons">
                      <Link to={`view/${user.id}`}>
                        <button className="primary">View</button>
                      </Link>
                      <Link to={`update/${user.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                          className="success"
                        >
                          Edit
                        </motion.button>
                      </Link>
                      <button
                        className="danger"
                        onClick={() => onDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
          </AnimatePresence>
        </motion.tbody>
      </motion.table>
    </div>
  );
};
