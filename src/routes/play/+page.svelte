<script lang="ts">
	import { onMount } from 'svelte';
	import text from '../../dictionary.txt';
	import {
		addNewLetter,
		shiftLetterOneForward,
		shiftLetterOneBackward,
		calculateWordScore
	} from '../../functions/gameFunctions';
	import '../../styles/index.css';
	import { cloneLetter, rerollLetter, anyLetter } from '../../functions/powerupFunctions';
	//flip this variable to show or hide game instructions
	let dictionaryStringArray: Array<string>;
	let letters: Array<string> = [];
	let gameStarted = false;
	let currentLetterShifted = false;
	let endGameString: string = '';
	let highScore = 0;
	let anyLetterValue: string = '';
	///powerups (can only be used once each per play)
	let rerollUsed = false;
	let isCloning = false;
	let cloneUsed = false;
	let isAnyLettering = false;
	let anyLetterUsed = false;
	onMount(() => {
		//fetch our local txt file and store the text in dictionaryString global variable
		fetch(text)
			.then((r) => r.text())
			.then((t) => (dictionaryStringArray = t.split('\n')))
			.then(() => console.log(dictionaryStringArray));
        startGame()
	});
	function startGame() {
		letters = [];
		endGameString = '';
		currentLetterShifted = false;
		rerollUsed = false;
		cloneUsed = false;
		anyLetterUsed = false;
		isCloning = false;
		isAnyLettering = false;
		letters[0] = 's';
		letters = addNewLetter(letters);
		gameStarted = true;
	}
	function submitWord(dictionaryStringArray: Array<string>, word: string) {
		let finalScore = calculateWordScore(dictionaryStringArray, word);
		if (finalScore === 0) {
			endGameString = `${word} is not a valid word. Game over.`;
			gameStarted = false;
		} else {
			endGameString = `${word}: ${finalScore} points! Nice one.`;
			if (finalScore > highScore) {
				highScore = finalScore;
			}
			gameStarted = false;
		}
	}
</script>
<!-- display the letters here -->
 <div class="page-centerer">
<div class="letter-container">
	{#each letters as letter, index}
		<span class="letter">{letter}</span>
		<button
			style={isCloning && index !== letters.length - 1 ? 'display: block;' : 'display: none;'}
			on:click={() => {
				letters = cloneLetter(letters, letter);
				cloneUsed = true;
				isCloning = false;
			}}>Clone {letter}</button
		>
	{/each}
	<input
		style={isAnyLettering ? 'display: block;' : 'display: none;'}
		class="any-letter"
		on:change={(e) => {
			letters = anyLetter(letters, e.target);
			anyLetterUsed = true;
			isAnyLettering = false;
			anyLetterValue = '';
		}}
		bind:value={anyLetterValue}
		placeholder="?"
		type="text"
		maxlength="1"
		minlength="1"
	/>
</div>
<button
	style={gameStarted ? 'display: block;' : 'display: none;'}
	on:click={() => {
		letters = addNewLetter(letters);
		currentLetterShifted = false;
	}}>Next Letter</button
>
<button
	style={currentLetterShifted || !gameStarted ? 'display: none;' : 'display: block;'}
	on:click={() => {
		letters = shiftLetterOneForward(letters);
		currentLetterShifted = true;
	}}>shift forward</button
>
<button
	style={currentLetterShifted || !gameStarted ? 'display: none;' : 'display: block;'}
	on:click={() => {
		letters = shiftLetterOneBackward(letters);
		currentLetterShifted = true;
	}}>shift backward</button
>
<button
	style={rerollUsed || !gameStarted ? 'display: none;' : 'display: block;'}
	on:click={() => {
		letters = rerollLetter(letters);
		rerollUsed = true;
	}}>reroll</button
>
<button
	style={cloneUsed || !gameStarted ? 'display:none;' : 'display: block;'}
	on:click={() => (isCloning = !isCloning)}>clone letter</button
>
<button
	style={anyLetterUsed || !gameStarted ? 'display:none;' : 'display'}
	on:click={() => (isAnyLettering = true)}>any letter</button
>
<button
	style={!gameStarted ? 'display: none;' : 'display: block;'}
	on:click={() => submitWord(dictionaryStringArray, letters.join(''))}>Submit Word</button
>
<p>{endGameString}</p>
</div>