"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState(words[0].text)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentWord((prev) => prev.slice(0, -1))
        setTypingSpeed(50)
      }, typingSpeed)

      if (currentWord === "") {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setTypingSpeed(150)
      }
    } else {
      const word = words[currentWordIndex].text
      if (currentWord === word) {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      } else {
        timeout = setTimeout(() => {
          setCurrentWord((prev) => word.slice(0, prev.length + 1))
        }, typingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentWord, currentWordIndex, isDeleting, typingSpeed, words])

  return (
    <div className={`inline-flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWord}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="inline-block"
        >
          <span className="text-gradient">{currentWord}</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className={`inline-block ml-1 h-4 w-[2px] bg-primary ${cursorClassName}`}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
