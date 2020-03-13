const Jimp = require('jimp')

Jimp.read('spider.png', (err, image)=> {
    image
        //.resize(100, 100)
        .cover(200,250)
        .grayscale()
        .contrast(0.5)
        .blur(2)
        .write('spider-100x100-grayscale-contrast-blur.png')
})