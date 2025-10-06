"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

const questions = [
  {
    id: 1,
    question: "What does the underground hardcore movement mean to you?",
    options: ["A way of life and community", "Just music and parties", "A fashion statement", "Something to try once"],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "How do you contribute to the community?",
    options: [
      "I respect the culture and support fellow ravers",
      "I just show up to parties",
      "I don't really contribute",
      "I'm here for social media content",
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: "What's your approach to secret locations?",
    options: [
      "Keep them secret and respect the space",
      "Share them with close friends only",
      "Post them on social media",
      "Tell everyone I know",
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "How do you handle the energy at underground events?",
    options: [
      "Embrace it fully and respect others' space",
      "Stay in my comfort zone",
      "Try to be the center of attention",
      "Complain if it's too intense",
    ],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "What's your commitment to the scene?",
    options: [
      "Long-term dedication to the culture",
      "I'll see how it goes",
      "Just curious for now",
      "Looking for something new to do",
    ],
    correctAnswer: 0,
  },
]

export default function AccessTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)
  const router = useRouter()

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers, selectedAnswer]
      setAnswers(newAnswers)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setShowResults(true)
      }
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(answers[currentQuestion - 1])
      setAnswers(answers.slice(0, -1))
    }
  }

  const calculateScore = () => {
    let score = 0
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++
      }
    })
    return score
  }

  const handleComplete = () => {
    const score = calculateScore()
    // In production, this would save the user's responses to a database
    if (score >= 3) {
      router.push("/secret-chapters/private-events")
    } else {
      router.push("/secret-chapters/access-denied")
    }
  }

  if (showResults) {
    const score = calculateScore()
    const passed = score >= 3

    return (
      <main className="min-h-screen bg-black">
        <Navigation />

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-purple-900/30" />

          <div className="absolute inset-0">
            <div className="absolute top-[20%] left-[15%] w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[30%] right-[20%] w-56 h-56 bg-purple-600/18 rounded-full blur-[90px]" />
          </div>

          <div className="relative z-10 container mx-auto px-6 max-w-2xl text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle2 className={`h-20 w-20 ${passed ? "text-secondary" : "text-red-500"}`} />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className={passed ? "text-secondary" : "text-red-400"}>
                {passed ? "WELCOME TO THE UNDERGROUND" : "NOT QUITE THERE YET"}
              </span>
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              {passed
                ? `You scored ${score} out of ${questions.length}. You understand the culture and respect the movement.`
                : `You scored ${score} out of ${questions.length}. Spend more time in the community and try again.`}
            </p>

            <div className="bg-black/60 backdrop-blur-sm border-2 border-secondary rounded-2xl p-8">
              {passed ? (
                <>
                  <p className="text-gray-400 mb-6">
                    You've proven your dedication to the underground hardcore movement. Access to private events is now
                    unlocked.
                  </p>
                  <Button
                    onClick={handleComplete}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold text-lg py-6 rounded-full"
                  >
                    ENTER PRIVATE EVENTS
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </>
              ) : (
                <>
                  <p className="text-gray-400 mb-6">
                    Come to our open gatherings, immerse yourself in the culture, and try the access test again when
                    you're ready.
                  </p>
                  <Button
                    onClick={() => router.push("/events")}
                    className="w-full bg-primary hover:bg-primary/90 text-black font-bold text-lg py-6 rounded-full"
                  >
                    VIEW OPEN GATHERINGS
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    )
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-purple-900/30" />

        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[15%] w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[30%] right-[20%] w-56 h-56 bg-purple-600/18 rounded-full blur-[90px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="h-2 bg-black/60 rounded-full overflow-hidden">
              <div className="h-full bg-secondary transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-black/60 backdrop-blur-sm border-2 border-secondary rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{questions[currentQuestion].question}</h2>

            <RadioGroup
              value={selectedAnswer?.toString()}
              onValueChange={(value) => setSelectedAnswer(Number.parseInt(value))}
            >
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <RadioGroupItem
                      value={index.toString()}
                      id={`option-${index}`}
                      className="border-secondary text-secondary"
                    />
                    <Label
                      htmlFor={`option-${index}`}
                      className="text-gray-300 text-lg cursor-pointer flex-1 py-3 px-4 rounded-lg hover:bg-secondary/10 transition-colors"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex gap-4 mt-8">
              {currentQuestion > 0 && (
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="border-secondary/50 text-secondary hover:bg-secondary/10 bg-transparent"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  BACK
                </Button>
              )}

              <Button
                onClick={handleNext}
                disabled={selectedAnswer === null}
                className="flex-1 bg-secondary hover:bg-secondary/90 text-white font-bold text-lg py-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentQuestion < questions.length - 1 ? "NEXT QUESTION" : "SUBMIT"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
