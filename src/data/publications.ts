export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year?: string;
  award?: string;
}

export interface PublicationGroup {
  label: string;
  items: Publication[];
}

export const journalArticles: Publication[] = [
  {
    title:
      'CREST: Improving Interpretability and Effectiveness of Troubleshooting at Ericsson through Criterion-Specific Trouble Report Retrieval',
    authors: 'Soroush Javdan, Pragash Krishnamoorthy, Olga Baysal',
    venue: 'Journal of Systems and Software, vol. 234',
    year: 'April 2026',
  },
  {
    title: 'Blended PC Peer Review Model: Process and Reflection',
    authors:
      'Chakkrit Tantithamthavorn, Nicole Novielli, Ayushi Rastogi, Olga Baysal, and Bram Adams',
    venue: 'ACM SIGSOFT Software Engineering Notes, Volume 50, Issue 4, pp. 20\u201327',
    year: 'October 2025',
  },
  {
    title:
      'Using Machine Learning to Analyze and Predict Entry Patterns of Low-Cost Airlines: A Study of Southwest Airlines',
    authors: 'Sri Lakshmi Vadlamani, Omair Shafiq, and Olga Baysal',
    venue: 'Elsevier Journal on Machine Learning with Applications, vol. 10',
    year: 'December 2022',
  },
  {
    title:
      'Understanding How and Why Developers Seek and Analyze API-related Opinions',
    authors: 'Gias Uddin, Olga Baysal, Latifa Guerrouj, and Foutse Khomh',
    venue: 'IEEE Transactions on Software Engineering (TSE), vol. 47, April 2021, pp. 694\u2013735',
  },
  {
    title:
      'Investigating Technical and Non-Technical Factors Influencing Modern Code Review',
    authors: 'Olga Baysal, Oleksii Kononenko, Reid Holmes, and Michael W. Godfrey',
    venue: 'Empirical Software Engineering Journal (EMSE), vol. 21, pp. 932\u2013959',
    year: '2016',
  },
  {
    title: 'Developer Dashboards: The Need For Qualitative Analytics',
    authors: 'Olga Baysal, Reid Holmes, and Michael W. Godfrey',
    venue: 'IEEE Software, 30(4), pp. 46\u201352',
    year: 'July\u2013August 2013',
  },
];

export const bookChapters: Publication[] = [
  {
    title: 'A Tailored Suit: The Big Opportunity in Personalizing Issue Tracking',
    authors: 'Olga Baysal',
    venue:
      'In: "Perspectives on Data Science for Software Engineering", Tim Menzies, Laurie Williams, and Thomas Zimmermann (eds.), Morgan Kaufmann',
    year: '2016',
  },
  {
    title: 'Synthesizing Knowledge from Software Development Artifacts',
    authors:
      'Olga Baysal, Oleksii Kononenko, Reid Holmes, and Michael W. Godfrey',
    venue:
      'In: "The Art and Science of Analyzing Software Data", Christian Bird, Tim Menzies, and Thomas Zimmermann (eds.), Morgan Kaufmann',
    year: '2015',
  },
];

