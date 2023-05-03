// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { PrismaClient } from '@prisma/client'

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			prisma: PrismaClient
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}
