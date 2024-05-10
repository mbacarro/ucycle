import React, { useState } from 'react';
import { Modal } from "flowbite-react";
import { useNavigate } from 'react-router-dom';


const MakeOfferModal = ({listingId, receiverId}) => { 
    const [openModal, setOpenModal] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate()


    const makeOffer = async (id) => { 
        try {
            const response = await fetch('/api/messages/send/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message, listingId, receiverId })
            })

            if (!response.ok) {
                throw new Error('Failed to send message')
            }
            alert('Message sent successfully')
            setOpenModal(false);
            navigate('/inbox')
        }
        catch (error) {
            alert('Failed to send message: ', error.message)
            setOpenModal(false);

        }
    }

    return (
        <>
            <button 
                className="px-10 py-2 text-lg font-semibold text-center border rounded border-violet-700 text-violet-700 h-fit w-fit"
                onClick={() => setOpenModal(true)}
            >
                Send Message
            </button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <form>
                    <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                            Your Message:
                        </label>
                        <textarea
                            required
                            className="block w-full p-1 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button 
                        onClick={makeOffer}
                        className="px-8 py-2 text-xl font-semibold text-center text-white rounded bg-violet-700 hover:bg-violet-800"
                        type="submit"
                    >
                        Send Message
                    </button>
                    <button 
                        className="px-10 py-2 text-lg font-semibold text-center border rounded border-violet-700 text-violet-700"

                        onClick={() => setOpenModal(false)}
                    >
                        Cancel
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default MakeOfferModal;