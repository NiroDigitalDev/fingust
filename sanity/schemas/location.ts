import { defineField, defineType } from "sanity";

export const location = defineType({
  name: "location",
  title: "Poslovalnica",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Ime",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isHeadquarters",
      title: "Sedež podjetja",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "address",
      title: "Naslov",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "city",
      title: "Kraj",
      type: "string",
    }),
    defineField({
      name: "postalCode",
      title: "Poštna številka",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefon",
      type: "string",
    }),
    defineField({
      name: "openingHours",
      title: "Odpiralni čas",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Slika",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Vrstni red",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "city",
      isHQ: "isHeadquarters",
    },
    prepare({ title, subtitle, isHQ }) {
      return {
        title: isHQ ? `${title} ⭐` : title,
        subtitle,
      };
    },
  },
});
