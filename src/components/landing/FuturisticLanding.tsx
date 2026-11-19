import { motion } from "framer-motion";
import {
  Activity, BrainCircuit, Building2, Bus, CheckCircle2, Cpu, Database, Eye,
  Fingerprint, GraduationCap, Layers3, MapPinned, Network, Radar, ScanFace,
  ShieldCheck, Sparkles, Users, Workflow,
} from "lucide-react";

const products = [
  { name: "AttendX", eyebrow: "AI attendance", description: "Group-based facial attendance designed for classrooms, institutions and distributed teams.", icon: ScanFace, logo: "/attendx-logo.svg", points: ["Group photo recognition", "Classroom-scale workflows", "Central attendance visibility"], tone: "cyan" },
  { name: "RouteX", eyebrow: "Intelligent mobility", description: "A live operations layer for routes, vehicles and the people moving through your network.", icon: Bus, logo: "/routex-logo.svg", points: ["Live fleet monitoring", "Route and stop management", "Operational alerts"], tone: "violet" },
  { name: "TapInX", eyebrow: "Secure access", description: "Touchless identity and access workflows that connect entry events to one command layer.", icon: Fingerprint, logo: "/tapinx-logo.svg", points: ["Identity verification", "Entry event visibility", "Unified access records"], tone: "blue" },
];

const useCases = [
  { icon: GraduationCap, title: "Education", text: "Attendance, campus access and transport visibility in one connected operating layer." },
  { icon: Building2, title: "Enterprise", text: "Modernize workforce identity, facility access and mobility operations without fragmented tools." },
  { icon: Users, title: "Institutions", text: "Create a reliable, real-time view of people, movement and critical operational events." },
];

const architecture = [
  { icon: Eye, label: "Observe", text: "Cameras, devices and mobility signals" },
  { icon: BrainCircuit, label: "Understand", text: "Vision AI and identity intelligence" },
  { icon: Workflow, label: "Orchestrate", text: "Rules, alerts and connected workflows" },
  { icon: Activity, label: "Act", text: "Live command and operational response" },
];

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.7 } };

