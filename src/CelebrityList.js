import React from 'react';
import CelebrityItem from './CelebrityItem.js';

const CelebrityList = ({ celebrities, setCelebrities }) => {
  return (
    <div>
      {celebrities.map(celebrity => (
        <CelebrityItem
          key={celebrity.id}
          celebrity={celebrity}
          setCelebrities={setCelebrities}
        />
      ))}
    </div>
  );
};

export default CelebrityList;