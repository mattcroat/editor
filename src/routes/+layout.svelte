<script lang="ts">
	import { SvelteToast } from '@zerodevx/svelte-toast'

	import Measure from '$lib/shared/measure.svelte'
	import '../styles/app.css'
</script>

<Measure />
<SvelteToast options={{ duration: 2000, intro: { y: -100 } }} />
<slot />
