'use client';

import AOSComponent from '@/lib/aos';
import { MdSchool as SchoolIcon } from 'react-icons/md';
import { FaRegCalendarAlt as DateIcon } from 'react-icons/fa';

export default function Education() {
  return (
    <AOSComponent>
      <section
        id="education"
        className="mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900"
      >
        <h3
          data-aos="fade-left"
          className="mb-4 font-heading text-4xl flex items-center gap-2"
        >
          <SchoolIcon />
          Education
        </h3>

        <div data-aos="fade-left">
          <div className="wrapper flex flex-col gap-3 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <h3 className="font-heading text-2xl">Bachelor of Technology (B.Tech)</h3>
            <p className="text-lg font-semibold text-slate-700">Aditya Institute of Technology and Management, Tekkali</p>
            <p className="flex items-center gap-2 text-slate-600"><DateIcon /> Aug 2020 – Apr 2024</p>
            <p className="text-lime-700 font-bold text-lg">CGPA: 8.84 / 10 &nbsp;|&nbsp; 83.4%</p>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="wrapper flex flex-col gap-3 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <h3 className="font-heading text-2xl">Class XII (10+2)</h3>
            <p className="text-lg font-semibold text-slate-700">Sri Chaitanya Junior College</p>
            <p className="flex items-center gap-2 text-slate-600"><DateIcon /> 2020</p>
            <p className="text-lime-700 font-bold text-lg">94.6%</p>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="wrapper flex flex-col gap-3 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <h3 className="font-heading text-2xl">Class X (SSC)</h3>
            <p className="text-lg font-semibold text-slate-700">Sri Gnana Jyothi Model School</p>
            <p className="flex items-center gap-2 text-slate-600"><DateIcon /> 2018</p>
            <p className="text-lime-700 font-bold text-lg">98%</p>
          </div>
        </div>
      </section>
    </AOSComponent>
  );
}
