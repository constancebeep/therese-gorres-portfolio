const capabilities = [
  {
    n: '01',
    title: 'Content, SEO & Local Visibility',
    text: 'Blog writing and editing, keyword research, on-page SEO, Google Business Profile support, citations and Search Console.'
  },
  {
    n: '02',
    title: 'Social & Marketing Support',
    text: 'Content planning, captions, scheduling, campaign support and social media assets that keep brands active and consistent.'
  },
  {
    n: '03',
    title: 'Design & Digital',
    text: 'Social graphics, marketing materials, branded visual systems and UI/UX work for digital products and client-facing content.'
  },
  {
    n: '04',
    title: 'E-commerce & Operations',
    text: 'Product listings, SKU and data management, research, reporting, customer support, outreach and day-to-day admin.'
  }
];

const toolGroups = [
  {
    title: 'Content & SEO',
    tools: ['WordPress', 'Ahrefs', 'Rank Math', 'Google Search Console', 'Grammarly', 'QuillBot']
  },
  {
    title: 'Design & Social',
    tools: ['Canva', 'Meta Business Suite', 'Google Business Profile', 'LinkedIn Pages', 'TikTok Shop', 'Flodesk']
  },
  {
    title: 'E-commerce & CRM',
    tools: ['Amazon Seller', 'Chairish', 'APT Deco', 'GoHighLevel', 'Zendesk', 'Homebot', 'Zillow']
  },
  {
    title: 'Data & Workflow',
    tools: ['Google Sheets', 'Smartsheet', 'monday.com', 'Trello', 'Notion', 'Taskade']
  },
  {
    title: 'AI & Development',
    tools: ['ChatGPT', 'Gemini', 'VS Code']
  }
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">THERESE GORRES</a>
        <div className="navlinks">
          <a href="/work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="heroV1" id="top">
        <div className="heroV1Copy">
          <p className="heroEyebrow">GENERAL VIRTUAL ASSISTANT · CREATIVE & DIGITAL SUPPORT</p>
          <h1>Therese<br/>Gorres</h1>
          <p className="heroRole">Content · Local SEO · Social Media · E-commerce · Design · Admin Support</p>
          <p className="heroIntro">I help businesses stay organized behind the scenes and show up professionally in front of their audience. From content and SEO to design, social media, listings and operations, I take ownership of the details so clients can focus on growth.</p>
          <div className="heroActions">
            <a className="button light" href="/work">View my work</a>
            <a className="button ghost" href="#contact">Contact me</a>
          </div>
        </div>

        <div className="heroV1Visual">
          <div className="heroPhotoWrap">
            <img src="https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/hero-photo.jpg" alt="Therese Gorres" />
          </div>
          <div className="heroStats">
            <div><strong>3+</strong><span>Years VA experience</span></div>
            <div><strong>5</strong><span>GBP accounts managed</span></div>
            <div><strong>40+</strong><span>Articles written</span></div>
          </div>
        </div>
      </section>

      <section className="section capabilities" id="services">
        <div className="sectionLabel">What I can help with</div>
        <div className="sectionTitleRow">
          <h2>Broad support, organized clearly.</h2>
          <p>My work crosses creative, marketing and operational tasks. The goal is not to do everything at once — it is to be useful where the business needs support.</p>
        </div>
        <div className="capabilityGrid">
          {capabilities.map((item) => (
            <article className="capabilityCard" key={item.n}>
              <span>{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workGateway">
        <div>
          <p className="sectionLabel lightLabel">Portfolio</p>
          <h2>All of my work lives in one place.</h2>
          <p>Browse client work by Design, Marketing & Social, SEO & Content, or Operations & E-commerce — without digging through one long homepage.</p>
        </div>
        <div className="workGatewayRight">
          <div className="workCategories">
            <span>Design</span><span>Marketing & Social</span><span>SEO & Content</span><span>Operations & E-commerce</span>
          </div>
          <a className="button pink" href="/work">Open Work →</a>
        </div>
      </section>

      <section className="section tools" id="tools">
        <div className="sectionLabel">Tools I've worked with</div>
        <div className="sectionTitleRow">
          <h2>My working toolkit.</h2>
          <p>A practical mix of platforms I have used across client projects, content, marketing, e-commerce, operations and design.</p>
        </div>
        <div className="toolGroups">
          {toolGroups.map((group) => (
            <div className="toolGroup" key={group.title}>
              <h3>{group.title}</h3>
              <div className="toolPills">
                {group.tools.map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section aboutV1" id="about">
        <div>
          <div className="sectionLabel">About</div>
          <h2>Reliable, independent and comfortable wearing more than one hat.</h2>
        </div>
        <div className="aboutText">
          <p>I'm Therese Gorres, a multidisciplinary remote professional with experience supporting businesses across content, local SEO, social media, e-commerce, admin operations and design.</p>
          <p>That range helps me understand both the work clients put in front of their audience and the detailed systems happening behind it. I can move from a blog or social graphic to a spreadsheet, listing workflow or dashboard without losing sight of the bigger goal.</p>
          <div className="traits"><span>Reliable</span><span>Independent</span><span>Organized</span></div>
        </div>
      </section>

      <section className="contactV1" id="contact">
        <div>
          <p className="heroEyebrow">LET'S WORK TOGETHER</p>
          <h2>Need someone who can handle both the creative work and the details behind it?</h2>
        </div>
        <div className="contactDetails">
          <div><span>Email</span><a href="mailto:constancexvenus@gmail.com">constancexvenus@gmail.com</a></div>
          <div><span>Based in</span><p>Philippines · Remote</p></div>
          <div><span>Availability</span><p>Full-time or part-time · Open to working across time zones</p></div>
          <div className="contactActions">
            <a className="button light" href="mailto:constancexvenus@gmail.com">Send an email</a>
            <a className="button ghost" href="https://raw.githubusercontent.com/constancebeep/jtmgc-portfolio-main/main/public/therese-gorres-resume.pdf" target="_blank" rel="noreferrer">View résumé</a>
          </div>
        </div>
      </section>

      <footer>
        <span>THERESE GORRES © 2026</span>
        <span>CREATIVE · MARKETING · OPERATIONS SUPPORT</span>
      </footer>
    </main>
  );
}