"use client";
import Link from "next/link";

const LetsTalkButton = ({ 
  buttonText = "Let's talk",
  href = "/contact",
  showIcon = true
}) => {
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
    fontWeight: '500'
  };

  const hoverStyle = {
    background: '#ff1292',
    borderColor: '#ff1292',
    color: 'white'
  };

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