"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from "lucide-react"

interface CalendarEvent {
  id: string
  title: string
  date: string
  time: string
  location: string
  type: 'main' | 'underground' | 'community'
}

// Import events from agenda section data
const agendaEvents = [
  {
    id: "main-1",
    title: "THUNDER STORM",
    date: "2024-09-20",
    time: "22:00 - 06:00",
    location: "Industrial Warehouse, Rotterdam",
    type: "main" as const
  },
  {
    id: "main-2", 
    title: "BASS DESTROYER",
    date: "2024-09-21",
    time: "23:00 - 05:00",
    location: "Industrial Warehouse, Rotterdam",
    type: "main" as const
  },
  {
    id: "main-3",
    title: "NEON PULSE", 
    date: "2024-09-22",
    time: "22:30 - 06:30",
    location: "Industrial Warehouse, Rotterdam",
    type: "main" as const
  },
  {
    id: "underground-1",
    title: "DEEP BASS",
    date: "2024-09-20",
    time: "21:30 - 05:30",
    location: "Secret Bunker, Amsterdam",
    type: "underground" as const
  },
  {
    id: "underground-2",
    title: "DARK MATTER",
    date: "2024-09-21", 
    time: "23:30 - 06:00",
    location: "Secret Bunker, Amsterdam",
    type: "underground" as const
  },
  {
    id: "underground-3",
    title: "VOID SESSION",
    date: "2024-09-22",
    time: "22:00 - 05:00", 
    location: "Secret Bunker, Amsterdam",
    type: "underground" as const
  },
  {
    id: "community-1",
    title: "LOCAL HERO",
    date: "2024-09-20",
    time: "22:30 - 04:30",
    location: "Community Center, Utrecht",
    type: "community" as const
  },
  {
    id: "community-2",
    title: "RISING STAR", 
    date: "2024-09-21",
    time: "23:00 - 05:00",
    location: "Community Center, Utrecht",
    type: "community" as const
  },
  {
    id: "community-3",
    title: "UNDERGROUND LEGEND",
    date: "2024-09-22",
    time: "22:00 - 04:00",
    location: "Community Center, Utrecht", 
    type: "community" as const
  }
]

const calendarEvents: CalendarEvent[] = agendaEvents

export function EventCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 8, 1)) // September 2024
  const [viewMode, setViewMode] = useState<'month' | 'list'>('month')

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0]
    return calendarEvents.filter(event => event.date === dateString)
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'main':
        return 'bg-primary text-black'
      case 'underground':
        return 'bg-secondary text-white'
      case 'community':
        return 'bg-primary/80 text-white'
      default:
        return 'bg-gray-600 text-white'
    }
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }

  const days = getDaysInMonth(currentDate)
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="bg-black/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-display text-white">Event Calendar</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('month')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              viewMode === 'month' 
                ? 'bg-primary text-black' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Month
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              viewMode === 'list' 
                ? 'bg-primary text-black' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            List
          </button>
        </div>
      </div>

      {viewMode === 'month' ? (
        <>
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h4 className="text-xl font-heading text-white">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h4>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {dayNames.map(day => (
              <div key={day} className="p-2 text-center text-gray-400 text-sm font-medium">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => {
              const dayEvents = day ? getEventsForDate(day) : []
              const isToday = day && day.toDateString() === new Date().toDateString()
              
              return (
                <div
                  key={index}
                  className={`min-h-[120px] p-2 border border-gray-700/30 rounded-lg ${
                    day ? 'bg-gray-900/50' : 'bg-transparent'
                  } ${isToday ? 'ring-2 ring-primary' : ''}`}
                >
                  {day && (
                    <>
                      <div className={`text-sm font-medium mb-2 ${
                        isToday ? 'text-primary' : 'text-white'
                      }`}>
                        {day.getDate()}
                      </div>
                      <div className="space-y-1">
                        {dayEvents.slice(0, 4).map(event => (
                          <div
                            key={event.id}
                            className={`text-xs px-1 py-0.5 rounded ${getEventTypeColor(event.type)} truncate cursor-pointer hover:opacity-80 transition-opacity`}
                            title={`${event.title} - ${event.time} - ${event.location}`}
                          >
                            {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 4 && (
                          <div className="text-xs text-gray-400">
                            +{dayEvents.length - 4} more
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </>
      ) : (
        /* List View */
        <div className="space-y-4">
          {calendarEvents.map(event => (
            <div
              key={event.id}
              className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/30 hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getEventTypeColor(event.type)}`}>
                  <Calendar className="h-6 w-6" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium">{event.title}</h4>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {event.location}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-primary font-medium">
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="text-gray-400 text-sm">
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'short' 
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
