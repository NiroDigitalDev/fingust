import { defineField, defineType } from "sanity";

export const qualityPage = defineType({
  name: "qualityPage",
  title: "Kakovost — stran",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Naslov",
      type: "string",
      initialValue: "Kakovost brez kompromisov.",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Podnaslov",
      type: "string",
      initialValue: "Standardi odličnosti",
    }),
    defineField({
      name: "heroImage",
      title: "Hero slika",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "introText",
      title: "Uvodni tekst",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "haccpTitle",
      title: "HACCP naslov",
      type: "string",
      initialValue: "HACCP sistem",
    }),
    defineField({
      name: "haccpDescription",
      title: "HACCP opis",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "ifsTitle",
      title: "IFS naslov",
      type: "string",
      initialValue: "IFS standard",
    }),
    defineField({
      name: "ifsDescription",
      title: "IFS opis",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "certificates",
      title: "Certifikati",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "period", title: "Obdobje", type: "string" }),
            defineField({ name: "name", title: "Ime certifikata", type: "string" }),
          ],
          preview: {
            select: { title: "name", subtitle: "period" },
          },
        },
      ],
    }),
    defineField({
      name: "traceabilityText",
      title: "Sledljivost — tekst",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "inspectionImage",
      title: "Slika kontrole kakovosti",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Kakovost — stran" };
    },
  },
});
