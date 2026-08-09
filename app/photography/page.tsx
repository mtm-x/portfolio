import { v2 as cloudinary } from "cloudinary";
import { Aperture, Camera } from "lucide-react";
import type { Metadata } from "next";
import React from "react";
import { Footer } from "../components/footer";
import { Gallery } from "../components/gallery";
import { Navigation } from "../components/nav";

export const metadata: Metadata = {
	title: "Photography",
	description:
		"Photography portfolio by Thamaraimanalan M — capturing moments and landscapes.",
};

// Revalidate every hour
export const revalidate = 3600;

type CloudinaryPhotoResource = {
	public_id: string;
	secure_url: string;
	width: number;
	height: number;
	tags?: string[];
	created_at?: string;
};

async function getPhotos() {
	const cloudName =
		process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
		process.env.CLOUDINARY_CLOUD_NAME;
	const apiKey = process.env.CLOUDINARY_API_KEY;
	const apiSecret = process.env.CLOUDINARY_API_SECRET;

	if (cloudName && apiKey && apiSecret) {
		cloudinary.config({
			cloud_name: cloudName,
			api_key: apiKey,
			api_secret: apiSecret,
			secure: true,
		});
	}

	const currentConfig = cloudinary.config();
	if (!currentConfig.cloud_name) {
		console.warn(
			"Cloudinary configuration missing (cloud_name is required). Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET environment variables.",
		);
		return [];
	}

	try {
		const photos: CloudinaryPhotoResource[] = [];
		let nextCursor: string | undefined;

		do {
			const results = (await cloudinary.search
				.expression("folder:portfolio")
				.with_field("tags")
				.sort_by("created_at", "desc")
				.max_results(100)
				.next_cursor(nextCursor)
				.execute()) as {
				resources: CloudinaryPhotoResource[];
				next_cursor?: string;
			};

			photos.push(...results.resources);
			nextCursor = results.next_cursor;
		} while (nextCursor);

		const pinned = photos.filter((resource) =>
			resource.tags?.includes("ultimate"),
		);
		const unpinned = photos.filter(
			(resource) => !resource.tags?.includes("ultimate"),
		);
		const orderedPhotos = [...pinned, ...unpinned];

		return orderedPhotos.map((resource) => ({
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
		<div className="relative min-h-screen bg-[#0a0a0a] pb-16 overflow-hidden">
			<Navigation />

			{/* Hero Section */}
			<div className="relative px-6 pt-24 mx-auto max-w-7xl lg:px-8 md:pt-32 lg:pt-40">
				<div className="relative max-w-3xl mx-auto lg:mx-0">
					{/* Eyebrow */}
					<div className="flex items-center gap-4 mb-8">
						<div className="h-px w-10 bg-gradient-to-r from-zinc-500 to-transparent" />
						<span className="text-[11px] tracking-[0.4em] uppercase text-zinc-500 font-mono">
							Gallery
						</span>
					</div>

					{/* Title with subtle gradient text */}
					<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight font-display leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-600">
						Photography
					</h1>

					{/* Description */}
					<p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl">
						A collection of moments, landscapes, and details — framed through
						light and perspective.
					</p>

					{/* Metadata row with glassmorphism pills */}
					<div className="mt-10 flex flex-wrap items-center gap-4">
						<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-2xl">
							<Aperture className="w-4 h-4 text-zinc-400" />
							<span className="text-zinc-300 text-xs font-medium tracking-wide">
								Nothing Phone 3A Pro
							</span>
						</div>

						{photos.length > 0 && (
							<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-2xl">
								<Camera className="w-4 h-4 text-zinc-400" />
								<span className="text-zinc-300 text-xs font-medium tracking-wide">
									{photos.length} {photos.length === 1 ? "photo" : "photos"}
								</span>
							</div>
						)}
					</div>
				</div>

				{/* Animated divider */}
				<div className="mt-16 md:mt-24 w-full h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
			</div>

			{/* Gallery Section */}
			<div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8 mt-12 md:mt-20">
				{photos.length > 0 ? (
					<Gallery photos={photos} />
				) : (
					<div className="flex flex-col items-center justify-center py-40 gap-6">
						<div className="relative">
							<div className="absolute inset-0 bg-zinc-500/10 rounded-full blur-3xl scale-150" />
							<Camera className="relative w-16 h-16 text-zinc-700" />
						</div>
						<p className="text-zinc-500 text-sm font-medium tracking-wide">
							No photos yet — check back soon.
						</p>
					</div>
				)}
			</div>

			<Footer />
		</div>
	);
}
