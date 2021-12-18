

addEventListener('message', msg => {
    const imageData = msg.data
    const w = imageData.width
    const h = imageData.height
    const data = imageData.data
    for(let x = 0; x < w; x++){
        for(let y = 0; y < h; y++){
            let index = (x + y*w)*4
            data[index] = data[index] -200
        }
    }
    postMessage(imageData, [imageData.data.buffer])
    
})