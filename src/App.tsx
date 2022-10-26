import './App.css'
import { useColorGuesser } from './hooks/useColorGuesser'

const App = () => {
  const { frameColor, isCorrectAnswer, hexaOptions, handleSelectOption } =
    useColorGuesser()

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
