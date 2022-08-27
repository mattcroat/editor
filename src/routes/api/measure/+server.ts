import { json } from '@sveltejs/kit'
import { getRateLimit } from '$lib/posts'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
	const rate = await getRateLimit()
	return json(rate)
}
