'use client';

import AOSComponent from '@/lib/aos';
import { MdVerified as CertIcon } from 'react-icons/md';
import { LuExternalLink as LinkIcon } from 'react-icons/lu';

const certs = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Sep 27, 2023',
    expires: 'Sep 27, 2026',
    id: 'PVHJRVL1XB4QQCCF',
    link: 'https://aws.amazon.com/verification',
    color: '#FF9900',
  },
  {
    title: 'Full Stack Java Developer',
    issuer: 'Naresh IT Technologies',
    date: 'Jul 2024 – Dec 2024',
    id: null,
    link: null,
    color: '#C71A36',
  },
  {
    title: 'Digital Skills Readiness – Java Full Stack',
    issuer: 'Wipro TalentNext',
    date: 'May – Sep 2023',
    id: null,
    link: null,
    color: '#5C068C',
  },
  {
    title: 'NPTEL Data Mining (Elite)',
    issuer: 'IIT Kharagpur / Ministry of Education, Govt. of India',
    date: 'Jan – Mar 2024',
    id: 'NPTEL24CS22S342400561',
    link: null,
    color: '#1a73e8',
  },
  {
    title: 'Ethical Hacking Essentials (EHE)',
    issuer: 'EC-Council',
    date: 'Jun 28, 2023',
    id: '230307',
    link: null,
    color: '#E53935',
  },
  {
    title: 'Azure Cloud Computing Internship',
    issuer: 'Teachnook / Aican Automate',
    date: 'Nov – Dec 2022',
    id: 'TNINTC22-762',
    link: null,
    color: '#0078D4',
  },
];

export default function Certifications() {
  return (
    <AOSComponent>
      <section
        id="certifications"
        className="mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900 relative z-10"
      >
        <h3
          data-aos="fade-left"
          className="mb-4 font-heading text-4xl flex items-center gap-2"
        >
          <CertIcon className="text-lime-500" />
          Certifications
        </h3>

        <div className="flex flex-col gap-4">
          {certs.map((cert, i) => (
            <div key={i} data-aos="fade-left">
              <div className="wrapper flex flex-col gap-1 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h4 className="font-heading text-xl font-bold">{cert.title}</h4>
                    <p className="text-slate-600 font-medium mt-1">{cert.issuer}</p>
                    <p className="text-slate-500 text-sm mt-1">
                      {cert.date}
                      {cert.expires && ` · Expires: ${cert.expires}`}
                    </p>
                    {cert.id && (
                      <p className="text-slate-400 text-xs mt-1 font-mono">ID: {cert.id}</p>
                    )}
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded-full border-2 border-slate-900 px-3 py-1 text-sm font-medium shadow-[2px_2px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none flex-shrink-0"
                    >
                      Verify
                      <LinkIcon className="h-3 w-3" />
                    </a>
                  )}
                </div>
                <div
                  className="mt-2 h-1 w-16 rounded-full"
                  style={{ backgroundColor: cert.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </AOSComponent>
  );
}
