var body="token={你的访问密钥}&pc={目标计算机的ID}"; 
var headers={
        'Host': 'api.natfrp.com',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; SM-G977N Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045331 Mobile Safari/537.36 MMWEBID/5110 MicroMessenger/7.0.19.1760(0x2700133F) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ABI/arm64',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
		    'X-Requested-With': 'com.tencent.mm',
		    'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'gzip,deflate',
        'Cookie' : '',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
	};
var apply = http.request("https://api.natfrp.com/v1/pc/poweron",
{
    body:body,
    headers:headers,
    method:'POST',
});
toast("尝试开机完成");