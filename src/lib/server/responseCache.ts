import type { Cache, CacheResult } from '@phoobynet/fmp-client'
import { prismaClient } from '$lib/server/prismaClient'

export const responseCache: Cache = {
	get: async <T>(key: string): Promise<CacheResult<T> | null> => {
		const row = await prismaClient.cachedResponse.findFirst({
			where: {
				key: key.toLowerCase().trim(),
			},
		})

		if (!row) {
			return null
		}

		const data = JSON.parse(row.data) as T
		const timestamp = row.timestamp.getTime()

		return {
			data,
			timestamp,
			key: row.key,
		} as CacheResult<T>
	},
	set: async <T>(key: string, value: T) => {
		await prismaClient.cachedResponse.create({
			data: {
				key: key.toLowerCase().trim(),
				data: JSON.stringify(value),
				timestamp: new Date(),
			},
		})
	},
	remove: async (key: string) => {
		await prismaClient.cachedResponse.delete({
			where: {
				key: key.toLowerCase().trim(),
			},
		})
	},
}
