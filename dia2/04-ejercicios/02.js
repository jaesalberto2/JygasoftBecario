/*nombre: ancho x alto
8k 7680 x 4320
4k 3840 x 2160
2k 2048 x 1080
wqhd 2560 x 1440
fhd 1920 x 1080
hd 1280 x 720
 */
function nombreResolucion(ancho, alto) {
    if (ancho === 7680 && alto === 4320) {
        return "8k";
    } else if (ancho === 3840 && alto === 2160) {
        return "4k";
    } else if (ancho === 2048 && alto === 1080) {
        return "2k";
    } else if (ancho === 2560 && alto === 1440) {
        return "wqhd";
    } else if (ancho === 1920 && alto === 1080) {
        return "fhd";
    } else if (ancho === 1280 && alto === 720) {
        return "hd";
    } else {
        return "Resolución no reconocida";
    }

}
let nombre = nombreResolucion(1920, 1080);
console.log(nombre);