export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">本文へスキップ</a>
      <a className="brand" href="#top" aria-label="全国学生VRサークル活動報告大会 2026 トップ">
        <span className="brand-name">全国学生VRサークル<br />活動報告大会 <b>2026</b></span>
      </a>
      <nav className="desktop-nav" aria-label="メインナビゲーション"><a href="#about">大会について</a><a href="#entry">募集について</a><a href="#archive">過去の開催</a></nav>
      <a className="header-cta" href="#entry">登壇エントリー <span aria-hidden="true">↗</span></a>
    </header>
  );
}
