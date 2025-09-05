import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #ffffff, #dbeafe, #bfdbfe)'
    }}>
      <Navbar />
      
      {/* Main Content - Will add search functionality next */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        minHeight: 'calc(100vh - 64px)'
      }}>
        <div className="text-center" style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          transform: 'translateY(-50px)' // Move it up slightly to center better
        }}>
          {/* Logo */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              marginBottom: '2rem',
              flexDirection: 'column'
            }}>
              {/* Logo and Girman text in a row */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '0.5rem'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#2563eb',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '40px' }}>G</span>
                </div>
                <h1 style={{
                  fontSize: '72px',
                  fontWeight: 'bold',
                  color: '#111827',
                  margin: '0',
                  lineHeight: '1'
                }}>
                  Girman
                </h1>
              </div>
              
              {/* Technologies text centered below */}
              <span style={{ 
                fontSize: '14px', 
                color: '#6b7280', 
                letterSpacing: '2px',
                fontWeight: '400'
              }}>
                TECHNOLOGIES
              </span>
            </div>
          </div>
          
          {/* Search Bar */}
          <div style={{ marginTop: '2rem', width: '100%' }}>
            <SearchBar />
          </div>
          
          {/* Additional spacing */}
          <div style={{ height: '100px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
