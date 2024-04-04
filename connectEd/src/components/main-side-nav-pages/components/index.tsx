import React, { useState } from 'react';

// Define the type for business data
type Business = {
  id: number;
  name: string;
  type: string;
  contact: string;
  resources: string;
};

const FilesPage: React.FC = () => {
  // Define state for businesses and search filter
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [searchFilter, setSearchFilter] = useState<string>('');

  // Function to handle adding a new business
  const addBusiness = () => {
    // Implement your logic here to add a new business to the state
    // You can use setBusinesses to update the state with the new business data
  };

  // Function to handle filtering businesses based on search filter
  const filteredBusinesses = businesses.filter(business =>
    business.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Businesses</h2>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
      />
      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Contact</th>
            <th>Resources</th>
          </tr>
        </thead>
        <tbody>
          {filteredBusinesses.map(business => (
            <tr key={business.id}>
              <td>{business.id}</td>
              <td>{business.name}</td>
              <td>{business.type}</td>
              <td>{business.contact}</td>
              <td>{business.resources}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Button to add a new business */}
      <button onClick={addBusiness}>Add Business</button>
    </div>
  );
};

export default FilesPage;
