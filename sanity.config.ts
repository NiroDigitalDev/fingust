import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "fingust",
  title: "Mesnice Fingušt",
  basePath: "/studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Vsebina")
          .items([
            S.listItem()
              .title("Nastavitve")
              .icon(() => "⚙️")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.listItem()
              .title("Strani")
              .icon(() => "📄")
              .child(
                S.list()
                  .title("Strani")
                  .items([
                    S.listItem()
                      .title("Domača stran")
                      .child(
                        S.document()
                          .schemaType("homePage")
                          .documentId("homePage")
                      ),
                    S.listItem()
                      .title("O podjetju")
                      .child(
                        S.document()
                          .schemaType("aboutPage")
                          .documentId("aboutPage")
                      ),
                    S.listItem()
                      .title("Kakovost")
                      .child(
                        S.document()
                          .schemaType("qualityPage")
                          .documentId("qualityPage")
                      ),
                  ])
              ),
            S.divider(),
            S.documentTypeListItem("productCategory").title(
              "Kategorije izdelkov"
            ),
            S.documentTypeListItem("award").title("Priznanja in nagrade"),
            S.documentTypeListItem("location").title("Poslovalnice"),
            S.documentTypeListItem("contactDepartment").title(
              "Kontaktni oddelki"
            ),
          ]),
    }),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin:
          typeof window !== "undefined" ? window.location.origin : "http://localhost:3100",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
