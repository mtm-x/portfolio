"use client";

import { motion } from "framer-motion";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
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

// Staggered fade-in for each photo card
const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.06,
			duration: 0.5,
			ease: [0.25, 0.46, 0.45, 0.94],
		},
	}),
};

export const Gallery: React.FC<GalleryProps> = ({ photos }) => {
	const [index, setIndex] = useState(-1);

	return (
		<>
			{/* Masonry Grid */}
			<div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
				{photos.map((photo, i) => (
					<motion.div
						key={photo.id}
						custom={i}
						variants={cardVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-40px" }}
						className="group relative mb-4 break-inside-avoid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] cursor-pointer"
						onClick={() => setIndex(i)}
					>
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
						<div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/5" />
						{photo.publicId ? (
							<CldImage
								src={photo.publicId}
								alt={photo.alt}
								width={photo.width}
								height={photo.height}
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
								className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
							/>
						) : (
							<img
								src={photo.url}
								alt={photo.alt}
								width={photo.width}
								height={photo.height}
								className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
							/>
						)}
					</motion.div>
				))}
			</div>

			{/* Lightbox with zoom + counter plugins */}
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
				animation={{ fade: 300, swipe: 250 }}
				styles={{
					container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
				}}
			/>
		</>
	);
};
