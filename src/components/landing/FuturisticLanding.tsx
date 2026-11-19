import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Activity, BrainCircuit, Building2, Check, Eye, GraduationCap, Layers3, MapPinned, Users } from "lucide-react";

const products = [
  { name: "TapInX", number: "01", eyebrow: "Identity & access", statement: "Every entry becomes a trusted event.", description: "A touchless identity layer that verifies access and brings every entry event into one operational view.", logo: "/tapinx-logo.svg", media: "/security.gif", points: ["Identity verification", "Access event visibility", "Unified entry records"], accent: "#13d9ff" },
  { name: "AttendX", number: "02", eyebrow: "Vision attendance", statement: "Attendance without the attendance line.", description: "Group-based facial attendance for classrooms, institutions and distributed teams—built for real environments.", logo: "/attendX.png", media: "/face1.gif", points: ["Group recognition", "Classroom workflows", "Central attendance view"], accent: "#7c78ff" },
  { name: "RouteX", number: "03", eyebrow: "Mobility intelligence", statement: "Know what is moving. And what is not.", description: "Live operational context for routes, vehicles and the people moving through your network.", logo: "/routex-logo.png", media: "/mobile-tracking.gif", points: ["Fleet monitoring", "Route management", "Operational alerts"], accent: "#c751ff" },
];
const architectureStages = [
  ["People & devices", "Signals enter", "/user.gif"], ["Visual capture", "Events observed", "/face1.gif"], ["AI inference", "Context understood", "/ai_engine.gif"], ["Cloud orchestration", "Data connected", "/cloud2.gif"], ["Command view", "Operations unified", "/dashboard.gif"], ["Mobile operations", "Teams informed", "/mobile.gif"], ["Action & insight", "Decisions activated", "/real_time.gif"],
];
const useCases = [
  { icon: GraduationCap, title: "Education", text: "Connect attendance, campus access and transport into one daily operating picture." },
  { icon: Building2, title: "Enterprise", text: "Coordinate workforce identity, facilities and mobility without fragmented tools." },
  { icon: Users, title: "Institutions", text: "Understand people, movement and critical events while they are happening." },
];
const reveal = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.65 } };

