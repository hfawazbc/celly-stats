<script>
    export let player;
</script>

<style>
    .landing {
        height: 100vh;
        width: 100%;
        background-color: black;
        color: white;
	}

    .landing-text {
		padding: 5vmin;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	h1 {
		font-size: 6em;
	}

    p {
        font-size: 2em;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 4em;
        }

        p {
            font-size: 1em;
        }
    }
</style>

<div class="landing"> 
    <section class="landing-text">
        <h1>{player.fullName}</h1>
        <br>
        {#if player.active}
            <p>#{player.primaryNumber} | {player.currentTeam.name}</p>
        {/if}
        <p>Position: {player.primaryPosition.abbreviation} | {player.primaryPosition.code === "G" ? `Catches: ${player.shootsCatches}` : `Shoots: ${player.shootsCatches}`}</p>
    </section>  
</div>