function serialize(numbers) {
    let bitString = '';

    numbers.forEach(num => {
        bitString += num.toString(2).padStart(9, '0');
    });

    const byteArray = [];

    for (let i = 0; i < bitString.length; i += 8) {
        byteArray.push(parseInt(bitString.slice(i, i + 8), 2));
    }

    return btoa(String.fromCharCode.apply(null, byteArray));
}

function deserialize(serializedStr) {
    const byteArray = atob(serializedStr).split('').map(c => c.charCodeAt(0));
    const bitString = byteArray.map(byte => byte.toString(2).padStart(8, '0')).join('');
    const numbers = [];

    for (let i = 0; i < bitString.length; i += 9) {
        numbers.push(parseInt(bitString.slice(i, i + 9), 2));
    }

    return numbers;
}

// test
const numbers = [1, 2, 300, 45, 100, 250];
const serialized = serialize(numbers);
const deserialized = deserialize(serialized);

console.log({ numbers, serialized, deserialized });