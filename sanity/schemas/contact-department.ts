import { defineField, defineType } from "sanity";

export const contactDepartment = defineType({
  name: "contactDepartment",
  title: "Kontaktni oddelek",
  type: "document",
  fields: [
    defineField({
      name: "department",
      title: "Oddelek",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "personName",
      title: "Ime osebe",
      type: "string",
    }),
    defineField({
      name: "personTitle",
      title: "Naziv",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefon",
      type: "string",
    }),
    defineField({
      name: "additionalPhones",
      title: "Dodatne telefonske številke",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "email",
      title: "E-pošta",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Vrstni red",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Vrstni red",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "department", subtitle: "personName" },
  },
});
