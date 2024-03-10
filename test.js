const inputEl = document.querySelector('#inputfile');
const spanEl1 = document.querySelector('#n1');
const spanEl2 = document.querySelector('#n2');
const spanEl3 = document.querySelector('#n3');
const spanEl4 = document.querySelector('#n4');
const spanEl5 = document.querySelector('#n5');
const spanEl6 = document.querySelector('#n6');

inputEl.addEventListener('change', handleChange);

function handleChange(event) {
    console.log('start');

    let reader = new FileReader(); //ok

    reader.readAsText(inputEl.files[0]);

    reader.onload = function () {
        const currentArray = reader.result.split('\n').map(Number);

        let maxNumber = findMaxNumber(currentArray);
        console.log(`maxNumber: ${maxNumber}`);
        spanEl1.textContent = String(maxNumber);

        let minNumber = findMinNumber(currentArray);
        console.log(`minNumber: ${minNumber}`);
        spanEl2.textContent = String(minNumber);

        const medianNumber = findMediana(currentArray);
        console.log(`medianNumber: ${medianNumber}`);
        spanEl3.textContent = String(medianNumber);

        const averageNumber = findAverage(currentArray);
        console.log(`averageNumber: ${averageNumber}`);
        spanEl4.textContent = String(averageNumber);

        const arrIncreasing = findIncreasingSequence(currentArray);
        console.log(`arrayIncreasing: ${arrIncreasing}`);
        spanEl5.textContent = arrIncreasing.join(', ');

        const arrDecreasing = findDecreasingSequence(currentArray);
        console.log(`arrayDecreasing: ${arrDecreasing}`);
        spanEl6.textContent = arrDecreasing.join(', ');
    };
}


function findMaxNumber(array) {
    let maxValue = array[0];
    for (const element of array) {
        if (element > maxValue) {
            maxValue = element;
        }
    }
    return maxValue;
}

function findMinNumber(array) {
    let minValue = array[0];
    for (const element of array) {
        if (element < minValue) {
            minValue = element;
        }
    }
    return minValue;
}

function findMediana(array) {
    let median;
    const ascendingArray = array.toSorted((a, b) => a - b);
    const middle = Math.floor(ascendingArray.length / 2);
    if (ascendingArray.length % 2 === 0) {
        median = (ascendingArray[middle - 1] + ascendingArray[middle]) / 2;
    } else {
        median = ascendingArray[middle];
    }
    return median;
}

function findAverage(array) {
    const total = array.reduce((sum, num) => sum + num, 0);
    const average = total / array.length;
    return average;
}

function findIncreasingSequence(array) {
    let currentSequence = [array[0]];
    let maxSequence = [array[0]];

    for (let i = 1; i < array.length; i += 1) {
        if (array[i] > array[i - 1]) {
            currentSequence.push(array[i]);
        } else {
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence.slice();
            }

            currentSequence = [array[i]];
        }
    }

    if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
    }

    return maxSequence;
}

function findDecreasingSequence(array) {
    let currentSequence = [array[0]];
    let maxSequence = [array[0]];

    for (let i = 1; i < array.length; i += 1) {
        if (array[i] < array[i - 1]) {
            currentSequence.push(array[i]);
        } else {
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence.slice();
            }
            currentSequence = [array[i]];
        }
    }

    if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
    }

    return maxSequence;
}
