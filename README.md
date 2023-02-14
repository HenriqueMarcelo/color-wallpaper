[Documentação em português 🇧🇷](README.pt.md)

Welcome to our solid color image project!

We have put together an amazing collection of images of all the colors available in CSS. Our images are solid color artwork with color information and are designed to be used in a variety of ways, whether as minimalist wallpapers, for graphic design, or any other use you can imagine.

With our collection you can choose from the 144 colors available in the CSS. On each image there is the color name, the hexadecimal code and the RGB code.

# How did you generate this list? Did you generate it one by one in photoshop?

No, I generated it through an [html page](/index.html) and a [JavaScript file](/index.js). In it I took [this list](https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json) of all the colors from the css as a base. And inside a `<canvas></canvas>` tag I generated the image. After that I converted the content of the canvas to dataURL and inserted the content into a download button. Then I just clicked to generate the list of images.

I invite you to clone the project and see how this script works. It looks pretty interesting!

Some links that helped me:
- https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
- https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
- https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json

## Where are the images?

To use our collection, just "clone" the project and the images are already inside the [/images directory](/images).

## Example images

![image exemple](/images/lime.png)
![image exemple](/images/magenta.png)
![image exemple](/images/crimson.png)
![image exemple](/images/dark%20olive%20green.png)
![image exemple](/images/snow.png)
