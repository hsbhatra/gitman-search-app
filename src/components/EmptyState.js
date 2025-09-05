import React from 'react';

const EmptyState = ({ searchQuery }) => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '4rem 2rem',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      {/* Empty State Illustration */}
      <div style={{
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <svg
          style={{
            width: '120px',
            height: '120px',
            color: '#d1d5db'
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* No Results Message */}
      <h2 style={{
        fontSize: '24px',
        fontWeight: '600',
        color: '#374151',
        marginBottom: '1rem'
      }}>
        No results found
      </h2>

      <p style={{
        fontSize: '16px',
        color: '#6b7280',
        lineHeight: '1.5',
        marginBottom: '1.5rem'
      }}>
        {searchQuery ? (
          <>
            We couldn't find any users matching "<strong>{searchQuery}</strong>". 
            Try searching with different keywords.
          </>
        ) : (
          'Enter a search term to find users by name or location.'
        )}
      </p>

      {/* Suggestions */}
      <div style={{
        backgroundColor: '#f9fafb',
        borderRadius: '8px',
        padding: '1rem',
        border: '1px solid #e5e7eb'
      }}>
        <p style={{
          fontSize: '14px',
          color: '#4b5563',
          margin: '0 0 0.5rem 0',
          fontWeight: '500'
        }}>
          Try searching for:
        </p>
        <ul style={{
          fontSize: '14px',
          color: '#6b7280',
          textAlign: 'left',
          margin: 0,
          paddingLeft: '1.5rem'
        }}>
          <li>First name (e.g., "Amit", "Priya")</li>
          <li>Last name (e.g., "Sharma", "Gupta")</li>
          <li>City (e.g., "Mumbai", "Delhi")</li>
        </ul>
      </div>
    </div>
  );
};

export default EmptyState;
