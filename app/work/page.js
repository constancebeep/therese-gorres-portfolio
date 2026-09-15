const workGroups = [
  {
    id: 'design',
    title: 'Design',
    intro: 'Visual, social and digital design work created to support real client needs.',
    items: [
      { title: 'At Home with Kaitlynn', meta: 'Real Estate · Social Media Design · Marketing Design', text: 'A cohesive visual system supporting listings, educational content, lifestyle, community and everyday social media content.', href: '/work/at-home-with-kaitlynn' },
      { title: 'Reelwork ERP', meta: 'UI/UX · Product Design · Australian Client', text: 'A business management interface including onboarding, dashboard and core ERP screens designed for clarity and ease of use.', href: '/work/reelwork-erp' }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing & Social',
    intro: 'Content support, social media execution and marketing assets across client and agency work.',
    items: [
      { title: 'Digital Ninjas', meta: 'Agency Support · Social Media · Content', text: 'Part-time agency support across client social content, Google Business Profile management and blog optimization.', href: '/work/digital-ninjas' },
      { title: 'Social Media Management', meta: 'Content Scheduling · Engagement · Creative Support', text: 'Organic social support including content planning, posting, scheduling, captions and audience engagement.', href: '/work/social-media-management' }
    ]
  },
  {
    id: 'seo',
    title: 'SEO & Content',
    intro: 'Search-focused content, local SEO and publishing work built around visibility and useful information.',
    items: [
      { title: 'Gigil Signage', meta: 'Local SEO · Google Business · Australia', text: 'Managed Google Business Profiles across multiple locations, local citations, NAP consistency and location-based content.', href: '/work/gigil-signage' },
      { title: 'Biomedix Systems', meta: 'SEO Content · Search Console · Philippines', text: 'Restructured and optimized blog content, improved readability and supported local SEO and Search Console monitoring.', href: '/work/biomedix-systems' },
      { title: 'Energy Drink Hub', meta: 'Content Editing · Ghost Editing', text: 'Edited and contributed to more than 40 articles with a focus on clarity, structure, flow and publish-ready quality.', href: '/work/energy-drink-hub' }
    ]
  },
  {
    id: 'operations',
    title: 'Operations & E-commerce',
    intro: 'The systems, data, marketplace and admin work that keeps day-to-day business moving.',
    items: [
      { title: 'Furnish Theory', meta: 'E-commerce · Data · Content · Operations', text: 'Long-term support across marketplace listings, SKU and product data, SEO content, research, outreach, customer service and reporting.', href: '/work/furnish-theory' },
      { title: 'Research & Data Operations', meta: 'Google Sheets · Research · Data Extraction', text: 'Structured research and data work including pivot tables, contact extraction and large-scale company information organization.', href: '/work/research-data-operations' }
    ]
  }
];

const proof = [
  { src: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/furnish-theory-blog.png', label: 'Furnish Theory · SEO Content' },
  { src: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/gigil-blog.png', label: 'Gigil Signage · Local SEO Content' },
  { src: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/biomedix-blog.png', label: 'Biomedix Systems · SEO Content' },
  { src: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/energy-drink-blog.png', label: 'Energy Drink Hub · Content Editing' },
  { src: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/social-media-1.png', label: 'Social Media Management' },
  { src: 'https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/seo-listing-1.png', label: 'SEO Listings & Citations' }
];

export default function WorkPage() {
  return (
    <main className="workPage">
      <nav className="nav">
        <a className="brand" href="/">Therese Gorres</a>
        <div className="navlinks"><a href="/">Home</a><a href="#design">Design</a><a href="#seo">SEO & Content</a><a href="#operations">Operations</a></div>
      </nav>

      <header className="workHero">
        <p className="heroEyebrow">PORTFOLIO</p>
        <h1>Work, organized by what clients need.</h1>
        <p>Instead of one long gallery, my work is grouped into four areas so you can quickly find the experience most relevant to the role or project.</p>
        <div className="workJumpLinks">
          {workGroups.map((group) => <a href={`#${group.id}`} key={group.id}>{group.title}</a>)}
        </div>
      </header>

      {workGroups.map((group, groupIndex) => (
        <section className={`workSection ${groupIndex % 2 ? 'alt' : ''}`} id={group.id} key={group.id}>
          <div className="workSectionIntro">
            <span>0{groupIndex + 1}</span>
            <div><p className="sectionLabel">{group.title}</p><h2>{group.intro}</h2></div>
          </div>
          <div className="workItemList">
            {group.items.map((item) => (
              <article className="workItem" key={item.title}>
                <p className="workMeta">{item.meta}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a className="caseStudyLink" href={item.href}>View case study →</a>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="proofSection">
        <div className="sectionLabel lightLabel">Selected proof of work</div>
        <h2>Examples from the original portfolio.</h2>
        <div className="proofGrid">
          {proof.map((item) => (
            <figure key={item.label}><img src={item.src} alt={item.label}/><figcaption>{item.label}</figcaption></figure>
          ))}
        </div>
        <p className="proofNote">More recent design visuals for Kaitlynn and Reelwork will be added to their case studies as we finalize the strongest samples.</p>
      </section>

      <section className="workContact">
        <p className="heroEyebrow">NEED A SPECIFIC SAMPLE?</p>
        <h2>If you're hiring for a particular role, I can point you straight to the most relevant work.</h2>
        <a className="button light" href="mailto:constancexvenus@gmail.com">Contact me</a>
      </section>

      <footer><span>Therese Gorres © 2026</span><span>WORK · CREATIVE · MARKETING · OPERATIONS</span></footer>
    </main>
  );
}
