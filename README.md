# 随缘仙境 · Casual Ragnarok

樱花萌系 RO 首页，使用原生 HTML、CSS、JavaScript，无后端和第三方运行依赖。
本仓库只维护首页、导航与首页素材。三个分站独立维护、独立发布，首页不保存它们的内容副本。

## 站点与内容来源

| 入口 | 地址 | 唯一维护位置 |
| --- | --- | --- |
| 脚本商城 | https://store.casualro.top/ | [hexo-store](https://github.com/Casual-Ragnarok/hexo-store) |
| NPC 脚本索引 | https://npc.casualro.top/ | [hexo-store](https://github.com/Casual-Ragnarok/hexo-store)（商品 README 与生成模板）；生成后部署到 [ro-npcs](https://github.com/EHakker/ro-npcs) |
| 文档与工具资料 | https://docs.casualro.top/ | [ro-docs](https://github.com/Casual-Ragnarok/ro-docs) |
| 客户端补丁 | https://grf.casualro.top/ | [cro-patch-grf](https://github.com/Casual-Ragnarok/cro-patch-grf) |

分站使用与首页一致的樱花主题，各自携带静态资源。其维护说明见各仓库 CASUALRO_THEME.md。
玩家中心和自助工具暂为“准备中”。首页不提供登录或支付接口。
修改入口地址与首页文案请编辑 assets/site.js。

## 本地预览

安装 Node.js 22 或更新版本，运行 `node tools/serve.mjs`，打开 http://127.0.0.1:8001/ 。
也可运行 `npm run dev`，无需 npm install。修改后刷新浏览器，Ctrl+C 停止。
端口占用时可运行 `node tools/serve.mjs 8005`。

## 构建与发布

```sh
node --check assets/site.js
node tools/check.mjs
node tools/build.mjs
```

也可使用 npm run check 和 npm run build。构建只输出首页和 assets 到 dist/。
相对资源路径支持 GitHub Pages 仓库子路径部署。
.github/workflows/pages.yml 在推送 master 时部署，支持手动触发；Pull Request 只检查和构建。
首次发布在 Settings → Pages 将 Source 设置为 GitHub Actions。
首页主域名为 https://casualro.top/，CNAME 随构建复制到 dist/。
仓库 Pages 的 Custom domain 应设为 casualro.top，Source 选择 GitHub Actions。
www.casualro.top 可配置 CNAME 指向 Casual-Ragnarok.github.io，作为备用入口。

## 素材与许可

主插画由 image_gen 生成，提示词见 assets/hero-sakura.prompt.txt。
像素 NPC 来自原仓库，来源记录见 THIRD_PARTY_NOTICES.md。
保留原 Apache-2.0 许可证，第三方游戏素材权利不因仓库许可证而改变。
