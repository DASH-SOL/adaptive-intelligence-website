"use client";
import Link from "next/link";
import { useState } from "react";

const LetsTalkButton = ({
  buttonText = "Let's talk",
  href = "/contact",
  showIcon = true,
  usePopup = false,
  popupTitle = "Get Your Free Resource",
  popupDescription = "Enter your email to access the download",
  downloadRedirect = "/download"
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const buttonStyle = {
    background: 'white',
    color: 'black',
    border: '1px solid #ff1292',
    borderRadius: '0',
    padding: '15px 30px',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    cursor: 'pointer'
  };

  const hoverStyle = {
    background: '#ff1292',
    borderColor: '#ff1292',
    color: 'white'
  };

  const handlePopupSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Here you can add your email collection logic
    // For example, send to your backend API
    try {
      // Example API call - replace with your actual endpoint
      // await fetch('/api/collect-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to download page with email as query parameter
      window.location.href = `${downloadRedirect}?email=${encodeURIComponent(email)}`;
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('There was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = (e) => {
    if (usePopup) {
      e.preventDefault();
      setIsPopupOpen(true);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setEmail("");
  };

  if (usePopup) {
    return (
      <>
        <button
          onClick={handleButtonClick}
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.background = hoverStyle.background;
            e.target.style.borderColor = hoverStyle.borderColor;
            e.target.style.color = hoverStyle.color;
          }}
          onMouseLeave={(e) => {
            e.target.style.background = buttonStyle.background;
            e.target.style.borderColor = '#ff1292';
            e.target.style.color = buttonStyle.color;
          }}
        >
          <span>{buttonText}</span>
          {showIcon && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        {/* Popup Modal */}
        {isPopupOpen && (
          <div className="popup-overlay">
            <div className="popup-modal">
              <button 
                className="popup-close"
                onClick={closePopup}
                type="button"
              >
                &times;
              </button>
              
              <div className="popup-content">
                <h3>{popupTitle}</h3>
                <p>{popupDescription}</p>
                
                <form onSubmit={handlePopupSubmit} className="popup-form">
                  <div className="form-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="email-input"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Access'}
                  </button>
                </form>
                
                <p className="privacy-note">
                  We respect your privacy. Your email will only be used to send you the requested resource.
                </p>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
          }

          .popup-modal {
            background: white;
            border-radius: 8px;
            max-width: 480px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          .popup-close {
            position: absolute;
            top: 15px;
            right: 20px;
            background: none;
            border: none;
            font-size: 24px;
            color: #666;
            cursor: pointer;
            z-index: 1;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.2s ease;
          }

          .popup-close:hover {
            background: #f5f5f5;
            color: #333;
          }

          .popup-content {
            padding: 40px 30px 30px;
            text-align: center;
          }

          .popup-content h3 {
            font-size: 1.5rem;
            color: #151937;
            margin-bottom: 10px;
            font-family: 'Recoleta', serif;
            font-weight: 600;
          }

          .popup-content p {
            color: #666;
            margin-bottom: 25px;
            font-size: 1rem;
            line-height: 1.5;
          }

          .popup-form {
            margin-bottom: 20px;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .email-input {
            width: 100%;
            padding: 15px;
            border: 2px solid #e9ecef;
            border-radius: 4px;
            font-size: 16px;
            transition: border-color 0.3s ease;
            box-sizing: border-box;
          }

          .email-input:focus {
            outline: none;
            border-color: #ff1292;
            box-shadow: 0 0 0 3px rgba(255, 18, 146, 0.1);
          }

          .email-input:disabled {
            background: #f8f9fa;
            cursor: not-allowed;
          }

          .submit-button {
            background: #ff1292;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            width: 100%;
            transition: all 0.3s ease;
            border-radius: 4px;
          }

          .submit-button:hover:not(:disabled) {
            background: #e60d82;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(255, 18, 146, 0.3);
          }

          .submit-button:disabled {
            background: #ccc;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
          }

          .privacy-note {
            font-size: 0.85rem;
            color: #888;
            line-height: 1.4;
            margin-top: 15px;
            margin-bottom: 0;
          }

          @media (max-width: 480px) {
            .popup-modal {
              margin: 10px;
              max-width: none;
            }
            
            .popup-content {
              padding: 30px 20px 20px;
            }
            
            .popup-content h3 {
              font-size: 1.3rem;
            }
          }
        `}</style>
      </>
    );
  }

  // Original button for non-popup use
  return (
    <Link
      href={href}
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.target.style.background = hoverStyle.background;
        e.target.style.borderColor = hoverStyle.borderColor;
        e.target.style.color = hoverStyle.color;
      }}
      onMouseLeave={(e) => {
        e.target.style.background = buttonStyle.background;
        e.target.style.borderColor = '#ff1292';
        e.target.style.color = buttonStyle.color;
      }}
    >
      <span>{buttonText}</span>
      {showIcon && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
};

export default LetsTalkButton;