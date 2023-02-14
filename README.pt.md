[Documentation in English 🇬🇧](README.md)

Bem-vindo ao nosso projeto de imagens com cor sólida!

Nós reunimos uma coleção incrível de imagens de todas as cores disponíveis no CSS. Nossas imagens são uma arte de cor sólida com informações sobre as cores e foram desenvolvidas para serem utilizadas de diversas formas, sejam como wallpapers minimalistas, para projetos gráficos ou qualquer outro uso que você imaginar.

Com nossa coleção, você poderá escolher entre as 144 cores disponíveis no CSS. Em cada imagem há o nome da cor, o código hexadecimal e o código RGB.

# Como você gerou essa lista? Você gerou uma por uma no photoshop?

Não! Eu gerei através de uma [página html](/index.html) e um [arquivo JavaScript](/index.js). Nele eu tomei como base [esta lista de todas as cores do css](https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json). E fui gerando dentro de uma tag `<canvas></canvas>` a imagem. Após isso eu converti o conteúdo do canvas para dataURL e inseri o conteúdo em um botão de download. Então eu só precisei ficar clicando para gerar a lista de imagens.

Te convido a fazer o clone do projeto e verificar como esse script funciona. Ele está bem interessante!

Alguns links que me ajudaram:
- https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
- https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
- https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json

## Onde estão as imagens?

Para utilizar nossa coleção, basta fazer o "clone" do projeto que as imagens já estão dentro do [diretório /images](/images).

## Exemplos de imagens

![image exemple](/images/lime.png)
![image exemple](/images/magenta.png)
![image exemple](/images/crimson.png)
![image exemple](/images/snow.png)
![image exemple](/images/dark%20olive%20green.png)
