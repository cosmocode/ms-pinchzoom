/**
 * Calculate the zoom center based on the initial offset, the current offset and the zoom factor
 *
 * @param {{x: number, y: number}} currentOffset
 * @param {{x: number, y: number}} initialOffset
 * @param {number} zoomFactor
 * @return {{x: number, y: number}}
 */
function getCurrentZoomCenter(currentOffset, initialOffset, zoomFactor) {
    const offsetLeft = currentOffset.x - initialOffset.x;
    const centerX = -1 * currentOffset.x - offsetLeft / (1 / zoomFactor - 1);

    const offsetTop = currentOffset.y - initialOffset.y;
    const centerY = -1 * currentOffset.y - offsetTop / (1 / zoomFactor - 1);

    return {
        x: centerX,
        y: centerY
    };
}

export default getCurrentZoomCenter;
