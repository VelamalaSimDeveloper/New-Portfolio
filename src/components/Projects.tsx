'use client';

import { LuExternalLink as LinkIcon } from 'react-icons/lu';
import { FaCodeBranch as CodeIcon } from 'react-icons/fa6';
import AOSComponent from '@/lib/aos';

export default function Projects() {
  return (
    <AOSComponent>
      <section id="projects" className="relative z-10 mt-32 p-6 text-slate-900">
        <h3
          data-aos="fade-left"
          className="projects-title motion-preset-blur-right mb-8 font-heading text-4xl"
        >
          Selected Projects
        </h3>

        <div id="projects-container" className="mb-6 flex flex-col gap-6">
          <div data-aos="fade-left">
            <div className="wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <h3 className="font-heading text-3xl">
                🚗 Automatic Vehicle License Plate Recognition Using CNN
              </h3>
              <div className="flex flex-col gap-2 text-lg md:flex-row md:gap-4">
                <a
                  target="_blank"
                  href="https://journals.edwin.co.in/index.php/esajms/article/view/4244"
                  className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 bg-slate-900 px-6 py-1 font-medium text-white shadow-[2px_2px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Published Journal
                  <LinkIcon className="inline h-[20px] w-[20px] text-white" />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/VelamalaSimDeveloper"
                  className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 px-6 py-1 font-medium shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Source code
                  <CodeIcon className="inline h-[17px] w-[17px]" />
                </a>
              </div>
              <div>
                <p className="mb-2 text-xl">
                  Real-time license plate recognition system using Computer Vision and Deep Learning. Utilized Python, OpenCV, and Keras on Google Colab to capture and recognize Indian license plates. Achieved 87% accuracy using Haar cascade detection and CNN character recognition.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Python', 'OpenCV', 'Keras', 'CNN', 'Google Colab', 'Deep Learning'].map((tech) => (
                    <span key={tech} className="rounded-full border-2 border-slate-900 px-3 py-1 text-sm font-medium bg-lime-50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <h3 className="font-heading text-3xl">🛒 Mini Bazaar</h3>
              <div className="flex flex-col gap-2 text-lg md:flex-row md:gap-4">
                <a
                  target="_blank"
                  href="https://simmannaidu-mini-bazar.netlify.app/"
                  className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 bg-slate-900 px-6 py-1 font-medium text-white shadow-[2px_2px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Deployed site
                  <LinkIcon className="inline h-[20px] w-[20px] text-white" />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/VelamalaSimDeveloper"
                  className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 px-6 py-1 font-medium shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Source code
                  <CodeIcon className="inline h-[17px] w-[17px]" />
                </a>
              </div>
              <div>
                <p className="mb-2 text-xl">
                  An online shopping platform with product browsing, cart management, and checkout functionalities. Fully responsive UI deployed on Netlify.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Netlify'].map((tech) => (
                    <span key={tech} className="rounded-full border-2 border-slate-900 px-3 py-1 text-sm font-medium bg-lime-50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://github.com/VelamalaSimDeveloper"
          target="_blank"
          className="wrapper flex h-16 items-center justify-center gap-2 rounded-[30px] border-[3px] border-slate-900 text-center text-[20px] font-medium shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          More on GitHub
          <LinkIcon />
        </a>
      </section>
    </AOSComponent>
  );
}
