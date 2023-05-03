import '$lib/server/setup'
import type { Handle } from '@sveltejs/kit'
import { prismaClient } from '$lib/server/prismaClient'

export const handle: Handle = async ({ event, resolve }) => {
	if (!event.locals.prisma) {
		event.locals.prisma = prismaClient
	}
	return resolve(event)
}
