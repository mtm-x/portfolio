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
		"ECE student interested in embedded systems, the Linux kernel, and systems programming.",
	openGraph: {
		title: "Thamaraimanalan M",
		description:
			"ECE student interested in embedded systems, the Linux kernel, and systems programming.",
		url: "https://mtm-x.com",
		siteName: "Thamaraimanalan M",
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
		shortcut: "/favicon.ico",
		icon: "/favicon.ico",
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
