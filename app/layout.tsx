import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import localFont from "next/dist/compiled/@next/font/dist/local";
import {Metadata} from "next";

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://jsonrendercn.com"),
    title: {
        default: "json-render | AI-generated UI with guardrails",
        template: "%s | json-render",
    },
    description:
        "Let users generate dashboards, widgets, apps, and data visualizations from prompts — safely constrained to components you define.",
    keywords: [
        "json-render",
        "AI UI generation",
        "React components",
        "guardrails",
        "structured output",
        "dashboard builder",
    ],
    authors: [{ name: "Vercel Labs" }],
    creator: "Vercel Labs",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://jsonrendercn.com",
        siteName: "json-render",
        title: "json-render | AI-generated UI with guardrails",
        description:
            "Let users generate dashboards, widgets, apps, and data visualizations from prompts — safely constrained to components you define.",
        images: [
            {
                url: "/og",
                width: 1200,
                height: 630,
                alt: "json-render - AI-generated UI with guardrails",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "json-render | AI-generated UI with guardrails",
        description:
            "Let users generate dashboards, widgets, apps, and data visualizations from prompts — safely constrained to components you define.",
        images: ["/og"],
        creator: "@verabornnot",
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className='flex flex-col min-h-screen'>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
