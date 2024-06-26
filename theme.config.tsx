import Image from "next/image";
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
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
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
