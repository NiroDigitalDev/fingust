import { defineField, defineType } from "sanity";

export const award = defineType({
  name: "award",
  title: "Priznanje",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Naslov",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Leto",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "event",
      title: "Dogodek",
      type: "string",
      description: "npr. AGRA, iTQi",
    }),
    defineField({
      name: "description",
      title: "Opis",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "goldMedals",
      title: "Zlate medalje",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "silverMedals",
      title: "Srebrne medalje",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "bronzeMedals",
      title: "Bronaste medalje",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "image",
      title: "Slika",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  orderings: [
    {
      title: "Leto (padajoče)",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "year" },
  },
});
