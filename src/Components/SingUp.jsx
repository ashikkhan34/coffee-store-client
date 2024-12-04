import React, { useContext } from 'react';
import Navbar from './Navbar';
import { AuthContext } from '../provider/AuthProvider';

const SingUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value

        console.log(name,email,password)
        
        createUser(email,password)
        .then(result => {
            console.log(result.user)
            const createdAt = result?.user?.metadata?.creationTime;
            const newUser = {name,email,createdAt}
            //save new user info to the database
            fetch('http://localhost:5000/users',{
                method:'post',
                headers:{
                    "content-type":'application/json',
                },
                body: JSON.stringify(newUser)

            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('user created in db')
                }
            })
        })
        .catch(error =>{
            console.log('error',error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sing Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SingUp;