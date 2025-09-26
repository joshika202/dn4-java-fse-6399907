import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const SIHProjectSearch = () => {
  // Sample SIH project data for 2024 and 2025
  const sihProjects = [
    {
      id: 1,
      title: "Smart Traffic Management System",
      year: 2024,
      category: "Smart Transportation",
      organization: "Ministry of Road Transport & Highways",
      description: "AI-powered traffic management system to optimize traffic flow in metropolitan cities.",
      teamSize: "6 members",
      status: "completed",
      problemStatement: "SIH2024001"
    },
    {
      id: 2,
      title: "Digital Agriculture Platform",
      year: 2024,
      category: "Agriculture & FoodTech",
      organization: "Ministry of Agriculture",
      description: "Platform to connect farmers directly with consumers and provide market insights.",
      teamSize: "5 members",
      status: "ongoing",
      problemStatement: "SIH2024002"
    },
    {
      id: 3,
      title: "Healthcare Blockchain System",
      year: 2024,
      category: "Healthcare & Biomedical Devices",
      organization: "Ministry of Health",
      description: "Secure blockchain-based system for patient data management and medical records.",
      teamSize: "4 members",
      status: "completed",
      problemStatement: "SIH2024003"
    },
    {
      id: 4,
      title: "Smart Energy Grid Optimization",
      year: 2025,
      category: "Clean & Green Technology",
      organization: "Ministry of New & Renewable Energy",
      description: "AI-based optimization system for renewable energy distribution and grid management.",
      teamSize: "6 members",
      status: "ongoing",
      problemStatement: "SIH2025001"
    },
    {
      id: 5,
      title: "Digital Education Platform",
      year: 2025,
      category: "EdTech",
      organization: "Ministry of Education",
      description: "Comprehensive digital platform for remote learning with AR/VR integration.",
      teamSize: "7 members",
      status: "in development",
      problemStatement: "SIH2025002"
    },
    {
      id: 6,
      title: "Waste Management IoT System",
      year: 2024,
      category: "Smart Cities",
      organization: "Ministry of Urban Development",
      description: "IoT-enabled smart waste collection and management system for urban areas.",
      teamSize: "5 members",
      status: "completed",
      problemStatement: "SIH2024004"
    },
    {
      id: 7,
      title: "Cybersecurity Threat Detection",
      year: 2025,
      category: "Security & Surveillance",
      organization: "Ministry of Electronics & IT",
      description: "ML-based real-time cybersecurity threat detection and prevention system.",
      teamSize: "8 members",
      status: "ongoing",
      problemStatement: "SIH2025003"
    },
    {
      id: 8,
      title: "Rural Banking Digital Solution",
      year: 2024,
      category: "FinTech",
      organization: "Reserve Bank of India",
      description: "Digital banking solution to improve financial inclusion in rural areas.",
      teamSize: "6 members",
      status: "completed",
      problemStatement: "SIH2024005"
    }
  ];

  const [filteredProjects, setFilteredProjects] = useState(sihProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Extract unique categories from projects
  const categories = [...new Set(sihProjects.map(project => project.category))];
  const statuses = [...new Set(sihProjects.map(project => project.status))];

  useEffect(() => {
    let filtered = sihProjects;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.organization.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by year
    if (selectedYear !== 'all') {
      filtered = filtered.filter(project => project.year.toString() === selectedYear);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by status
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(project => project.status === selectedStatus);
    }

    setFilteredProjects(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, selectedYear, selectedCategory, selectedStatus]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedYear('all');
    setSelectedCategory('all');
    setSelectedStatus('all');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🏆 Smart India Hackathon Projects</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Search and explore SIH projects from 2024 and 2025
      </p>

      {/* Search and Filter Section */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '1px solid #e9ecef'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '15px',
          marginBottom: '15px'
        }}>
          {/* Search Input */}
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              🔍 Search Projects
            </label>
            <input
              type="text"
              placeholder="Search by title, description, or organization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>

          {/* Year Filter */}
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              📅 Year
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              <option value="all">All Years</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              🏷️ Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              📊 Status
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              <option value="all">All Status</option>
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          style={{
            padding: '8px 16px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          🔄 Reset Filters
        </button>
      </div>

      {/* Results Summary */}
      <div style={{ marginBottom: '20px' }}>
        <p style={{ 
          color: '#495057',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
          📈 Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          {selectedYear !== 'all' && ` from ${selectedYear}`}
          {selectedCategory !== 'all' && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '20px'
      }}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            padding: '40px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            color: '#6c757d'
          }}>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>🔍 No projects found</p>
            <p>Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SIHProjectSearch;