export const SITE_CONFIG = {
  homepage: {
    heroTitle: 'India First AI-Powered Job Portal with Real-Time Hiring Near You.',
    heroHighlight: 'Job Portal',
    heroSubtitle: 'Real-Time Hiring Near You.',
    companiesTitle: 'Top companies Hiring',
    premiumTitle: 'Unlock Premium Access',
    premiumSubtitle: 'Get exclusive features and enhanced visibility with our premium membership.',
    resumeTitleGradient: 'ATS-Friendly',
    resumeTitleRest: 'Resume Builder',
    resumeSubtitle: 'Create a professional, Applicant Tracking System (ATS)-friendly CV that increases your chances of getting shortlisted.',
    liveChatTitle: 'Live Chat with Recruiters',
    liveChatSubtitle: 'Connect instantly with recruiters for quicker hiring decisions.',
    postJobTitle: 'Post a Job and Hire faster',
    postJobSubtitle: 'Post jobs and find suitable candidates quickly.',
    exploreNow: 'Explore Now',
    seeAll: 'See All',
    newsTitle: 'Professional media and industry news',
    newsDescription: 'Stay updated with the latest trends, updates, and news shared by industry experts.',
    connectionTitle: 'Nurture your professional relationships with industry experts',
  },
  services: {
    recruiterPlans: {
      title: 'Unlock Premium Access for Recruiters',
      plans: [
        {
          title: 'Get free of cost access to services to hire the right talent',
          features: [
            'Unlimited Job posting',
            'Live chat with job seekers',
            'Post your hiring requirements on social media',
            'Send unlimited connection requests'
          ],
          price: 'Free',
          image: '/homePage/professional.png',
          popular: true
        },
        {
          title: 'Hiring made easy',
          features: [
            'View & Share contact details 15 applicants',
            'Video conferencing with 15 job applicants',
            'Resume Downloads of all job applicants'
          ],
          price: '999/ month',
          image: '/homePage/premium.png',
          popular: true
        },
        {
          title: 'Bulk Hiring Plan',
          features: [
            '100 CV views per requirement',
            'Up to 500 search results',
            'Candidates active in last 6 months',
            '10+ advanced filters',
            'Single user access'
          ],
          price: '999/ month',
          image: '/homePage/premium (2).png',
          popular: true
        }
      ]
    },
    jobSeekerPlans: {
      title: 'Unlock Premium Access for Job seekers',
      plans: [
        {
          title: 'Get free of cost access to services to boost your career',
          features: [
            'Apply for unlimited jobs',
            'Live chat with recruiters',
            'Post on social media',
            'Send unlimited connection requests',
            'Post one job'
          ],
          price: 'Free',
          image: '/homePage/job-photo.png',
          popular: true
        },
        {
          title: 'Increase your profile visibility & Be a priority applicant',
          features: [
            'Get the Listing of jobs near you',
            'Profile visibility on top'
          ],
          price: 'Rs. 300 for 1 month',
          image: '/homePage/chat1.png',
          popular: true
        },
        {
          title: 'Get access to jobs near you',
          features: [
            'Get the Listing of jobs near you'
          ],
          price: 'Rs. 250 for 1 month',
          image: '/homePage/ats.png',
          popular: true
        }
      ]
    },
    additionalPlans: {
      plans: [
        {
          title: 'Stand out as an Early Applicant with instant access to jobs.',
          features: [
            'Get the Listing of jobs near you',
            'Profile visibility on top',
            'Share & view contact details of 25 recruiters',
            'Receive jobs within 24 hours of them being posted on Staff Book'
          ],
          price: 'Rs. 500 for 1 month',
          image: '/homePage/chat2.png',
          popular: true
        },
        {
          title: 'Live video conferencing with recruiters',
          features: [
            'Get the Listing of jobs near you',
            'Profile visibility on top',
            'Share & view contact details of 25 recruiters',
            'Receive jobs within 24 hours of them being posted on Staff Book',
            'Get the access of scheduled video conferencing with 10 recruiters'
          ],
          price: 'Rs. 750 for 1 month',
          image: '/homePage/chat3.png',
          popular: true
        },
        {
          title: 'Create your ATS Friendly Resume',
          features: [
            'Get the Listing of jobs near you',
            'Profile visibility on top',
            'Share & view contact details of 25 recruiters',
            'Receive jobs within 24 hours of them being posted on Staff Book',
            'Get the access of scheduled video conferencing with 10 recruiters',
            'Get the access of live video conferencing with 10 recruiters',
            'ATS Friendly Resume'
          ],
          price: 'Rs. 900 for 1 month',
          image: '/homePage/resume.png',
          popular: true
        }
      ]
    },
    resumeWriting: {
      title: 'Need help with Resume Writing?',
      subtitle: 'Standout from the crowd with our professionally written Resume by expert.',
      features: [
        'Feature 1',
        'Feature 1',
        'Feature 1',
        'Feature 1'
      ],
      price: 'Rs. 300 only',
      image: '/images/resume_accepted.svg'
    },
    contactUs: {
      title: 'Contact Us',
      form: {
        name: 'Name',
        email: 'Email ID',
        phone: 'Phone no.',
        query: 'Your Query',
        button: 'Call Me Back'
      },
      image: '/homePage/chat1.png'
    }
  },
  footer: {
    tagline: 'Nearby Jobs, Live Chat with Recruiters & Networking',
    policies: [
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Location Policy', href: '/location-policy' },
      { label: 'Branding Policy', href: '/branding-policy' },
      { label: 'Fraud Alert Policy', href: '/fraud-alert' },
    ],
    menu: [
      { label: 'About Us', href: '/about' },
      { label: 'Vision & Mission', href: '/vision' },
      { label: 'Service', href: '/service' },
      { label: 'Careers', href: '/careers' },
    ],
    email: 'info@staffbook.in',
    phone: '+91 9009222192',
    social: {
      facebook: 'https://facebook.com/',
      instagram: 'https://instagram.com/',
      linkedin: 'https://linkedin.com/',
      google: 'https://google.com/',
    },
  },
  navbar: {
    navLinks: [
      { label: 'Jobs', href: '/jobs' },
      { label: 'Networking', href: '/networking' },
      { label: 'My Connections', href: '/connections' },
      { label: 'Services', href: '/services' },
    ],
    signUp: 'Sign up',
  },
  subMenu: {
    inputPlaceholder: 'Enter preferred Role',
  },
  featuredJobsSection: {
    title: 'Featured Jobs',
    seeAll: 'See All',
  },
  profileHeader: {
    preferredRole: 'Preferred Role',
    preferredSalary: 'Preferred Salary',
    preferredLocation: 'Preferred Location',
    preferredShift: 'Preferred Shift',
    jobType: 'Job Type',
    workStatus: 'Work Status',
    progressLabel: 'Profile Completion',
  },
  profileSummary: {
    section: 'Profile Summary',
  },
  personalInfo: {
    section: 'Personal Information',
    personal: 'Personal',
    dob: 'Date of Birth',
    category: 'Cateogry',
    workPermit: 'Work Permit',
    address: 'Address',
    addMore: 'Add more details',
  },
  resume: {
    section: 'Resume',
    required: '*',
    upload: 'Upload Resume',
    helper: 'Upload Resume to auto fetch the details to automatically fill your profile',
  },
  skills: {
    section: 'Skills',
  },
  signup: {
    heading: 'Create your profile',
    subheading: "+Join india's no. 1 job portal",
    fullNameLabel: 'Full name',
    fullNamePlaceholder: 'Enter your full name',
    fullNameHelper: 'Enter your full name here. This will be visible to recruiters',
    emailLabel: 'Enter Email ID',
    emailPlaceholder: 'Enter your E-Mail Address',
    emailHelper: 'Enter Email ID for job updates',
    passwordLabel: 'Enter password',
    passwordPlaceholder: 'Enter new password',
    passwordHelper: 'Enter a strong password to stay protected',
    phoneLabel: 'Phone number',
    phonePlaceholder: '+91-0000000000',
    phoneHelper: 'Recruiters will reach out to you on this no.',
    workStatusLabel: 'Work Status',
    workStatusFresher: 'I am a fresher',
    workStatusFresherHelper: '(Experience might include internships)',
    workStatusExperienced: 'I am experienced',
    workStatusExperiencedHelper: '(this excludes internships)',
    resumeLabel: 'Resume',
    resumeButton: 'Upload Resume',
    resumeFileTypes: 'DOC, DOCX, PDF, RTF',
    resumeHelper: 'Maximum size of PDF 2mb',
    jobUpdatesLabel: 'Send job updates me through mail, whatsapp',
    registerButton: 'Register now',
  },
  basicDetails: {
    section: 'Basic Details',
    totalExperience: 'Total Experience',
    location: 'Location',
    currentSalary: 'Current Salary',
    noticePeriod: 'Notice Period',
    socialMedia: 'Social Media Links',
    personalEmail: 'Personal Email ID',
    workEmail: 'Work Email ID',
    personalContact: 'Personal Contact',
    workNoticePeriod: 'Notice Period',
  },
  experienceSection: {
    section: 'Experience',
  },
  educationSection: {
    section: 'Education',
  },
  projectsSection: {
    section: 'Projects',
  },
  certificationsSection: {
    section: 'Certifications',
  },
};
export const LOGGED_IN_LINKS = [
  { label: 'Home', href: '/home' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Networking', href: '/networking' },
  { label: 'My Connections', href: '/connections' },
  { label: 'Services', href: '/services' },
];

export const PROFILE_PERFORMANCE_TITLE = 'Profile Performance';