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
// Returns true if word is present in dictionaryStringArray
// else return false
function binaryWordSearch(dictionaryStringArray: Array<string>, word: string) {
	//ensure word is capitalized to match format of dictionaryStringArray words
	word = word.toLocaleUpperCase();
	let l = 0,
		r = dictionaryStringArray.length - 1;
	// Loop to implement Binary Search
	while (l <= r) {
		// Calculatiing mid
		let m = l + Math.floor((r - l) / 2);
		let res = word.localeCompare(dictionaryStringArray[m]);
		// Check if x is present at mid, word is valid!
		if (res === 0) {
			return true;
		}
		// If x greater, ignore left half
		if (res > 0) l = m + 1;
		// If x is smaller, ignore right half
		else r = m - 1;
	}
	return false;
}
function calculateWordScore(dictionaryStringArray: Array<string>, word: string) {
	let wordValid = binaryWordSearch(dictionaryStringArray, word);
	if (wordValid === false) {
		// return score of 0 on word, since it is not a valid word
		return 0;
	} else {
		// score should increase exponentially with word length
		return Math.pow(2, word.length);
	}
}

export { addNewLetter, shiftLetterOneForward, shiftLetterOneBackward, calculateWordScore };
