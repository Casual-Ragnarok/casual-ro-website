# 随缘仙境 · Casual Ragnarok

随缘仙境首页，汇集 RO 脚本商城、NPC 索引、开发资料与客户端补丁。

**访问：[casualro.top](https://casualro.top/)**

## 站点导航

| 站点 | 地址 | 维护仓库 |
| --- | --- | --- |
| 脚本商城 | [store.casualro.top](https://store.casualro.top/) | [hexo-store](https://github.com/Casual-Ragnarok/hexo-store) |
| NPC 脚本索引 | [npc.casualro.top](https://npc.casualro.top/) | [hexo-store](https://github.com/Casual-Ragnarok/hexo-store)，生成后发布至 [ro-npcs](https://github.com/EHakker/ro-npcs) |
| 文档与工具资料 | [docs.casualro.top](https://docs.casualro.top/) | [ro-docs](https://github.com/Casual-Ragnarok/ro-docs) |
| 客户端补丁 | [grf.casualro.top](https://grf.casualro.top/) | [cro-patch-grf](https://github.com/Casual-Ragnarok/cro-patch-grf) |

## 本地开发

使用原生 HTML、CSS 和 JavaScript，无需安装依赖。需要 Node.js 22 或以上版本。

```sh
npm run dev     # 本地预览：http://127.0.0.1:8001/
npm run check   # 检查代码与资源
npm run build   # 构建到 dist/
```

首页内容与导航位于 `assets/site.js`，样式位于 `assets/site.css`、`assets/sakura.css`，字体位于 `assets/fonts.css`。

## 部署

推送到 `master` 后，GitHub Actions 自动构建并部署至 GitHub Pages，也可手动触发工作流。
自定义域名为 `casualro.top`，配置见 [CNAME](CNAME)。

## 许可

[Apache-2.0](LICENSE)。第三方素材说明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
