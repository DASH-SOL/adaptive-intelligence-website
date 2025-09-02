// This is your new single source of truth for all resources.
// It combines data from all pages into one consistent database.

export const resourceDatabase = {
  'infstones-case-study': {
    // --- Core Info ---
    id: 1,
    slug: 'infstones-case-study',
    title: 'How InfStones Earned Global Press Coverage Across Top Media Outlets',
    description: 'Strategic positioning and PR campaign that helped InfStones secure massive funding and achieve global media recognition in the competitive crypto space.',
    client: 'InfStones',
    
    // --- Page Display Info ---
    type: 'case-study',
    badge: 'Case Study: InfStones',
    category: 'Digital Marketing',
    industry: 'Blockchain & Crypto',
    tags: ['Brand Strategy', 'PR & Media', 'Blockchain Infrastructure'],
    duration: 'Campaign',
    featured: true,
    heroImage: '/images/case-studies/InfStones.png',
    
    // --- Download Info ---
    fileName: 'InfStones_Case_Study.pdf',
    downloadName: 'InfStones_Case_Study.pdf',
    nextStepsCTA: 'create your success story',
    
    // --- Page Content ---
    testimonial: {
      quote: "Amazing writer/copy editor. Professional, excellent language skills, ethical/high integrity, will definitely work with again.",
      author: "Zhenwu Shi",
      position: "CEO of InfStones"
    },
    insights: [
      'Brand strategy and market positioning in the competitive crypto space',
      'Digital strategy and Go-To-Market strategies for blockchain infrastructure',
      'How strategic positioning supported InfStones in securing $66M in funding',
      'The press release that drove a spike in Google search interest',
      'PR and media outreach that captured coverage from reputable outlets'
    ],
    benefits: [
      'Complete InfStones success story analysis',
      'Strategic positioning insights for crypto companies',
      'Press coverage methodology and tactics',
      'Key takeaways for blockchain businesses',
      'Funding strategy insights ($66M raised)'
    ],
    metrics: {
      funding: '$66M',
      coverage: 'Global',
      searchSpike: '300%'
    },
    results: "Global Press Coverage", // For the archive page
  },

  'market-trends-2025': {
    // --- Core Info ---
    id: 2,
    slug: 'market-trends-2025',
    title: '2025 Market Trend Report',
    description: "Discover the trends shaping the future of marketing—from nostalgic branding to AI-powered personalization and everything in between.",
    client: 'Adaptive Intelligence',
    
    // --- Page Display Info ---
    type: 'report',
    badge: '2025 Market Trend Report',
    category: 'Market Insights',
    industry: 'Marketing & Strategy',
    tags: ['Nostalgia Marketing', 'AI Personalization', 'Consumer Trends'],
    duration: 'Annual',
    featured: true,
    heroImage: '/images/case-studies/unnamed.png',
    
    // --- Download Info ---
    fileName: 'Market_Trend_Report_2025.pdf',
    downloadName: '2025_Marketing_Trends_Report.pdf',
    nextStepsCTA: 'implement these insights',
    
    // --- Page Content ---
    testimonial: {
      quote: "We share our most impactful insights so you can apply the lessons to your own business, in hopes that you'll keep us in mind when you have future marketing questions.",
      author: "Adaptive Intelligence",
      position: "Marketing Strategy Team"
    },
    insights: [
      'Emotional connections through nostalgia marketing',
      'Retro visuals, fonts, and design trends',
      'Human-centered content in an AI-driven world',
      'Hyper-personalized marketing strategies',
      'Transparent communication that builds trust',
      'Interactive content, AR experiences, and voice search optimization'
    ],
    benefits: [
      '8+ key marketing trends for 2025',
      'Consumer behavior insights and predictions',
      'Technology impact analysis (AI, AR, Voice)',
      'Actionable implementation strategies',
      'Case studies from leading brands'
    ],
    metrics: {
      trends: '8+',
      insights: '25+',
      scope: 'Global'
    },
    results: "8+ Key Insights", // For the archive page
  },
  
  // These resources are ready for the download page but need more detail to have their own single pages.
  'marketing-strategy-template': {
    id: 3,
    slug: 'marketing-strategy-template',
    title: 'Marketing Strategy Template',
    description: 'Comprehensive template to organize your marketing strategy, budget, and team structure.',
    fileName: 'Marketing_Strategy_Template.pdf',
    downloadName: 'Marketing_Strategy_Template.pdf',
    type: 'template',
    client: 'Adaptive Intelligence',
    industry: 'Marketing & Strategy',
    benefits: [
      'Complete marketing plan template',
      'Budget allocation guidelines and frameworks',
      'Team structure recommendations',
      'Channel optimization strategies',
      'ROI measurement frameworks'
    ],
    metrics: {
      sections: '12+',
      frameworks: '5+',
      examples: '20+'
    },
    nextStepsCTA: 'build your strategy',
    featured: false,
  },
  
  'saas-growth-case-study': {
    id: 4,
    slug: 'saas-growth-case-study',
    title: 'SaaS Growth Case Study',
    description: 'Complete playbook for SaaS growth including acquisition strategies, retention tactics, and scaling insights.',
    fileName: 'SaaS_Growth_Case_Study.pdf',
    downloadName: 'SaaS_Growth_Case_Study.pdf',
    type: 'case-study',
    client: 'TechStartup Co',
    industry: 'SaaS & Technology',
    benefits: [
      'Complete SaaS growth methodology',
      'Customer acquisition strategies that work',
      'Retention and expansion playbooks',
      'Pricing strategy optimization',
      'Scaling team and operations insights'
    ],
    metrics: {
      arr: '$1M+',
      growth: '400%',
      retention: '95%'
    },
    nextStepsCTA: 'scale your SaaS',
    featured: false,
  }
};