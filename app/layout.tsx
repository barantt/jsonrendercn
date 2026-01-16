import {RootProvider} from 'fumadocs-ui/provider/next';
import './global.css';
import {Inter} from 'next/font/google';
import {Metadata} from "next";
import {GoogleAnalytics} from '@next/third-parties/google'


const inter = Inter({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://jsonrendercn.com"),
    title: {
        default: "json-render | 带有防护机制的 AI 生成 UI",
        template: "%s | json-render",
    },
    description:
        "让用户通过提示词生成仪表板、小部件、应用程序和数据可视化 — 安全地限定在您定义的组件范围内。",
    keywords: [
        "json-render",
        "AI UI 生成",
        "React 组件",
        "安全防护",
        "结构化输出",
        "仪表板构建器",
    ],
    authors: [{name: "Vercel Labs"}],
    creator: "Vercel Labs",
    openGraph: {
        type: "website",
        locale: "zh_CN",
        url: "https://jsonrendercn.com",
        siteName: "json-render",
        title: "json-render | 带有防护机制的 AI 生成 UI",
        description:
            "让用户通过提示词生成仪表板、小部件、应用程序和数据可视化 — 安全地限定在您定义的组件范围内。",
        images: [
            {
                url: "/og",
                width: 1200,
                height: 630,
                alt: "json-render - 带有防护机制的 AI 生成 UI",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "json-render | 带有防护机制的 AI 生成 UI",
        description:
            "让用户通过提示词生成仪表板、小部件、应用程序和数据可视化 — 安全地限定在您定义的组件范围内。",
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

export default function Layout({children}: LayoutProps<'/'>) {
    return (
        <html lang="zh" className={inter.className} suppressHydrationWarning>
        <body className='flex flex-col min-h-screen'>
        <RootProvider>{children}</RootProvider>
        <GoogleAnalytics gaId="G-957SHQJH3M"/>
        </body>
        </html>
    );
}
