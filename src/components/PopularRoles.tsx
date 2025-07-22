import React from 'react';

const roles = [
  {
    title: 'Marketing & Communications',
    jobs: 236,
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-purple-400"><circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1"/><path d="M7 12l10-4v8l-10-4zm0 0v4a2 2 0 002 2h6a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: 'Human Research & Development',
    jobs: 236,
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-purple-400"><circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1"/><path d="M12 14a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: 'Information & Technology',
    jobs: 236,
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-purple-400"><circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1"/><rect x="7" y="9" width="10" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M9 15v2h6v-2" stroke="currentColor" strokeWidth="1.5"/></svg>
    ),
  },
  {
    title: 'Design & Development',
    jobs: 236,
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-purple-400"><circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1"/><path d="M7 17l5-5 5 5M12 12V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: 'Finance & Buisness',
    jobs: 236,
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-purple-400"><circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1"/><path d="M8 15h8M8 11h8M8 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'Health & Education',
    jobs: 236,
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-purple-400"><circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1"/><path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'Project Management & Software',
    jobs: 236,
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-purple-400"><circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1"/><rect x="8" y="8" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
    ),
  },
  {
    title: 'Customer & Support Care',
    jobs: 236,
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-purple-400"><circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1"/><path d="M12 17a5 5 0 100-10 5 5 0 000 10zm0 2c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
];

const PopularRoles: React.FC = () => {
  return (
    <section className="bg-[#f7f7fa] rounded-xl p-6 md:p-10 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Jobs in most popular roles</h2>
        <a href="#" className="text-purple-500 font-semibold flex items-center gap-1 hover:underline">See All <span className="text-lg">&gt;</span></a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {roles.map((role) => (
          <div
            key={role.title}
            className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-purple-200"
          >
            <div>{role.icon}</div>
            <div>
              <div className="font-semibold text-gray-900 text-base md:text-lg">{role.title}</div>
              <div className="text-xs text-gray-400">{role.jobs} Jobs available</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRoles; 