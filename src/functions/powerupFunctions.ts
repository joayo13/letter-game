let alpha: Array<string> = 'abcdefghijklmnopqrstuvwxyz'.split('');
//TODO: don't allow same letter or within 2 of letter to make reroll more fair to player
function rerollLetter(letters: Array<string>) {
	letters[letters.length - 1] = alpha[Math.floor(Math.random() * alpha.length)];
	return letters;
}
function cloneLetter(letters: Array<string>, clone: string) {
	letters[letters.length - 1] = clone;
	return letters;
}
function anyLetter(letters: Array<string>, e: EventTarget | null) {
	const event = e as HTMLInputElement;
	letters[letters.length - 1] = event.value.toString().toLocaleLowerCase();
	return letters;
}

export { rerollLetter, cloneLetter, anyLetter };
