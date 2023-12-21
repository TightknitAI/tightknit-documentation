import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Tightknit Docs</span>,
  docsRepositoryBase: "https://github.com/TightknitAI/tightknit-documentation",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Tightknit",
      };
    }
  },

  footer: {
    text: "Tightknit",
  },
  primarySaturation: 50,
};

export default config;
