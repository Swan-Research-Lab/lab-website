export interface SocialLinks {
  website?: string;
  email?: string;
  twitter?: string;
  github?: string;
}

export interface Member {
  name: string;
  role: string;
  period: string;
  image?: string;
  notes?: string;
  placement?: string;
  links?: SocialLinks;
}

export interface MemberGroup {
  label: string;
  members: Member[];
}

export const faculty: Member[] = [
  {
    name: 'Olga Baysal',
    role: 'Associate Professor & Director of the Carleton University Institute for Data Science (CUIDS)',
    period: 'Carleton University',
    image: '/members/olga-baysal.jpg',
    links: {
      website: 'http://olgabaysal.com',
      email: 'mailto:olga.baysal@carleton.ca',
      twitter: 'https://twitter.com/olgabaysal',
    },
  },
];

export const currentGraduateStudents: Member[] = [
  {
    name: 'Michael Rolbin',
    role: 'PhD Student',
    period: '2025\u20132030',
    notes: 'Co-supervised by Dr. Lesley Istead',
  },
  {
    name: 'Sri Lakshmi Vadlamani',
    role: 'DSAAI PhD Student',
    period: '2022\u2013present',
  },
  {
    name: 'Michael MacInnis',
    role: 'PhD Student',
    period: '2021\u2013present',
    notes: 'Co-supervised by Dr. Michele Lanza (USI, Lugano, Switzerland)',
  },
  {
    name: 'Soroush Javdan',
    role: 'PhD Student',
    period: '2021\u2013present',
  },
  {
    name: 'Justin Zhang',
    role: 'MCS-thesis (Data Science) Student',
    period: '2024\u2013present',
  },
  {
    name: 'Vineela Pulagam',
    role: 'MCS (project) Student',
    period: '2026\u2013present',
    notes: 'Co-supervised by Dr. Omair Shafiq',
  },
  {
    name: 'Kieran Aston',
    role: "Master's DSAAI (thesis) Student",
    period: '2026\u2013present',
    notes: 'Co-supervised by Dr. Omair Shafiq',
  },
  {
    name: 'Noah Kasdorf',
    role: "Master's DSAAI (thesis) Student",
    period: '2026\u2013present',
  },
  {
    name: 'Paul Roode',
    role: 'MCS-thesis (Data Science) Student',
    period: '2025\u2013present',
  },
  {
    name: 'Julie Wechsler',
    role: 'UG-thesis Student',
    period: 'Fall 2025\u2013Winter 2026',
    notes: 'Co-supervised with Dr. Sriram Subramanian',
  },
];

export const graduateAlumni: Member[] = [
  {
    name: 'Oz Kilic',
    role: 'MCS-thesis (Data Science)',
    period: '2022\u20132025',
  },
  {
    name: 'Mohammad Yousuf',
    role: 'MCS-thesis (Data Science)',
    period: '2022\u20132024',
  },
  {
    name: 'Vivek Thaker',
    role: 'MCS-thesis',
    period: '2023\u20132024',
  },
  {
    name: 'Aagyapal Kaur',
    role: 'MCS-project',
    period: 'January\u2013April 2023',
    notes: 'Co-supervised by Dr. Paula Branco',
  },
  {
    name: 'Shreya Patel',
    role: 'MCS-project',
    period: 'January\u2013April 2023',
    notes: 'Co-supervised by Dr. Diana Inkpen',
  },
  {
    name: 'Raha Rashid',
    role: 'MCS-thesis (Data Science)',
    period: '2022\u20132024',
  },
  {
    name: 'Megha Agarwal',
    role: 'MCS-project',
    period: '2022\u20132023',
  },
  {
    name: 'Esra Ersan',
    role: 'MCS-thesis (Data Science)',
    period: '2021\u20132023',
  },
  {
    name: 'Heny Dave',
    role: 'MCS-project',
    period: 'March\u2013December 2022',
  },
  {
    name: 'Md Rezwan Hassan Khan',
    role: 'MCS-thesis (Data Science)',
    period: '2021\u20132022',
  },
  {
    name: 'Keerthana Muthu Subash',
    role: 'MCS-thesis',
    period: '2021\u20132022',
    placement: 'Data Analyst at Questica, Canada',
  },
  {
    name: 'Lakshmi Prasanna Kumar',
    role: 'MCS-thesis (Data Science)',
    period: '2021\u20132022',
    placement: 'On the job market',
  },
  {
    name: 'Shriya Satish',
    role: 'MCS-project',
    period: '2022\u20132023',
    notes: 'Co-supervised by Dr. Paula Branco',
    placement: 'Radio Software Developer at Ericsson, Canada',
  },
  {
    name: 'Harikrishnan Narayanan',
    role: 'MCS-project',
    period: '2020\u20132021',
    placement: 'Analytics and Machine Learning intern at Corning Incorporated, Montreal',
  },
  {
    name: 'Razieh Tekieh',
    role: 'MCS-thesis',
    period: '2020\u20132021',
    placement: 'On the job market',
  },
  {
    name: 'Sri Lakshmi Vadlamani',
    role: 'MCS-thesis (Data Science)',
    period: '2019\u20132021',
    placement: 'Developer of ML/AI/Deep Learning at Ericsson, Canada',
  },
  {
    name: 'Lance Po-Kai Wang',
    role: 'MCS-thesis (Data Science)',
    period: '2019\u20132021',
    placement: 'Software Engineer, CIeNET Technology, Taipei, Taiwan',
    links: { website: 'https://lancewg.com/' },
  },
  {
    name: 'Davoud Saljoughi',
    role: 'MCS-thesis',
    period: '2020\u20132021',
    placement: 'Analyst/Data Specialist, Health Canada',
  },
  {
    name: 'Khadija Osman',
    role: 'MCS-thesis (Data Science)',
    period: '2019\u20132020',
    placement: 'Data Scientist, National Research Council Canada',
  },
  {
    name: 'Boneetha Bose',
    role: 'MCS-project',
    period: '2018\u20132020',
    placement: 'Analytics and Data Science Associate, TD Canada',
  },
  {
    name: 'Saraj Singh Manes',
    role: 'MCS-thesis (Data Science)',
    period: '2018\u20132020',
    placement: 'Software Engineer, BenchSci',
  },
  {
    name: 'Norbert Eke',
    role: 'MCS-thesis (Data Science)',
    period: '2018\u20132020',
    placement: 'Data Scientist, Migros Online, Zurich, Switzerland',
    links: { website: 'https://norberte.github.io/' },
  },
  {
    name: 'Raisul Islam Rashu',
    role: 'MCS-thesis',
    period: '2018\u20132019',
    placement: 'TBA',
  },
  {
    name: 'Oleksii Kononenko',
    role: 'PhD Student',
    period: '2016\u20132017',
    notes: 'Co-supervised by Dr. Mike Godfrey, University of Waterloo',
    placement: 'Software Engineer, Microsoft, USA',
  },
  {
    name: 'Shruthi Nagaraj',
    role: 'MCS-thesis',
    period: '2017\u20132018',
    placement: 'Senior Software Developer/Analyst, IBM Canada',
  },
  {
    name: 'Tresa Rose',
    role: 'MCS-thesis',
    period: '2016\u20132017',
    placement: 'IM/IT Programmer at Employment and Social Development Canada',
  },
  {
    name: 'Junaid Maqsood',
    role: 'MCS-thesis',
    period: '2016\u20132017',
    placement: 'Founder, OTIF Solutions, Pakistan',
    links: { website: 'https://junaidmaqsood.com/' },
  },
  {
    name: 'Yaxin Cao',
    role: 'MCS-thesis',
    period: '2014\u20132015',
    notes: 'Universite de Montreal',
    placement: 'Product Manager at Jusfoun, China',
  },
];