export default function FuturisticLanding() {
  const [activeProduct, setActiveProduct] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const symbolOpacity = useTransform(scrollYProgress, [0, 0.52, 0.88], [1, 0.78, 0]);
  const symbolScale = useTransform(scrollYProgress, [0, 1], [1, 0.72]);
  const symbolY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const product = products[activeProduct];
  return <main>
    <section ref={heroRef} id="platform" className="ovx-hero section-padding"><div className="ovx-noise" /><div className="ovx-grid" />
      <motion.div className="ovx-symbol-stage" style={{ opacity: symbolOpacity, scale: symbolScale, y: symbolY }} aria-hidden="true">
        <img src="/hero-circuit.gif" alt="" className="ovx-symbol-texture" />
        <div className="ovx-symbol-core"><img src="/openVisionXLogo.png" alt="" /></div>
      </motion.div>
      <div className="relative z-10 mx-auto max-w-[1440px] pt-32 sm:pt-40">
        <div className="grid min-h-[calc(100svh-10rem)] items-center gap-12 pb-16 lg:grid-cols-[1.03fr_.97fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <div className="ovx-eyebrow"><span>OpenVision intelligence layer</span><span className="ovx-live">Live</span></div>
            <h1 className="ovx-hero-title">See the world.<br /><span>Run it better.</span></h1>
            <p className="ovx-hero-copy">One AI operations platform for identity, attendance and mobility—turning activity in the physical world into decisions your teams can act on.</p>
            <div className="mt-9 flex"><a href="#products" className="ovx-text-link px-0">Explore the platform</a></div>
            <div className="ovx-capability-row">{["Vision", "Identity", "Mobility"].map((item, i) => <div key={item}><span>0{i + 1}</span>{item}</div>)}</div>
          </motion.div>
          <div className="hidden lg:block" />
        </div>
        <div className="ovx-proof-strip"><span>Physical intelligence, unified</span><div><Eye />Perceive</div><div><BrainCircuit />Understand</div><div><Activity />Act</div></div>
      </div>
    </section>

    <section id="products" className="section-padding ovx-section"><div className="mx-auto max-w-[1440px]">
      <motion.div {...reveal} className="ovx-section-intro"><span className="ovx-index">01 / Products</span><h2>Three products.<br /><em>One operational brain.</em></h2><p>Start with the problem in front of you. Connect the system as your operations grow.</p></motion.div>
      <div className="ovx-product-experience"><div className="ovx-product-tabs" role="tablist" aria-label="OpenVisionX products">{products.map((item, index) => <button key={item.name} role="tab" aria-selected={activeProduct === index} onClick={() => setActiveProduct(index)} className={activeProduct === index ? "active" : ""}><span>{item.number}</span><img src={item.logo} alt="" /><strong>{item.name}</strong><small>{item.eyebrow}</small></button>)}</div>
        <AnimatePresence mode="wait"><motion.article key={product.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .35 }} className="ovx-product-panel" style={{ "--product-accent": product.accent } as React.CSSProperties}><div className="ovx-product-copy"><div className="ovx-product-logo"><img src={product.logo} alt={`${product.name} logo`} /></div><span>{product.eyebrow}</span><h3>{product.statement}</h3><p>{product.description}</p><ul>{product.points.map(point => <li key={point}><Check />{point}</li>)}</ul></div><div className="ovx-product-media"><img src={product.media} alt={`${product.name} product experience`} /><div className="ovx-media-status"><span className="ovx-signal" />Live intelligence</div><div className="ovx-media-caption"><span>{product.number}</span><strong>{product.name}</strong></div></div></motion.article></AnimatePresence>
      </div>
    </div></section>

    <section id="intelligence" className="section-padding ovx-section ovx-command-section"><div className="mx-auto max-w-[1440px]">
      <motion.div {...reveal} className="ovx-section-intro centered"><span className="ovx-index">02 / Command layer</span><h2>From signal to decision<br /><em>in one continuous view.</em></h2></motion.div>
      <motion.div {...reveal} className="ovx-dashboard-story"><div className="ovx-dashboard-copy"><span>Unified operations</span><h3>Stop switching between systems.</h3><p>Bring attendance events, identity workflows and movement signals together so teams can understand what is happening at a glance.</p><div>{["One operational view", "Live event context", "Connected workflows", "Available on the move"].map(item => <span key={item}><Check />{item}</span>)}</div></div><div className="ovx-dashboard-stage"><div className="ovx-browser"><div><i /><i /><i /><span>command.openvisionx.in</span></div><img src="/dashboard.gif" alt="OpenVisionX operational command dashboard" /></div><div className="ovx-phone"><img src="/mobile-tracking.gif" alt="Mobile operational tracking" /></div></div></motion.div>
    </div></section>

    <section id="architecture" className="section-padding ovx-section"><div className="mx-auto max-w-[1440px]">
      <motion.div {...reveal} className="ovx-section-intro"><span className="ovx-index">03 / Architecture</span><h2>A living system,<br /><em>not another dashboard.</em></h2><p>Seven connected stages translate activity in the physical world into coordinated action.</p></motion.div>
      <motion.div {...reveal} className="ovx-architecture"><div className="ovx-flow-line"><motion.span animate={{ left: ["0%", "100%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} /></div>{architectureStages.map((stage, index) => <motion.article key={stage[0]} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .09 }}><div className="ovx-stage-visual"><img src={stage[2]} alt="" /><span>{String(index + 1).padStart(2, "0")}</span></div><h3>{stage[0]}</h3><p>{stage[1]}</p></motion.article>)}</motion.div>
    </div></section>

    <section id="use-cases" className="section-padding ovx-section"><div className="mx-auto max-w-[1440px]"><motion.div {...reveal} className="ovx-section-intro"><span className="ovx-index">04 / Environments</span><h2>Built for places<br /><em>that cannot stand still.</em></h2></motion.div><div className="ovx-use-grid">{useCases.map((item, index) => <motion.article {...reveal} transition={{ delay: index * .08 }} key={item.title}><span>0{index + 1}</span><item.icon /><h3>{item.title}</h3><p>{item.text}</p></motion.article>)}</div></div></section>

    <section id="contact" className="section-padding pb-10 pt-12 sm:pb-16"><motion.div {...reveal} className="ovx-cta mx-auto max-w-[1440px]"><div><span className="ovx-index">05 / Start a conversation</span><h2>See what your operations<br />have been missing.</h2></div><div><p>Explore how OpenVisionX can connect identity, attendance and mobility across your organization.</p><a href="mailto:contact@openvisionx.com?subject=OpenVisionX%20platform%20demo" className="ovx-primary-button"><MapPinned className="h-4 w-4" />Request a private demo</a></div><Layers3 className="ovx-cta-mark" /></motion.div></section>
  </main>;
}
