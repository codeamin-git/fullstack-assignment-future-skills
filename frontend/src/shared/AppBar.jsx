import Modal from 'react-modal';
import CardForm from '../components/CardForm';
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');

const AppBar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

    return (
        <div className="bg-black rounded-t-2xl h-16 text-white flex justify-between px-2 md:px-16">

            <div className="flex gap-4 items-center h-full">
                <h1 className="text-xl font-bold">Abstract</h1>
                <span>|</span>
                <h2>Help Center</h2>
            </div>

            {/* post a card */}
            <div className="flex items-center h-full">
                <button onClick={openModal} className="border p-1 rounded-lg">Submit a request</button>
                {/* form in modal */}
                <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className='flex justify-end items-end w-full'>
        <RxCross1 className='text-red-500 text-xl hover:bg-red-300'/>
        </button>
        <CardForm />
      </Modal>
            </div>
        </div>
    );
};

export default AppBar;