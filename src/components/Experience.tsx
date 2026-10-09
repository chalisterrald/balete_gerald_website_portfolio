import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Globe, Award, Code, ShieldCheck, ChevronDown } from 'lucide-react';
import { SectionHeader, slideInLeft, slideInRight } from '../App';

// ── Reusable accordion experience card ──────────────────────────────────────
interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  bullets: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, location, bullets }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ x: 10, scale: 1.01 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        display: 'flex',
        gap: '1.5rem',
        background: 'white',
        padding: '2rem',
        borderRadius: '24px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.03)',
        border: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      {/* Briefcase icon */}
      <motion.div
        whileHover={{ rotate: 15 }}
        style={{ color: 'var(--primary)', display: 'flex', alignItems: 'flex-start', flexShrink: 0 }}
      >
        <Briefcase size={32} />
      </motion.div>

      {/* Content */}
      <div style={{ width: '100%' }}>
        <h4 style={{ fontSize: '1.4rem', fontWeight: 600 }}>{title}</h4>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', margin: '0.2rem 0 0.2rem 0' }}>{company}</p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.8rem 0', fontStyle: 'italic', opacity: 0.8 }}>
          {location}
        </p>

        {/* Toggle button */}
        <button
          onClick={() => setOpen(prev => !prev)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'var(--bg-card, #f4f4f8)',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '999px',
            padding: '0.35rem 1rem',
            fontSize: '0.88rem',
            fontWeight: 600,
            color: 'var(--primary)',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
          {open ? 'Hide Details' : 'Show Details'}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <ChevronDown size={16} />
          </motion.span>
        </button>

        {/* Animated bullet list */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              key="bullets"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{
                color: 'var(--text-main)',
                fontSize: '1.05rem',
                lineHeight: 1.6,
                paddingLeft: '1.2rem',
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                overflow: 'hidden',
              }}
            >
              {bullets.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ── Main Experience section ──────────────────────────────────────────────────
const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div className="two-col-grid">

          {/* Experience List */}
          <div>
            <SectionHeader title="Experience" centered={false} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

              <ExperienceCard
                title="Software Development Intern | QA & Outbound Sales Support"
                company="Inspire Holdings, Inc. | Jan 2026 – May 2026"
                location="Alliance Global Tower, BGC, Taguig City, Metro Manila, Philippines"
                bullets={[
                  'Contributed to UI/UX enhancement of the Loopwork platform, architecting the transition to Version 2.0.',
                  'Refined the landing page and core dashboard to deliver a more engaging, intuitive, and visually polished experience for users managing 16 integrated multitasking tools.',
                  'Successfully performed Quality Assurance for Loopwork Version 2.0, including landing page, login page, and portal page, leveraging ISO Standard Software Testing protocols to ensure high-quality delivery.',
                  'Assisted with outbound lead generation by researching target companies, initiating outreach via email, and collaborating with Itech\'s Sales Team to refine prospecting strategies.',
                  'Tracked pipeline activity in Excel/CRM and participated in sales training sessions to strengthen client engagement and prospecting skills.',
                ]}
              />

              <ExperienceCard
                title="Customer Service Representative International Voice & Non-Voice Account"
                company="Alorica Philippines | July – October 2026"
                location="Three Cyberpod Centris Edsa, cor Quezon Ave, Diliman, Quezon City"
                bullets={[
                  'Successfully transitioned to production alongside tenured agents, handling high-volume customer interactions via voice and digital messaging (chat).',
                  'Provided billing support, account updates, and payment assistance.',
                  'Assisted with service requests including plan changes, upgrades, and device-related concerns.',
                  'Supported customer retention and handled requests for service cancellation and account changes.',
                  'Processed promotions, rebates, and special offers for customers.',
                  'Performed basic troubleshooting and guided customers with account and device setup. Worked in a fast-paced, QA-monitored environment focused on customer satisfaction.',
                ]}
              />
            </div>
          </div>

          {/* Certifications List */}
          <div>
            <SectionHeader title="Certifications" centered={false} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { title: 'Python Essential 1 & 2', issuer: 'Cisco Networking Academy', icon: <Globe size={24} /> },
                { title: 'Excel Pro Certification', issuer: 'Microsoft', icon: <Award size={24} /> },
                { title: 'C# (Intro to Intermediate)', issuer: 'Sololearn', icon: <Code size={24} /> },
                { title: 'Understanding WEB 3.0', issuer: 'DICT Caraga', icon: <ShieldCheck size={24} /> },
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    x: 15,
                    background: 'rgba(255,255,255,0.8)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    borderColor: 'transparent',
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'center',
                    padding: '1.2rem',
                    borderRadius: '20px',
                    background: 'white',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                >
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.5 }}
                    style={{ color: 'var(--primary)', background: 'var(--bg-card)', padding: '1rem', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    {cert.icon}
                  </motion.div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)' }}>{cert.title}</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.2rem', fontWeight: 500 }}>{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
