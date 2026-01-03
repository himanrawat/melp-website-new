import { motion } from "framer-motion";

export const Marquee = () => {
	return (
		<div className="relative flex overflow-x-hidden text-white/80 py-4 md:py-6">
			{/* Left fade gradient */}
			<div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-r from-[#F14C2F] to-transparent z-10 pointer-events-none" />

			{/* Right fade gradient */}
			<div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-l from-[#FF0059] to-transparent z-10 pointer-events-none" />

			<motion.div
				className="flex whitespace-nowrap text-4xl md:text-8xl font-extrabold tracking-wider uppercase"
				animate={{ x: ["0%", "-50%"] }}
				transition={{
					duration: 60,
					ease: "linear",
					repeat: Infinity,
				}}
			>
				<span className="mx-8">Unified Workspace</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
				<span className="mx-8">Intelligent Collaboration</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
				<span className="mx-8">AI Summaries</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
				<span className="mx-8">Smart Search</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
				<span className="mx-8">Real-Time Translation</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
				<span className="mx-8">Secure by Design</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
				<span className="mx-8">Enterprise Ready</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
				<span className="mx-8">Scales with Teams</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
			</motion.div>
		</div>
	);
};
