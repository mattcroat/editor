import { editPost, getPost } from '$lib/posts'
import type { PageServerLoad, Action } from './$types'

export const load: PageServerLoad = async ({ params }) => {
	const { frontmatter, postMarkdown } = await getPost(params.slug)

	return {
		slug: params.slug,
		title: frontmatter.title,
		markdown: postMarkdown,
	}
}

export const POST: Action = async ({ params, request }) => {
	const form = await request.formData()
	const markdown = String(form.get('markdown'))

	await editPost(params.slug, markdown)

	return { location: '/' }
}
