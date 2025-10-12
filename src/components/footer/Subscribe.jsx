import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

    try {
      // THE FIX: Check the correct '/api/newsletters' endpoint
      const checkRes = await fetch(`${strapiUrl}/api/newsletters?filters[email][$eq]=${email}`);
      const checkData = await checkRes.json();

      if (checkData.data && checkData.data.length > 0) {
        setStatus('error');
        setMessage('This email is already subscribed.');
        return;
      }

      // THE FIX: Create a new entry in the correct '/api/newsletters' endpoint
      const createRes = await fetch(`${strapiUrl}/api/newsletters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            email: email,
          },
        }),
      });

      if (!createRes.ok) {
        // Log the server's response for better debugging
        const errorBody = await createRes.json();
        console.error('Strapi Error:', errorBody);
        throw new Error('Failed to subscribe.');
      }

      // 3. Handle success
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');

    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="position-relative">
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
          disabled={status === 'loading'}
        />
        <button 
          type="submit" 
          className="tran3s fw-500 position-absolute"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      
      {/* Display feedback messages to the user */}
      {message && (
        <p style={{ 
          color: status === 'success' ? 'lightgreen' : '#ff7a7a',
          marginTop: '10px',
          fontSize: '14px'
        }}>
          {message}
        </p>
      )}
    </>
  );
};

export default Subscribe;