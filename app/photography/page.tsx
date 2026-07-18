import React from "react";
import type { Metadata } from "next";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Gallery } from "../components/gallery";
import { v2 as cloudinary } from "cloudinary";

export const metadata: Metadata = {
	title: "Photography",
	description:
		"Photography portfolio by Thamaraimanalan M — capturing moments and landscapes.",
};

// Next.js config to revalidate this page every hour (or you can use on-demand revalidation)
export const revalidate = 3600; 

async function getPhotos() {
	cloudinary.config({
		cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
		api_key: process.env.CLOUDINARY_API_KEY,
		api_secret: process.env.CLOUDINARY_API_SECRET,
	});

	try {
		const results = await cloudinary.search
			.expression("folder:portfolio")
			.sort_by("created_at", "desc")
			.max_results(100) // Fetches up to 100 photos. Adjust as needed!
			.execute();

		return results.resources.map((resource: any) => ({
			id: resource.public_id,
			url: resource.secure_url, // We use this for the lightbox full-res
			publicId: resource.public_id, // We use this for CldImage optimization
			width: resource.width,
			height: resource.height,
			alt: resource.public_id.split("/").pop() || "Photography",
		}));
	} catch (error) {
		console.error("Failed to fetch from Cloudinary:", error);
		return [];
	}
}

export default async function PhotographyPage() {
	const photos = await getPhotos();

	return (
		<div className="relative pb-16 min-h-screen bg-black">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<span className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-mono">
						Portfolio
					</span>
					<h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
						Photography
					</h2>
					<p className="mt-4 text-zinc-400 leading-relaxed">
						A collection of moments, landscapes, and details. <br />
						<span className="text-zinc-500 text-sm">Shot on Nothing Phone 3A Pro.</span>
					</p>
				</div>
				<div className="w-full h-px bg-gradient-to-r from-zinc-800/0 via-zinc-800 to-zinc-800/0" />

				{/* Gallery Component handles Masonry and Lightbox */}
				<div className="mx-auto mt-12">
					{photos.length > 0 ? (
						<Gallery photos={photos} />
					) : (
						<p className="text-zinc-500 italic">No photos found in the Cloudinary 'portfolio' folder yet.</p>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
