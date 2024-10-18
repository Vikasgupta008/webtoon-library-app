import React from 'react';
import { Link } from 'react-router-dom';

function WebtoonCard({ webtoon }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={webtoon.thumbnail} alt={webtoon.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{webtoon.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{webtoon.description.substring(0, 100)}...</p>
        <Link to={`/webtoon/${webtoon._id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default WebtoonCard;