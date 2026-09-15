import './case-study.css';

const studies = {
  'at-home-with-kaitlynn': {
    title: 'At Home with Kaitlynn',
    category: 'Real Estate · Social Media Design · Marketing Design',
    overview: 'A cohesive visual direction created to make a real estate brand feel warm, polished, recognizable and flexible across listings, education, lifestyle and community content.',
    role: 'Visual direction · Social media design · Marketing design · Design system',
    details: ['Built a consistent visual language for multiple social content types.', 'Created reusable templates for listings, education, testimonials, market updates, lifestyle and community content.', 'Balanced a polished real estate look with a warmer, more approachable lifestyle feel.'],
    result: 'A flexible content system designed for consistency without making every post look identical.',
    proof: ['/kaitlynn-board.jpg']
  },
  'reelwork-erp': {
    title: 'Reelwork ERP',
    category: 'UI/UX · Product Design · Australian Client',
    overview: 'UI/UX design for an Australian client’s business management platform, covering onboarding, dashboard structure and core ERP interface screens.',
    role: 'UI/UX design · Product interface design',
    details: ['Designed a login experience and step-by-step business onboarding flow.', 'Created a dashboard with revenue, invoices, inventory, clients and recent activity.', 'Used clear hierarchy and restrained visual styling to keep business information easy to scan.'],
    result: 'A clear, approachable interface direction for a business management product.',
    proof: ['/reelwork-board.jpg']
  },
  'digital-ninjas': {
    title: 'Digital Ninjas',
    category: 'Agency Support · Social Media · Content',
    overview: 'Part-time agency support across social content, Google Business Profile management and blog optimization for multiple client accounts.',
    role: 'Agency VA · Content support · Social media support',
    details: ['Supported content production across multiple client accounts.', 'Managed and updated agency Google Business Profile activity.', 'Assisted with blog optimization and general marketing execution.'],
    result: 'Consistent multi-platform support within an agency environment.',
    proof: ['https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/dps-content.png']
  },
  'social-media-management': {
    title: 'Social Media Management',
    category: 'Content Scheduling · Engagement · Creative Support',
    overview: 'Organic social media support including content planning, captions, posting, scheduling, creative assets and audience engagement.',
    role: 'Social media support · Content scheduling · Creative support',
    details: ['Prepared and scheduled social content.', 'Wrote captions and supported engagement workflows.', 'Created or adapted graphics for recurring content needs.'],
    result: 'A more consistent social presence supported by repeatable content workflows.',
    proof: ['/social-design-board.jpg','https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/social-media-1.png','https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/social-media-2.png']
  },
  'gigil-signage': {
    title: 'Gigil Signage',
    category: 'Local SEO · Google Business · Australia',
    overview: 'Local SEO support for signage locations in Australia, including Google Business Profile management, local citations, NAP consistency and location-focused content.',
    role: 'Local SEO · Google Business Profile management · Citations · Content',
    details: ['Managed multiple Google Business Profiles.', 'Built and maintained local citations across business directories.', 'Supported location-based blog content and NAP consistency.'],
    result: 'A more consistent local search footprint across multiple locations.',
    proof: ['https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/gigil-blog.png','https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/seo-listing-1.png']
  },
  'biomedix-systems': {
    title: 'Biomedix Systems',
    category: 'SEO Content · Search Console · Philippines',
    overview: 'SEO content and local visibility support for a healthcare technology business, including blog restructuring, readability improvements and Search Console monitoring.',
    role: 'SEO content editing · Local SEO · Search Console',
    details: ['Restructured and optimized existing blog content.', 'Improved keyword use, readability and content flow.', 'Supported local SEO and monitored performance through Google Search Console.'],
    result: 'The work reached 2,000+ Search Console impressions and supported an upward organic trend.',
    proof: ['https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/biomedix-blog.png']
  },
  'energy-drink-hub': {
    title: 'Energy Drink Hub',
    category: 'Content Editing · Ghost Editing',
    overview: 'Ghost editing and content support focused on making articles clearer, better structured and ready for publication.',
    role: 'Ghost editor · Content editor',
    details: ['Edited and contributed to more than 40 articles.', 'Improved clarity, structure, flow and readability.', 'Prepared content for publication while maintaining the intended voice.'],
    result: '40+ publish-ready articles supported through editing and content refinement.',
    proof: ['https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/energy-drink-blog.png']
  },
  'furnish-theory': {
    title: 'Furnish Theory',
    category: 'E-commerce · Data · Content · Operations',
    overview: 'Long-term support across e-commerce listings, product data, SEO content, research, outreach, customer service and reporting for a furniture business.',
    role: 'Virtual assistant · Data analyst · Content writer',
    details: ['Managed marketplace listings and product/SKU data across multiple platforms.', 'Researched and structured data from 1,300+ companies connected to Salone del Mobile 2024.', 'Supported SEO content, outreach, customer service and day-to-day business operations.'],
    result: 'More than two years of consistent support across content, e-commerce and operations.',
    proof: ['https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/furnish-theory-blog.png']
  },
  'research-data-operations': {
    title: 'Research & Data Operations',
    category: 'Google Sheets · Research · Data Extraction',
    overview: 'Structured research and data work for operational projects requiring clean organization, extraction and reporting.',
    role: 'Research · Data organization · Spreadsheet support',
    details: ['Collected and organized large sets of company and contact information.', 'Used spreadsheets and pivot tables to structure data for easier review.', 'Supported recurring admin and reporting needs.'],
    result: 'Clearer, more usable datasets for ongoing business and outreach workflows.',
    proof: []
  }
};

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = studies[slug];

  if (!study) {
    return <main className="caseStudyPage"><section className="caseHero"><a href="/work">← Back to Work</a><h1>Case study not found.</h1></section></main>;
  }

  return (
    <main className="caseStudyPage">
      <nav className="nav"><a className="brand" href="/">Therese Gorres</a><div className="navlinks"><a href="/work">Work</a><a href="/#about">About</a><a href="/#contact">Contact</a></div></nav>
      <header className="caseHero">
        <a className="caseBack" href="/work">← Back to Work</a>
        <p className="heroEyebrow">CASE STUDY</p>
        <h1>{study.title}</h1>
        <p className="caseCategory">{study.category}</p>
      </header>
      <section className="caseBody">
        <div className="caseOverview"><p className="sectionLabel">Overview</p><h2>{study.overview}</h2></div>
        <div className="caseMeta"><span>My role</span><p>{study.role}</p></div>
        <div className="caseDetails">
          <p className="sectionLabel">What I worked on</p>
          <div className="caseDetailGrid">{study.details.map((detail, i) => <div key={detail}><span>0{i + 1}</span><p>{detail}</p></div>)}</div>
        </div>
        <div className="caseResult"><p className="sectionLabel lightLabel">Result</p><h2>{study.result}</h2></div>
        {study.proof.length > 0 && <div className="caseProof"><p className="sectionLabel">Selected proof</p><div>{study.proof.map((src, i) => <img src={src} alt={`${study.title} work sample ${i + 1}`} key={src}/>)}</div></div>}
        {study.proof.length === 0 && <div className="caseProofPending"><p>Additional proof can be shared for roles where this work is relevant.</p></div>}
      </section>
      <section className="workContact"><p className="heroEyebrow">INTERESTED IN SIMILAR SUPPORT?</p><h2>Tell me what you need help with.</h2><a className="button light" href="mailto:constancexvenus@gmail.com">Contact me</a></section>
      <footer><span>Therese Gorres © 2026</span><span>CASE STUDY</span></footer>
    </main>
  );
}
