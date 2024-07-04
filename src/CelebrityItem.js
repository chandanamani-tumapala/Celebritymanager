import React, { useState } from 'react';

const CelebrityItem = ({ celebrity, setCelebrities }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCelebrity, setEditedCelebrity] = useState({ ...celebrity });

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setCelebrities(prevCelebrities =>
      prevCelebrities.map(c =>
        c.id === celebrity.id ? editedCelebrity : c
      )
    );
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this celebrity?")) {
      setCelebrities(prevCelebrities =>
        prevCelebrities.filter(c => c.id !== celebrity.id)
      );
    }
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        {celebrity.name} <span>{isOpen ? '+' : '-'}</span>
      </div>
      {isOpen && (
        <div className="panel">
          {isEditing ? (
            <div className="edit-mode">
              <label>Name: <input type="text" value={editedCelebrity.name} onChange={(e) => setEditedCelebrity({ ...editedCelebrity, name: e.target.value })} /></label>
              <label>Age: <input type="text" value={editedCelebrity.age} readOnly /></label>
              <label>Gender: 
                <select value={editedCelebrity.gender} onChange={(e) => setEditedCelebrity({ ...editedCelebrity, gender: e.target.value })}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                  <option value="Rather not say">Rather not say</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label>Country: <input type="text" value={editedCelebrity.country} onChange={(e) => setEditedCelebrity({ ...editedCelebrity, country: e.target.value })} /></label>
              <label>Description: <textarea value={editedCelebrity.description} onChange={(e) => setEditedCelebrity({ ...editedCelebrity, description: e.target.value })}></textarea></label>
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>Age: {celebrity.age}</p>
              <p>Gender: {celebrity.gender}</p>
              <p>Country: {celebrity.country}</p>
              <p>Description: {celebrity.description}</p>
              <button onClick={handleEditClick}>Edit</button>
              <button onClick={handleDeleteClick}>Delete</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CelebrityItem;