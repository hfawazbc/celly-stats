<script>
    import { centers, leftWingers, rightWingers, defence, goalies } from '../data/spotlight';

    let spotlightShowcase;
    let translateXSpotlightShowcase = 0;

    const handleMouseEnter = (e) => {
        switch(e.srcElement.parentElement.id) {
            case "spotlight-1":
                centers.forEach(center => {
                    if (e.srcElement.id !== `box-${center.id}`) {
                        let box = document.querySelector(`#box-${center.id}`);
                        box.style.opacity = "0";
                    }
                })  
                break;
            case "spotlight-2":
                leftWingers.forEach(leftWinger => {
                    if (e.srcElement.id !== `box-${leftWinger.id}`) {
                        let box = document.querySelector(`#box-${leftWinger.id}`);
                        box.style.opacity = "0";
                    }
                }) 
                break;
            case "spotlight-3":
                rightWingers.forEach(rightWinger => {
                    if (e.srcElement.id !== `box-${rightWinger.id}`) {
                        let box = document.querySelector(`#box-${rightWinger.id}`);
                        box.style.opacity = "0";
                    }
                }) 
                break;
            case "spotlight-4":
                defence.forEach(defenceman => {
                    if (e.srcElement.id !== `box-${defenceman.id}`) {
                        let box = document.querySelector(`#box-${defenceman.id}`);
                        box.style.opacity = "0";
                    }
                }) 
                break;
            case "spotlight-5":
                goalies.forEach(goalie => {
                    if (e.srcElement.id !== `box-${goalie.id}`) {
                        let box = document.querySelector(`#box-${goalie.id}`);
                        box.style.opacity = "0";
                    }
                })   
                break;
        }
    }

    const handleMouseLeave = (e) => {
        switch(e.srcElement.parentElement.id) {
            case "spotlight-1":
                centers.forEach(center => {
                    let box = document.querySelector(`#box-${center.id}`);
                    box.style.opacity = "1";
                })  
                break;
            case "spotlight-2":
                leftWingers.forEach(leftWinger => {
                    let box = document.querySelector(`#box-${leftWinger.id}`);
                    box.style.opacity = "1";
                }) 
                break;
            case "spotlight-3":
                rightWingers.forEach(rightWinger => {
                    let box = document.querySelector(`#box-${rightWinger.id}`);
                    box.style.opacity = "1";
                }) 
                break;
            case "spotlight-4":
                defence.forEach(defenceman => {
                    let box = document.querySelector(`#box-${defenceman.id}`);
                    box.style.opacity = "1";
                }) 
                break;
            case "spotlight-5":
                goalies.forEach(goalie => {
                    let box = document.querySelector(`#box-${goalie.id}`);
                    box.style.opacity = "1";
                })   
                break;
        }
    }

    const handleSpotlightNavClick = (e) => {
        const id = e.srcElement.id;

        switch(id) {
            case "btn-1":
                translateXSpotlightShowcase = 0;
                break;
            case "btn-2":
                translateXSpotlightShowcase = -20;
                break;
            case "btn-3":
                translateXSpotlightShowcase = -40;
                break;
            case "btn-4":
                translateXSpotlightShowcase = -60;
                break;
            case "btn-5":
                translateXSpotlightShowcase = -80;
                break;
        }

        spotlightShowcase.style.transform = `translateX(${translateXSpotlightShowcase}%)`;
    }
</script>

