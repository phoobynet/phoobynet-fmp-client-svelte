<script lang="ts">
	import type { PageData } from './$types'
	import type { CompanyPeers, CompanyProfile } from '@phoobynet/fmp-client'
	import numeral from 'numeral'

	export let data: PageData

	$: profile = data.companyProfile as CompanyProfile
	$: peers = data.companyPeers as CompanyPeers[]

	$: marketCap = numeral(profile.mktCap).format('0.0a').toUpperCase()
	$: price = numeral(profile.price).format('$0.00')
	$: volAvg = numeral(profile.volAvg).format('0.0a').toUpperCase()
</script>

<div class="mx-2 mt-2 flex flex-col gap-2">
	<div class="flex gap-2 items-center">
		<img
			src={profile.image}
			alt="Company Logo"
			class="h-8 w-8 rounded-full border object-contain"
		/>
		<div class="text-2xl font-bold tracking-wider">{profile.symbol}</div>
		<div class="text-2xl">{profile.companyName}</div>
		<div class="text-2xl">{price}</div>
	</div>
	<div class="flex gap-2 items-center">
		<div class="text-sm flex gap-1 items-center justify-between border border-purple-700 rounded">
			<div class="bg-purple-700 text-white px-2">Exchange</div>
			<div class="font-bold px-2">{profile.exchange}</div>
		</div>
		<div class="text-sm flex gap-1 items-center justify-between border border-purple-700 rounded">
			<div class="bg-purple-700 text-white px-2">Industry</div>
			<div class="font-bold px-2">{profile.industry}</div>
		</div>
		<div class="text-sm flex gap-1 items-center justify-between border border-purple-700 rounded">
			<div class="bg-purple-700 text-white px-2">Sector</div>
			<div class="font-bold px-2">{profile.sector}</div>
		</div>
		<div class="text-sm flex gap-1 items-center justify-between border border-purple-700 rounded">
			<div class="bg-purple-700 text-white px-2">Market Cap</div>
			<div class="font-bold px-2">{marketCap}</div>
		</div>
		<div class="text-sm flex gap-1 items-center justify-between border border-purple-700 rounded">
			<div class="bg-purple-700 text-white px-2">Avg. Vol</div>
			<div class="font-bold px-2">{volAvg}</div>
		</div>
	</div>
	<pre>{JSON.stringify(peers, null, 2)}</pre>
</div>

<pre>{JSON.stringify(data, null, 2)}</pre>
