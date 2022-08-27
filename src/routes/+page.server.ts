import { getPosts, removePost, updatePosts } from '$lib/posts'
import type { PageServerLoad, Action } from './$types'

export const load: PageServerLoad = async () => {
	const posts = await getPosts()
	return { posts }
}

export const POST: Action = async () => {
	updatePosts()
}

export const DELETE: Action = async ({ request }) => {
	const form = await request.formData()
	const slug = String(form.get('slug'))

	await removePost(slug)
}
