import React from 'react'
import { Link } from 'react-router-dom'

interface WebtoonProps {
  webtoon: {
    _id: string
    title: string
    thumbnail: string
    description: string
  }
}

export default function WebtoonCard({ webtoon }: WebtoonProps) {
  return (
    <Link to={`/webtoon/${webtoon._id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src={webtoon.thumbnail} alt={webtoon.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{webtoon.title}</h2>
          <p className="text-gray-600 text-sm line-clamp-3">{webtoon.description}</p>
        </div>
      </div>
    </Link>
  )
}