export function calculateMedian(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (parseFloat(arr[j]) > parseFloat(arr[j + 1])) {
                let temp
                temp = parseFloat(arr[j])
                arr[j] = parseFloat(arr[j + 1])
                arr[j + 1] = temp
            }
        }
    }
    let getMD = arr.length % 2 === 1 ? parseInt(arr[Math.floor(arr.length / 2)]) : (parseFloat(arr[(arr.length / 2)]) + parseFloat(arr[((arr.length / 2) - 1)])) / 2
    console.log(`Median Mean: ${getMD}`);
    return getMD
}

export function calculateArithmeticMean(arr) {
    let getAM = (arr.reduce((x, y) => parseFloat(x) + parseFloat(y), 0)) / arr.length
    console.log(`Arithmetic Mean: ${getAM}`);
    return getAM
}

export function calculateGeometricMean(arr) {
    let getGM = Math.pow((arr.reduce((x, y) => parseFloat(x) * parseFloat(y), 1)), 1/arr.length)
    console.log(`Geometric Mean: ${getGM}`);
    return getGM
}

export function calculateHarmonicMean(arr) {
    let getHM = arr.reduce((x, y) => parseFloat(x) + parseFloat(1/y), 0)
    console.log(`Harmonic Mean: ${arr.length / (getHM)}`);
    return arr.length / (getHM)
}