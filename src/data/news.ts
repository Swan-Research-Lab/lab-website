export interface NewsItem {
  date: string;
  description: string;
}

export const news: NewsItem[] = [
  {
    date: 'May 30, 2025',
    description:
      'Keynote talk "Reimagining Code Review in the Age of AI" delivered at the Consortium for Software Engineering Research (CSER), Dalhousie University, Halifax, Canada',
  },
  {
    date: 'April 27\u201328, 2025',
    description:
      'Paper "Terminal Lucidity: Envisioning the Future of the Terminal" accepted at ICPC 2025, Ottawa, Canada',
  },
  {
    date: 'April 12\u201313, 2026',
    description:
      'Paper "RegDriftKit: A Toolkit for Generating Data and Benchmarking Drift Detection in Regression Tasks" accepted at CAIN 2026, Rio de Janeiro, Brazil',
  },
];
