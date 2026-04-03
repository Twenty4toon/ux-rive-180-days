import { useState, useEffect, useRef } from "react";

const roadmapData = {
  title: "UX × RIVE",
  subtitle: "6-Month Pro Roadmap",
  tagline: "Senior Graphic Designer → Pro UX Designer & Rive Animator",
  phases: [
    {
      id: 1,
      month: "01",
      label: "PHASE 01",
      title: "UX Foundations Accelerated",
      color: "#FF6B35",
      accent: "#FF6B3520",
      status: "foundation",
      goal: "Compress beginner UX fast. Your graphic design eye gives you a 3× head start.",
      weeks: [
        {
          week: "W1",
          title: "UX Thinking & Research",
          tasks: [
            "Google UX Course 1 — skim quickly (you know 70% already)",
            "Study 10 UX case studies on Mobbin daily",
            "Learn empathy mapping & user personas",
            "Daily: audit one app's UX for 15 min",
          ],
          rive: null,
          tools: ["Figma", "Miro", "Mobbin"],
        },
        {
          week: "W2",
          title: "Information Architecture",
          tasks: [
            "Google UX Course 2 — user flows & sitemaps",
            "Card sorting exercises",
            "Map 3 real apps' IA from scratch",
            "Start a UX journal — document design decisions",
          ],
          rive: null,
          tools: ["FigJam", "Optimal Workshop"],
        },
        {
          week: "W3",
          title: "Wireframing & Prototyping",
          tasks: [
            "Google UX Course 3 — wireframes & low-fi prototypes",
            "Build lo-fi wireframes for a personal project",
            "Learn Figma auto-layout deeply",
            "Study competitor design patterns",
          ],
          rive: "🎬 Rive Start: Install Rive, understand the canvas, timelines & keyframes",
          tools: ["Figma", "Rive"],
        },
        {
          week: "W4",
          title: "Rive Basics Deep Dive",
          tasks: [
            "Finish Google UX Course 3",
            "Build your first interactive button in Rive",
            "Animate a loading spinner",
            "M1 Milestone: Wireframe + 2 Rive animations done",
          ],
          rive: "🎬 Rive: Artboards, timelines, basic state machines, trigger inputs",
          tools: ["Rive", "Figma"],
        },
      ],
    },
    {
      id: 2,
      month: "02",
      label: "PHASE 02",
      title: "UX Process + Rive State Machines",
      color: "#7C3AED",
      accent: "#7C3AED20",
      status: "process",
      goal: "Go deep on UX research & prototyping. Build real interactive Rive components.",
      weeks: [
        {
          week: "W5",
          title: "UX Research Methods",
          tasks: [
            "Google UX Course 4 — UX research & usability testing",
            "Conduct 3 real user interviews (friends, family)",
            "Synthesize findings into insights",
            "Study: Nielsen Norman Group articles daily",
          ],
          rive: "🎬 Rive: Boolean inputs, number inputs, nested artboards",
          tools: ["Maze", "Lyssna", "Rive"],
        },
        {
          week: "W6",
          title: "Usability Testing",
          tasks: [
            "Run usability tests on your wireframes",
            "Build an affinity diagram from research",
            "Iterate designs based on real feedback",
            "Document insights in a UX case study format",
          ],
          rive: "🎬 Rive: Build a full navigation menu with state machine",
          tools: ["Maze", "FigJam", "Rive"],
        },
        {
          week: "W7",
          title: "High-Fidelity Design",
          tasks: [
            "Google UX Course 5 — hi-fi prototypes",
            "Build a complete design system (components, tokens)",
            "Apply visual design skills from your graphic background",
            "Micro-copy and UX writing basics",
          ],
          rive: "🎬 Rive: Onboarding animation flow (3 screens, transitions)",
          tools: ["Figma", "Rive", "Stark (a11y)"],
        },
        {
          week: "W8",
          title: "Integration & Handoff",
          tasks: [
            "Dev handoff best practices in Figma",
            "Learn Figma variables & advanced prototyping",
            "M2 Milestone: Full hi-fi prototype + Rive interactive component",
            "Peer review with another designer",
          ],
          rive: "🎬 Rive: Export Rive files, understand runtime basics with a developer",
          tools: ["Figma", "Rive", "Zeplin"],
        },
      ],
    },
    {
      id: 3,
      month: "03",
      label: "PHASE 03",
      title: "Advanced UX + Rive Mastery",
      color: "#059669",
      accent: "#05966920",
      status: "advanced",
      goal: "Design systems, accessibility, advanced Rive. Start thinking like a pro.",
      weeks: [
        {
          week: "W9",
          title: "Design Systems",
          tasks: [
            "Google UX Course 6 — responsive design & design systems",
            "Study: Apple HIG, Material Design 3, Atlassian DS",
            "Build your own design system from scratch",
            "Tokens, components, documentation",
          ],
          rive: "🎬 Rive: Nested state machines, blend states",
          tools: ["Figma", "Rive", "Storybook"],
        },
        {
          week: "W10",
          title: "Responsive & Accessibility",
          tasks: [
            "Responsive design across mobile, tablet, desktop",
            "WCAG 2.1 accessibility audit your project",
            "Contrast ratios, keyboard nav, screen readers",
            "Study real accessibility failures and fixes",
          ],
          rive: "🎬 Rive: Game-feel micro-interactions (bounce, overshoot, spring)",
          tools: ["Stark", "Rive", "Figma"],
        },
        {
          week: "W11",
          title: "Motion Design Language",
          tasks: [
            "Google UX Course 7 — portfolio & job readiness",
            "Define a motion language for your design system",
            "Study: Linear, Vercel, Stripe motion principles",
            "Apply animation principles: easing, timing, weight",
          ],
          rive: "🎬 Rive: Build a complete animated UI kit (buttons, toggles, loaders, icons)",
          tools: ["Rive", "Figma", "Principle"],
        },
        {
          week: "W12",
          title: "Case Study #1",
          tasks: [
            "M3 Milestone: First complete UX case study",
            "Document: Problem → Research → Design → Test → Iterate",
            "Embed Rive animations in the case study",
            "Publish on Notion or personal site",
          ],
          rive: "🎬 Rive: Case study hero animation — your signature piece",
          tools: ["Rive", "Figma", "Notion", "Framer"],
        },
      ],
    },
    {
      id: 4,
      month: "04",
      label: "PHASE 04",
      title: "Real Projects + Rive Runtime",
      color: "#DC2626",
      accent: "#DC262620",
      status: "realworld",
      goal: "Stop learning. Start building for real. This is where pro designers are made.",
      weeks: [
        {
          week: "W13",
          title: "First Freelance Project",
          tasks: [
            "Take a real UX project (paid or free)",
            "Apply full UX process: research → wireframe → hifi → test",
            "Handle real client feedback (this will be hard — good)",
            "Document every decision with rationale",
          ],
          rive: "🎬 Rive: Runtime integration — embed Rive in a web project with a dev",
          tools: ["Rive Runtime (JS)", "Figma", "Webflow"],
        },
        {
          week: "W14",
          title: "Stakeholder Communication",
          tasks: [
            "Present designs to real stakeholders",
            "Learn to defend design decisions with data",
            "Iterate under pressure and constraints",
            "Study: How to present UX work (Nielsen Norman)",
          ],
          rive: "🎬 Rive: Lottie vs Rive — when to use which, export formats",
          tools: ["Rive", "Figma", "Loom"],
        },
        {
          week: "W15",
          title: "Complex Rive Animations",
          tasks: [
            "Deep dive: Rive follow path, procedural animation",
            "Build a character or mascot animation in Rive",
            "Study top Rive community files",
            "Contribute one file to Rive community",
          ],
          rive: "🎬 Rive: Follow path, listeners, events, Rive Renderer deep dive",
          tools: ["Rive", "Figma"],
        },
        {
          week: "W16",
          title: "Case Study #2",
          tasks: [
            "M4 Milestone: Second case study from real project",
            "This one should have real users, real data, real impact",
            "Show before/after, metrics if possible",
            "Get feedback from 3 senior designers on Dribbble/LinkedIn",
          ],
          rive: "🎬 Rive: Animate the case study presentation itself",
          tools: ["Rive", "Figma", "Framer", "Webflow"],
        },
      ],
    },
    {
      id: 5,
      month: "05",
      label: "PHASE 05",
      title: "Specialisation + AI Integration",
      color: "#0284C7",
      accent: "#0284C720",
      status: "specialize",
      goal: "Find your niche. UX + Rive is already rare — sharpen your unique edge.",
      weeks: [
        {
          week: "W17",
          title: "Interaction Design Deep Dive",
          tasks: [
            "Study: Interaction Design Foundation advanced courses",
            "Learn mental models, affordances, signifiers deeply",
            "Redesign 3 bad UX patterns you find in real apps",
            "Write a UX teardown article on Medium/LinkedIn",
          ],
          rive: "🎬 Rive: AI-generated animation assets + Rive integration",
          tools: ["Rive", "Figma", "ChatGPT/Claude for UX writing"],
        },
        {
          week: "W18",
          title: "AI-Powered UX Workflow",
          tasks: [
            "Use Claude/ChatGPT for UX research synthesis",
            "Galileo AI, Relume for wireframe generation",
            "AI-assisted usability testing tools",
            "Build your personal AI-enhanced UX workflow",
          ],
          rive: "🎬 Rive: Generative motion — data-driven animations",
          tools: ["Galileo AI", "Relume", "Claude", "Rive"],
        },
        {
          week: "W19",
          title: "Motion Design Language Pro",
          tasks: [
            "Study: Google Material Motion, Apple HIG Motion",
            "Create your personal motion manifesto",
            "Build a full animated design system in Rive",
            "Performance: audit and optimize Rive file sizes",
          ],
          rive: "🎬 Rive: Complete animated design system — buttons, modals, nav, transitions",
          tools: ["Rive", "Figma", "Principle"],
        },
        {
          week: "W20",
          title: "Case Study #3 + Personal Brand",
          tasks: [
            "M5 Milestone: Third case study (your best work)",
            "Launch personal portfolio website with Rive animations",
            "Post design work on LinkedIn 3× per week",
            "Build in public — share your process, not just outcomes",
          ],
          rive: "🎬 Rive: Portfolio website hero & transition animations",
          tools: ["Rive", "Framer", "Figma", "LinkedIn"],
        },
      ],
    },
    {
      id: 6,
      month: "06",
      label: "PHASE 06",
      title: "Pro Portfolio + Career Launch",
      color: "#D97706",
      accent: "#D9770620",
      status: "launch",
      goal: "You are now a pro. Prove it publicly. Land clients or a senior role.",
      weeks: [
        {
          week: "W21",
          title: "Portfolio Polish",
          tasks: [
            "Refine all 3 case studies — ruthlessly edit",
            "Each case study: problem, process, outcome, learnings",
            "Add Rive animations to portfolio site interactions",
            "Get portfolio reviewed by 5 senior UX designers",
          ],
          rive: "🎬 Rive: Animated page transitions for portfolio site",
          tools: ["Rive", "Framer", "Figma"],
        },
        {
          week: "W22",
          title: "Network & Visibility",
          tasks: [
            "Apply to 10 UX roles or pitch 5 freelance clients",
            "Share your 6-month journey publicly",
            "Join ADPList — find a mentor",
            "Speak at a local design meetup or post a video walkthrough",
          ],
          rive: "🎬 Rive: Create a shareable 'skills reel' animated in Rive",
          tools: ["ADPList", "LinkedIn", "Rive", "Loom"],
        },
        {
          week: "W23",
          title: "Freelance / Job Prep",
          tasks: [
            "Build a freelance proposal template",
            "Practice UX design challenges (briefbox.me)",
            "Portfolio site SEO — get discovered",
            "Set your rates: research market rates in India & globally",
          ],
          rive: "🎬 Rive: Build a client-facing animated pitch deck",
          tools: ["Rive", "Figma", "Notion", "Briefbox"],
        },
        {
          week: "W24",
          title: "🎓 Graduation — You Are Pro",
          tasks: [
            "M6 Milestone: Full portfolio live, 3 case studies, Rive reel",
            "Reflect: what worked, what to improve next 6 months",
            "Define your next phase: freelance, agency, product company",
            "You are now in the top 5% of designers who can animate",
          ],
          rive: "🎬 Rive: Animated graduation/celebration piece — share it publicly!",
          tools: ["Everything you've learned"],
        },
      ],
    },
  ],
  milestones: [
    { month: 1, label: "M1", text: "Google UX 1–3 + First Rive animations", color: "#FF6B35" },
    { month: 2, label: "M2", text: "Google UX 4–5 + Rive State Machines", color: "#7C3AED" },
    { month: 3, label: "M3", text: "Google UX 6–7 + Case Study #1", color: "#059669" },
    { month: 4, label: "M4", text: "Real project + Rive Runtime", color: "#DC2626" },
    { month: 5, label: "M5", text: "Portfolio live + Motion Design System", color: "#0284C7" },
    { month: 6, label: "M6", text: "Pro Portfolio + Career Launch 🎓", color: "#D97706" },
  ],
  stats: [
    { value: "6", label: "Months" },
    { value: "24", label: "Weeks" },
    { value: "3", label: "Case Studies" },
    { value: "∞", label: "Growth" },
  ],
};

