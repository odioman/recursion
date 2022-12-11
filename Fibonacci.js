function fibs(n) {
const sequence = [0,1]

while (sequence.length < n) {
    sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1])
    }
    return sequence;
}

function fibsRec(n) {
    if (n === 0 || n < 0) {
        return 
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else if (n > 2) {
        return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n-3]];
    }
}