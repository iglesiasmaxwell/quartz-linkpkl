import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🔍 Link Projek PKL",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "iglesiasmaxwell.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Hanken Grotesk",
        body: "DM Sans",
        code: "DM Mono",
      },
      colors: {
        lightMode: {
          light: "#dce0e8",
          lightgray: "#e6e9ef",
          gray: "#9ca0b0",
          darkgray: "#5c5f77",
          dark: "#4c4f69",
          secondary: "#179299",
          tertiary: "rgb(23, 146, 153, 0.50)",
          highlight: "#ccd0da",
        },
        darkMode: {
          light: "#11111b",
          lightgray: "#1e1e2e",
          gray: "#6c7086",
          darkgray: "#a6adc8",
          dark: "#cdd6f4",
          secondary: "#b4befe",
          tertiary: "rgb(180, 190, 254, 0.50)",
          highlight: "#313244",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
