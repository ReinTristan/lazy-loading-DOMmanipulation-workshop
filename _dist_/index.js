import { registerImage } from './lazy.js'
import ImageLogs from './ImageLogs.js'

const url = 'https://randomfox.ca/floof'
let mountNode = document.querySelector('#images')
const addButton = document.querySelector('#addButton')
const cleanButton = document.querySelector('#cleanButton')
const logInstance = ImageLogs.getInstance()

const createImageNode = async () => {
    try {
        const container = document.createElement('div')
        container.className = 'mx-auto w-80 bg-gray-200 rounded-2xl mt-1'
        
        const response = await fetch(url)
        const imageInfo = await response.json()

        const imageUrl = imageInfo.image
        
        
        const image = document.createElement('img')
        image.className = 'w-full object-cover overflow-hidden rounded-2xl'
        image.dataset.url = imageUrl
        
        container.append(image)
        registerImage(container)
        mountNode.appendChild(container)
        logInstance.appendedImages++    
        logInstance.printLog()
        
    } catch {
        alert('ups fallo en cargar la imagen intenta denuevo')
    }
}

const addImage = () => createImageNode()
addButton.addEventListener('click', addImage)

function removeImages() {
    const mainContainer = document.querySelector('#main-container')
    const clone = mountNode.cloneNode(false)
    mainContainer.removeChild(mountNode)
    mountNode = clone
    mainContainer.insertAdjacentElement('beforeend', clone)
}
cleanButton.addEventListener('click', removeImages)
