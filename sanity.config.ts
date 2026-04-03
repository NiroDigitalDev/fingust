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
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
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
