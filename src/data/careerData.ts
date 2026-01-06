export interface Job {
  id: string;
  title: string;
  department: 'Engineering' | 'Design' | 'Product' | 'Marketing' | 'Operations';
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  remote: boolean;
  description: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    remote: true,
    description: 'Build beautiful, performant user interfaces for our AI-powered collaboration platform.',
  },
  {
    id: '2',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'New York, NY',
    type: 'Full-time',
    remote: true,
    description: 'Design and implement scalable backend services and APIs.',
  },
  {
    id: '3',
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    remote: true,
    description: 'Create intuitive experiences that delight users and solve real problems.',
  },
  {
    id: '4',
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    remote: false,
    description: 'Drive product strategy and work cross-functionally to ship impactful features.',
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    remote: true,
    description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
  },
  {
    id: '6',
    title: 'Content Marketing Manager',
    department: 'Marketing',
    location: 'Austin, TX',
    type: 'Full-time',
    remote: true,
    description: 'Create compelling content that tells the Melp story and drives engagement.',
  },
  {
    id: '7',
    title: 'UX Researcher',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    remote: true,
    description: 'Conduct user research to inform product decisions and validate designs.',
  },
  {
    id: '8',
    title: 'Customer Success Manager',
    department: 'Operations',
    location: 'London, UK',
    type: 'Full-time',
    remote: false,
    description: 'Help our customers succeed and get the most value from Melp.',
  },
];

export const benefits: Benefit[] = [
  {
    icon: 'Globe',
    title: 'Remote-First',
    description: 'Work from anywhere. We believe in flexibility and trust.',
  },
  {
    icon: 'Heart',
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision coverage for you and your family.',
  },
  {
    icon: 'BookOpen',
    title: 'Learning Budget',
    description: '$2,000 annual budget for courses, books, and conferences.',
  },
  {
    icon: 'Calendar',
    title: 'Unlimited PTO',
    description: 'Take the time you need to recharge. We encourage regular breaks.',
  },
  {
    icon: 'TrendingUp',
    title: 'Equity Package',
    description: 'Meaningful equity so you share in the company\'s success.',
  },
];

export const departments = ['All', 'Engineering', 'Design', 'Product', 'Marketing', 'Operations'] as const;
