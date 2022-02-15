import ImageLogs from './ImageLogs'


const logInstance = ImageLogs.getInstance()

const isIntersecting = (entry) => {
    return entry.isIntersecting
} 

const load = (entry) => {
    const container = entry.target
    const image = container.firstChild
    const url = image.dataset.url
    image.src = url
    observer.unobserve(container)
    logInstance.loadedImages++
    logInstance.printLog()
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(load)
}, {
    threshold: 1
})

export const registerImage = (image) => {
    observer.observe(image)
}