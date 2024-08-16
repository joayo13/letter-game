let alpha: Array<string> = 'abcdefghijklmnopqrstuvwxyz'.split('');

function addNewLetter(letters: Array<string>) {
	let random = alpha[Math.floor(Math.random() * alpha.length)];
	console.log(random);
	return [...letters, random];
}
function shiftLetterOneForward(letters: Array<string>) {
	//value of current letter we are shifting
	const currentLetter = letters[letters.length - 1];
	let shiftedLetterIndex = alpha.indexOf(currentLetter) + 1;
	if (shiftedLetterIndex >= 26) {
		// has to be a since this value could only be created if we were at last index (25) of alpha arrray aka letter Z
		letters[letters.length - 1] = 'a';
		return letters;
	} else {
		letters[letters.length - 1] = alpha[shiftedLetterIndex];
		return letters;
	}
}
function shiftLetterOneBackward(letters: Array<string>) {
	//value of current letter we are shifting
	const currentLetter = letters[letters.length - 1];
	let shiftedLetterIndex = alpha.indexOf(currentLetter) - 1;
	if (shiftedLetterIndex <= -1) {
		// has to be z since this value could only be created if we were at first index (0) of alpha arrray aka letter A
		letters[letters.length - 1] = 'z';
		return letters;
	} else {
		letters[letters.length - 1] = alpha[shiftedLetterIndex];
		return letters;
	}
}
// Returns index of x if it is present in arr[],
// else return -1
function binaryWordSearch(dictionaryStringArray: Array<string>, word: string) {
	let l = 0,
		r = dictionaryStringArray.length - 1;
	// Loop to implement Binary Search
	while (l <= r) {
		// Calculatiing mid
		let m = l + Math.floor((r - l) / 2);

		let res = word.localeCompare(dictionaryStringArray[m]);

		// Check if x is present at mid, word is valid!
		if (res == 0) {
			return dictionaryStringArray[m];
		}

		// If x greater, ignore left half
		if (res > 0) l = m + 1;
		// If x is smaller, ignore right half
		else r = m - 1;
	}
	return - 1
}
export { addNewLetter, shiftLetterOneForward, shiftLetterOneBackward, binaryWordSearch };
