import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Forgetful Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      host: "https://umami.database.omg.lol/",
      websiteId: "c4c9d019-ee43-433d-842b-4b69e66b653f",
    },
    locale: "en-US",
    baseUrl: "forgetfulnotes.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Bitter",
        body: "Poppins",
        code: "Fira Mono",
      },
      colors: {
        lightMode: {
          light: "#F3F2F2",
          lightgray: "#EAE9E9",
          gray: "#9B9797",
          darkgray: "#605D5D",
          dark: "#201F1D",
          secondary: "#1273B4",
          tertiary: "#AA336A",
          highlight: "#FFF23640",
          textHighlight: "#B6823540",
        },
        darkMode: {
          light: "#1E1E2E",
          lightgray: "#6C7086",
          gray: "#A6ADC8",
          darkgray: "#CDD6F4",
          dark: "#CDD6F4",
          secondary: "#1273B4",
          tertiary: "#AA336A",
          highlight: "#AA336A25",
          textHighlight: "#1273B440",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      // Plugin.CreatedModifiedDate({
      //   priority: ["frontmatter", "git", "filesystem"],
      // }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
      // ...(process.env.NODE_ENV !== 'development' ? [Plugin.CustomOgImages()] : []),
      ...(process.argv.includes('--serve') ? [] : [Plugin.CustomOgImages()]),
    ],
  },
}

export default config