export default function FuturisticLanding() {
  return (
    <main>
      <section id="platform" className="ai-hero section-padding">
        <div className="ai-orb ai-orb-one" /><div className="ai-orb ai-orb-two" /><div className="ai-grid" />
        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 pb-20 pt-32 lg:grid-cols-[1.08fr_.92fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="ai-kicker mb-7"><Sparkles className="h-4 w-4" />Applied AI for the physical world</div>
            <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Intelligence that sees.<span className="ai-gradient-text block">Infrastructure that responds.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">OpenVisionX unifies computer vision, identity and mobility into one AI operations platform for campuses, institutions and enterprises.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="ai-button-primary">Request a platform demo</a><a href="#solutions" className="ai-button-secondary">Explore the platform</a></div>
            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {["Vision intelligence", "Identity workflows", "Mobility operations"].map((item) => <div key={item} className="flex items-center gap-2 text-sm font-medium text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-primary" /> {item}</div>)}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }} className="relative mx-auto w-full max-w-[570px]">
            <div className="ai-visual-shell">
              <div className="flex items-center justify-between border-b border-border/60 px-5 py-4"><div className="flex items-center gap-2 text-sm font-semibold text-foreground"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgb(52_211_153)]" />OpenVision Command</div><span className="font-mono text-xs text-muted-foreground">SYSTEM ONLINE</span></div>
              <div className="relative aspect-[1.05] overflow-hidden p-5">
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(hsl(var(--border)/.6)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/.6)_1px,transparent_1px)] [background-size:36px_36px]" />
                <div className="absolute inset-0 flex items-center justify-center"><div className="ai-core"><BrainCircuit className="h-12 w-12 text-primary" /><div className="ai-core-ring" /><div className="ai-core-ring ai-core-ring-two" /></div></div>
                {[
                  { icon: ScanFace, label: "Identity", className: "left-5 top-8" }, { icon: Bus, label: "Mobility", className: "right-5 top-14" },
                  { icon: ShieldCheck, label: "Access", className: "bottom-9 left-8" }, { icon: Radar, label: "Live events", className: "bottom-6 right-7" },
                ].map((node) => <div key={node.label} className={`ai-node ${node.className}`}><node.icon className="h-4 w-4 text-primary" /><span>{node.label}</span></div>)}
              </div>
              <div className="grid grid-cols-3 border-t border-border/60">{["3 connected products", "Unified data layer", "Live operations"].map((item) => <div key={item} className="border-r border-border/60 px-3 py-4 text-center text-xs font-medium text-muted-foreground last:border-0">{item}</div>)}</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding border-y border-border/50 bg-card/30 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-5 text-sm font-semibold text-muted-foreground lg:justify-between">
          <span className="text-foreground">One intelligence layer</span><span className="flex items-center gap-2"><Cpu className="h-4 w-4 text-primary" /> AI-native architecture</span><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Privacy-aware workflows</span><span className="flex items-center gap-2"><Network className="h-4 w-4 text-primary" /> Connected operations</span><span className="flex items-center gap-2"><Database className="h-4 w-4 text-primary" /> Central visibility</span>
        </div>
      </section>

      <section id="solutions" className="section-padding relative overflow-hidden py-28 sm:py-36">
        <div className="ai-orb ai-orb-three" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="max-w-3xl"><p className="ai-section-label">The OpenVisionX ecosystem</p><h2 className="ai-section-title">One AI core. Three purpose-built products.</h2><p className="ai-section-copy">Deploy the capabilities you need today, then connect them through one operational intelligence layer as your organization grows.</p></motion.div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.article key={product.name} {...fadeUp} transition={{ duration: 0.7, delay: index * 0.1 }} className={`ai-product-card ai-tone-${product.tone}`}>
                <div className="flex items-start justify-between"><div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/70 bg-background/70 p-2.5 shadow-sm"><img src={product.logo} alt={`${product.name} product logo`} className="h-full w-full object-contain" loading="lazy" /></div><product.icon className="h-6 w-6 text-primary" /></div>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{product.eyebrow}</p><h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">{product.name}</h3><p className="mt-4 min-h-24 leading-7 text-muted-foreground">{product.description}</p>
                <ul className="mt-7 space-y-3 border-t border-border/60 pt-6">{product.points.map((point) => <li key={point} className="flex items-center gap-3 text-sm font-medium text-foreground/85"><span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" /> {point}</li>)}</ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="intelligence" className="section-padding py-28 sm:py-36">
        <div className="ai-glass-band mx-auto grid max-w-7xl gap-14 p-7 sm:p-10 lg:grid-cols-[.9fr_1.1fr] lg:p-14">
          <motion.div {...fadeUp}><p className="ai-section-label">AI command layer</p><h2 className="ai-section-title">Turn signals into operational clarity.</h2><p className="ai-section-copy">OpenVisionX connects perception, context and action. Your teams gain a single view of identity, attendance, access and movement instead of switching between disconnected systems.</p><div className="mt-8 flex flex-wrap gap-2">{["Computer vision", "Identity intelligence", "Event automation", "Operational analytics"].map((item) => <span key={item} className="ai-chip">{item}</span>)}</div></motion.div>
          <div className="grid gap-4 sm:grid-cols-2">{architecture.map((item, index) => <motion.div key={item.label} {...fadeUp} transition={{ duration: 0.6, delay: index * 0.08 }} className="rounded-2xl border border-border/60 bg-background/50 p-6"><item.icon className="h-6 w-6 text-primary" /><h3 className="mt-8 font-display text-xl font-semibold text-foreground">{item.label}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p></motion.div>)}</div>
        </div>
      </section>

      <section id="architecture" className="section-padding relative overflow-hidden py-28 sm:py-36">
        <div className="ai-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center"><p className="ai-section-label">Built to connect</p><h2 className="ai-section-title">A modular architecture for real-world AI.</h2><p className="ai-section-copy mx-auto">Connect edge devices, visual inputs and operational data to a platform designed around live institutional workflows.</p></motion.div>
          <motion.div {...fadeUp} className="mt-16 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {[{ icon: Eye, title: "Edge and inputs", text: "Cameras, access points and mobility signals" }, { icon: BrainCircuit, title: "OpenVision AI", text: "Recognition, context and event intelligence" }, { icon: Layers3, title: "Command layer", text: "Dashboards, alerts and connected workflows" }].map((item, index) => <div key={item.title} className="contents"><div className="ai-architecture-card"><item.icon className="h-7 w-7 text-primary" /><h3 className="mt-5 font-display text-xl font-semibold text-foreground">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p></div>{index < 2 && <div className="mx-auto h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent md:h-12 md:w-px md:bg-gradient-to-b" />}</div>)}
          </motion.div>
        </div>
      </section>

      <section id="use-cases" className="section-padding py-28 sm:py-36">
        <div className="mx-auto max-w-7xl"><motion.div {...fadeUp} className="max-w-3xl"><p className="ai-section-label">Designed for complex environments</p><h2 className="ai-section-title">Where people, places and movement converge.</h2></motion.div><div className="mt-14 grid gap-5 lg:grid-cols-3">{useCases.map((useCase, index) => <motion.article key={useCase.title} {...fadeUp} transition={{ duration: 0.65, delay: index * 0.08 }} className="group rounded-3xl border border-border/60 bg-card/50 p-8 transition-colors hover:border-primary/40 hover:bg-card"><useCase.icon className="h-8 w-8 text-primary" /><h3 className="mt-14 font-display text-2xl font-semibold text-foreground">{useCase.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{useCase.text}</p></motion.article>)}</div></div>
      </section>

      <section id="contact" className="section-padding pb-12 pt-20 sm:pt-28">
        <div className="ai-cta mx-auto max-w-7xl overflow-hidden px-6 py-16 text-center sm:px-12 sm:py-20"><MapPinned className="mx-auto h-9 w-9 text-primary" /><h2 className="mx-auto mt-7 max-w-4xl font-display text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">Bring intelligence to every operational moment.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">See how OpenVisionX can connect attendance, access and mobility across your organization.</p><a href="mailto:contact@openvisionx.com?subject=OpenVisionX%20platform%20demo" className="ai-button-primary mt-9 inline-flex">Start a conversation</a></div>
      </section>
    </main>
  );
}
