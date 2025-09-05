import React from 'react';

const UserDetailsModal = ({ user, isOpen, onClose }) => {
  if (!isOpen || !user) return null;

  // Generate profile image URL (using the same logic as UserCard)
  const profileImageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face";

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      {/* Backdrop with blur */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div style={{
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        maxWidth: '400px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        {/* Header */}
        <div style={{
          marginBottom: '16px'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            margin: '0 0 6px 0'
          }}>
            Fetch Details
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: '0',
            lineHeight: '1.4'
          }}>
            Here are the details of following employee.
          </p>
        </div>

        {/* User Details */}
        <div style={{
          marginBottom: '16px'
        }}>
          {/* Name */}
          <div style={{ marginBottom: '4px' }}>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              display: 'block',
              lineHeight: '1.3'
            }}>
              Name: {user.first_name} {user.last_name}
            </span>
          </div>

          {/* Location */}
          <div style={{ marginBottom: '4px' }}>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              display: 'block',
              lineHeight: '1.3'
            }}>
              Location: {user.city}
            </span>
          </div>

          {/* Contact Number */}
          <div style={{ marginBottom: '16px' }}>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              display: 'block',
              lineHeight: '1.3'
            }}>
              Contact Number: {user.contact_number}
            </span>
          </div>

          {/* Profile Image */}
          <div style={{ marginBottom: '16px' }}>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              display: 'block',
              marginBottom: '8px'
            }}>
              Profile Image:
            </span>
            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#f3f4f6'
            }}>
              <img
                src={profileImageUrl}
                alt={`${user.first_name} ${user.last_name}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>

        {/* Close Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#f3f4f6',
              color: '#374151',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#e5e7eb';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#f3f4f6';
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
