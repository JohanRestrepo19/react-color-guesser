import { useEffect, useState } from 'react'
import './App.css'
import { getRandomHexaColor } from './utils/fuctions'

const App = () => {
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

  return (
    <div className="main-container">
      {isCorrectAnswer ? <h3>Opcion correcta</h3> : <h3>Opcion Incorrecta</h3>}
      <div
        className="color-frame"
        style={{ backgroundColor: frameColor }}
      ></div>

      <div className="options-container">
        {hexaOptions.map(hexa => (
          <button
            className="option"
            key={hexa}
            value={hexa}
            onClick={() => handleSelectOption(hexa)}
          >
            {hexa}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
