import { defineQuery } from "next-sanity";

export const productCategoriesQuery = defineQuery(`
  *[_type == "productCategory"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url,
    order
  }
`);

export const awardsQuery = defineQuery(`
  *[_type == "award"] | order(year desc) {
    _id,
    title,
    year,
    event,
    description,
    goldMedals,
    silverMedals,
    bronzeMedals,
    "imageUrl": image.asset->url
  }
`);

export const locationsQuery = defineQuery(`
  *[_type == "location"] | order(order asc) {
    _id,
    name,
    isHeadquarters,
    address,
    city,
    postalCode,
    phone,
    openingHours,
    "imageUrl": image.asset->url,
    order
  }
`);

export const contactDepartmentsQuery = defineQuery(`
  *[_type == "contactDepartment"] | order(order asc) {
    _id,
    department,
    personName,
    personTitle,
    phone,
    additionalPhones,
    email,
    order
  }
`);

export const siteSettingsQuery = defineQuery(`
  *[_id == "siteSettings"][0] {
    companyName,
    slogan,
    email,
    address,
    facebookUrl,
    instagramUrl,
    tiktokUrl,
    "heroImageUrl": heroImage.asset->url,
    aboutText
  }
`);

export const homePageQuery = defineQuery(`
  *[_id == "homePage"][0] {
    heroTitle,
    heroTitleAccent,
    heroSubtitle,
    "heroImageUrl": heroImage.asset->url,
    featuredProducts[] {
      title,
      description,
      "imageUrl": image.asset->url
    },
    aboutTitle,
    aboutText,
    "aboutImageUrl": aboutImage.asset->url
  }
`);

export const aboutPageQuery = defineQuery(`
  *[_id == "aboutPage"][0] {
    heroTitle,
    heroSubtitle,
    "heroImageUrl": heroImage.asset->url,
    introText,
    milestones[] {
      year,
      title,
      description
    },
    "teamImageUrl": teamImage.asset->url,
    "deliveryImageUrl": deliveryImage.asset->url,
    stats[] {
      value,
      label
    }
  }
`);

export const qualityPageQuery = defineQuery(`
  *[_id == "qualityPage"][0] {
    heroTitle,
    heroSubtitle,
    "heroImageUrl": heroImage.asset->url,
    introText,
    haccpTitle,
    haccpDescription,
    ifsTitle,
    ifsDescription,
    certificates[] {
      period,
      name
    },
    traceabilityText,
    "inspectionImageUrl": inspectionImage.asset->url
  }
`);
