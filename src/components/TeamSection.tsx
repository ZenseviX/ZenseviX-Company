import React from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

const team = [
  {
    name: 'องอาจ เพิ่มดี',
    role: 'AI Engineering',
    focus: 'ออกแบบและพัฒนาระบบ AI ให้พร้อมใช้งานจริงในทุกสนามแข่ง',
    initials: 'อพ',
    image: '/img/องอาจ เพิ่มดี 6752301409 AI Engineering.jpg',
    accent: 'from-red-500 to-orange-300',
    status: 'STRATEGY',
  },
  {
    name: 'ศุภกร สระน้อย',
    role: 'Data Lead',
    focus: 'ดูแลข้อมูล telemetry ให้แม่นยำ รวดเร็ว และพร้อมใช้ในการตัดสินใจ',
    initials: 'ศส',
    image: '/img/ศุภกร สระน้อย 6752300631 Data Lead.jpg',
    accent: 'from-cyan-400 to-blue-500',
    status: 'MODELS',
  },
  {
    name: 'ปภังกร มณีรอด',
    role: 'MLOps',
    focus: 'ทำให้โมเดล AI ทำงานต่อเนื่อง เสถียร และส่งผลลัพธ์ได้ทันเวลา',
    initials: 'ปม',
    image: '/img/ปภังกร มณีรอด 6752301158 MLOps.jpg',
    accent: 'from-emerald-300 to-teal-500',
    status: 'TELEMETRY',
  },
  {
    name: 'กิตติมศักดิ์ แจ่มสน',
    role: 'CTO',
    focus: 'วางทิศทางเทคโนโลยีและสร้างโครงสร้างระบบให้ Zensivix เติบโต',
    initials: 'กจ',
    image: '/img/กิตติมศักดิ์ แจ่มสน 6752300917 cto.jpg',
    accent: 'from-amber-300 to-red-500',
    status: 'PERFORMANCE',
  },
  {
    name: 'กิตติภัทร์ เพ็งน้ำคำ',
    role: 'Fullstack',
    focus: 'เชื่อมประสบการณ์หน้าเว็บกับระบบเบื้องหลังให้ทำงานเป็นหนึ่งเดียว',
    initials: 'กพ',
    image: '/img/กิตติภัทร์ เพ็งน้ำคำ 6752300704 Fullstack.jpg',
    accent: 'from-fuchsia-300 to-rose-500',
    status: 'PRODUCT',
  },
  {
    name: 'กวิน สำเภาจันทร์',
    role: 'CEO',
    focus: 'กำหนดวิสัยทัศน์และพา Zensivix เปลี่ยนข้อมูลให้เป็นชัยชนะ',
    initials: 'กส',
    image: '/img/กวิน สำเภาจันทร์ 6752300615 ceo.jpg',
    accent: 'from-violet-300 to-indigo-500',
    status: 'TRACKSIDE',
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative overflow-hidden border-t border-white/5 bg-[#0b0c10] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-red-400">
              <span className="h-px w-8 bg-red-500" />
              The crew behind the signal
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Built by people who <span className="text-red-500">think in laps.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-neutral-400 lg:pb-1">
            Strategy, engineering, and product in one room. We turn high-pressure race data into a calmer, faster way to compete.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#111318]/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-[#15171d]"
            >
              <div className="mb-9 flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-neutral-500">
                  0{index + 1} / {member.status}
                </span>
                <ArrowUpRight className="h-4 w-4 text-neutral-600 transition-colors group-hover:text-red-400" />
              </div>

              <div className={`mb-6 h-24 w-24 rounded-2xl bg-gradient-to-br ${member.accent} p-px shadow-2xl`}>
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#111318] font-mono text-xl font-bold text-white">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                      event.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="absolute hidden">{member.initials}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-red-400">{member.role}</p>
              <p className="mt-5 min-h-12 text-sm leading-6 text-neutral-400">{member.focus}</p>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4">
                <a href="#team" aria-label={`${member.name} LinkedIn`} className="rounded-md p-1 text-neutral-500 transition-colors hover:bg-white/10 hover:text-white">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#team" aria-label={`${member.name} GitHub`} className="rounded-md p-1 text-neutral-500 transition-colors hover:bg-white/10 hover:text-white">
                  <Github className="h-4 w-4" />
                </a>
                <span className="ml-auto flex items-center gap-2 font-mono text-[10px] text-neutral-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  ONLINE
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};