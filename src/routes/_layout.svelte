<script context="module">
	export async function preload() {
        const res = await this.fetch('nhl.json');

        const data = await res.json();

		return { data };
	}
</script>

<script>
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';

	export let data;
</script>

<Nav {data}/>

<main>
	<slot></slot>
</main>

<Footer/>

<style></style>