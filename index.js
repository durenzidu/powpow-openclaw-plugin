/**
 * PowPow MCP 插件入口
 *
 * 该插件本身不注册工具——PowPow 的能力由 openclaw.plugin.json 中声明的
 * mcpServers（streamable-http → https://global.powpow.online/api/mcp）提供。
 * OpenClaw 在插件启用时把该 MCP 服务器挂进 Gateway，工具以
 * powpow__<toolName> 形式暴露给 agent。
 *
 * 此入口只负责在诊断/日志中暴露插件身份，不做任何网络调用。
 */

export default {
  id: 'powpow',
  name: 'PowPow',
  description: 'PowPow 泡泡社交 MCP：附近发现、数字人对话、内容发布。',

  register(api) {
    // 插件仅提供 MCP 服务器声明，无需注册额外运行时表面。
    // 保留此 hook 以便未来接入 OAuth 引导或工具别名。
    if (api?.logger?.debug) {
      api.logger.debug('powpow plugin loaded; MCP server declared via manifest');
    }
  },
};
