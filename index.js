/*
 * https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
 * https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
 * https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
 *
 */

const colors = [
  ["alice blue", "#f0f8ff", "aliceblue"],
  ["antique white", "#faebd7", "antiquewhite"],
  ["aqua", "#00ffff", "aqua"],
  ["aquamarine", "#7fffd4", "aquamarine"],
  ["azure", "#f0ffff", "azure"],
  ["beige", "#f5f5dc", "beige"],
  ["bisque", "#ffe4c4", "bisque"],
  ["black", "#000000", "black"],
  ["blanched almond", "#ffebcd", "blanchedalmond"],
  ["blue", "#0000ff", "blue"],
  ["blue violet", "#8a2be2", "blueviolet"],
  ["brown", "#a52a2a", "brown"],
  ["burlywood", "#deb887", "burlywood"],
  ["cadet blue", "#5f9ea0", "cadetblue"],
  ["chartreuse", "#7fff00", "chartreuse"],
  ["chocolate", "#d2691e", "chocolate"],
  ["coral", "#ff7f50", "coral"],
  ["corn flower blue", "#6495ed", "cornflowerblue"],
  ["cornsilk", "#fff8dc", "cornsilk"],
  ["crimson", "#dc143c", "crimson"],
  ["cyan", "#00ffff", "cyan"],
  ["dark blue", "#00008b", "darkblue"],
  ["dark cyan", "#008b8b", "darkcyan"],
  ["dark goldenrod", "#b8860b", "darkgoldenrod"],
  ["dark gray", "#a9a9a9", "darkgray"],
  ["dark green", "#006400", "darkgreen"],
  ["dark grey", "#a9a9a9", "darkgrey"],
  ["dark khaki", "#bdb76b", "darkkhaki"],
  ["dark magenta", "#8b008b", "darkmagenta"],
  ["dark olive green", "#556b2f", "darkolivegreen"],
  ["dark orange", "#ff8c00", "darkorange"],
  ["dark orchid", "#9932cc", "darkorchid"],
  ["dark red", "#8b0000", "darkred"],
  ["dark salmon", "#e9967a", "darksalmon"],
  ["dark sea green", "#8fbc8f", "darkseagreen"],
  ["dark slate blue", "#483d8b", "darkslateblue"],
  ["dark slate gray", "#2f4f4f", "darkslategray"],
  ["dark slate grey", "#2f4f4f", "darkslategrey"],
  ["dark turquoise", "#00ced1", "darkturquoise"],
  ["dark violet", "#9400d3", "darkviolet"],
  ["deep pink", "#ff1493", "deeppink"],
  ["deep sky blue", "#00bfff", "deepskyblue"],
  ["dim gray", "#696969", "dimgray"],
  ["dim grey", "#696969", "dimgrey"],
  ["dodger blue", "#1e90ff", "dodgerblue"],
  ["fire brick", "#b22222", "firebrick"],
  ["floral white", "#fffaf0", "floralwhite"],
  ["forest green", "#228b22", "forestgreen"],
  ["fuchsia", "#ff00ff", "fuchsia"],
  ["gainsboro", "#dcdcdc", "gainsboro"],
  ["ghost white", "#f8f8ff", "ghostwhite"],
  ["goldenrod", "#daa520", "goldenrod"],
  ["gold", "#ffd700", "gold"],
  ["gray", "#808080", "gray"],
  ["green", "#008000", "green"],
  ["green yellow", "#adff2f", "greenyellow"],
  ["grey", "#808080", "grey"],
  ["honeydew", "#f0fff0", "honeydew"],
  ["hot pink", "#ff69b4", "hotpink"],
  ["indian red", "#cd5c5c", "indianred"],
  ["indigo", "#4b0082", "indigo"],
  ["ivory", "#fffff0", "ivory"],
  ["khaki", "#f0e68c", "khaki"],
  ["lavender blush", "#fff0f5", "lavenderblush"],
  ["lavender", "#e6e6fa", "lavender"],
  ["lawn green", "#7cfc00", "lawngreen"],
  ["lemon chiffon", "#fffacd", "lemonchiffon"],
  ["light blue", "#add8e6", "lightblue"],
  ["light coral", "#f08080", "lightcoral"],
  ["light cyan", "#e0ffff", "lightcyan"],
  ["light goldenrod yellow", "#fafad2", "lightgoldenrodyellow"],
  ["light gray", "#d3d3d3", "lightgray"],
  ["light green", "#90ee90", "lightgreen"],
  ["light grey", "#d3d3d3", "lightgrey"],
  ["light pink", "#ffb6c1", "lightpink"],
  ["light salmon", "#ffa07a", "lightsalmon"],
  ["light sea green", "#20b2aa", "lightseagreen"],
  ["light sky blue", "#87cefa", "lightskyblue"],
  ["light slate gray", "#778899", "lightslategray"],
  ["light slate grey", "#778899", "lightslategrey"],
  ["light steel blue", "#b0c4de", "lightsteelblue"],
  ["light yellow", "#ffffe0", "lightyellow"],
  ["lime", "#00ff00", "lime"],
  ["lime green", "#32cd32", "limegreen"],
  ["linen", "#faf0e6", "linen"],
  ["magenta", "#ff00ff", "magenta"],
  ["maroon", "#800000", "maroon"],
  ["medium aquamarine", "#66cdaa", "mediumaquamarine"],
  ["medium blue", "#0000cd", "mediumblue"],
  ["medium orchid", "#ba55d3", "mediumorchid"],
  ["medium purple", "#9370db", "mediumpurple"],
  ["medium sea green", "#3cb371", "mediumseagreen"],
  ["medium slate blue", "#7b68ee", "mediumslateblue"],
  ["medium spring green", "#00fa9a", "mediumspringgreen"],
  ["medium turquoise", "#48d1cc", "mediumturquoise"],
  ["medium violetred", "#c71585", "mediumvioletred"],
  ["midnight blue", "#191970", "midnightblue"],
  ["mint cream", "#f5fffa", "mintcream"],
  ["misty rose", "#ffe4e1", "mistyrose"],
  ["moccasin", "#ffe4b5", "moccasin"],
  ["navajo white", "#ffdead", "navajowhite"],
  ["navy", "#000080", "navy"],
  ["old lace", "#fdf5e6", "oldlace"],
  ["olive", "#808000", "olive"],
  ["olive drab", "#6b8e23", "olivedrab"],
  ["orange", "#ffa500", "orange"],
  ["orange red", "#ff4500", "orangered"],
  ["orchid", "#da70d6", "orchid"],
  ["pale goldenrod", "#eee8aa", "palegoldenrod"],
  ["pale green", "#98fb98", "palegreen"],
  ["pale turquoise", "#afeeee", "paleturquoise"],
  ["pale violetred", "#db7093", "palevioletred"],
  ["papaya whip", "#ffefd5", "papayawhip"],
  ["peach puff", "#ffdab9", "peachpuff"],
  ["peru", "#cd853f", "peru"],
  ["pink", "#ffc0cb", "pink"],
  ["plum", "#dda0dd", "plum"],
  ["powder blue", "#b0e0e6", "powderblue"],
  ["purple", "#800080", "purple"],
  ["rebecca purple", "#663399", "rebeccapurple"],
  ["red", "#ff0000", "red"],
  ["rosy brown", "#bc8f8f", "rosybrown"],
  ["royal blue", "#4169e1", "royalblue"],
  ["saddle brown", "#8b4513", "saddlebrown"],
  ["salmon", "#fa8072", "salmon"],
  ["sandy brown", "#f4a460", "sandybrown"],
  ["sea green", "#2e8b57", "seagreen"],
  ["sea shell", "#fff5ee", "seashell"],
  ["sienna", "#a0522d", "sienna"],
  ["silver", "#c0c0c0", "silver"],
  ["sky blue", "#87ceeb", "skyblue"],
  ["slate blue", "#6a5acd", "slateblue"],
  ["slate gray", "#708090", "slategray"],
  ["slate grey", "#708090", "slategrey"],
  ["snow", "#fffafa", "snow"],
  ["spring green", "#00ff7f", "springgreen"],
  ["steel blue", "#4682b4", "steelblue"],
  ["tan", "#d2b48c", "tan"],
  ["teal", "#008080", "teal"],
  ["thistle", "#d8bfd8", "thistle"],
  ["tomato", "#ff6347", "tomato"],
  ["turquoise", "#40e0d0", "turquoise"],
  ["violet", "#ee82ee", "violet"],
  ["wheat", "#f5deb3", "wheat"],
  ["white", "#ffffff", "white"],
  ["white smoke", "#f5f5f5", "whitesmoke"],
  ["yellow", "#ffff00", "yellow"],
  ["yellow green", "#9acd32", "yellowgreen"],
];

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

