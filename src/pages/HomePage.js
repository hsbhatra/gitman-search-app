import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #ffffff, #dbeafe, #bfdbfe)'
    }}>
      <Navbar />
      
      {/* Main Content - Will add search functionality next */}
      <div style={{
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1rem',
        minHeight: 'calc(100vh - 64px)'
      }}>
        <div className="text-center" style={{ maxWidth: '1024px', margin: '0 auto' }}>
          {/* Logo */}
          <div style={{ marginBottom: '3rem' }}>
            <div className="flex justify-center items-center space-x-4" style={{ marginBottom: '1rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#2563eb',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '32px' }}>G</span>
              </div>
              <h1 style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: '#111827',
                margin: '0'
              }}>
                Girman
              </h1>
            </div>
          </div>
          
          {/* Placeholder for search bar - we'll implement this next */}
          <div style={{ color: '#6b7280' }}>
            <p>Search functionality will be implemented next</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
