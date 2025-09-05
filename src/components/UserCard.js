import React from 'react';

const UserCard = ({ user, onFetchDetails }) => {
  // Generate a placeholder avatar based on first name initial
  const getAvatarColor = (name) => {
    const colors = [
      '#3B82F6', '#EF4444', '#10B981', '#F59E0B', 
      '#8B5CF6', '#06B6D4', '#F97316', '#84CC16'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const avatarColor = getAvatarColor(user.first_name);

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      transition: 'all 0.3s ease',
      height: 'fit-content',
      position: 'relative',
      width: '280px',
      maxWidth: '100%'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      {/* Profile Image - Top Left */}
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: avatarColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '16px',
        background: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face") center/cover',
        border: '2px solid #f0f0f0'
      }}>
        {!user.profileImage && user.first_name.charAt(0).toUpperCase()}
      </div>

      {/* Name */}
      <h3 style={{
        fontSize: '24px',
        fontWeight: '600',
        color: '#111827',
        margin: '0 0 8px 0',
        lineHeight: '1.2'
      }}>
        {user.first_name} {user.last_name}
      </h3>
      
      {/* Location */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        color: '#6b7280',
        fontSize: '14px',
        marginBottom: '12px'
      }}>
        <svg
          style={{ width: '14px', height: '14px', marginRight: '6px' }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        {user.city}
      </div>

      {/* Phone Number */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        color: '#111827',
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '4px'
      }}>
        <svg
          style={{ width: '14px', height: '14px', marginRight: '6px' }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        {user.contact_number}
      </div>

      {/* Available on phone text */}
      <p style={{
        fontSize: '12px',
        color: '#6b7280',
        margin: '0 0 20px 0'
      }}>
        Available on phone
      </p>

      {/* Fetch Details Button - Positioned at bottom right */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px'
      }}>
        <button
          onClick={() => onFetchDetails(user)}
          style={{
            backgroundColor: '#111827',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 16px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#374151';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#111827';
          }}
        >
          Fetch Details
        </button>
      </div>
    </div>
  );
};

export default UserCard;
