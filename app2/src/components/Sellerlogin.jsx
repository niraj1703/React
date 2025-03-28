import { Link } from 'react-router-dom';
import React, { useState } from 'react';
export default function Footer() {

    
    const [contact, setContact] = useState('');
    const [error, setError] = useState('');
  
    const handleClick = (e) => {
        e.preventDefault();
        if (validateContact(contact)) {
          alert(`Submitted: ${contact}`);
          // Handle the submission logic here
        } else {
          setError('Please enter a valid email address or phone number.');
        }
      };


    const validateContact = (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/; // Example for 10-digit phone numbers
  
      if (emailRegex.test(value) || phoneRegex.test(value)) {
        setError('');
        return true;
      } else {
        setError('Please enter a valid email or phone number');
        return false;
      }
    };
  
    const handleChange = (e) => {
      const value = e.target.value;
      setContact(value);
      validateContact(value);
    }
    return (
      
    <form>
      <label htmlFor="contact">Email or Phone Number:</label><br/>
      <input
        type="text"
        id="contact"
        value={contact}
        onChange={handleChange}
        placeholder="Enter email or phone number"
      />
        
        <button type="button" onClick={handleClick}>
        Submit
      </button>

      <details>
  <summary>Need Help</summary>
  <p>This is </p>
</details>
        </form>
       
    );
}