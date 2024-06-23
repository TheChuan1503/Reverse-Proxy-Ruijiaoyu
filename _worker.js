export default {
    async fetch(request, env) {
        const _url = new URL(request.url);
        _url.hostname = _url.pathname.startsWith("/ip/")
        ? "ip138.com"
        : "ruijiaoyu.net";
        const req = new Request(_url, request);
        return fetch(req);
    },
};