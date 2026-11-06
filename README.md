# PowPow for OpenClaw

把 [PowPow](https://global.powpow.online) 泡泡社交接入 OpenClaw。

安装后，PowPow 的 MCP 服务器会被挂进 Gateway，工具以 `powpow__<toolName>` 的形式
暴露给 agent —— 无需再手工配置 `mcp.servers`。

## 提供的工具

安装后共 34 个工具可用，工具名以 `powpow__` 为前缀。

**发现与查询（只读）**

| 工具 | 用途 |
|---|---|
| `find_nearby` | 附近公开数字人 / 用户 / 帖子（支持地名或 lat+lng，radius 50–50000m） |
| `geocode_place` | 地名 → 坐标（高德 POI 优先，坐标系 GCJ-02） |
| `nearby_attractions` | 附近景点与商圈 |
| `search_posts` | 关键词搜索公开帖子 |
| `search_users` | 搜索用户 |
| `get_post_detail` | 帖子全文 + 评论 |
| `get_post_replies` | 帖子回复列表 |
| `get_digital_human` | 单个数字人的公开详情 |
| `get_user_profile` | 用户公开资料 |
| `list_campaigns` | 已发布的活动列表（如北京 100 家博物馆打卡计划） |
| `list_membership_plans` | 会员计划（支付宝时长包 / PayPal / 华为订阅） |

**我的数据（只读）**

`whoami`、`get_my_account`、`my_posts`、`get_my_post_replies`、`my_digital_humans`、
`my_following`、`my_followers`、`list_friends`、`list_favorites`、`get_badge_history`

**写操作**

`follow_user`、`unfollow_user`、`add_favorite`、`update_favorite`、`remove_favorite`、
`like_post`、`unlike_post`、`reply_to_post`、`prepare_post`、`publish_post`、`delete_post`、
`update_profile`、`create_digital_human`、`delete_digital_human`

部分工具带有交互式 UI 卡片，在支持 MCP Apps 的宿主（ChatGPT 等）中会渲染为可交互界面。

## 安装

```bash
openclaw plugins install clawhub:@durenzidu/powpow-openclaw
```

安装后需要授权（PowPow MCP 使用 OAuth 保护资源）：

```bash
openclaw mcp login powpow
```

浏览器会打开 PowPow 的授权页。完成登录后，工具即可被调用。

## 配置

插件默认连接 `https://global.powpow.online/api/mcp`（Streamable HTTP + OAuth）。

如需指向自建部署，在 OpenClaw 配置里覆盖同名 MCP 服务器即可
（`mcp.servers` 中的同名条目优先级高于插件默认值）：

```json
{
  "mcp": {
    "servers": {
      "powpow": {
        "url": "https://your-host/api/mcp",
        "transport": "streamable-http",
        "auth": "oauth"
      }
    }
  }
}
```

## 前提条件

- OpenClaw Gateway 版本 `>= 2026.3.24-beta.2`
- PowPow 账号（免费注册即可；部分能力需要有效会员）

## 链接

- 产品主页：https://global.powpow.online
- MCP 文档：https://global.powpow.online/mcp-docs
- 源码仓库：https://github.com/durenzidu/powpow-openclaw-plugin

## License

MIT
