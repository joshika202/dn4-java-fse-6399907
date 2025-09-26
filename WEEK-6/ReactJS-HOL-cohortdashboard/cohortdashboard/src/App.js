import React, { useState } from 'react';
import CohortDetails from './CohortDetails';
import SIHProjectSearch from './SIHProjectSearch';

function App() {
  const cohorts = [
    {
      name: 'Advanced',
      status: 'ongoing',
      startDate: '2024-07-01',
      endDate: '2024-09-30'
    },
    {
      name: 'JavaScript Fundamentals',
      status: 'completed',
      startDate: '2024-01-15',
      endDate: '2024-04-15'
    },
    {
      name: ' Computer Science Basics',
      status: 'completed',
      startDate: '2024-01-15',
      endDate: '2024-04-15'
    }
  ];

  const [activeTab, setActiveTab] = useState('cohorts');

  return (
    <div>
      <h1>My Academy Dashboard</h1>
      
      {/* Navigation Tabs */}
      <div style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
        <button 
          onClick={() => setActiveTab('cohorts')}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: activeTab === 'cohorts' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'cohorts' ? 'white' : '#333',
            border: '1px solid #ccc',
            cursor: 'pointer',
            borderRadius: '4px 4px 0 0'
          }}
        >
          Cohorts
        </button>
        <button 
          onClick={() => setActiveTab('sih')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'sih' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'sih' ? 'white' : '#333',
            border: '1px solid #ccc',
            cursor: 'pointer',
            borderRadius: '4px 4px 0 0'
          }}
        >
          SIH Projects
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'cohorts' && (
        <div>
          {cohorts.map((cohort, index) => (
            <CohortDetails key={index} cohort={cohort} />
          ))}
        </div>
      )}

      {activeTab === 'sih' && (
        <SIHProjectSearch />
      )}
    </div>
  );
}

export default App;
