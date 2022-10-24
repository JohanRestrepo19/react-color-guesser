export const getRandomHexaColor = () => {
  const symbols = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ]
  let hexaCode = Array(6)
    .fill('')
    .map(symbol => {
      const item = symbols[Math.floor(Math.random() * symbols.length)]
      return item
    })
    .join('')
  hexaCode = `#${hexaCode}`
  return hexaCode
}