export const undergraduateAlumni: Member[] = [
  { name: 'Ahmed Fazal Iqbal', role: 'UG-project', period: 'Summer 2024' },
  { name: 'Leina Abdelwahab', role: 'UG-project', period: 'Summer 2022' },
  { name: 'Ryan Ly', role: 'UG-project', period: 'Winter 2022' },
  { name: 'Emad Ryan', role: 'UG-project', period: 'Winter 2022' },
  { name: 'Kieran Nagasuye', role: 'UG-project', period: 'Winter 2022' },
  { name: 'Martin Andrijasevic', role: 'UG-project', period: 'Fall 2021' },
  { name: 'Etienne Vivash', role: 'UG-project', period: 'Fall 2021' },
  { name: 'April Yu', role: 'UG-project', period: 'Summer 2021' },
  {
    name: 'Yizhang (Tiger) Cao',
    role: 'UG-project',
    period: 'Winter 2021',
    links: {
      website: 'https://tigerc.space',
      email: 'mailto:tigercao@cmail.carleton.ca',
      github: 'https://github.com/tigercao1',
    },
  },
  { name: 'Askar Ilemessov', role: 'UG-project', period: 'Winter 2021' },
  { name: 'Sebastian Gadzinski', role: 'UG-project', period: 'Winter 2021' },
  { name: 'Adam Spriggs', role: 'UG-project', period: 'Winter 2021' },
  { name: 'Fadel Chamseddine', role: 'UG-project', period: 'Winter 2021' },
  { name: 'Richard Xia', role: 'UG-project', period: 'Winter 2021' },
  { name: 'Eliza Moore', role: 'UG-project', period: 'Fall 2020' },
  { name: 'Nathaniel Salami', role: 'UG-project', period: 'Fall 2020' },
  { name: 'Josh Gorman', role: 'UG-project', period: 'Fall 2020' },
  { name: 'Taihe Chen', role: 'UG-project', period: 'Fall 2020' },
  { name: 'Raymond Jiang', role: 'UG-project', period: 'Fall 2020' },
  { name: 'Tianrui Ma', role: 'UG-project', period: 'Fall 2020' },
  { name: 'Majd Al Khany', role: 'UGR-project', period: 'Summer 2020' },
  { name: 'David Kretz', role: 'UGR-project', period: 'Summer 2020' },
  { name: 'Mustafa Abdul-Fatah', role: 'UGR-project', period: 'Winter 2020' },
  { name: 'Noah Beeney', role: 'UGR-project', period: 'Winter 2020' },
  { name: 'Joshua Arts', role: 'UGR-project', period: 'Winter 2020' },
  { name: 'Alexei Tipenko', role: 'UGR-thesis', period: 'Fall 2019\u2013Winter 2020' },
  { name: 'Benjamin Emdon', role: 'UGR-thesis', period: 'Fall 2019\u2013Winter 2020' },
  { name: 'Lama Elnaggar', role: 'UGR-project', period: 'Fall 2019' },
  { name: 'Emma Sieling', role: 'UGR-project', period: 'Fall 2019' },
  { name: 'Aditya Bongale', role: 'UGR-project', period: 'Summer 2019' },
  { name: 'Jackson Eyres', role: 'UGR-project', period: 'Winter 2017' },
  { name: 'Hsiao-Kang Jao', role: 'UGR-project', period: 'Winter 2016' },
];

export const memberGroups: MemberGroup[] = [
  { label: 'Principal Investigator', members: faculty },
  { label: 'Current Graduate Students', members: currentGraduateStudents },
  { label: 'Graduate Alumni', members: graduateAlumni },
  { label: 'Undergraduate Alumni', members: undergraduateAlumni },
];
