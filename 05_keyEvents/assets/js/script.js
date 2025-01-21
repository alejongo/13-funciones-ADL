const key = document.getElementById('key')
const main_container = document.getElementById('main-container')

let color = ''

const colorize = () => {
    addEventListener('keydown', (e) => {
        if (e.key === 'a') {
            color = '#f472b6'
            key.style.backgroundColor = color
            // console.log(color)
        } else if (e.key === 's') {
            color = '#fb923c'
            key.style.backgroundColor = color
            // console.log(color)
        } else if (e.key === 'd') {
            color = '#22d3ee'
            key.style.backgroundColor = color
            // console.log(color)
        } else if (e.key === 'q') {
            color = '#818cf8'
            main_container.innerHTML += '<div id="key_new" class="w-[200px] h-[200px] outline outline-gray-900 rounded-lg"></div>'
            key_new.style.backgroundColor = color
        } else if (e.key === 'w') {
            color = '#d1d5db'
            main_container.innerHTML += '<div id="key_new2" class="w-[200px] h-[200px] outline outline-gray-900 rounded-lg"></div>'
            key_new2.style.backgroundColor = color
        } else if (e.key === 'e') {
            main_container.innerHTML += '<div id="key_new3" class="w-[200px] h-[200px] outline outline-gray-900 rounded-lg"></div>'
            color = '#a16207'
            key_new3.style.backgroundColor = color
        }
    })
}

colorize()


