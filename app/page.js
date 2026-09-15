const areas = [
  { n: '01', title: 'Design', text: 'Brand visuals, social media graphics, marketing assets and UI/UX work created for real client needs.', examples: 'Graphic Design · Social Design · UI/UX' },
  { n: '02', title: 'Marketing & Social', text: 'Content planning, platform management and creative support that keeps brands active and consistent.', examples: 'Social Media · Content · Campaign Support' },
  { n: '03', title: 'SEO & Content', text: 'Search-focused content and local visibility work built around clear, useful information.', examples: 'Blog Content · Local SEO · Google Business' },
  { n: '04', title: 'Operations & E-commerce', text: 'The behind-the-scenes systems, listings, data and admin work that help day-to-day operations run smoothly.', examples: 'Marketplace Listings · Data · Admin Support' }
];

const experience = [
  { name: 'Furnish Theory', meta: 'E-COMMERCE · CONTENT · OPERATIONS', text: 'Long-term support across marketplace listings, product data, SEO content, research, outreach and customer operations.', proof: '2+ years of support · 1,300+ contacts researched' },
  { name: 'Gigil Signage', meta: 'LOCAL SEO · GOOGLE BUSINESS', text: 'Local visibility support across three Australian locations through Google Business Profile management, citations and location content.', proof: '3 locations managed' },
  { name: 'Biomedix Systems', meta: 'SEO CONTENT · SEARCH', text: 'Blog restructuring, keyword optimization, local SEO support and Search Console monitoring for a healthcare technology business.', proof: '2,000+ Search Console impressions' },
  { name: 'Digital Ninjas', meta: 'AGENCY · SOCIAL · CONTENT', text: 'Part-time agency support spanning social content, Google Business Profile management and blog optimization across client accounts.', proof: 'Multi-client agency support' },
  { name: 'Energy Drink Hub', meta: 'CONTENT EDITING', text: 'Ghost editing and content support focused on structure, clarity, readability and publish-ready articles.', proof: '40+ articles' }
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">THERESE GORRES</a>
        <div className="navlinks"><a href="#work">Work</a><a href="#services">Services</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a></div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">MULTIDISCIPLINARY CREATIVE & DIGITAL SUPPORT · PHILIPPINES / REMOTE</p>
        <h1>I help businesses <em>look better, show up clearly</em> and run smoother.</h1>
        <div className="heroBottom">
          <p>Design, content, SEO, social media, e-commerce and operations — practical support shaped around what each client actually needs.</p>
          <a className="arrowLink" href="#work">EXPLORE MY WORK ↓</a>
        </div>
      </section>

      <div className="ticker"><span>DESIGN</span><span>✦</span><span>MARKETING & SOCIAL</span><span>✦</span><span>SEO & CONTENT</span><span>✦</span><span>OPERATIONS & E-COMMERCE</span></div>

      <section className="section work" id="work">
        <div className="sectionHead"><p>EXPLORE MY WORK</p><p>BY FOCUS AREA</p></div>
        <div className="areaGrid">{areas.map((area) => <article className="areaCard" key={area.n}><span>{area.n}</span><div><h2>{area.title}</h2><p>{area.text}</p></div><p className="areaExamples">{area.examples}</p></article>)}</div>
      </section>

      <section className="section additions">
        <div className="sectionHead"><p>RECENT ADDITIONS</p><p>DESIGN WORK</p></div>
        <div className="additionGrid">
          <article className="addition kaitlynn"><div className="additionArt"><div className="arch"></div><b>KP</b></div><div className="additionCopy"><span>REAL ESTATE · SOCIAL DESIGN</span><h3>At Home with Kaitlynn</h3><p>A cohesive set of branded social and marketing materials designed to support listings, education, lifestyle and community content.</p></div></article>
          <article className="addition reelwork"><div className="additionArt"><div className="miniDash"><i></i><div><b>Dashboard</b><span></span><span></span><span></span></div></div></div><div className="additionCopy"><span>UI/UX · AUSTRALIAN CLIENT</span><h3>Reelwork ERP</h3><p>UI/UX design for a business management platform, including onboarding, dashboard and core ERP interface screens.</p></div></article>
        </div>
        <p className="note">These are part of a broader body of client work — not the whole story.</p>
      </section>

      <section className="section experience" id="experience">
        <div className="sectionHead"><p>CLIENT EXPERIENCE</p><p>SELECTED PROJECTS</p></div>
        <div className="experienceList">{experience.map((item, i) => <article key={item.name}><span className="expNum">0{i+1}</span><div><p className="meta">{item.meta}</p><h3>{item.name}</h3></div><p className="expText">{item.text}</p><p className="proof">{item.proof}</p></article>)}</div>
      </section>

      <section className="manifesto"><p>ONE PERSON. MULTIPLE WAYS TO SUPPORT THE WORK.</p><h2>Creative when it needs to <em>look right.</em><br/>Structured when it needs to <em>work right.</em></h2><p>My range lets me understand both what clients put in front of their audience and what has to happen behind the scenes.</p></section>

      <section className="section services" id="services">
        <div className="sectionHead"><p>WHAT I CAN HELP WITH</p><p>CAPABILITIES</p></div>
        <div className="serviceGrid">
          <div><span>01</span><h3>Design & Social</h3><p>Social graphics · Marketing assets · Brand systems · UI/UX · Canva design · Content scheduling</p></div>
          <div><span>02</span><h3>SEO & Content</h3><p>Blog writing & editing · Keyword research · Local SEO · Google Business Profiles · Citations · Search Console</p></div>
          <div><span>03</span><h3>E-commerce & Operations</h3><p>Product listings · SKU & data management · Research · Reporting · Customer support · Outreach · Admin systems</p></div>
        </div>
      </section>

      <section className="section about" id="about"><div><p className="eyebrow">ABOUT THERESE</p><h2>Versatile by experience.<br/><em>Organized by default.</em></h2></div><div className="aboutCopy"><p>I'm Therese Gorres, a multidisciplinary remote professional with experience supporting businesses across creative, marketing and operational work.</p><p>I've worked on everything from SEO content and Google Business Profiles to e-commerce listings, social media systems and UI/UX design. That range means I can move between the visible side of a brand and the detailed work happening behind it.</p><p>I work best when I can take ownership, keep things organized and turn a brief into something <strong>clear, useful and ready to use.</strong></p></div></section>

      <section className="contact" id="contact"><p>LOOKING FOR SUPPORT?</p><h2>Let's make the work<br/><em>easier to move forward.</em></h2><a href="mailto:constancexvenus@gmail.com">GET IN TOUCH ↗</a></section>
      <footer><span>THERESE GORRES © 2026</span><span>PHILIPPINES · AVAILABLE REMOTELY</span></footer>
    </main>
  );
}