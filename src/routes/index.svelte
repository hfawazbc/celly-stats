<svelte:head>
	<title>CellyStats</title>
</svelte:head>

<script>
	import Carousel from '../components/Carousel.svelte';
</script>

<style>
    p {
		font-size: 2em;
	}

	h1 {
		font-size: 6em;
	}

	.landing-background,
	.landing-backdrop {
		width: 100%;
		height: 100vh;
	}

	.landing-background {
		background-position: center;
		background-size: cover;
	}

	.landing-backdrop {
		color: white;
		background-color: rgba(0,0,0,0.5);
	}

	.landing-text {
		padding: 5vmin;
		text-align: center;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
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

<div class="landing-background" style="background-image: url('images/skates.jpg');">		
	<div class="landing-backdrop">
		<section class="landing-text">
			<h1>CellyStats</h1>
			<br>
			<p>Search NHL players or select a featured player in the spotlight to view their statistics</p>
		</section>
	</div>
</div>

<Carousel />