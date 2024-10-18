import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

interface Webtoon {
  _id: string
  title: string
  thumbnail: string
  description: string
}

export default function WebtoonDetail() {
  const [webtoon, setWebtoon] = useState<Webtoon | null>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const fetchWebtoon = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/webtoons/${id}`)
        setWebtoon(response.data)
      } catch (error) {
        console.error('Error fetching webtoon:', error)
      }
    }
    fetchWebtoon()
  }, [id])

  if (!webtoon) {
    return <div className="text-center mt-8">Loading...</div>
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={webtoon.thumbnail} alt={webtoon.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{webtoon.title}</h1>
        <p className="text-gray-700 mb-4">{webtoon.description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Add to Favorites
        </button>
      </div>
    </div>
  )
}