

const colorRosa = '#f472b6'
const colorNaranja = '#fb923c'
const colorCeleste = '#22d3ee'

const colorize = () => {
    const key = document.getElementById('key')
    const main_container = document.getElementById('main-container')

    // Escucha del evento KeyDown
    addEventListener('keydown', (e) => {
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'w-[200px] h-[200px] outline outline-gray-900 rounded-lg')

        if (e.key === 'a') {
            //color = '#f472b6'
            key.style.backgroundColor = colorRosa
            // console.log(color)
        } else if (e.key === 's') {
            key.style.backgroundColor = colorNaranja
            // console.log(color)
        } else if (e.key === 'd') {
            key.style.backgroundColor = colorCeleste
            // console.log(color)
        } else if (e.key === 'q') {
            const color = '#818cf8'
            main_container.appendChild(newDiv)
            newDiv.style.backgroundColor = color
        } else if (e.key === 'w') {
            const color = '#d1d5db'
            main_container.appendChild(newDiv)
            newDiv.style.backgroundColor = color
        } else if (e.key === 'e') {
            const color = '#a16207'
            main_container.appendChild(newDiv)
            newDiv.style.backgroundColor = color
        }
    })
}

// const colorizeNewDiv = () => {
//     addEventListener('keydown', (e) => {
//         if (e.key === 'q') {
//             color = '#818cf8'
//             main_container.innerHTML += '<div id="key_new" class="w-[200px] h-[200px] outline outline-gray-900 rounded-lg"></div>'
//             key_new.style.backgroundColor = color
//         } else if (e.key === 'w') {
//             color = '#d1d5db'
//             main_container.innerHTML += '<div id="key_new2" class="w-[200px] h-[200px] outline outline-gray-900 rounded-lg"></div>'
//             key_new2.style.backgroundColor = color
//         } else if (e.key === 'e') {
//             main_container.innerHTML += '<div id="key_new3" class="w-[200px] h-[200px] outline outline-gray-900 rounded-lg"></div>'
//             color = '#a16207'
//             key_new3.style.backgroundColor = color
//         }
//     })
// }

colorize()
// colorizeNewDiv()


