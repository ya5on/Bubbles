/**
 *Generate random number from min to max
 * @param min is minimum number.
 * @param max is maximum number.
 * @returns {*} random number.
 */
function randomNumber(max, min) {
    return Math.floor(Math.random() * max) + (min == undefined ? 0 : min);
}

/**
 * Generates random color.
 * @returns {{r: number, g: number, b: number}}
 */
function rgb() {
    return {
        r: randomNumber(256),
        g: randomNumber(256),
        b: randomNumber(256)
    };
}

/**
 * Generates array of colors.
 * @param count how many colors generate.
 * @returns {Array} with colors.
 */
function colors(count) {
    var array = [];

    for (var i = 0; i < count; i++) {
        array.push(rgb());
    }

    return array;
}