const util = require('util')

const HypixelAPI = require('./')

const client = new HypixelAPI('PUT YOUR API KEY HERE')

;(async function() {

    client.getPlayer('name', 'redplasticstraw')
        .then((p) => {

            console.log(util.inspect(p, { 'depth': Infinity}));
            //console.log(util.inspect(p.player.stats.SkyBlock.profiles, { 'depth': Infinity}));
            return {uuid: p.player.uuid, profid: Object.keys(p.player.stats.SkyBlock.profiles)[0]};
        }).then(async (shlub) => {
            console.log(shlub.uuid);
            const profl = await client.getSkyBlockProfile(shlub.profid);
            console.log(util.inspect(profl.profile.members[shlub.uuid].slayer_bosses, {'depth': 3} ));
//            console.log(util.inspect(Object.entries(profl.profile.members)[0], {'depth': 2} ));
        })


	/*console.log(util.inspect(await client.findGuild('memberName', 'ethanent'), {
		'depth': Infinity
	}))

	console.log(util.inspect(await client.getGuild('52e572a684ae6e67043aa084'), {
		'depth': Infinity
	}))

	console.log(util.inspect(await client.getFriends('name', 'ethanent'), {
		'depth': Infinity
	}))

	console.log(util.inspect(await client.getBoosters(), {
		'depth': Infinity
	}))

	console.log(util.inspect(await client.getKey(), {
		'depth': Infinity
	}))

	console.log(util.inspect(await client.getLeaderboards(), {
		'depth': Infinity
	}))

	console.log(util.inspect(await client.getSession('name', 'ethanent'), {
		'depth': Infinity
	}))

	console.log(util.inspect(await client.getWatchdogStats(), {
		'depth': Infinity
	}))*/
})()
