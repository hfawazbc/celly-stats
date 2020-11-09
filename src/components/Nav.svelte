<script>
	import Search from '../components/Search.svelte';

	export let data;
</script>


<style>
	:root {
		--color-gray: #E0E0E0;
	}

	a {
		text-decoration: none;
		color: black;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
	}

	.relative-container {
        position: relative;
    }

    .absolute-container {
        position: absolute;
        width: 100%;
    }

	.content-container {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		column-gap: 2.5vmin;
		padding: 2.5vmin;
		background-color: white;
	}
</style>

<nav>
	<div class="relative-container">
		<div class="absolute-container">
			<div class="content-container">
				<a href=".">CellyStats</a>
				<Search {data}/>
			</div>
		</div>
	</div>
</nav>