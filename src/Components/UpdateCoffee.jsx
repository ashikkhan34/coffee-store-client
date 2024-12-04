import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from './Navbar';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { name, quantity, supplier, taste, category, details, photo, _id } = coffee;

    const handleUpdateCoffee = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(updatedCoffee)

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    }
    return (
        <div>
            <Navbar></Navbar>
              <form onSubmit={handleUpdateCoffee}>
            <div className=' mx-auto bg-gray-900 mt-10 rounded-2xl w-2/3 p-7'>
                <div className='md:flex gap-6  justify-center mx-auto bg-gray-900  rounded-2xl '>
                    <div className='w-2/3'>
                        <label >Name</label><br />
                        <input type="text" placeholder="Name" name='name' defaultValue={name} className="input input-bordered w-full " />
                    </div>
                    <div className='w-2/3 mb-5'>
                        <label >Available Quantity</label><br />
                        <input type="text" placeholder="Available Quantity" defaultValue={quantity} name='quantity' className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='md:flex gap-6  justify-center mx-auto bg-gray-900  rounded-2xl '>
                    <div className='w-2/3'>
                        <label >Supplier Name</label><br />
                        <input type="text" placeholder="supplier name" defaultValue={supplier} name='supplier' className="input input-bordered w-full " />
                    </div>
                    <div className='w-2/3 mb-5'>
                        <label >Taste</label><br />
                        <input type="text" placeholder="Taste" name='taste' defaultValue={taste} className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='md:flex gap-6  justify-center  mx-auto bg-gray-900  rounded-2xl '>
                    <div className='w-2/3'>
                        <label >Category</label><br />
                        <input type="text" placeholder="Category" name='category' defaultValue={category}className="input input-bordered w-full " />
                    </div>
                    <div className='w-2/3 mb-5'>
                        <label >Details</label><br />
                        <input type="text" placeholder="Details" name='details' defaultValue={details}className="input input-bordered w-full " />
                    </div>
                </div>
                <div className=' bg-gray-900  rounded-2xl '>
                    <div className='w-full'>
                        <label >Photo URL</label><br />
                        <input type="text" placeholder="Photo URL" name='photo' defaultValue={photo}className="input input-bordered w-full " />
                    </div>
                </div>
                <input type="submit" value="UPDATE COFFEE" className='btn btn-block mt-8' />
            </div>
        </form>
        </div>
    );
};

export default UpdateCoffee;