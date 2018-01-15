import getCurrentZoomCenter from '../src/util';

const zoomCenterParameters = [
    [
        { x: 0, y: 0, },
        { x: 0, y: 0, },
        0.5,
        { x: -0, y: -0, },
        'element at top left',
    ],
    [
        { x: -3.5, y: -1 },
        { x: -3, y: 0 },
        0.5,
        { x: 4, y: 2},
        'element at middle middle',
    ],
    [
        { x: -4, y: 0 },
        { x: -3, y: 0 },
        0.5,
        { x: 5, y: -0},
        'element at top right',
    ],
    [
        { x: -4, y: -1 },
        { x: -3, y: 0 },
        0.5,
        { x: 5, y: 2},
        'element at middle right',
    ],
    [
        { x: -4, y: -2 },
        { x: -3, y: -0 },
        0.25,
        { x: 4 + 1/3, y: 2+2/3 },
        'element at below right of center'
    ],
    [
        { x: -3, y: -3, },
        { x: 0, y: 0, },
        1/4,
        { x: 4, y: 4, },
        'element at bottom right',
    ],
    [
        { x: -6, y: -1, },
        { x: -3, y: 0, },
        0.5,
        { x: 9, y: 2, },
        'element at middle outside right',
    ],
    [
        { x: 2, y: 0 },
        { x: 0, y: 0 },
        2,
        { x: 2, y: 0},
        'element larger than container'
    ],
    [
        { x: 222, y: 130 },
        { x: 0, y: -25 },
        2,
        { x: 222, y: 180 },
        'actual element'
    ],
];

zoomCenterParameters.map(([inputCurrentOffset, inputInitialOffset, zoomFaktor, expectedZoomCenter, title]) => {
    test('getCurrentZoomCenter: ' + title, () => {
        const actualZoomCenter = getCurrentZoomCenter(
            inputCurrentOffset,
            inputInitialOffset,
            zoomFaktor
        );
        expect(actualZoomCenter).toEqual(expectedZoomCenter);
    })
});
