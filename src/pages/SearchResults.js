import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import EmptyState from '../components/EmptyState';
import UserDetailsModal from '../components/UserDetailsModal';
import usersData from '../data/users.json';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q');
  const [searchTerm, setSearchTerm] = useState(query || '');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter users based on search query
  useEffect(() => {
    if (query) {
      setSearchTerm(query);
      const filtered = usersData.filter(user => {
        const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
        const searchQuery = query.toLowerCase();
        return (
          user.first_name.toLowerCase().includes(searchQuery) ||
          user.last_name.toLowerCase().includes(searchQuery) ||
          fullName.includes(searchQuery) ||
          user.city.toLowerCase().includes(searchQuery)
        );
      });
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers([]);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleFetchDetails = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom, #ffffff, #dbeafe, #bfdbfe)' 
    }}>
      <Navbar />
      
      <div style={{ padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Search Bar at top */}
          <div style={{ marginBottom: '2rem' }}>
            <form onSubmit={handleSearch}>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                border: '2px solid #e5e7eb',
                borderRadius: '50px',
                padding: '12px 20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                {/* Search Icon */}
                <svg
                  style={{
                    width: '20px',
                    height: '20px',
                    color: '#6b7280',
                    marginRight: '12px',
                    flexShrink: 0
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                {/* Search Input */}
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontSize: '16px',
                    color: '#111827',
                    backgroundColor: 'transparent',
                    padding: 0,
                  }}
                />

                {/* Search Button */}
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    marginLeft: '8px',
                  }}
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Results Section */}
          {query ? (
            <div>
              {/* Results Grid or Empty State */}
              {filteredUsers.length > 0 ? (
                <div className="search-results-grid">
                  {filteredUsers.map((user, index) => (
                    <UserCard 
                      key={index} 
                      user={user} 
                      onFetchDetails={handleFetchDetails}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState searchQuery={query} />
              )}
            </div>
          ) : (
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>
                Welcome to Search
              </h2>
              <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
                Enter a search term to find users by name or location
              </p>
              
              <button
                onClick={handleBackToHome}
                style={{
                  backgroundColor: '#2563eb',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1d4ed8';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#2563eb';
                }}
              >
                Back to Home
              </button>
            </div>
          )}
        </div>
      </div>

      {/* User Details Modal */}
      <UserDetailsModal 
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default SearchResults;
