import { FileCode, LibraryBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image
        src={"/TightknitNameLogo.png"}
        alt="Tightknit Logo"
        width={145}
        height={40}
      />
      <span style={{ marginLeft: ".1em", fontWeight: 600 }}>Docs</span>
    </>
  ),
  chat: {
    link: "https://community.tightknit.ai/join",
    icon: (
      <Image src="/slack-logo.svg" width={30} height={30} alt="Slack logo" />
    ),
  },

  head: (
    <>
      <title>Tightknit Docs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Tightknit Docs" />
      <meta property="og:description" content="Tightknit documentation" />
      <link rel="icon" href="https://i.imgur.com/tJIWbqD.png"></link>
    </>
  ),
  footer: {
    // component: (
    //   <Image
    //     src={"/TightknitNameLogo.webp"}
    //     alt="Tightknit Logo"
    //     width={145}
    //     height={40}
    //   />
    // ),
    text: "Copyright © 2024 Tightknit, Inc.",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    titleComponent: ({ type, title, route }) => {
      const { asPath } = useRouter();
      if (type === "separator" && title === "Switcher") {
        return (
          <div className="-mx-2 hidden md:block">
            {[
              { title: "Docs", path: "/basics", Icon: LibraryBig },
              { title: "Guides", path: "/events", Icon: FileCode },
            ].map((item) => {
              // console.log(item);
              return asPath.startsWith(item.path) ? (
                <div
                  key={item.path}
                  className="group mb-3 flex flex-row items-center gap-3 nx-text-primary-800 dark:nx-text-primary-600"
                >
                  <item.Icon className="w-7 h-7 p-1 border rounded nx-bg-primary-100 dark:nx-bg-primary-400/10" />
                  {item.title}
                </div>
              ) : (
                <Link
                  href={item.path}
                  key={item.path}
                  className="group mb-3 flex flex-row items-center gap-3 text-gray-500 hover:text-primary/100"
                >
                  <item.Icon className="w-7 h-7 p-1 border rounded group-hover:bg-border/30" />
                  {item.title}
                </Link>
              );
            })}
          </div>
        );
      }
      return title;
    },
  },
  docsRepositoryBase:
    "https://github.com/TightknitAI/tightknit-documentation/tree/main/",
  editLink: { text: "Edit this page on Github" },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - Tightknit",
      };
    }
  },
  primarySaturation: 50,
};

export default config;
