
<script lang="ts">
   import { onMount } from 'svelte';
   import text from '../dictionary.txt'
   //flip this variable to show or hide game instructions
   let howToPlayShowing = false;
   let dictionaryString: string;

   onMount(() => {
      //fetch our local txt file and store the text in dictionaryString global variable
      fetch(text)
         .then( r => r.text() )
         .then( t => dictionaryString = t)
         .then(() => console.log(dictionaryString))
   })
   
</script>

<svelte:head>
	<title>Letter game</title>
</svelte:head>
<h1>Letter game sletters</h1>
<button on:click={() => howToPlayShowing = !howToPlayShowing}>How to play</button>

<section style={ howToPlayShowing ? "display: block;" : "display: none;" }>
   <h2>How to play:</h2>
   <p>You have to make a valid word that starts with the letter S. The longer the word, the more points you'll get.<br>
      So, we start with the letter S, and the next letter is randomly generated. You can choose to keep it, or go one letter back, or go one letter forward.
   </p>
   <i>Example: start with S, lets say the second letter will be F ( it was randomly generated). Now, there isn't a word that starts with SF. So in this case we'll go one letter back to E.</i>
   <p>We continue this process letter by letter until we can either make a valid word, or we resign our turn.</p>
   <p>Now, the interesting part is that we have 3 powerups we can use in the game.</p>
   <ol>
      <li>Any Letter</li>
      <p>Choose any letter for the current letter.</p>
      <li>Reroll</li>
      <p>Reroll current letter.</p>
      <li>Clone Letter</li>
      <p>Make a copy of another letter you have active.</p>
   </ol>
   
</section>

