import { motion } from "framer-motion";

export const Marquee = () => {
	return (
		<div
			className="relative flex overflow-x-hidden text-white/80 py-4 md:py-6"
			style={{
				WebkitMaskImage:
					"linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
				maskImage:
					"linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
			}}
		>
			<motion.div
				className="flex whitespace-nowrap text-4xl md:text-8xl font-extrabold tracking-wider uppercase"
				animate={{ x: ["0%", "-50%"] }}
				transition={{
					duration: 150,
					ease: "linear",
					repeat: Infinity,
				}}
			>
				<span className="mx-8">One Workspace</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
				<span className="mx-8">AI-Native</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
				<span className="mx-8">Instant Clarity</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
				<span className="mx-8">Context Everywhere</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
				<span className="mx-8">No Language Barriers</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
				<span className="mx-8">Enterprise Security</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
				<span className="mx-8">Built for Scale</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
				<span className="mx-8">Global Teams</span>
				<span className="mx-8 w-5 h-5 bg-white rounded-full my-auto"></span>
			</motion.div>
		</div>
	);
};
