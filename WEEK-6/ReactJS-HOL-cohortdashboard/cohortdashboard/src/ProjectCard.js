import React from 'react';

const ProjectCard = ({ project }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return '#28a745';
      case 'ongoing':
        return '#007bff';
      case 'in development':
        return '#ffc107';
      default:
        return '#6c757d';
    }
  };

  const getStatusEmoji = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return '✅';
      case 'ongoing':
        return '🔄';
      case 'in development':
        return '🛠️';
      default:
        return '📋';
    }
  };

  const getCategoryEmoji = (category) => {
    switch (category.toLowerCase()) {
      case 'smart transportation':
        return '🚗';
      case 'agriculture & foodtech':
        return '🌾';
      case 'healthcare & biomedical devices':
        return '🏥';
      case 'clean & green technology':
        return '♻️';
      case 'edtech':
        return '📚';
      case 'smart cities':
        return '🏙️';
      case 'security & surveillance':
        return '🔒';
      case 'fintech':
        return '💰';
      default:
        return '💡';
    }
  };

  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #e9ecef',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }}
    >
      {/* Header with Year and Status */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px'
      }}>
        <span style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          📅 SIH {project.year}
        </span>
        <span style={{
          backgroundColor: getStatusColor(project.status),
          color: 'white',
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          {getStatusEmoji(project.status)} {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
        </span>
      </div>

      {/* Project Title */}
      <h3 style={{
        margin: '0 0 10px 0',
        color: '#212529',
        fontSize: '18px',
        fontWeight: 'bold',
        lineHeight: '1.3'
      }}>
        {project.title}
      </h3>

      {/* Category */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px'
      }}>
        <span style={{
          backgroundColor: '#f8f9fa',
          color: '#495057',
          padding: '4px 8px',
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: '500',
          border: '1px solid #e9ecef'
        }}>
          {getCategoryEmoji(project.category)} {project.category}
        </span>
      </div>

      {/* Description */}
      <p style={{
        color: '#6c757d',
        fontSize: '14px',
        lineHeight: '1.5',
        margin: '0 0 15px 0'
      }}>
        {project.description}
      </p>

      {/* Organization */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        <span style={{
          color: '#495057',
          fontSize: '13px',
          fontWeight: '500'
        }}>
          🏢 {project.organization}
        </span>
      </div>

      {/* Team Size and Problem Statement */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '12px',
        borderTop: '1px solid #e9ecef'
      }}>
        <span style={{
          color: '#6c757d',
          fontSize: '12px'
        }}>
          👥 {project.teamSize}
        </span>
        <span style={{
          color: '#6c757d',
          fontSize: '12px',
          fontFamily: 'monospace',
          backgroundColor: '#f8f9fa',
          padding: '2px 6px',
          borderRadius: '4px'
        }}>
          {project.problemStatement}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;