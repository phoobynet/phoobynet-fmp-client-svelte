import { setup } from '@phoobynet/fmp-client'
import { FMP_API_KEY } from '$env/static/private'
import { responseCache } from '$lib/server/responseCache'

setup(FMP_API_KEY, responseCache)
