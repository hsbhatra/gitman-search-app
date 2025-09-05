import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      label: 'SEARCH',
      href: '/',
      type: 'internal'
    },
    {
      label: 'WEBSITE',
      href: 'https://www.girmantech.com/',
      type: 'external'
    },
    {
      label: 'LINKEDIN',
      href: 'https://www.linkedin.com/company/girmantech/',
      type: 'external'
    },
    {
      label: 'CONTACT',
      href: 'mailto:contact@girmantech.com',
      type: 'email'
    }
  ];

  return (
    <nav style={{ 
      width: '100%', 
      backgroundColor: 'white', 
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      borderBottom: '1px solid #e5e7eb'
    }}>
      <div className="container">
        <div className="flex justify-between items-center" style={{ height: '64px' }}>
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#2563eb',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>G</span>
              </div>
              <span style={{ fontSize: '20px', fontWeight: '600', color: '#111827' }}>
                Girman
              </span>
              <span style={{ fontSize: '12px', color: '#6b7280' }} className="hidden md:block">
                TECHNOLOGIES
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.type === 'external' ? '_blank' : undefined}
                  rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: link.label === 'SEARCH' ? '#2563eb' : '#374151',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    if (link.label !== 'SEARCH') {
                      e.target.style.color = '#2563eb';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (link.label !== 'SEARCH') {
                      e.target.style.color = '#374151';
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                borderRadius: '6px',
                color: '#374151',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#2563eb';
                e.target.style.backgroundColor = '#f3f4f6';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#374151';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <span style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}>
                Open main menu
              </span>
              {/* Hamburger icon */}
              <svg
                style={{ 
                  height: '24px', 
                  width: '24px',
                  display: isMobileMenuOpen ? 'none' : 'block'
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                style={{ 
                  height: '24px', 
                  width: '24px',
                  display: isMobileMenuOpen ? 'block' : 'none'
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div style={{ display: isMobileMenuOpen ? 'block' : 'none' }} className="md:hidden">
        <div style={{
          padding: '8px 16px 12px',
          backgroundColor: 'white',
          borderTop: '1px solid #e5e7eb'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.type === 'external' ? '_blank' : undefined}
              rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
              style={{
                display: 'block',
                padding: '8px 12px',
                fontSize: '16px',
                fontWeight: '500',
                color: link.label === 'SEARCH' ? '#2563eb' : '#374151',
                backgroundColor: link.label === 'SEARCH' ? '#eff6ff' : 'transparent',
                textDecoration: 'none',
                borderRadius: '4px',
                marginBottom: '4px',
                transition: 'all 0.2s'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
              onMouseEnter={(e) => {
                if (link.label !== 'SEARCH') {
                  e.target.style.color = '#2563eb';
                  e.target.style.backgroundColor = '#f9fafb';
                }
              }}
              onMouseLeave={(e) => {
                if (link.label !== 'SEARCH') {
                  e.target.style.color = '#374151';
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
