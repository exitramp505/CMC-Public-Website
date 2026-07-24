import type { Metadata } from "next";
import Script from "next/script";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cmcopenbible.netlify.app"),
  title: {
    default: "Church Multiplication Collective",
    template: "%s | Church Multiplication Collective",
  },
  description:
    "A ministry pathway helping pastors, pioneers, and sending churches make disciples, develop leaders, and multiply churches.",
  icons: {
    icon: "/cmc-logo-mark.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Church Multiplication Collective",
    title: "Church Multiplication Collective",
    description:
      "A ministry pathway helping pastors, pioneers, and sending churches make disciples, develop leaders, and multiply churches.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Multiplication Collective",
    description:
      "A ministry pathway helping pastors, pioneers, and sending churches make disciples, develop leaders, and multiply churches.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Church Multiplication Collective",
  alternateName: "CMC",
  url: "https://cmcopenbible.netlify.app",
  logo: "https://cmcopenbible.netlify.app/cmc-logo-mark.svg",
  description:
    "A ministry pathway helping pastors, pioneers, and sending churches make disciples, develop leaders, and multiply churches.",
  email: "george@openbibleeast.org",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <Header />

        {children}

        <Footer />

        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="afterInteractive"
        />

        <Script id="netlify-identity-redirect" strategy="afterInteractive">
          {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", function(user) {
                if (!user) {
                  window.netlifyIdentity.on("login", function() {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
