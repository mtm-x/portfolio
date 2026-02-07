import Link from "next/link";

export const Footer: React.FC = () => {
	return (
		<footer className="border-t border-zinc-800/50 mt-20">
			<div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
				<div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
					<p className="text-xs text-zinc-600">
						© {new Date().getFullYear()} Thamaraimanalan M
					</p>
					<span className="hidden sm:inline text-zinc-800">·</span>
					<p className="text-xs text-zinc-700">
						Template by{" "}
						<Link
							href="https://github.com/chronark/chronark.com"
							target="_blank"
							className="text-zinc-600 hover:text-zinc-400 transition-colors"
						>
							chronark
						</Link>
					</p>
				</div>
				<div className="flex items-center gap-6">
					<Link
						href="https://github.com/mtm-x"
						target="_blank"
						className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
					>
						GitHub
					</Link>
					<Link
						href="https://www.linkedin.com/in/mtm-x"
						target="_blank"
						className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
					>
						LinkedIn
					</Link>
					<Link
						href="mailto:devthamaraimanalan.m@gmail.com"
						className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
					>
						Email
					</Link>
				</div>
			</div>
		</footer>
	);
};
