const projects = [
  {
    category: 'Social Media / Branding',
    title: 'Branding Templates',
    client: 'Kaitlynn | 2026',
    image: '/kaitlynn-board.jpg',
    href: '/work/at-home-with-kaitlynn',
    text: 'A cohesive real estate visual system spanning listings, educational posts, testimonials, lifestyle, local content and recurring social templates.'
  },
  {
    category: 'UI/UX & Digital',
    title: 'ERP Product Design',
    client: 'Reelwork | Australian Client',
    image: '/reelwork-board.jpg',
    href: '/work/reelwork-erp',
    text: 'Login, onboarding, dashboard and core ERP interface screens designed around clarity, hierarchy and usability.'
  },
  {
    category: 'Social Media',
    title: 'Real Estate Marketing Design',
    client: 'Selected Client Work | 2024–2026',
    image: '/social-design-board.jpg',
    href: '/work/social-media-management',
    text: 'A selection of listing graphics, carousels, testimonials, open-house assets, email graphics and recurring social content.'
  },
  {
    category: 'Content Creation',
    title: 'Marketing & Educational Content',
    client: 'Digital / Agency Work | 2024–2026',
    image: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/dps-content.png',
    href: '/work/digital-ninjas',
    text: 'Content support across social, marketing and educational materials, including copy, visual assets and multi-client execution.'
  },
  {
    category: 'Blog Writing & SEO',
    title: 'SEO Blog Content',
    client: 'Furnish Theory | 2023–2025',
    image: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/furnish-theory-blog.png',
    href: '/work/furnish-theory',
    live: 'https://blog.furnishtheory.com/2021/10/14/why-is-the-cesca-chair-important/',
    text: 'SEO-focused blog writing and editing alongside long-term e-commerce, research and operations support.'
  },
  {
    category: 'Local SEO & Listings',
    title: 'Local Search Support',
    client: 'Gigil Signage | Australia',
    image: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/gigil-blog.png',
    href: '/work/gigil-signage',
    live: 'https://gigil.au/blog/professional-real-estate-print-partner-guide/',
    text: 'Google Business Profile management, local citations, NAP consistency and location-focused content across multiple locations.'
  },
  {
    category: 'Blog Writing & SEO',
    title: 'SEO Content Optimization',
    client: 'Biomedix Systems | Philippines',
    image: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/biomedix-blog.png',
    href: '/work/biomedix-systems',
    text: 'Blog restructuring, keyword and readability improvements, local SEO support and Search Console monitoring.'
  },
  {
    category: 'Blog Writing',
    title: 'Content Editing',
    client: 'Energy Drink Hub | 2021',
    image: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/energy-drink-blog.png',
    href: '/work/energy-drink-hub',
    text: 'Ghost editing and content refinement across 40+ articles, focused on clarity, structure and publish-ready quality.'
  }
];

const proof = [
  { src: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/seo-listing-1.png', label: 'Local Citations', sub: 'SEO Listings | Proof of Work' },
  { src: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/seo-listing-2.png', label: 'Business Listings', sub: 'Local SEO | Proof of Work' },
  { src: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/seo-listing-3.png', label: 'NAP & Directory Work', sub: 'Local SEO | Proof of Work' },
  { src: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/social-media-1.png', label: 'Social Media Management', sub: 'Organic Content | Proof of Work' },
  { src: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/before.png', label: 'Growth & Engagement', sub: 'Before | July 2024' },
  { src: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/after.png', label: 'Growth & Engagement', sub: 'After | November 2024' }
];

export default function WorkPage() {
  return (
    <main className="workPage">
      <nav className="nav">
        <a className="brand" href="/">Therese Gorres</a>
        <div className="navlinks"><a href="/">Home</a><a href="#projects">Projects</a><a href="#proof">More Proof</a><a href="/#contact">Contact</a></div>
      </nav>

      <header className="workHero compactWorkHero">
        <p className="heroEyebrow">PORTFOLIO</p>
        <h1>Selected work, grouped by what I actually did.</h1>
        <p>Browse by social media, branding, content creation, blog writing, SEO, UI/UX and operations. Each project can open into a case study or a live work sample where available.</p>
      </header>

      <section className="portfolioSection" id="projects">
        <div className="portfolioIntro">
          <div className="sectionLabel">Selected projects</div>
          <h2>Client work and proof, without the clutter.</h2>
        </div>
        <div className="portfolioGrid">
          {projects.map((item) => (
            <article className="portfolioCard" key={`${item.title}-${item.client}`}>
              <a className="portfolioImage" href={item.href} aria-label={`View ${item.title} case study`}>
                <img src={item.image} alt={`${item.title} — ${item.client}`} />
              </a>
              <div className="portfolioCardBody">
                <p className="portfolioCategory">{item.category}</p>
                <h3>{item.title}</h3>
                <p className="portfolioClient">{item.client}</p>
                <p className="portfolioDescription">{item.text}</p>
                <div className="portfolioLinks">
                  <a href={item.href}>View case study →</a>
                  {item.live && <a href={item.live} target="_blank" rel="noreferrer">Live sample ↗</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="proofSection" id="proof">
        <div className="sectionLabel lightLabel">More proof of work</div>
        <h2>Additional screenshots, listings and growth examples.</h2>
        <div className="proofGrid">
          {proof.map((item) => (
            <a className="proofCard" href={item.src} target="_blank" rel="noreferrer" key={`${item.label}-${item.sub}`}>
              <img src={item.src} alt={`${item.label} — ${item.sub}`} />
              <div><strong>{item.label}</strong><span>{item.sub}</span><em>Open proof ↗</em></div>
            </a>
          ))}
        </div>
      </section>

      <section className="workContact">
        <p className="heroEyebrow">LOOKING FOR A SPECIFIC KIND OF WORK?</p>
        <h2>I can point you straight to the samples most relevant to the role.</h2>
        <a className="button light" href="mailto:constancexvenus@gmail.com">Contact me</a>
      </section>

      <footer><span>Therese Gorres © 2026</span><span>WORK · CREATIVE · MARKETING · OPERATIONS</span></footer>
    </main>
  );
}
