import React from "react";
import type { Metadata } from "next";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Gallery } from "../components/gallery";
import { v2 as cloudinary } from "cloudinary";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
	title: "Photography",
	description:
		"Photography portfolio by Thamaraimanalan M — capturing moments and landscapes.",
};

// Revalidate every hour
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
			.max_results(100)
			.execute();

		return results.resources.map((resource: any) => ({
			id: resource.public_id,
			url: resource.secure_url,
			publicId: resource.public_id,
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
				{/* Header */}
				<div className="max-w-2xl mx-auto lg:mx-0">
					<span className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-mono">
						Portfolio
					</span>
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
						Photography
					</h1>
					<p className="mt-4 text-zinc-400 leading-relaxed">
						A collection of moments, landscapes, and details.
					</p>

					{/* Camera badge */}
					<div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50">
						<Camera className="w-3.5 h-3.5 text-zinc-500" />
						<span className="text-zinc-500 text-xs">
							Shot on Nothing Phone 3A Pro
						</span>
					</div>

					{/* Photo count */}
					{photos.length > 0 && (
						<p className="mt-4 text-xs text-zinc-600 font-mono">
							{photos.length} {photos.length === 1 ? "photo" : "photos"}
						</p>
					)}
				</div>

				<div className="w-full h-px bg-gradient-to-r from-zinc-800/0 via-zinc-800 to-zinc-800/0" />

				{/* Gallery */}
				<div className="mx-auto">
					{photos.length > 0 ? (
						<Gallery photos={photos} />
					) : (
						<div className="flex flex-col items-center justify-center py-24 gap-4">
							<Camera className="w-12 h-12 text-zinc-700" />
							<p className="text-zinc-500 text-sm">
								No photos yet. Check back soon.
							</p>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
