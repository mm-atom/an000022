# 获取微信token

获取公众号,小程序的accesstoken

## 配置

* 需在项目下的mm.json文件中配置`wx.appid`，`wx.appsecret`。
* wx.appid：小程序唯一凭证，即 AppID，可在「[微信公众平台](https://mp.weixin.qq.com) - 设置 - 开发设置」页中获得。（需要已经成为开发者，且帐号没有异常状态）。
* wx.appsecret：小程序唯一凭证密钥，即 AppSecret，获取方式同 appid。

```json
{
	"wx": {
		"appid": "xxx",
		"appsecret": "xxx"
	}
}
```
