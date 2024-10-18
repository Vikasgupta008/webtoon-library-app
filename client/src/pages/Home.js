import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WebtoonCard from '../components/WebtoonCard';

function Home() {
  const [webtoons, setWebtoons] = useState([]);

  useEffect(() => {
    const fetchWebtoons = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/webtoons');
        setWebtoons(response.data);
      } catch (error) {
        console.error('Error fetching webtoons:', error);
      }
    };
    fetchWebtoons();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Popular Webtoons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {webtoons.map((webtoon) => (
          <WebtoonCard key={webtoon._id} webtoon={webtoon} />
        ))}
      </div>
    </div>
  );
}

export default Home;