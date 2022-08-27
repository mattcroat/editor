<script lang="ts">
	import Editor from './editor/index.svelte'
	import type { PageServerData } from './$types'

	export let data: PageServerData
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<Editor slug={data.slug} title={data.title} markdown={data.markdown} />
