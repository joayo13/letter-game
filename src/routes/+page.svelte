<svelte:head>
	<title>Letter game</title>
</svelte:head>
<!-- TODO: COMPRESS THE DICTIONARY FILE, GET IT IN THE CLIENT SIDE FOR OFFLINE PWA SUPPORT -->
<h1>Letter game</h1>
<h2>How to play:</h2>
<p>You have to make a valid word that starts with the letter S. The longer the word, the more points you'll get.<br>
   So, we start with the letter S, and the next letter is randomly generated. You can choose to keep it, or go one letter back, or go one letter forward.
</p>
<i>Example: start with S, lets say the second letter will be F ( it was randomly generated). Now, there isn't a word that starts with SF. So in this case we'll go one letter back to E.</i>
<p>We continue this process letter by letter until we can either make a valid word, or we resign our turn.</p>
<p>Now, the interesting part is that we have 4 powerups we can use in the game.</p>
<ol>
    <li>Reversal</li>
    <p>Reverse the current letters you have on board. In our earlier example above we had the letters SF. We decided to play for E instead of F.<br>
       Alternatively, we could have continued playing and tried to go for a reverse. S-F-F-O-C-S, use reverse and that spells SCOFFS....<br>
       Mind you this wouldn't be a great choice, and would almost never actually work, but it would still be possible!
    </p>
    <li>Any Letter</li>
    <p>Choose any letter for the current letter.</p>
    <li>Reroll</li>
    <p>Reroll all of the current letters in play.</p>
    <li>Clone Letter</li>
    <p>Make this letter a copy of the last letter.</p>
</ol>

