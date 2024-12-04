import React from 'react';
import Swal from 'sweetalert2'
import Navbar from './Navbar';


const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee)

        // send data to the server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'user added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    }
    return (
        <form onSubmit={handleAddCoffee}>
            <Navbar></Navbar>
            <div className=' mx-auto bg-gray-900 mt-10 rounded-2xl w-2/3 p-7'>
                <div className='md:flex gap-6  justify-center mx-auto bg-gray-900  rounded-2xl '>
                    <div className='w-2/3'>
                        <label >Name</label><br />
                        <input type="text" placeholder="Name" name='name' className="input input-bordered w-full " />
                    </div>
                    <div className='w-2/3 mb-5'>
                        <label >Available Quantity</label><br />
                        <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='md:flex gap-6  justify-center mx-auto bg-gray-900  rounded-2xl '>
                    <div className='w-2/3'>
                        <label >Supplier Name</label><br />
                        <input type="text" placeholder="supplier name" name='supplier' className="input input-bordered w-full " />
                    </div>
                    <div className='w-2/3 mb-5'>
                        <label >Taste</label><br />
                        <input type="text" placeholder="Taste" name='taste' className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='md:flex gap-6  justify-center  mx-auto bg-gray-900  rounded-2xl '>
                    <div className='w-2/3'>
                        <label >Category</label><br />
                        <input type="text" placeholder="Category" name='category' className="input input-bordered w-full " />
                    </div>
                    <div className='w-2/3 mb-5'>
                        <label >Details</label><br />
                        <input type="text" placeholder="Details" name='details' className="input input-bordered w-full " />
                    </div>
                </div>
                <div className=' bg-gray-900  rounded-2xl '>
                    <div className='w-full'>
                        <label >Photo URL</label><br />
                        <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered w-full " />
                    </div>
                </div>
                <input type="submit" value="ADD COFFEE" className='btn btn-block mt-8' />
            </div>
        </form>
    );
};

export default AddCoffee;