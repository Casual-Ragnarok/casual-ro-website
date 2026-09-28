const page = document.body.dataset.page || 'home';
document.title = `${({home:'首页',npcs:'NPC 脚本索引',docs:'文档与工具资料',downloads:'客户端补丁'})[page]} · 随缘仙境`;
const nav = [['home','首页','index.html'],['npcs','NPC 索引','https://npc.casualro.top/'],['store','脚本商城','https://store.casualro.top/'],['docs','文档资料','https://docs.casualro.top/'],['downloads','补丁下载','https://grf.casualro.top/']];
document.querySelector('#header').innerHTML = `<a class="skip" href="#main">跳到主要内容</a><div class="nav-wrap"><a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true">✿</span><span>随缘仙境<small>CASUAL RAGNAROK</small></span></a><nav aria-label="主导航">${nav.map(([id,name,url])=>`<a href="${url}" ${id===page?'aria-current="page"':''} ${id==='store'?'target="_blank" rel="noopener noreferrer"':''}>${name}</a>`).join('')}</nav><span class="nav-note" aria-hidden="true">♡ Have a lovely adventure</span></div>`;
document.querySelector('#footer').innerHTML = '<span>✿ 随缘仙境 · Casual Ragnarok Online</span><span>愿每一次传送，都通往喜欢的地方。 ♡</span>';
const main = document.querySelector('#main');
  main.innerHTML = `<section class="hero"><div class="hero-art"><img src="assets/hero-sakura.png" alt="樱花盛开的普隆德拉式城镇，初心者与服事和粉色波利、天使波利一起迎接冒险"><span class="art-label">A LITTLE MAGIC, A LOT OF LOVE ♡</span></div><div class="hero-copy"><p class="hero-stamp">✿ 欢迎来到随缘仙境</p><p class="eyebrow">YOUR LITTLE RAGNAROK WORLD</p><h1>今天，也要和波利<br><em>一起冒险呀。</em></h1><p class="lead">从普隆德拉的微风，到下一次奇妙相遇。<br>收好行囊，把喜欢的仙境，慢慢变成日常。</p><div class="actions"><button class="button" type="button" data-opening-notice>注册/登录 <span aria-hidden="true">♡</span></button><button class="button secondary" type="button" data-opening-notice>下载游戏 <span aria-hidden="true">↓</span></button><button class="button secondary" type="button" data-opening-notice>领取冒险礼包 <span aria-hidden="true">✧</span></button></div><p class="hero-caption"><span>✧</span> 游戏 · 创作 · 分享，让热爱在这里发芽。</p></div></section>
  <section class="promo" aria-labelledby="promo-title"><div class="promo-copy"><p class="eyebrow">A GLIMPSE OF OUR WORLD</p><h2 id="promo-title">先看一眼<br>我们的仙境 <span aria-hidden="true">♡</span></h2><p>熟悉的职业，绚丽的技能，<br>还有一起冒险的那些瞬间。</p><small>历史宣传影像 · 实际内容以开服公告为准</small><div class="promo-sources" aria-label="视频来源"><button type="button" data-video="bilibili" aria-pressed="true">Bilibili</button><button type="button" data-video="youtube" aria-pressed="false">YouTube 备用</button></div><a class="promo-external" href="https://www.bilibili.com/video/BV1v34y1T7sA/" target="_blank" rel="noopener noreferrer">前往视频原页 ↗</a></div><div class="promo-screen"><button class="promo-play" type="button" aria-label="播放随缘仙境宣传视频"><img src="assets/promo-night.png" alt="月夜森林中的暖灯营地、熟睡的波利与白兔，以及远处的冒险小队" loading="lazy" width="1672" height="941"><span class="promo-play-label"><span aria-hidden="true">▶</span> 观看宣传视频</span></button></div></section>
  <div class="welcome-strip"><span>✉ 卡普拉的小小指引</span><p>来找脚本、查资料，还是为下一次冒险做准备？你的目的地都在这里。</p><span aria-hidden="true">✧</span></div>
  <div class="section-head"><div><p class="eyebrow">CHOOSE YOUR NEXT ADVENTURE</p><h2>下一站，去哪里？ <span class="heading-flower" aria-hidden="true">✿</span></h2></div><span>为冒险者和创作者准备的小小传送站</span></div><section class="cards" aria-label="站点入口">
  ${[
    ['01 / QUICK FIND','NPC 脚本索引','面向熟客的快捷目录。按编号和功能查找，直接进入商品详情。','https://npc.casualro.top/','快速找脚本'],
    ['02 / EXPLORE','NPC 脚本商城','浏览脚本介绍、功能演示和版本信息，慢慢发现适合你的创意。','https://store.casualro.top/','逛逛商城'],
    ['03 / LEARN','文档与工具资料','开发笔记、运营经验与实用工具，为每一步探索提供参考。','https://docs.casualro.top/','查阅资料'],
    ['04 / PLAY','客户端补丁','查看必装资源和可选外观，确认加载顺序，获取 GRF 补丁。','https://grf.casualro.top/','查看补丁'],
    ['05 / CREATE','自助工具','道具信息与翻译工具，帮助服主和创作者处理日常工作。',null,'准备中'],
    ['06 / ACCOUNT','玩家中心','计划提供账户、角色与玩家服务的统一入口。',null,'准备中']
  ].map(([num,title,desc,url,label],index)=>`<article class="card card-${index}"><div class="card-top"><span class="card-number">${num}</span><span class="card-illustration" aria-hidden="true">${index<3?`<img src="assets/${['npc-shop','npc-adventure','npc-guide'][index]}.png" alt="">`:['','','','✧','⚗','♡'][index]}</span></div><h3>${url?`<a class="resource-title-link" href="${url}" ${url.startsWith('https')?'target="_blank" rel="noopener noreferrer"':''}>${title}</a>`:title}</h3><p>${desc}</p>${url?`<a class="card-link" href="${url}" ${url.startsWith('https')?'target="_blank" rel="noopener noreferrer"':''}>${label} <span>→</span></a>`:`<span class="tag">${label}</span>`}</article>`).join('')}</section><div class="home-signoff"><span aria-hidden="true">✧ ♡ ✧</span><p>不必急着成为英雄，<br>在仙境里，做快乐的自己就好。</p><small>WITH LOVE, CASUALRO</small></div>`;