const PhaseCard = ({ phase, index }) => {
  const [open, setOpen] = useState(index === 0);
  const [activeWeek, setActiveWeek] = useState(0);

  return (
    <div
      style={{
        marginBottom: "2rem",
        border: `1px solid ${phase.color}40`,
        borderRadius: "20px",
        overflow: "hidden",
        background: "rgba(10,10,15,0.8)",
        backdropFilter: "blur(20px)",
        transition: "all 0.3s ease",
        boxShadow: open ? `0 0 40px ${phase.color}20` : "none",
      }}
    >
      {/* Phase Header */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: "2rem 2.5rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: open ? `${phase.color}12` : "transparent",
          borderBottom: open ? `1px solid ${phase.color}30` : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "4rem",
              color: phase.color,
              lineHeight: 1,
              opacity: 0.9,
              minWidth: "70px",
            }}
          >
            {phase.month}
          </div>
          <div>
            <div
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: phase.color,
                fontWeight: 700,
                marginBottom: "0.25rem",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              {phase.label}
            </div>
            <div
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#fff",
                fontFamily: "'Sora', sans-serif",
                marginBottom: "0.35rem",
              }}
            >
              {phase.title}
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "#888",
                fontFamily: "'Space Mono', monospace",
                maxWidth: "500px",
              }}
            >
              {phase.goal}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: `1px solid ${phase.color}60`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: phase.color,
            fontSize: "1rem",
            transition: "transform 0.3s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        >
          ↓
        </div>
      </div>

      {/* Phase Content */}
      {open && (
        <div style={{ padding: "2rem 2.5rem" }}>
          {/* Week Tabs */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {phase.weeks.map((week, i) => (
              <button
                key={i}
                onClick={() => setActiveWeek(i)}
                style={{
                  padding: "0.5rem 1.2rem",
                  borderRadius: "100px",
                  border: `1px solid ${activeWeek === i ? phase.color : "#333"}`,
                  background: activeWeek === i ? phase.color : "transparent",
                  color: activeWeek === i ? "#000" : "#666",
                  cursor: "pointer",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  fontFamily: "'Space Mono', monospace",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.05em",
                }}
              >
                {week.week} — {week.title}
              </button>
            ))}
          </div>

          {/* Active Week Detail */}
          {(() => {
            const week = phase.weeks[activeWeek];
            return (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                {/* Tasks */}
                <div
                  style={{
                    background: "#0d0d12",
                    borderRadius: "14px",
                    padding: "1.5rem",
                    border: "1px solid #1a1a2e",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      color: phase.color,
                      fontWeight: 700,
                      marginBottom: "1rem",
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    ◆ UX TASKS
                  </div>
                  {week.tasks.map((task, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        marginBottom: "0.75rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: phase.color,
                          marginTop: "6px",
                          flexShrink: 0,
                        }}
                      />
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#ccc",
                          lineHeight: 1.5,
                          fontFamily: "'Sora', sans-serif",
                        }}
                      >
                        {task}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rive + Tools */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {week.rive && (
                    <div
                      style={{
                        background: `${phase.color}10`,
                        borderRadius: "14px",
                        padding: "1.5rem",
                        border: `1px solid ${phase.color}30`,
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.65rem",
                          letterSpacing: "0.2em",
                          color: phase.color,
                          fontWeight: 700,
                          marginBottom: "0.75rem",
                          fontFamily: "'Space Mono', monospace",
                        }}
                      >
                        ◆ RIVE FOCUS
                      </div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#ddd",
                          lineHeight: 1.6,
                          fontFamily: "'Sora', sans-serif",
                        }}
                      >
                        {week.rive}
                      </div>
                    </div>
                  )}

                  {week.tools && (
                    <div
                      style={{
                        background: "#0d0d12",
                        borderRadius: "14px",
                        padding: "1.5rem",
                        border: "1px solid #1a1a2e",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.65rem",
                          letterSpacing: "0.2em",
                          color: "#666",
                          fontWeight: 700,
                          marginBottom: "0.75rem",
                          fontFamily: "'Space Mono', monospace",
                        }}
                      >
                        ◆ TOOLS
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {week.tools.map((tool, i) => (
                          <span
                            key={i}
                            style={{
                              padding: "0.3rem 0.75rem",
                              borderRadius: "6px",
                              background: "#1a1a2e",
                              color: "#aaa",
                              fontSize: "0.72rem",
                              fontFamily: "'Space Mono', monospace",
                              border: "1px solid #2a2a40",
                            }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default function Roadmap() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Sora:wght@300;400;600;700&family=Space+Mono:wght@400;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #06060a;
          color: #fff;
          font-family: 'Sora', sans-serif;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #06060a; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }

        .hero-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 0;
          position: absolute;
          inset: 0;
          opacity: 0.04;
        }

        .hero-grid-line {
          border-right: 1px solid #fff;
          height: 100%;
        }

        .timeline-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid currentColor;
          background: #06060a;
          position: relative;
          z-index: 2;
          transition: transform 0.2s ease;
        }

        .timeline-dot:hover {
          transform: scale(1.4);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-1%, -2%); }
          20% { transform: translate(2%, 1%); }
          30% { transform: translate(-2%, 2%); }
          40% { transform: translate(1%, -1%); }
          50% { transform: translate(-1%, 2%); }
          60% { transform: translate(2%, -2%); }
          70% { transform: translate(0%, 1%); }
          80% { transform: translate(-2%, 0%); }
          90% { transform: translate(1%, 2%); }
        }

        .noise {
          position: fixed;
          inset: -200%;
          width: 400%;
          height: 400%;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: grain 0.5s steps(1) infinite;
          pointer-events: none;
          z-index: 9999;
        }

        @media (max-width: 768px) {
          .week-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-title { font-size: 5rem !important; }
          .milestone-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="noise" />

      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          padding: "2rem",
        }}
      >
        {/* Grid background */}
        <div className="hero-grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="hero-grid-line" />
          ))}
        </div>

        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #FF6B3515 0%, transparent 70%)",
            top: "-100px",
            left: "-100px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #7C3AED15 0%, transparent 70%)",
            bottom: "-100px",
            right: "-100px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            textAlign: "center",
            position: "relative",
            zIndex: 1,
            animation: mounted ? "fadeUp 0.8s ease forwards" : "none",
          }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "#FF6B35",
              marginBottom: "1.5rem",
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
            }}
          >
            ◆ SENIOR GRAPHIC DESIGNER → PRO UX + RIVE ◆
          </div>

          <h1
            className="hero-title"
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(5rem, 15vw, 12rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #fff 0%, #888 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              UX × RIVE
            </span>
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #FF6B35 0%, #7C3AED 50%, #0284C7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "0.5em",
              }}
            >
              6-MONTH ROADMAP
            </span>
          </h1>

          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              maxWidth: "500px",
              margin: "1.5rem auto 3rem",
              lineHeight: 1.7,
              fontFamily: "'Sora', sans-serif",
            }}
          >
            A living document for a senior graphic designer who already thinks visually.
            Not a beginner's guide — a pro-level accelerated path.
          </p>

          {/* Stats */}
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              background: "#1a1a2e",
              border: "1px solid #1a1a2e",
              borderRadius: "16px",
              overflow: "hidden",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            {roadmapData.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "#0d0d18",
                  padding: "1.5rem 1rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "2.5rem",
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "#555",
                    letterSpacing: "0.1em",
                    fontFamily: "'Space Mono', monospace",
                    marginTop: "0.25rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            animation: "pulse 2s ease infinite",
          }}
        >
          <div style={{ fontSize: "0.6rem", color: "#444", letterSpacing: "0.2em", fontFamily: "'Space Mono', monospace" }}>SCROLL</div>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #444, transparent)" }} />
        </div>
      </section>

      {/* Milestone Timeline */}
      <section style={{ padding: "4rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <div
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            color: "#555",
            marginBottom: "1rem",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          ◆ MILESTONE OVERVIEW
        </div>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "3rem",
            marginBottom: "3rem",
            color: "#fff",
          }}
        >
          YOUR 6 CHECKPOINTS
        </h2>

        {/* Timeline bar */}
        <div style={{ position: "relative", marginBottom: "4rem" }}>
          <div
            style={{
              height: "1px",
              background: "linear-gradient(to right, #FF6B35, #7C3AED, #059669, #DC2626, #0284C7, #D97706)",
              position: "relative",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "-7px",
            }}
          >
            {roadmapData.milestones.map((m, i) => (
              <div
                key={i}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
              >
                <div className="timeline-dot" style={{ color: m.color }} />
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: m.color, fontWeight: 700, marginBottom: "0.25rem" }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#666", maxWidth: "120px", lineHeight: 1.4 }}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone cards grid */}
        <div
          className="milestone-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}
        >
          {roadmapData.milestones.map((m, i) => (
            <div
              key={i}
              style={{
                padding: "1.5rem",
                borderRadius: "14px",
                border: `1px solid ${m.color}30`,
                background: `${m.color}08`,
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: m.color, marginBottom: "0.5rem" }}>
                {m.label}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#aaa", lineHeight: 1.5, fontFamily: "'Sora', sans-serif" }}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phase Cards */}
      <section style={{ padding: "2rem 2rem 6rem", maxWidth: "1000px", margin: "0 auto" }}>
        <div
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            color: "#555",
            marginBottom: "1rem",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          ◆ WEEKLY BREAKDOWN
        </div>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "3rem",
            marginBottom: "3rem",
            color: "#fff",
          }}
        >
          THE FULL PLAN
        </h2>

        {roadmapData.phases.map((phase, i) => (
          <PhaseCard key={phase.id} phase={phase} index={i} />
        ))}
      </section>

      {/* Living Document Notice */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          borderTop: "1px solid #111",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, #FF6B3508 0%, transparent 70%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-block",
              padding: "0.4rem 1rem",
              borderRadius: "100px",
              border: "1px solid #FF6B3540",
              background: "#FF6B3510",
              color: "#FF6B35",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              fontFamily: "'Space Mono', monospace",
              marginBottom: "1.5rem",
            }}
          >
            ◆ LIVING DOCUMENT
          </div>
          <h3
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "2.5rem",
              marginBottom: "1rem",
              color: "#fff",
            }}
          >
            REVIEW EVERY 30 DAYS
          </h3>
          <p
            style={{
              color: "#666",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "0.85rem",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            AI tools, Rive features, and UX practices evolve fast.
            Every month, update this roadmap. If a better tool launches — adopt it.
            If an AI shortcut saves you 10 hours — use it. Be adaptive, not rigid.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "2rem",
          textAlign: "center",
          borderTop: "1px solid #0d0d12",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            color: "#333",
            letterSpacing: "0.15em",
          }}
        >
          UX × RIVE 6-MONTH ROADMAP — BUILT FOR A SENIOR GRAPHIC DESIGNER GOING PRO
        </div>
      </footer>
    </>
  );
}
