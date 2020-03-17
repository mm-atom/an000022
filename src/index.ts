import config from '@mmstudio/config';
import fetch from 'node-fetch';

const { wx: { appid, appsecret } } = config;

const cache = global as unknown as {
	access_token: string;
	expires_in: number;
	time: number;
};

export default async function get_token() {
	const now = new Date().getTime();
	if (Boolean(cache.access_token) && now - cache.time < cache.expires_in * 500) {	// (cache.expires_in * 1000) / 2
		return cache.access_token;
	}
	if (!appid || !appsecret) {
		throw new Error('appid or appsecret not found in feidao.json');
	}
	const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecret}`;
	const res = await fetch(url, {
		method: 'GET'
	});
	if (res.status > 0 && res.status < 300) {
		const ret = await res.json() as {
			access_token: string;
			expires_in: number;
			errcode: number;
			errmsg: string;
		};
		if (ret.access_token) {
			cache.access_token = ret.access_token;
			cache.expires_in = ret.expires_in;
			cache.time = now;
			return ret.access_token;
		}
		throw new Error(ret.errmsg);
	} else {
		throw new Error(res.statusText);
	}
}
