import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Domača stran",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero naslov",
      type: "string",
      initialValue: "Čista",
    }),
    defineField({
      name: "heroTitleAccent",
      title: "Hero naslov — poudarjen",
      type: "string",
      initialValue: "tradicija.",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero podnaslov",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "heroImage",
      title: "Hero slika",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featuredProducts",
      title: "Izpostavljeni izdelki",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Naslov", type: "string" }),
            defineField({ name: "description", title: "Opis", type: "text", rows: 3 }),
            defineField({
              name: "image",
              title: "Slika",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: { title: "title", media: "image" },
          },
        },
      ],
    }),
    defineField({
      name: "aboutTitle",
      title: "O nas — naslov",
      type: "string",
    }),
    defineField({
      name: "aboutText",
      title: "O nas — tekst",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "aboutImage",
      title: "O nas — slika",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Domača stran" };
    },
  },
});
