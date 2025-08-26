"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/header/Header";
import FooterContent from "@/components/footer/FooterContent";
import Subscribe from "@/components/footer/Subscribe";
import CopyrightFooter from "@/components/footer/CopyrightFooter";

const DownloadTemplatePage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has email parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    
    if (email && email.includes('@')) {
      setUserEmail(email);
      setHasAccess(true);
    } else {
      setHasAccess(false);
    }
    setIsLoading(false);
  }, []);

  const handleDownload = (format) => {
    // Track download event
    console.log(`Download initiated: ${format} by ${userEmail}`);
    
    // You can add analytics tracking here
    // gtag('event', 'download', { email: userEmail, format: format });
    
    // Trigger download - replace with your actual file URLs
    const downloadUrls = {
      googleDrive: 'https://drive.google.com/file/d/your-template-id/view',
      word: '/downloads/marketing-plan-template.docx',
      pdf: '/downloads/marketing-plan-template.pdf'
    };
    
    if (format === 'googleDrive') {
      window.open(downloadUrls.googleDrive, '_blank');
    } else {
      // Create download link for direct files
      const link = document.createElement('a');
      link.href = downloadUrls[format];
      link.download = `marketing-plan-template.${format === 'word' ? 'docx' : 'pdf'}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Preparing your download...</p>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <>
        <Header />
        <div className="access-denied-page">
          <div className="container">
            <div className="access-denied-content">
              <div className="error-icon">🔒</div>
              <h1>Access Required</h1>
              <p>You need to provide your email address to access this resource.</p>
              <Link href="/" className="back-button">
                Go Back to Homepage
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          .access-denied-page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          }
          .access-denied-content {
            text-align: center;
            background: white;
            padding: 60px 40px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            max-width: 500px;
          }
          .error-icon {
            font-size: 4rem;
            margin-bottom: 20px;
          }
          .access-denied-content h1 {
            font-size: 2rem;
            color: #151937;
            margin-bottom: 15px;
            font-family: 'Recoleta', serif;
          }
          .access-denied-content p {
            color: #666;
            font-size: 1.1rem;
            margin-bottom: 30px;
            line-height: 1.6;
          }
          .back-button {
            background: #FF1292;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          .back-button:hover {
            background: #e60d82;
            transform: translateY(-2px);
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <Header />
      
      {/* Success Page */}
      <div className="download-success-page">
        <div className="container">
          <div className="success-content">
            {/* Header Section */}
            <div className="success-header">
              <div className="success-icon">✓</div>
              <h1>You're All Set!</h1>
              <p>You can access your free Marketing Plan Template right here at anytime.</p>
            </div>

            {/* Main Content */}
            <div className="download-section">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="template-preview">
                    <Image
                      src="/images/template-preview.png"
                      alt="Marketing Plan Template Preview"
                      width={400}
                      height={500}
                      className="template-image"
                    />
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div className="download-options">
                    <h2>Free Marketing Plan Template</h2>
                    
                    <div className="download-buttons">
                      <button 
                        className="download-btn primary"
                        onClick={() => handleDownload('googleDrive')}
                      >
                        <span className="btn-icon">📁</span>
                        Make a copy on Google Drive
                      </button>
                      
                      <button 
                        className="download-btn secondary"
                        onClick={() => handleDownload('word')}
                      >
                        <span className="btn-icon">📄</span>
                        Download as Word Doc
                      </button>
                      
                      <button 
                        className="download-btn secondary"
                        onClick={() => handleDownload('pdf')}
                      >
                        <span className="btn-icon">📋</span>
                        Download as PDF
                      </button>
                    </div>

                    <div className="user-info">
                      <p>Downloaded by: <strong>{userEmail}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="consultation-cta">
              <div className="cta-content">
                <div className="cta-icon">
                  <Image
                    src="/images/logo/logo_06.svg"
                    alt="Company Logo"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>Get a free 30-minute consultation to bolster your brand strategy today!</h3>
                <button className="cta-button">
                  Book an appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <Image src="/images/logo/logo_06.svg" alt="logo" width={115} height={80} />
                  </Link>
                </div>
              </div>
              <FooterContent />
              <div className="col-lg-4 mb-30 form-widget">
                <h5 className="footer-title fw-normal">Newsletter</h5>
                <h6 className="pt-15 pb-20 text-white">Join our newsletter</h6>
                <Subscribe />
                <div className="fs-14 mt-10 text-white opacity-50">
                  We only send interesting and relevant emails.
                </div>
              </div>
            </div>
          </div>
        </div>
        <CopyrightFooter />
      </div>

      <style jsx>{`
        .loading-screen {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: white;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #FF1292;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .download-success-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 100px 0 80px;
        }

        .success-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .success-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: #28a745;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: bold;
          margin: 0 auto 30px;
        }

        .success-header h1 {
          font-size: 3rem;
          color: #151937;
          margin-bottom: 15px;
          font-family: 'Recoleta', serif;
          font-weight: 400;
        }

        .success-header p {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .download-section {
          background: white;
          border-radius: 12px;
          padding: 60px 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          margin-bottom: 60px;
        }

        .template-preview {
          text-align: center;
          margin-bottom: 40px;
        }

        .template-image {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .download-options h2 {
          font-size: 2rem;
          color: #151937;
          margin-bottom: 30px;
          font-family: 'Recoleta', serif;
        }

        .download-buttons {
          margin-bottom: 30px;
        }

        .download-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 18px 24px;
          border: 2px solid transparent;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 15px;
        }

        .download-btn.primary {
          background: #FF1292;
          color: white;
          border-color: #FF1292;
        }

        .download-btn.primary:hover {
          background: #e60d82;
          border-color: #e60d82;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 18, 146, 0.3);
        }

        .download-btn.secondary {
          background: white;
          color: #151937;
          border-color: #e9ecef;
        }

        .download-btn.secondary:hover {
          border-color: #FF1292;
          color: #FF1292;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }

        .btn-icon {
          font-size: 1.2rem;
        }

        .user-info {
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
        }

        .user-info p {
          color: #666;
          margin: 0;
          font-size: 0.9rem;
        }

        .consultation-cta {
          background: linear-gradient(135deg, #FF1292 0%, #e60d82 100%);
          border-radius: 12px;
          padding: 50px 40px;
          text-align: center;
          color: white;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-icon {
          margin-bottom: 20px;
        }

        .consultation-cta h3 {
          font-size: 1.8rem;
          margin-bottom: 30px;
          font-weight: 600;
          line-height: 1.4;
        }

        .cta-button {
          background: white;
          color: #FF1292;
          border: none;
          padding: 15px 35px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }

        .col-lg-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
        }

        .align-items-center {
          align-items: center;
        }

        @media (max-width: 768px) {
          .col-lg-6 {
            flex: 0 0 100%;
            max-width: 100%;
          }

          .success-header h1 {
            font-size: 2rem;
          }

          .download-section {
            padding: 40px 20px;
          }

          .consultation-cta {
            padding: 40px 20px;
          }

          .consultation-cta h3 {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </>
  );
};

export default DownloadTemplatePage;