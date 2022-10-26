import { useState, useEffect } from 'react'
import { getRandomHexaColor } from '../utils/fuctions'

export const useColorGuesser = () => {
  const [frameColor, setFrameColor] = useState<string>('#fafafa')
  const [hexaOptions, setHexaOptions] = useState<Array<string>>([])
  const [optionSelected, setOptionSelected] = useState<string>('')
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | undefined>(
    undefined
  )

  useEffect(() => {
    setFrameColor(getRandomHexaColor())
  }, [])

  useEffect(() => {
    const options = [
      frameColor,
      getRandomHexaColor(),
      getRandomHexaColor(),
    ].sort(() => 0.5 - Math.random())
    setHexaOptions(options)
  }, [frameColor])

  useEffect(() => {
    optionSelected === frameColor
      ? setIsCorrectAnswer(true)
      : setIsCorrectAnswer(false)
  }, [optionSelected])

  useEffect(() => {
    isCorrectAnswer && setFrameColor(getRandomHexaColor())
  }, [isCorrectAnswer])

  const handleSelectOption = (color: string) => {
    setOptionSelected(color)
  }

  return {
    frameColor,
    optionSelected,
    hexaOptions,
    isCorrectAnswer,
    handleSelectOption,
  }
}