export const conferencePapers: Publication[] = [
  {
    title:
      'RegDriftKit: A Toolkit for Generating Data and Benchmarking Drift Detection in Regression Tasks',
    authors: 'Oz Kilic, Justin Charbonneau, Elio Velazquez, Olga Baysal',
    venue:
      '5th International Conference on AI Engineering - Software Engineering for AI (CAIN 2026), Rio de Janeiro, Brazil',
    year: 'April 12\u201313, 2026',
  },
  {
    title: 'Terminal Lucidity: Envisioning the Future of the Terminal',
    authors: 'Michael MacInnis, Olga Baysal, and Michele Lanza',
    venue:
      '33rd IEEE/ACM International Conference on Program Comprehension (ICPC 2025), Ottawa, Canada',
    year: 'April 27\u201328, 2025',
  },
  {
    title: 'Keep the Ball Rolling: Analyzing Release Cadence in GitHub',
    authors: 'Oz Kilic, Nathaniel Bowness, and Olga Baysal',
    venue:
      'International Conference on Mining Software Repositories (MSR), Mining Challenge track, Melbourne, Australia',
    year: 'May 15\u201316, 2023',
  },
  {
    title: 'Terminals All the Way Down',
    authors: 'Michael MacInnis, Olga Baysal, and Michele Lanza',
    venue:
      'IEEE/ACM 44th International Conference on Software Engineering: New Ideas and Emerging Results (ICSE-NIER), Pittsburgh, PA, USA',
    year: 'May 21\u201329, 2022',
  },
  {
    title:
      'DISCO: A Dataset of Discord Chat Conversations for Software Engineering Research',
    authors:
      'Keerthana Muthu Subash, Lakshmi Prasanna Kumar, Sri Lakshmi Vadlamani, Preetha Chatterjee, and Olga Baysal',
    venue:
      'International Conference on Mining Software Repositories (MSR), Data/Tool Showcase track, Pittsburgh, PA, USA',
    year: 'May 23\u201324, 2022',
  },
  {
    title:
      'Leveraging Unsupervised Learning to Summarize Code Entities Discussed in Stack Overflow',
    authors: 'Amirhossein Naghshzan, Latifa Guerrouj, and Olga Baysal',
    venue:
      'International Working Conference on Source Code Analysis & Manipulation (SCAM), Luxembourg City',
    year: 'September 27\u201328, 2021',
  },
  {
    title: 'Can GraphQL Replace REST? A Study of Their Efficiency and Viability',
    authors: 'Sri Lakshmi Vadlamani, Benjamin Emdon, Joshua Arts, and Olga Baysal',
    venue:
      '8th International Workshop on Software Engineering Research and Industrial Practice (SER&IP), Madrid, Spain',
    year: 'June 4, 2021',
  },
  {
    title:
      'Health is Wealth: Evaluating the Health of the Bitcoin Ecosystem in GitHub',
    authors: 'Khadija Osman and Olga Baysal',
    venue:
      '4th International Workshop on Software Health in Projects, Ecosystems and Communities (SoHeal), Madrid, Spain',
    year: 'May 29, 2021',
  },
  {
    title: 'Studying the Change Histories of Stack Overflow and GitHub Snippets',
    authors: 'Saraj Singh Manes and Olga Baysal',
    venue:
      'International Conference on Mining Software Repositories (MSR), Madrid, Spain',
    year: 'May 17\u201319, 2021',
  },
  {
    title:
      'Studying Software Developer Expertise and Contributions in Stack Overflow and GitHub',
    authors: 'Sri Lakshmi Vadlamani and Olga Baysal',
    venue:
      '36th IEEE International Conference on Software Maintenance and Evolution (ICSME), Adelaide, Australia',
    year: 'September 27 \u2013 October 3, 2020',
  },
  {
    title:
      'Studying Developer Reading Behavior on StackOverflow During API Summarization Tasks',
    authors:
      'Jonathan Saddler, Cole Peterson, Sanjana Sama, Shruthi Nagaraj, Olga Baysal, Latifa Guerrouj, and Bonita Sharif',
    venue:
      '27th IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER), London, ON, Canada',
    year: 'February 2020',
  },
  {
    title:
      'Evaluating The Performance of Machine Learning Sentiment Analysis Algorithms in Software Engineering',
    authors: 'Jingyi Shen, Olga Baysal, and M. Omair Shafiq',
    venue:
      '5th International Conference on Cloud and Big Data Computing (CBDCom), Fukuoka, Japan',
    year: 'August 2019',
  },
  {
    title:
      'How Often and What StackOverflow Posts Do Developers Reference in Their GitHub Projects?',
    authors: 'Saraj Singh Manes and Olga Baysal',
    venue:
      '16th International Conference on Mining Software Repositories (MSR), Mining Challenge track, Montreal, Canada',
    year: 'May 2019',
  },
  {
    title:
      'Studying Developer Build Issues and Debugger Usage via Timeline Analysis in Visual Studio IDE',
    authors: 'Christopher Bellman, Ahmad Seet, and Olga Baysal',
    venue:
      '15th International Conference on Mining Software Repositories (MSR), Mining Challenge track, Gothenburg, Sweden',
    year: 'May 2018',
  },
  {
    title: "Studying Pull Request Merges: A Case of Shopify's Active Merchant",
    authors:
      'Oleksii Kononenko, Tresa Rose, Olga Baysal, Michael W. Godfrey, Dennis Theisen, and Bart de Water',
    venue:
      '40th International Conference on Software Engineering (ICSE), Gothenburg, Sweden',
    year: 'May 2018',
    award: 'Acceptance rate: 24%',
  },
  {
    title: 'Built to Last or Built Too Fast? Evaluating Prediction Models for Build Times',
    authors: 'Ekaba Bisong, Eric Tran, and Olga Baysal',
    venue:
      'Working Conference on Mining Software Repositories (MSR), Buenos Aires, Argentina',
    year: 'May 2017',
  },
  {
    title: 'Code Review Quality: How Developers See it',
    authors: 'Oleksii Kononenko, Olga Baysal, and Michael W. Godfrey',
    venue:
      '38th ACM/IEEE International Conference on Software Engineering (ICSE), Austin, TX',
    year: 'May 2016',
    award: 'Acceptance rate: 19% for full papers',
  },
  {
    title: 'Mining Twitter Data For Influenza Detection and Surveillance',
    authors: 'Kenny Byrd, Alisher Mansurov, and Olga Baysal',
    venue:
      'ICSE 2016 Workshop on Software Engineering in Healthcare Systems (SEHS 2016), Austin, TX',
    year: 'May 2016',
  },
  {
    title: "Predicting Questions' Scores on Stack Overflow",
    authors: 'Haifa Alharthi, Djedjiga Outioua, and Olga Baysal',
    venue:
      'ICSE 2016 Workshop on Crowd Sourcing in Software Engineering (CSI-SE 2016), Austin, TX',
    year: 'May 2016',
  },
  {
    title:
      'Investigating Code Review Quality: Do People and Participation Matter?',
    authors:
      'Oleksii Kononenko, Olga Baysal, Latifa Guerrouj, Yaxin Cao, and Michael W. Godfrey',
    venue:
      '31st IEEE International Conference on Software Maintenance and Evolution (ICSME)',
    year: '2015',
  },
  {
    title: 'No Issue Left Behind: Reducing Information Overload in Issue Tracking',
    authors: 'Olga Baysal, Reid Holmes, and Michael W. Godfrey',
    venue:
      'International Symposium on the Foundations of Software Engineering (FSE), pp. 666\u2013677',
    year: '2014',
  },
  {
    title: 'DASHboards: Enhancing Developer Situational Awareness',
    authors: 'Oleksii Kononenko, Olga Baysal, Reid Holmes, and Michael W. Godfrey',
    venue:
      'Formal Demonstrations Track at the 36th ACM/IEEE International Conference on Software Engineering (ICSE-14), Hyderabad, India, pp. 552\u2013555',
    year: 'June 2014',
  },
  {
    title: 'Mining Modern Repositories with Elasticsearch',
    authors: 'Oleksii Kononenko, Olga Baysal, Reid Holmes, and Michael W. Godfrey',
    venue:
      '11th IEEE International Working Conference on Mining Software Repositories (MSR-14), Hyderabad, India, pp. 328\u2013331',
    year: 'June 2014',
  },
  {
    title: 'The Influence of Non-Technical Factors on Code Review',
    authors: 'Olga Baysal, Oleksii Kononenko, Reid Holmes, and Michael W. Godfrey',
    venue:
      '20th Working Conference on Reverse Engineering (WCRE-13), Koblenz, Germany, pp. 122\u2013131',
    year: 'October 2013',
    award: 'Distinguished Paper Award (Acceptance rate: 39%)',
  },
  {
    title: 'Situational Awareness: Personalizing Issue Tracking Systems',
    authors: 'Olga Baysal, Reid Holmes, and Michael W. Godfrey',
    venue:
      'New Ideas and Emerging Results (NIER) Track at the 35th ACM/IEEE International Conference on Software Engineering (ICSE-13), San Francisco, CA, pp. 1185\u20131188',
    year: 'May 22\u201324, 2013',
    award: 'Acceptance rate: 22%',
  },
  {
    title: 'Informing Development Decisions: From Data To Information',
    authors: 'Olga Baysal',
    venue:
      'Doctoral Symposium at the 35th International Conference on Software Engineering (ICSE-2013), San Francisco, CA, pp. 1407\u20131410',
    year: 'May 21, 2013',
  },
  {
    title: 'Extracting Artifact Lifecycle Models From Metadata History',
    authors: 'Olga Baysal, Oleksii Kononenko, Reid Holmes, and Michael W. Godfrey',
    venue:
      '2013 ICSE Workshop on Data Analysis Patterns in Software Engineering (DAPSE-13), San Francisco, CA, pp. 17\u201319',
    year: 'May 21, 2013',
  },
  {
    title: 'The MSR Cookbook: Mining a Decade of Research',
    authors:
      'Hadi Hemmati, Sarah Nadi, Olga Baysal, Oleksii Kononenko, Wei Wang, Reid Holmes, and Michael W. Godfrey',
    venue:
      '10th IEEE International Working Conference on Mining Software Repositories (MSR-13), San Francisco, pp. 343\u2013352',
    year: 'May 2013',
    award: 'Acceptance rate: 38%',
  },
  {
    title: 'The Secret Life of Patches: A Firefox Case Study',
    authors: 'Olga Baysal, Oleksii Kononenko, Reid Holmes, and Michael W. Godfrey',
    venue:
      '19th Working Conference on Reverse Engineering (WCRE-12), Kingston, ON, Canada, pp. 447\u2013455',
    year: 'October 2012',
    award: 'Acceptance rate: 36%',
  },
  {
    title: 'Revisiting Bug Triage and Resolution Practices',
    authors: 'Olga Baysal, Reid Holmes, and Michael W. Godfrey',
    venue:
      '2012 ICSE Workshop on User evaluation for Software Engineering Researchers (USER-12), Zurich, Switzerland, pp. 29\u201330',
    year: 'June 5, 2012',
  },
  {
    title: 'Mining Usage Data and Development Artifacts',
    authors: 'Olga Baysal, Reid Holmes, and Michael W. Godfrey',
    venue:
      '2012 IEEE International Working Conference on Mining Software Repositories (MSR-12), Zurich, Switzerland, pp. 343\u2013352',
    year: 'June 2012',
    award: 'Acceptance rate: 28%',
  },
  {
    title: 'A Tale of Two Browsers',
    authors: 'Olga Baysal, Ian Davis, and Michael W. Godfrey',
    venue:
      '8th Working Conference on Mining Software Repositories (MSR-11), Honolulu, Hawaii, pp. 238\u2013241',
    year: 'May 21\u201322, 2011',
  },
  {
    title: 'A Bug You Like: A Framework for Automated Assignment of Bugs',
    authors: 'Olga Baysal, Michael W. Godfrey, and Robin Cohen',
    venue:
      '17th IEEE International Conference on Program Comprehension (ICPC-09), Vancouver, BC',
    year: 'May 17\u201319, 2009',
  },
  {
    title: 'Trust Management for Host-based Collaborative Intrusion Detection',
    authors: 'Carol J Fung, Olga Baysal, Jie Zhang, Issam Aib, and Raouf Boutaba',
    venue:
      '19th IFIP/IEEE International Workshop on Distributed Systems: Operations and Management (DSOM-08), Samos Island, Greece, pp. 109\u2013122',
    year: 'September 22\u201326, 2008',
    award: 'Acceptance rate: 36.8%',
  },
  {
    title:
      'Correlating Social Interactions to Release History During Software Evolution',
    authors: 'Olga Baysal and Andrew J. Malton',
    venue:
      'International Workshop on Mining Software Repositories (MSR-07), Minneapolis, MN',
    year: 'May 19\u201320, 2007',
    award: 'Acceptance rate: 38%',
  },
  {
    title: 'diffX: An Algorithm to Detect Changes in Multi-Version XML Documents',
    authors: 'Raihan Al-Ekram, Archana Adma, and Olga Baysal',
    venue:
      '15th Annual International Conference of Computer Science and Software Engineering (CASCON\'05), Richmond Hill, ON, Canada',
    year: '2005',
    award: 'Acceptance rate: 27%',
  },
];

export const keynoteTalks: Publication[] = [
  {
    title: 'Reimagining Code Review in the Age of AI',
    authors: 'Olga Baysal',
    venue:
      'Keynote Talk at the Consortium for Software Engineering Research (CSER), Dalhousie University, Halifax, Canada',
    year: 'May 30, 2025',
  },
];

export const allPublications: PublicationGroup[] = [
  { label: 'Journal Articles', items: journalArticles },
  { label: 'Book Chapters', items: bookChapters },
  { label: 'Refereed Conference Papers', items: conferencePapers },
  { label: 'Selected Keynote and Invited Talks', items: keynoteTalks },
];
