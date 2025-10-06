"use client"

import { useState, useEffect } from "react"
import { Search, X, Calendar, MapPin, Music } from "lucide-react"

interface SearchResult {
  id: string
  type: 'event' | 'artist' | 'location'
  title: string
  description: string
  date?: string
  location?: string
}

const searchData: SearchResult[] = [
  {
    id: '1',
    type: 'event',
    title: 'Underground Rave #22',
    description: 'Hardcore night with the best underground DJs',
    date: '2024-04-20',
    location: 'Industrial Warehouse, Rotterdam'
  },
  {
    id: '2',
    type: 'event',
    title: 'Festival 2023',
    description: 'Annual hardcore festival with multiple stages',
    date: '2024-05-15',
    location: 'Recreatieterrein Middelwaard, Vianen'
  },
  {
    id: '3',
    type: 'artist',
    title: 'THUNDER STORM',
    description: 'Hardcore DJ specializing in thunderous basslines',
    date: '2024-04-20',
    location: 'Main Stage'
  },
  {
    id: '4',
    type: 'artist',
    title: 'BASS DESTROYER',
    description: 'Underground artist known for destroying speakers',
    date: '2024-04-21',
    location: 'Main Stage'
  },
  {
    id: '5',
    type: 'location',
    title: 'Industrial Warehouse',
    description: 'Underground venue in Rotterdam',
    location: 'Rotterdam'
  },
  {
    id: '6',
    type: 'location',
    title: 'Secret Bunker',
    description: 'Hidden underground location in Amsterdam',
    location: 'Amsterdam'
  }
]

export function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true)
      // Simulate search delay
      setTimeout(() => {
        const filteredResults = searchData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.location?.toLowerCase().includes(query.toLowerCase())
        )
        setResults(filteredResults)
        setIsLoading(false)
      }, 300)
    } else {
      setResults([])
    }
  }, [query])

  const getIcon = (type: string) => {
    switch (type) {
      case 'event':
        return <Calendar className="h-4 w-4 text-primary" />
      case 'artist':
        return <Music className="h-4 w-4 text-secondary" />
      case 'location':
        return <MapPin className="h-4 w-4 text-primary" />
      default:
        return <Search className="h-4 w-4 text-gray-400" />
    }
  }

  return (
    <div className="relative">
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-primary/50 transition-all duration-300"
      >
        <Search className="h-4 w-4 text-gray-400" />
        <span className="text-gray-400 text-sm">Search...</span>
      </button>

      {/* Search Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-sm border border-gray-700/50 rounded-lg shadow-xl z-50">
          {/* Search Input */}
          <div className="p-4 border-b border-gray-700/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search events, artists, locations..."
                className="w-full pl-10 pr-10 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-primary/50 focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="p-4 text-center text-gray-400">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto mb-2"></div>
                Searching...
              </div>
            ) : results.length > 0 ? (
              <div className="p-2">
                {results.map((result) => (
                  <div
                    key={result.id}
                    className="flex items-center gap-3 p-3 hover:bg-gray-800/50 rounded-lg cursor-pointer transition-colors"
                  >
                    {getIcon(result.type)}
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-sm">{result.title}</h4>
                      <p className="text-gray-400 text-xs">{result.description}</p>
                      {result.date && (
                        <p className="text-primary text-xs mt-1">{result.date}</p>
                      )}
                      {result.location && (
                        <p className="text-gray-500 text-xs">{result.location}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : query.length > 2 ? (
              <div className="p-4 text-center text-gray-400">
                No results found for "{query}"
              </div>
            ) : (
              <div className="p-4 text-center text-gray-400">
                Type at least 3 characters to search
              </div>
            )}
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
