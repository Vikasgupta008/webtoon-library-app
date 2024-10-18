import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WebtoonCard from '../componants/WebtoonCard'

interface Webtoon {
  _id: string
  title: string
  thumbnail: string
  description: string
}

export default function Favorites() {
  const [favorites, setFavorites] = useState<Webtoon[]>([])

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          // Handle case where user is not logged in
          return
        }
        const response = await axios.get('http://localhost:5000/api/webtoons/favorites', {
          headers: { Authorization: `Bearer ${token}` }
        })
        setFavorites(response.data)
      } catch (error) {
        console.error('Error fetching favorites:', error)
      }
    }
    fetchFavorites()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-600">You haven't added any favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((webtoon) => (
            <WebtoonCard key={webtoon._id} webtoon={webtoon} />
          ))}
        </div>
      )}
    </div>
  )
}