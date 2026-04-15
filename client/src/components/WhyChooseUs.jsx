import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  BadgeDollarSign,
  Rocket,
  Settings,
  Lock,
} from "lucide-react";

const features = [
  {
    title: "EXPERT TEAM",
    desc: "Skilled experts in web, software, and branding.",
    icon: Users,
  },
  {
    title: "AFFORDABLE PLANS",
    desc: "High-quality services tailored to fit every budget.",
    icon: BadgeDollarSign,
  },
  {
    title: "FAST & RELIABLE DELIVERY",
    desc: "We deliver projects on time with speed and precision.",
    icon: Rocket,
  },
  {
    title: "CUSTOMIZED SOLUTIONS",
    desc: "Tailor-made services to meet your business needs.",
    icon: Settings,
  },
  {
    title: "SMART DIGITAL SERVICES",
    desc: "Everything you need under one powerful ecosystem.",
    icon: ShieldCheck,
  },
  {
    title: "SECURE & RELIABLE",
    desc: "We prioritize data security and system reliability.",
    icon: Lock,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#070707] via-[#0b0b0b] to-[#070707] text-white py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 relative z-10"
      >
         <div className=' mb-24 text-center'>
                <span className="text-[#ff8e7d] font-family-headline font-bold tracking-[0.2em] uppercase text-sm mb-4 block">05 / WHY CHOOSE US</span>
                <h1 className="font-family-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-24 text-white" >THE INFIONEX ADVANATGE</h1>
            </div>
        <div className="w-24 h-[2px] bg-red-500 mx-auto mt-6" />
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
      >
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.07, rotateX: 5, rotateY: -5 }}
              className="group relative p-px rounded-2xl bg-gradient-to-br from-white/10 to-white/5"
            >
              <div className="h-full  bg-[#111] p-7 border border-white/10 group-hover:border-red-500/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-500/10 mb-5 group-hover:bg-red-500/20 transition">
                  <Icon className="text-red-400" size={26} />
                </div>

                <h3 className="font-family-headline text-xl font-semibold mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="font-family-body text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div className="w-0 group-hover:w-full h-[2px] bg-red-500 transition-all duration-500 mt-5" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
