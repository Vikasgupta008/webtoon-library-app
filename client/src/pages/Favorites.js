import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WebtoonCard from '../components/WebtoonCard';

function Favorites() {
  const [Favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/webtoons/Favorites', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((webtoon) => (
            <WebtoonCard key={webtoon._id} webtoon={webtoon} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;