function hexToRgbA(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
  }
  throw new Error("Bad Hex");
}

function canDarkBG(red, green, blue) {
  var uicolors = [red / 255, green / 255, blue / 255];
  var c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L > 0.179;
}

var canvas = document.getElementById("canvasElement");
var ctx = canvas.getContext("2d");

const w = 300;
const h = 300;

let x = canvas.width / 2 - w / 2;
let y = canvas.height / 2 - h / 2;

function draw(text, hex) {
  hex = hex.toUpperCase();
  hex = hex.replace("#", "");
  let textFix = capitalize(text);

  let [red, green, blue] = hexToRgbA("#" + hex);
  console.log(red);

  color = canDarkBG(red, green, blue) ? "black" : "white";

  ctx.fillStyle = `#${hex}`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = color;
  ctx.font = "40px VT323";
  ctx.fillText(textFix, x + 17, y + 40 + 40 * 0);
  ctx.fillText(`HEX ${hex}`, x + 17, y + 40 + 40 * 1);
  ctx.fillText(`RGB ${red} ${green} ${blue}`, x + 17, y + 40 + 40 * 2);

  ctx.beginPath();
  ctx.lineWidth = "6";
  ctx.strokeStyle = color;
  ctx.rect(x, y, w, h);
  ctx.stroke();
}

let i = 0;
draw(colors[i][0], colors[i][1]);

var btn = document.getElementById("download");

btn.onclick = function () {
  i++;
  draw(colors[i][0], colors[i][1]);

  var dataURL = canvas.toDataURL("image/png"),
    dataURL = dataURL.replace("image/png", "image/octet-stream");
  document.querySelector("#download").href = dataURL;
  document.querySelector("#download").download = colors[i][0] + ".png";
};

// setInterval(function () {
//   i++;
//   draw(colors[i][0], colors[i][1]);
// }, 500);
