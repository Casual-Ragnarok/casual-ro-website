# 随缘仙境各仓库样式检查

检查范围为本次门户聚合涉及的八个本地仓库，不含工作区内无关项目。日期：2026-09-28。
本轮为源码、页面清单及样式接入检查；未启动所有后台服务，不代表逐页面功能测试完成。

| 仓库 | 检查结果 | 后续修改入口 |
| --- | --- | --- |
| casual-ro-website | 当前首页使用樱花主题，分站入口为外链 | assets/site.css、sakura.css、site.js |
| hexo-store / ro-npcs | NPC 生成页和模板已统一；商城仍使用 Matery。无单独 ro-npcs 本地仓库 | tpl/summary/html、volumes/hexo/_config.yml、volumes/hexo/themes/hexo-theme-matery |
| ro-docs | 128 个 HTML/HTM 中，仅目录及转职表接入新主题；126 个仍未统一 | docs/casualro；完整页面清单见 ro-docs-pages.json |
| cro-patch-grf | 唯一 HTML 入口已统一；外链资料由 ro-docs 维护 | index.html、casualro |
| FluxCP | themes 下 151 个 PHP 模板、8 个 CSS；default/bootstrap/installer 仍为原主题 | themes/default、themes/bootstrap；config/application.php 配置主题 |
| ro-selfsys | 主应用 templates 下 150 个 HTML 模板；使用 Bootstrap 3、RuoYi 样式 | templates/include.html、index/login/register 和 static/ruoyi/css |
| pay-gateway | resources 下 15 个 HTML（12 个静态页面、3 个邮件模板）；付款页为蓝灰主题 | static/pay.html 和后台共享样式；邮件单独适配 |
| pay-system | NocoBase 2.x、Ant Design 5 支付插件；当前只保留构建产物，原 src 存在未提交删除 | 先确认插件现行源码位置，再通过 NocoBase 主题及支付页源码修改 |

## 文档站遗漏分布

- 91 个 RO 研究手记页面：旧文章排版、内联样式及大量内嵌图片；保留原作者署名、图片与代码内容，适合公共阅读样式。
- 21 个交互工具页面：19 个职业技能模拟器、魔物行为计算器、Sprite 名称生成器；保留表单名称、DOM 标识和脚本行为，单独调整外框与色彩。
- 9 个表格页（含已统一的目录和转职表）：地图、光环、伤害字型、皮肤等；保留表格和合并关系。
- 7 个普通资料/链接页：GM 指令、报错说明、职业配点等。

## 改造顺序与验证

优先统一 ro-docs 的普通文章和资源表格，再处理交互工具；商城沿用此前约定，主要统一导航与品牌元素。FluxCP、自助服务和支付页面各有独立组件体系，应通过各自公共模板或主题入口接入，不全局覆盖所有 table/input 样式。

已有浏览器验证覆盖首页、NPC 索引、文档目录、补丁目录、转职表。其余子页本轮为静态审计，尚未逐一进行视觉和功能验证。
本轮未批量改写其他仓库，也未推送或发布。pay-system 的现有未提交修改保持原样。
