"use client";

import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { CldImage } from "next-cloudinary";

export interface Photo {
	id: string;
	url: string;
	publicId?: string;
	width: number;
	height: number;
	alt: string;
}

interface GalleryProps {
	photos: Photo[];
}

const cardVariants = {
	hidden: { opacity: 0.01, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

export const Gallery: React.FC<GalleryProps> = ({ photos }) => {
	const [index, setIndex] = useState(-1);

	return (
		<>
			{/* Masonry "Wall" Grid */}
			<div className="group/list columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
				{photos.map((photo, i) => (
					<motion.div
						key={photo.id}
						variants={cardVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "50px 0px -50px 0px" }}
						className="group/card relative break-inside-avoid cursor-pointer overflow-hidden rounded-[20px] border border-white/[0.05] bg-white/[0.02] mb-6 transition-opacity md:duration-500 md:hover:!opacity-100 md:group-hover/list:opacity-30"
						onClick={() => setIndex(i)}
					>
						{/* Soft inner highlight for premium physical feel */}
						<div className="absolute inset-0 rounded-[20px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] z-20 pointer-events-none" />

						{photo.publicId ? (
							<CldImage
								src={photo.publicId}
								alt={photo.alt}
								width={photo.width}
								height={photo.height}
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
								loading={i < 4 ? "eager" : "lazy"}
								priority={i < 4}
								className="w-full h-auto object-cover md:transition-transform md:duration-700 ease-out md:group-hover/card:scale-[1.02]"
							/>
						) : (
							<img
								src={photo.url}
								alt={photo.alt}
								width={photo.width}
								height={photo.height}
								loading={i < 4 ? "eager" : "lazy"}
								decoding="async"
								className="w-full h-auto object-cover md:transition-transform md:duration-700 ease-out md:group-hover/card:scale-[1.02]"
							/>
						)}

						{/* Dark gradient for text contrast - Desktop only */}
						<div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 md:group-hover/card:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

						{/* Floating View Pill - Desktop only */}
						<div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-20 opacity-0 md:group-hover/card:opacity-100 translate-y-4 md:group-hover/card:translate-y-0 transition-all duration-500 ease-out pointer-events-none">
							<div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
								<span className="text-[10px] text-white tracking-[0.2em] uppercase font-semibold">
									View Photo
								</span>
							</div>
						</div>
					</motion.div>
				))}
			</div>

			{/* Cinematic Lightbox */}
			<Lightbox
				open={index >= 0}
				close={() => setIndex(-1)}
				index={index}
				slides={photos.map((p) => ({
					src: p.url,
					alt: p.alt,
					width: p.width,
					height: p.height,
				}))}
				plugins={[Zoom, Counter]}
				counter={{ container: { style: { top: "unset", bottom: 0 } } }}
				zoom={{
					maxZoomPixelRatio: 3,
					scrollToZoom: true,
				}}
				animation={{ fade: 250, swipe: 250 }}
			/>
		</>
	);
};
