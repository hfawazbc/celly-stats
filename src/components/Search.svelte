<script>
    export let data;

    let players = [];
    let name = '';

    const displayPlayers = () => {
        players = data.players.filter(player => {
            const regex = new RegExp(`^${name}`,'gi');

            return player.name.match(regex);
        })

        if (name.length === 0) players = [];
    }
</script>

<style>
    :root {
        --color-gray: #E0E0E0;
    }

    .relative-container {
        position: relative;
    }

    .absolute-container {
        position: absolute;
        width: 100%;
        z-index: 100;
    }

    .content-container {
        min-height: 5vh;
        max-height: 25vh;
        overflow-y: auto;
        padding: 2.5vmin;
        background-color: white;
    }

    input {
        box-sizing: border-box;
        width: 100%;
        padding: 1vmin;
        font-size: 1em;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    li {
        list-style: none;
    }

    li:hover {
        background-color: var(--color-gray);
    }

    a {
        display: block;
        text-decoration: none;
        color: black;
        padding: 1vmin;
    }

    .hide {
        display: none;
    }
</style>

<div class="relative-container">
    <input bind:value={name} type="text" placeholder="Enter hockey player's name..." on:input={displayPlayers}>
    <div class="absolute-container">
        <ul class="content-container" class:hide={name.length === 0 || players.length === 0}>
            {#each players as player (player.id)}
                <li>
                    <a href="{player.id}" on:click={() => name = ''}>{player.name} - {player.position}</a>
                </li>
            {/each}
        </ul>
    </div>
</div>