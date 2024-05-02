import React, { useState } from 'react';
import { Modal } from "flowbite-react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const DeleteListingModal = ({id}) => { 
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();


    const deleteListing = async (id) => { 
        try {
            const response = await fetch(`/api/listings/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
            // Update the listing in your frontend state or trigger a re-fetch of listings
            alert('Item deleted');
            console.log(`Item ${id} deleted`);

            setOpenModal(false);
            navigate('/account/my-store');

        } catch (error) {
            alert('Error deleting item: ', error.message);
            console.error('Error deleting item:', error);

            setOpenModal(false);
            navigate('/account/my-store');
        }
    }

    return (
        <>
            <button onClick={() => setOpenModal(true)}>
                <FaTrash size={28} />
            </button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this product?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <button
                                className='px-4 py-2 font-semibold text-white bg-red-500 rounded-lg'
                                onClick={() => deleteListing(id)}
                            >
                                "Yes, I'm sure"
                            </button>
                            <button
                                className='px-4 py-2 text-black border border-gray-500 rounded-lg'  
                                onClick={() => setOpenModal(false)}
                            >
                                No, cancel
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );

}

export default DeleteListingModal;