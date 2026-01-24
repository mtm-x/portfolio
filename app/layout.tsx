import "../global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "Thamaraimanalan M",
		template: "%s | Thamaraimanalan M",
	},
	description:
		"Embedded Systems Engineer working with Linux Kernel, Open Source, and Systems programming",
	openGraph: {
		title: "Thamaraimanalan M",
		description:
			"Embedded Systems Engineer working with Linux Kernel, Open Source, and Systems programming",
		url: "https://mtm-x.com",
		siteName: "Thamaraimanalan M",
		images: [
			{
				url: "https://mtm-x.com/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		shortcut: "/favicon.png",
	},
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : ""
				}`}
			>
				{children}
			</body>
		</html>
	);
}
