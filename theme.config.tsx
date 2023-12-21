import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  chat: {
    link: "https://join.slack.com/t/tightknit-community/shared_invite/zt-26k3pxe3p-n~daN~zi2dMN2NmXvdMArw",
    icon: (
      <Image src="/slack-logo.svg" width={30} height={30} alt="Slack logo" />
    ),
  },
  docsRepositoryBase: "https://github.com/TightknitAI/tightknit-documentation",
  editLink: { text: null },
  footer: {
    text: "Tightknit",
  },
  logo: (
    <>
      <Image
        src={"/TightknitNameLogo.webp"}
        alt="Tighknit Logo"
        width={145}
        height={40}
      />
      <span style={{ marginLeft: ".1em", fontWeight: 600 }}>Docs</span>
    </>
  ),
  head: (
    <>
      <title>Tightknit Docs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Tightknit Docs" />
      <meta property="og:description" content="Tighknit documentation" />
      <link rel="icon" href="https://i.imgur.com/tJIWbqD.png"></link>
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
};

export default config;
