import { createPost } from '$lib/posts'
import type { Action } from './$types'

export const POST: Action = async ({ request }) => {
	const form = await request.formData()
	const slug = String(form.get('slug'))
	const markdown = String(form.get('markdown'))

	await createPost(slug, markdown)

	return { location: '/' }
}