const openingDialog = document.createElement('dialog');
openingDialog.className = 'opening-dialog';
openingDialog.setAttribute('aria-labelledby', 'opening-message');
openingDialog.innerHTML = '<span class="opening-flower" aria-hidden="true">✿</span><h2 id="opening-message">暂未开服，敬请期待</h2><form method="dialog"><button class="button" autofocus>知道啦</button></form>';
document.body.append(openingDialog);
document.querySelectorAll('[data-opening-notice]').forEach(button => {
  button.addEventListener('click', () => openingDialog.showModal());
});
openingDialog.addEventListener('click', event => {
  const bounds = openingDialog.getBoundingClientRect();
  if (event.target === openingDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) openingDialog.close();
});

const videoSources = {
  bilibili: {embed:'https://player.bilibili.com/player.html?autoplay=0&bvid=BV1v34y1T7sA',page:'https://www.bilibili.com/video/BV1v34y1T7sA/'},
  youtube: {embed:'https://www.youtube.com/embed/7VN-j9aRBQw',page:'https://www.youtube.com/watch?v=7VN-j9aRBQw'}
};
let selectedVideo = 'bilibili';
let videoLoaded = false;
function loadPromoVideo() {
  if (selectedVideo === 'youtube' && location.protocol === 'file:') {
    const fallback = document.createElement('div');
    fallback.className = 'promo-fallback';
    fallback.innerHTML = '<p>本地文件预览暂不支持 YouTube 播放器</p><a class="button" href="https://www.youtube.com/watch?v=7VN-j9aRBQw" target="_blank" rel="noopener noreferrer">在 YouTube 观看 ↗</a><small>也可以切换至 Bilibili 播放。</small>';
    document.querySelector('.promo-screen').replaceChildren(fallback);
    videoLoaded = true;
    return;
  }
  const iframe = document.createElement('iframe');
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.src = videoSources[selectedVideo].embed;
  iframe.title = '随缘仙境宣传视频 · ' + selectedVideo;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen';
  iframe.allowFullscreen = true;
  document.querySelector('.promo-screen').replaceChildren(iframe);
  videoLoaded = true;
}
document.querySelector('.promo-play').addEventListener('click', loadPromoVideo);
document.querySelectorAll('[data-video]').forEach(button => {
  button.addEventListener('click', () => {
    selectedVideo = button.dataset.video;
    document.querySelectorAll('[data-video]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelector('.promo-external').href = videoSources[selectedVideo].page;
    if (videoLoaded) loadPromoVideo();
  });
});
