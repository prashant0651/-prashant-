import React from "react";

// Single-file React component for a futuristic portfolio
// Tailwind CSS classes are used throughout (assumes Tailwind is configured in the project).

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-slate-100 antialiased">
      <header className="max-w-5xl mx-auto p-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-600 p-[3px] shadow-2xl">
              <div className="w-full h-full rounded-full bg-black/70 flex items-center justify-center overflow-hidden">
                {/* Replace /profile.jpg with your actual profile image path */}
                <img src="/profile.jpg" alt="Prashant Kumar Singh" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Prashant Kumar Singh</h1>
              <p className="text-xs text-slate-300">Python Developer • Java • C++ • NEET Aspirant</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="/resume.pdf" download className="px-3 py-2 border rounded-lg text-sm hover:scale-105 transition-transform">Download Resume</a>
            <a href="#contact" className="px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 text-black text-sm font-medium shadow-lg">Contact</a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: profile card / avatar large */}
        <section className="lg:col-span-1 bg-gradient-to-br from-black/60 via-slate-900 to-black/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
          <div className="flex flex-col items-center gap-4">
            <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-br from-cyan-400 to-indigo-600 shadow-[0_10px_30px_rgba(56,189,248,0.12)]">
              <div className="w-full h-full rounded-full bg-black/75 overflow-hidden flex items-center justify-center">
                <img src="/profile.jpg" alt="profile" className="w-full h-full object-cover" />
              </div>
            </div>

            <h2 className="text-2xl font-bold">Prashant Kumar Singh</h2>
            <p className="text-sm text-slate-300 text-center">Passionate Python developer with production & learning-focused skills in Java, C++ and modern web development. Also a dedicated NEET aspirant — disciplined study plan and science background.</p>

            <div className="w-full mt-4 space-y-2">
              <div className="flex justify-between text-xs text-slate-300"><span>Email</span><a href="mailto:prashantkumarsingh065@gmail.com" className="underline">prashantkumarsingh065@gmail.com</a></div>
              <div className="flex justify-between text-xs text-slate-300"><span>Phone</span><a href="tel:+917067185187" className="underline">+91 7067185187</a></div>
              <div className="flex gap-3 mt-3 justify-center">
                <a href="https://www.instagram.com/o_o.prashantkumarsingh.o_o?igsh=em9tN3dlMGhwcDJ1" target="_blank" rel="noreferrer" className="text-xs px-3 py-2 border rounded-lg">Instagram</a>
                <a href="https://www.facebook.com/share/19zzvBqzdn/" target="_blank" rel="noreferrer" className="text-xs px-3 py-2 border rounded-lg">Facebook</a>
              </div>
            </div>
          </div>
        </section>

        {/* MIDDLE: about, skills, experience */}
        <section className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-br from-black/60 via-slate-900 to-black/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
            <h3 className="text-xl font-semibold">About Me</h3>
            <p className="mt-3 text-slate-300 leading-relaxed">Hi — I'm <strong>Prashant Kumar Singh</strong>. I specialize in <strong>Python</strong> (backend, data analysis, scripting, automation). I am also proficient in <strong>Java</strong>, <strong>C++</strong>, and <strong>CSS</strong>, and I enjoy building clean, maintainable code and modern, minimal web UIs. Outside programming, I'm a committed <strong>NEET aspirant</strong> — balancing rigorous medical entrance preparation with software projects. My approach combines disciplined study, weekly progress tracking, and applied projects that demonstrate learning.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg border border-slate-800 bg-black/40">
                <h4 className="text-sm font-medium">Primary</h4>
                <p className="text-xs text-slate-300 mt-1">Python (advanced): scripting, web backends (Flask/Django), data processing, ML experiment pipelines</p>
              </div>
              <div className="p-3 rounded-lg border border-slate-800 bg-black/40">
                <h4 className="text-sm font-medium">Also Skilled</h4>
                <p className="text-xs text-slate-300 mt-1">Java, C++: algorithmic problems, OOP; CSS & frontend basics for polished UI</p>
              </div>
              <div className="p-3 rounded-lg border border-slate-800 bg-black/40">
                <h4 className="text-sm font-medium">NEET Aspirant</h4>
                <p className="text-xs text-slate-300 mt-1">Structured study plan, topic-wise revision, weekly mock tracking, strong foundation in biology & chemistry basics</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-black/60 via-slate-900 to-black/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
            <h3 className="text-lg font-semibold">Skills & Proficiency</h3>
            <div className="mt-4 space-y-4">
              {/** Skill bars **/}
              <SkillBar skill="Python" pct={92} />
              <SkillBar skill="Algorithms (C++ / Java)" pct={78} />
              <SkillBar skill="Web (HTML/CSS/JS)" pct={70} />
              <SkillBar skill="Java" pct={65} />
              <SkillBar skill="Data Analysis / Pandas" pct={75} />
            </div>
          </div>

          <div className="bg-gradient-to-br from-black/60 via-slate-900 to-black/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
            <h3 className="text-lg font-semibold">Selected Projects & Work</h3>
            <ul className="mt-3 space-y-3 text-slate-300">
              <li>
                <strong>Automation & Scraper</strong> — Python scripts to automate data collection and generate CSV reports.
              </li>
              <li>
                <strong>Portfolio Website</strong> — This site (React + Tailwind) with download resume and contact links.
              </li>
              <li>
                <strong>Algorithm Practice</strong> — Competitive programming problems solved in C++ and Java; focus on arrays, graphs, and DP.
              </li>
            </ul>
          </div>
        </section>

        {/* BOTTOM: study plan / NEET timeline & contact form full-width */}
        <section className="lg:col-span-3 space-y-6 mt-2">
          <div className="bg-gradient-to-br from-black/60 via-slate-900 to-black/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
            <h3 className="text-lg font-semibold">NEET Preparation — Approach & Weekly Plan</h3>
            <p className="text-slate-300 mt-2">As a NEET aspirant you can show prospective mentors or peers a disciplined approach. Example weekly structure:</p>
            <ol className="mt-3 list-decimal pl-5 text-slate-300 space-y-2">
              <li>Daily: 6–8 hours split between Biology, Chemistry, Physics and revision of previous topics.</li>
              <li>Weekly: 1 full-length mock test + review, 2 days focused on weak topics.</li>
              <li>Monthly: topic-wise test and long revision; adjust the plan based on mock performance.</li>
            </ol>
            <p className="mt-3 text-xs text-amber-300">Tip: Track your weekly mock scores and list 3 action items after every test to iterate quickly.</p>
          </div>

          <div id="contact" className="bg-gradient-to-br from-black/60 via-slate-900 to-black/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
            <h3 className="text-lg font-semibold">Contact Me</h3>
            <p className="text-slate-300 mt-2">Want to collaborate, see my projects, or ask about my NEET plan? Reach out:</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-slate-800">
                <p className="text-xs text-slate-300">Email</p>
                <a href="mailto:prashantkumarsingh065@gmail.com" className="block mt-1 underline">prashantkumarsingh065@gmail.com</a>
              </div>
              <div className="p-4 rounded-lg border border-slate-800">
                <p className="text-xs text-slate-300">Phone</p>
                <a href="tel:+917067185187" className="block mt-1 underline">+91 7067185187</a>
              </div>
              <div className="p-4 rounded-lg border border-slate-800">
                <p className="text-xs text-slate-300">Social</p>
                <div className="mt-1 flex flex-col gap-2">
                  <a href="https://www.instagram.com/o_o.prashantkumarsingh.o_o?igsh=em9tN3dlMGhwcDJ1" target="_blank" rel="noreferrer" className="underline">Instagram</a>
                  <a href="https://www.facebook.com/share/19zzvBqzdn/" target="_blank" rel="noreferrer" className="underline">Facebook</a>
                </div>
              </div>
            </div>

            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:prashantkumarsingh065@gmail.com?subject=Contact from portfolio'; }}>
              <input type="text" placeholder="Your name" className="p-3 rounded-lg bg-black/30 border border-slate-800" required />
              <input type="email" placeholder="Your email" className="p-3 rounded-lg bg-black/30 border border-slate-800" required />
              <textarea placeholder="Message" className="p-3 rounded-lg bg-black/30 border border-slate-800 md:col-span-2" rows={5} required></textarea>
              <button className="md:col-span-2 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold">Send (opens email)</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto p-6 text-center text-slate-400 text-xs">
        © {new Date().getFullYear()} Prashant Kumar Singh — Built with focus on clarity, speed and a futuristic neon aesthetic.
      </footer>
    </div>
  );
}


// Small subcomponent for skill bars
function SkillBar({ skill, pct }: { skill: string; pct: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm"><span>{skill}</span><span className="text-xs text-slate-300">{pct}%</span></div>
      <div className="w-full h-3 bg-slate-800 rounded-full mt-2 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
