import React from 'react';

const EmptyState = ({ searchQuery }) => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '4rem 2rem',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      {/* Empty State Illustration - Exact Figma Design */}
      <div style={{
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Decorative plus signs - exactly as in Figma */}
          <g stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round">
            {/* Top left plus */}
            <line x1="12" y1="12" x2="12" y2="22" />
            <line x1="7" y1="17" x2="17" y2="17" />
            
            {/* Top right plus */}
            <line x1="138" y1="12" x2="138" y2="22" />
            <line x1="133" y1="17" x2="143" y2="17" />
            
            {/* Bottom left plus */}
            <line x1="12" y1="128" x2="12" y2="138" />
            <line x1="7" y1="133" x2="17" y2="133" />
            
            {/* Bottom right plus */}
            <line x1="138" y1="128" x2="138" y2="138" />
            <line x1="133" y1="133" x2="143" y2="133" />
          </g>
          
          {/* Main folder shadow */}
          <rect x="27" y="57" width="70" height="45" rx="6" fill="#d1d5db" opacity="0.5"/>
          
          {/* Main folder */}
          <rect x="25" y="55" width="70" height="45" rx="6" fill="white" stroke="#9ca3af" strokeWidth="2"/>
          
          {/* Folder tab */}
          <path d="M25 55 L25 49 C25 46.8 26.8 45 29 45 L45 45 C46.1 45 47.1 45.4 47.8 46.2 L52.2 51.8 C52.9 52.6 53.9 53 55 53 L92 53 C94.2 53 96 54.8 96 57" fill="white" stroke="#9ca3af" strokeWidth="2"/>
          
          {/* Documents inside folder - simplified white rectangles */}
          <rect x="35" y="65" width="14" height="18" rx="1" fill="white" stroke="#d1d5db" strokeWidth="1"/>
          <rect x="52" y="65" width="14" height="18" rx="1" fill="white" stroke="#d1d5db" strokeWidth="1"/>
          <rect x="69" y="65" width="14" height="18" rx="1" fill="white" stroke="#d1d5db" strokeWidth="1"/>
          
          {/* Magnifying glass handle shadow */}
          <line x1="107" y1="107" x2="125" y2="125" stroke="#d1d5db" strokeWidth="6" strokeLinecap="round" opacity="0.4"/>
          
          {/* Magnifying glass circle shadow */}
          <circle cx="87" cy="87" r="22" fill="#d1d5db" opacity="0.4"/>
          
          {/* Magnifying glass circle */}
          <circle cx="85" cy="85" r="22" fill="white" stroke="#9ca3af" strokeWidth="3"/>
          <circle cx="85" cy="85" r="15" fill="none" stroke="#9ca3af" strokeWidth="2"/>
          
          {/* Magnifying glass handle */}
          <line x1="105" y1="105" x2="123" y2="123" stroke="#9ca3af" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      </div>

      {/* No Results Message */}
      <h3 style={{
        fontSize: '18px',
        fontWeight: '500',
        color: '#6b7280',
        margin: '0',
        lineHeight: '1.3'
      }}>
        No results found
      </h3>
    </div>
  );
};

export default EmptyState;
