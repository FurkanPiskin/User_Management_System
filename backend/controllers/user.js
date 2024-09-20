import {v4 as uuid} from "uuid";


let users = [
    {
        id:"1",
        name: "Emin",
        email: "basbayanemin@gmail.com",
        country: "Turkey",
        contact: "5555555"
    },
    {
        id: "2",
        name: "Nur",
        email: "basbayanNur@gmail.com",
        country: "Turkey",
        contact: "5555555"
    }
];

export const getUsers=(req, res) => {
   return res.send(users);
};

export const singleUser=(req,res)=>{
    const id=req.params.id;
    const user=users.find((u)=>u.id===id);
    if(!user){
         res.status(400).send("User not found!");
    }
    res.send(user);
}
let nextId =2;
export const createUser=(req,res)=>{
 const {name,email,country,contact}=req.body;
 const user={
    id:`${++nextId}`,
    name:name,
    email:email,
    country:country,
    contact:contact,
 };
 users.push(user);
 res.send("New User Created");
}

export const deleteUser=(req,res)=>{
const id=req.params.id;
const user=users.find((u)=>u.id===(id));

if(!user){
  return  res.status(400).send("User not found");
}
users=users.filter((u)=>u.id !==(id));
res.send(users);
nextId--;
}

export const updateUser=(req,res)=>{
    const id=req.params.id;
    const user=users.find((u)=>u.id===(id));
    const {name,email,country,contact}=req.body;
    if(!user){
        res.status(400).send("User not found!");
    } 
    user.name=name;
    user.email=email;
    user.country=country;
    user.contact=contact;
    res.send("Updadet User");
}