<style>
    :root {
        --color-gray: #E0E0E0;
        --color-blue-primary: #03A9F4;
    }

    a {
        color: black;
        padding: 1vmin;
    }

    a:hover {
        color: var(--color-blue-primary);
    }

    img {
        margin: auto;
        width: 50%;
        height: 50%;
    }

    .spotlight-outer-container {
        width: 100%;
        overflow: hidden;
        background-color: var(--color-gray);
    }

    .spotlight-inner-container {
        width: 500%;
        height: 87vh;
        display: flex;
        transform: translateX(0);
        transition: 0.5s ease-in-out;
    }

    .spotlight-box-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 2.5vmin;
        padding-top: 5vmin;
        padding-left: 5vmin;
        padding-right: 5vmin;
    }

    .spotlight-box {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        row-gap: 2.5vmin;
        align-items: center;
        text-align: center;
        padding: 2.5vmin;
        transition: opacity 0.5s;
        background-color: white;
    }

    .spotlight-nav-container {
        width: 100%;
        height: 13vh;
        display: grid;
        align-items: center;
        background-color: var(--color-gray);
    }

    .spotlight-nav {
        width: 50%;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    .spotlight-nav-btn {
        height: 3vmin;
        width: 3vmin;
        margin: auto;
        border: none;
        border-radius: 100%;
        background-color: white;
        cursor: pointer;
    }

    .spotlight-nav-btn:focus {
        outline: none;
        box-shadow: 0 0 0 1px black; 
    }

    @media (max-width: 768px) {
        .spotlight-box-container {
            grid-template-columns: none;
            grid-template-rows: repeat(4, 1fr);
            row-gap: 2.5vmin;
        }

        .spotlight-box {
            grid-template-rows: none;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 2.5vmin;
        }
    }
</style>

<div class="spotlight-outer-container">
    <div class="spotlight-inner-container" bind:this={spotlightShowcase}>	
        <div id="spotlight-1" class="spotlight-box-container">
            {#each centers as center}
                <section id="box-{center.id}" class="spotlight-box" on:mouseenter={(e) => handleMouseEnter(e)} on:mouseleave={(e) => handleMouseLeave(e)}>
                    <img class="TEST" src="svg/forward.svg" alt="">
                    <h2>{center.name}</h2>
                    <a href="{center.id}">View Statistics</a>
                </section>
            {/each}
        </div>
        <div id="spotlight-2" class="spotlight-box-container">
            {#each leftWingers as leftWinger}
                <section id="box-{leftWinger.id}" class="spotlight-box" on:mouseenter={(e) => handleMouseEnter(e)} on:mouseleave={(e) => handleMouseLeave(e)}>                    
                    <img src="svg/forward.svg" alt="">
                    <h2>{leftWinger.name}</h2>
                    <a href="{leftWinger.id}">View Statistics</a>
                </section>
            {/each}
        </div>
        <div id="spotlight-3" class="spotlight-box-container">
            {#each rightWingers as rightWinger}
                <section id="box-{rightWinger.id}" class="spotlight-box" on:mouseenter={(e) => handleMouseEnter(e)} on:mouseleave={(e) => handleMouseLeave(e)}>
                    <img src="svg/forward.svg" alt="">
                    <h2>{rightWinger.name}</h2>
                    <a href="{rightWinger.id}">View Statistics</a>
                </section>
            {/each}
        </div>
        <div id="spotlight-4" class="spotlight-box-container">
            {#each defence as defenceman}
                <section id="box-{defenceman.id}" class="spotlight-box" on:mouseenter={(e) => handleMouseEnter(e)} on:mouseleave={(e) => handleMouseLeave(e)}>
                    <img src="svg/defence.svg" alt="">
                    <h2>{defenceman.name}</h2>
                    <a href="{defenceman.id}">View Statistics</a>
                </section>
            {/each}
        </div>
        <div id="spotlight-5" class="spotlight-box-container">
            {#each goalies as goalie}
                <section id="box-{goalie.id}" class="spotlight-box" on:mouseenter={(e) => handleMouseEnter(e)} on:mouseleave={(e) => handleMouseLeave(e)}>
                    <img src="svg/goalie.svg" alt="">
                    <h2>{goalie.name}</h2>
                    <a href="{goalie.id}">View Statistics</a>
                </section>
            {/each}
        </div>
    </div>
</div>
<div class="spotlight-nav-container">
    <div class="spotlight-nav">
        <button id="btn-1" class="spotlight-nav-btn" on:click={(e) => handleSpotlightNavClick(e)}></button>
        <button id="btn-2" class="spotlight-nav-btn" on:click={(e) => handleSpotlightNavClick(e)}></button>
        <button id="btn-3" class="spotlight-nav-btn" on:click={(e) => handleSpotlightNavClick(e)}></button>
        <button id="btn-4" class="spotlight-nav-btn" on:click={(e) => handleSpotlightNavClick(e)}></button>
        <button id="btn-5" class="spotlight-nav-btn" on:click={(e) => handleSpotlightNavClick(e)}></button>
    </div>
</div>