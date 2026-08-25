export type CompanyKey = 'ericsson' | 'ifs';

export interface Collaboration {
  studentName: string;
  studentRole: string;
  studentImage?: string;
  company: string;
  companyKey: CompanyKey;
  subtitle: string;
}

export const collaborations: Collaboration[] = [
  {
    studentName: 'Sri Lakshmi Vadlamani',
    studentRole: 'DSAAI PhD Student',
    company: 'Ericsson Canada',
    companyKey: 'ericsson',
    subtitle:
      'Applying NLP to developer artifacts in telecom software systems.',
  },
  {
    studentName: 'Soroush Javdan',
    studentRole: 'PhD Student',
    company: 'Ericsson Canada',
    companyKey: 'ericsson',
    subtitle:
      'Empirical studies of developer workflows in telecommunications.',
  },
  {
    studentName: 'Justin Zhang',
    studentRole: 'MCS-thesis (Data Science) Student',
    company: 'IFS Canada',
    companyKey: 'ifs',
    subtitle:
      'AI-assisted tooling for enterprise software maintenance.',
  },
  {
    studentName: 'Paul Roode',
    studentRole: 'MCS-thesis (Data Science) Student',
    company: 'IFS Canada',
    companyKey: 'ifs',
    subtitle:
      'LLM inferencing infrastructure for enterprise software systems.',
  },
];
