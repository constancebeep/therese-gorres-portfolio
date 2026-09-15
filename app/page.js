export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">THERESE GORRES</a>
        <div className="navlinks"><a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">MULTIDISCIPLINARY DESIGNER · PHILIPPINES / REMOTE</p>
        <h1>I design brands and digital experiences <em>people want to engage with.</em></h1>
        <div className="heroBottom">
          <p>Working across brand identity, digital design, social media and UI/UX — creating thoughtful work that looks good and works even better.</p>
          <a className="arrowLink" href="#work">VIEW SELECTED WORK ↓</a>
        </div>
      </section>

      <div className="ticker"><span>BRAND DESIGN</span><span>✦</span><span>DIGITAL DESIGN</span><span>✦</span><span>SOCIAL MEDIA</span><span>✦</span><span>UI / UX</span></div>

      <section className="work section" id="work">
        <div className="sectionHead"><p>SELECTED WORK</p><p>01 — 04</p></div>
        <article className="project feature warm">
          <div className="projectVisual kaitlynn"><div className="arch"></div><div className="projectMark">KP</div><p>AT HOME WITH KAITLYNN</p></div>
          <div className="projectCopy"><div><span>01</span><h2>At Home with Kaitlynn</h2><p className="tags">Brand Design · Social Media · Real Estate Marketing</p></div><p>A warm, elevated visual system bringing real estate, home, lifestyle and community together under one recognizable presence.</p><a href="#">VIEW CASE STUDY ↗</a></div>
        </article>

        <article className="project feature dark">
          <div className="projectVisual reelwork"><div className="mock"><div className="side"></div><div className="dash"><b>Dashboard</b><div className="stats"><i></i><i></i><i></i></div><div className="chart"></div></div></div><p>ERP SYSTEM · AUSTRALIA</p></div>
          <div className="projectCopy"><div><span>02</span><h2>Reelwork</h2><p className="tags">UI/UX · Product Design · Web Application</p></div><p>Designing a clear, approachable digital experience for an Australian client's business management platform.</p><a href="#">CASE STUDY COMING NEXT ↗</a></div>
        </article>

        <div className="comingGrid"><div><span>03</span><h3>More selected work</h3><p>Client project · Coming soon</p></div><div><span>04</span><h3>More selected work</h3><p>Client project · Coming soon</p></div></div>
      </section>

      <section className="manifesto"><p>GOOD DESIGN ISN'T JUST ABOUT MAKING SOMETHING LOOK BETTER.</p><h2>It's about making it <em>clearer, more useful</em> and easier to connect with.</h2><p>That's the thinking I bring to brands, interfaces and everything in between.</p></section>

      <section className="section services" id="services"><div className="sectionHead"><p>WHAT I DO</p><p>THREE FOCUS AREAS</p></div><div className="serviceGrid"><div><span>01</span><h3>Brand & Visual Design</h3><p>Visual identities, brand direction and cohesive systems that give businesses a recognizable presence.</p></div><div><span>02</span><h3>Social & Marketing Design</h3><p>Campaign graphics, social content and digital assets designed to work together rather than exist as one-offs.</p></div><div><span>03</span><h3>UI & Digital Design</h3><p>Web interfaces, dashboards and digital experiences built around clarity, hierarchy and usability.</p></div></div></section>

      <section className="section about" id="about"><div><p className="eyebrow">ABOUT THERESE</p><h2>Designer by craft.<br/><em>Problem-solver by nature.</em></h2></div><div className="aboutCopy"><p>I'm Therese Gorres, a multidisciplinary designer who enjoys turning ideas, information and occasionally messy briefs into thoughtful visual experiences.</p><p>My work spans branding, social and marketing design, and UI/UX — which means I'm equally comfortable building a visual system for a business as I am figuring out how someone should move through a digital product.</p><p>I care about the details, but never at the expense of the bigger picture: <strong>the design has to work for the people using it.</strong></p></div></section>

      <section className="contact" id="contact"><p>HAVE SOMETHING IN MIND?</p><h2>Let's make something<br/><em>worth looking at.</em></h2><a href="mailto:constancexvenus@gmail.com">START A PROJECT ↗</a></section>
      <footer><span>THERESE GORRES © 2026</span><span>PHILIPPINES · AVAILABLE REMOTELY</span></footer>
    </main>
  );
}
