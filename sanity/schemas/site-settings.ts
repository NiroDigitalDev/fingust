import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Nastavitve spletne strani",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Ime podjetja",
      type: "string",
    }),
    defineField({
      name: "slogan",
      title: "Slogan",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "E-pošta",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Naslov",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "tiktokUrl",
      title: "TikTok URL",
      type: "url",
    }),
    defineField({
      name: "heroImage",
      title: "Hero slika",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "aboutText",
      title: "O podjetju (kratko)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "aboutHistory",
      title: "Zgodovina podjetja",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Nastavitve spletne strani" };
    },
  },
});
