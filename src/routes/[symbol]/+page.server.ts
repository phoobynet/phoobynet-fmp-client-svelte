import type { PageServerLoad } from './$types'
import { type CompanyProfile, getCompanyProfile } from '@phoobynet/fmp-client'
import { error } from '@sveltejs/kit'

export const load = (async ({ params }) => {
	const companyProfiles = await getCompanyProfile(params.symbol)

	if (!companyProfiles?.length) {
		throw error(404, {
			message: 'Not Found',
		})
	}

	return {
		companyProfile: companyProfiles[0] as CompanyProfile,
	}
}) as PageServerLoad
