import React from 'react';

const ProjectFilters = ({ active, setActive }) => {
  const categories = [
    { id: 'all', label: 'All_Archive' },
    { id: 'Coded Web Solutions', label: 'Coded_Web' },
    { id: 'IOT', label: 'IOT_Systems' },
    { id: 'Wordpress', label: 'WP_Sites' },
    { id: 'Other', label: 'Others' },
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-16 border-b border-white/5 pb-6">
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mr-4">
        Filter_By:
      </span>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActive(cat.id)}
          className={`relative py-2 font-mono text-[11px] tracking-widest uppercase transition-all ${
            active === cat.id
              ? 'text-cyan-400'
              : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          {cat.label}
          {active === cat.id && (
            <div className="absolute -bottom-[25px] left-0 w-full h-[2px] bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          )}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;