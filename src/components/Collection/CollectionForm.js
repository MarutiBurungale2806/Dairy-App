import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const CollectionForm = ({ users, addMember }) => {
  const [userId, setUserId] = useState('');
  const [milk, setMilk] = useState('');
  const [snf, setSNF] = useState('');
  const [fat, setFat] = useState('');
  const [animal, setAnimal] = useState('cow');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = new Date().toISOString().split('T')[0]; // Format: 'yyyy-MM-dd'
    const newMember = {
      id: Date.now(), // Unique id for the new entry
      userId,
      milk,
      snf,
      fat,
      animal,
      date: formattedDate, // Use the formatted date here
      amount: calculateAmount(parseFloat(milk), parseFloat(snf), parseFloat(fat)),
    };
    addMember(newMember); // Call addMember with new member data
    navigate('/collection'); // Navigate back to the collection page
  };

  // Function to calculate the amount based on milk, SNF, and fat factors
  const calculateAmount = (milkQuantity, snfFactor, fatFactor) => {
    const milkRate = 10; // Assuming milk rate per liter is 10 Rs
    const snfAmount = (milkQuantity * snfFactor * milkRate) / 100;
    const fatAmount = (milkQuantity * fatFactor * milkRate) / 100;
    return ((0.22 * fatAmount) + (0.36 * snfAmount)) * 30;
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const selectStyle = {
    ...inputStyle,
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <>
<Header tabName={"Add Collection"}/>
    <div style={containerStyle}>
      
      {/* <h2 style={{ marginBottom: '16px', textAlign: 'center' }}>Add Member to Collection</h2> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user" style={labelStyle}>
            Select User:
          </label>
          <select
            id="user"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            style={selectStyle}
          >
            <option value="">-- Select User --</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="milk" style={labelStyle}>
            Milk (liters):
          </label>
          <input
            type="number"
            id="milk"
            value={milk}
            onChange={(e) => setMilk(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="snf" style={labelStyle}>
            SNF Factor (%):
          </label>
          <input
            type="number"
            id="snf"
            value={snf}
            onChange={(e) => setSNF(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="fat" style={labelStyle}>
            Fat Factor (%):
          </label>
          <input
            type="number"
            id="fat"
            value={fat}
            onChange={(e) => setFat(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="animal" style={labelStyle}>
            Animal:
          </label>
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            required
            style={selectStyle}
          >
            <option value="cow">Cow</option>
            <option value="buffalo">Buffalo</option>
          </select>
        </div>
        <button type="submit" style={buttonStyle} onMouseOver={(e) => (e.target.style = buttonHoverStyle)}>
          Save
        </button>
      </form>
    </div>
    </>
  );
};

export default CollectionForm;
