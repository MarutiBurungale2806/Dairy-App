import React, { useState } from 'react';
import Header from './Header';
import MemberCard from './MemberCard';
import './Collection.css';

const Collection = ({ users, collections }) => {
  const currentDate = new Date().toISOString().split('T')[0]; // Format: 'yyyy-MM-dd'
  const [filterDate, setFilterDate] = useState(currentDate);
  const [filterTime, setFilterTime] = useState('all'); // Added state for filter time
  const [animalFilter, setAnimalFilter] = useState('cow');
  const handleAnimalChange = (animal) => {
    setAnimalFilter(animal);
  };

  const handleFilterDateChange = (e) => {
    setFilterDate(e.target.value);
  };

  const handleFilterTimeChange = (time) => {
    setFilterTime(time);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-').map(part => part.padStart(2, '0'));
    return `${year}-${month}-${day}`;
  };

  const getMilkCollectionsForUser = (userId) => {
    const userCollections = collections.find(collection => collection.userId === userId);
    if (!userCollections) return [];

    let filteredData = userCollections.data;

    if (filterDate !== '') {
      const formattedFilterDate = formatDate(filterDate);
      filteredData = filteredData.filter((member) => {
        const memberDate = formatDate(member.date); // Make sure member.date is in 'yyyy-MM-dd' format
        return memberDate === formattedFilterDate;
      });
    }

    if (filterTime !== 'all') {
      filteredData = filteredData.filter((member) => member.time === filterTime);
    }

    return filteredData;
  };

  const filteredUsers = users.filter((user) => user.animal === animalFilter);

  return (
    <>
      <Header tabName={"Collection"}/>
      <div className="container mt-4">
        <div className="collection-header mb-4">
        <div className="animal-filter">
          <label>
            <input
              type="radio"
              value="cow"
              name='animalFilter'
              checked={animalFilter === 'cow'}
              onChange={handleAnimalChange}
            />
            Cow
          </label>
          <label>
            <input
              type="radio"
              value="buffalo"
              name='animalFilter'
              checked={animalFilter === 'buffalo'}
              onChange={handleAnimalChange}
            />
            Buffalo
          </label>
        </div>
          <div className="filter-date">
            <input
              type="date"
              value={filterDate}
              placeholder='Date'
              onChange={handleFilterDateChange}
            />
          </div>
          <div className="filter-time">
            <label>Filter by Time: </label>
            <button
              className={filterTime === 'all' ? 'active' : ''}
              onClick={() => handleFilterTimeChange('all')}
            >
              All
            </button>
            <button
              className={filterTime === 'morning' ? 'active' : ''}
              onClick={() => handleFilterTimeChange('morning')}
            >
              Morning
            </button>
            <button
              className={filterTime === 'evening' ? 'active' : ''}
              onClick={() => handleFilterTimeChange('evening')}
            >
              Evening
            </button>
          </div>
        </div>
        <div className="row member-card">
          {users.map((user) => (
            <div key={user.id} className="col-md-4">
              {getMilkCollectionsForUser(user.id).map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  currentDate={currentDate}
                />
              ))}
              {getMilkCollectionsForUser(user.id).length === 0 && filterDate !== '' && (
                <p>No milk collection data for {user.name} on {filterDate}.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collection;
