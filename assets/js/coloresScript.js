const blackBg = (divId, color) => {
    const element = document.getElementById(divId)
    element.addEventListener('click', () => {
        element.style.backgroundColor = color
    })
}

blackBg('blueDiv', 'black')
blackBg('redDiv', 'black')
blackBg('greenDiv', 'black')
blackBg('yellowDiv', 'black')

