import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "O podjetju — stran",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Naslov",
      type: "string",
      initialValue: "Naša zgodba.",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Podnaslov",
      type: "string",
      initialValue: "Od leta 1988",
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
      name: "milestones",
      title: "Mejniki",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "year", title: "Leto", type: "string" }),
            defineField({ name: "title", title: "Naslov", type: "string" }),
            defineField({ name: "description", title: "Opis", type: "text", rows: 2 }),
          ],
          preview: {
            select: { title: "title", subtitle: "year" },
          },
        },
      ],
    }),
    defineField({
      name: "teamImage",
      title: "Slika ekipe",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "deliveryImage",
      title: "Slika dostave",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "stats",
      title: "Statistike",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Vrednost", type: "string" }),
            defineField({ name: "label", title: "Oznaka", type: "string" }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "O podjetju — stran" };
    },
  },
});
