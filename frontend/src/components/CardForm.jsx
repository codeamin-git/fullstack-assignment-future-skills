import { useState } from 'react';
import { createCard } from '../api/cardAPI';
import Swal from 'sweetalert2'

const CardForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const newCard = { title, description };
      await createCard(newCard);
      setTitle('');
      setDescription('');
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your request has been received!",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error('Error creating request:', error);
    }
  };

  return (
    <div className="space-y-7">
      <h2 className='text-center text-4xl'>Create A New Request</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='request title'
            required
            className='w-full p-2 border border-black'
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder='request description'
             className='w-full p-2 border border-black'
          />
        </div>
        <button type="submit" className='bg-black text-white p-2 mt-4'>Create Request</button>
      </form>
    </div>
  );
};

export default CardForm;
