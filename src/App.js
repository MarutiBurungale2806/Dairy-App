import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import CollectionForm from './components/Collection/CollectionForm';
import Collection from './components/Collection/Collection';
import userData from './components/UserData'; // Import user data
import collectionsData from './components/collectionsData'; 

const App = () => {
  const [users, setUsers] = useState([...userData  ]);

  const [collections, setCollections] = useState([...collectionsData]);

  const addMember = (memberData) => {
    const newCollection = collections.map((collection) => {
      if (collection.userId === parseInt(memberData.userId)) {
        return {
          ...collection,
          data: [...collection.data, memberData],
        };
      } else {
        return collection;
      }
    });
    setCollections(newCollection);
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route
        path="/collection"
        element={<Collection users={userData} collections={collectionsData} />}
      />
      <Route
        path="/add-collection"
        element={<CollectionForm users={userData} addMember={addMember} />}
      />
    </Routes>
  );
};

export default App;
