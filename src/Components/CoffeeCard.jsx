import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
    console.log(coffee)
    const { name, quantity, supplier, taste, category, details, photo, _id } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert dis!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "You're coffee TEMPhas been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl ">
                <figure>
                    <img
                        src={photo} />
                </figure>
                <div className="w-full flex justify-between ">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                        <p>{category}</p>
                        <p>{details}</p>
                    </div>
                    <div className="card-actions ">
                        <div className="join join-vertical space-y-3">
                            <button className="btn join-item">View</button>
                            <Link to={`updateCoffee/${_id}`}>
                            <button className="btn join-item">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item bg-orange-500 text-black">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;