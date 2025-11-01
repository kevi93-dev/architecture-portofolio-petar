//Data and Types

export type Category =
  | "housing"
  | "houses"
  | "public buildings"
  | "competitions"
  | "urban planning"; 

export const ALL_CATEGORIES: Category[] = [
  "housing",
  "houses",
  "public buildings",
  "competitions",
  "urban planning",
];

export type Project = {
  title: string;
  location: string;
  year: number;
  slug: string;
  image?: string;            // optional for now—only mountain-house has a file
  categories?: Category[];   // optional on detail/home; required in filter page
};

export const PROJECTS: Project[] = [
  {
    title: "round house",
    location: "linz",
    year: 2022,
    slug: "round-house",
    image: "/projects/round-house/RH_Main.png",
    categories: ["housing"],
  },
  {
    title: "urban planning w",
    location: "vienna",
    year: 2023,
    slug: "urbanplanning-w",
    image: "/projects/urbanplanning-w/UP_Main.png",
    categories: ["urban planning"],
  },
  {
    title: "timber sentinel",
    location: "tirana",
    year: 2023,
    slug: "timber-sentinel",
    image: "/projects/timber-sentinel/TS_Main.jpg",
    categories: ["competitions"],
  },
  {
    title: "villa h",
    location: "sankt pölten",
    year: 2024,
    slug: "villa-h",
    image: "/projects/villa-h/VH_Main.png",
    categories: ["houses"],
  },
  {
    title: "cross tower",
    location: "vienna",
    year: 2020,
    slug: "cross-tower",
    image: "/projects/cross-tower/CT_Main.png",
    categories: ["competitions"],
  },
  {
    title: "social housing b",
    location: "barcelona",
    year: 2025,
    slug: "socialhousing-b",
    image: "/projects/socialhousing-b/SH_Main.jpg",
    categories: ["competitions"],
  },
  {
    title: "residential building p",
    location: "petrovac",
    year: 2018,
    slug: "residential-building-p",
    image: "/projects/residential-building-p/RBP_Main.png",
    categories: ["housing"],
  },
  {
    title: "fish market",
    location: "split",
    year: 2019,
    slug: "fish-market",
    image: "/projects/fish-market/FM_Main.jpg",
    categories: ["competitions"],
  },
  {
    title: "container villa",
    location: "graz",
    year: 2021,
    slug: "container-villa",
    image: "/projects/container-villa/CV_Main.png",
    categories: ["houses"],
  },
  {
    title: "green spiral",
    location: "wien",
    year: 2020,
    slug: "green-spiral",
    image: "/projects/green-spiral/GS_Main.png",
    categories: ["housing"],
  },
  {
    title: "house a",
    location: "paracin",
    year: 2020,
    slug: "house-a",
    image: "/projects/house-a/HA_Main.png",
    categories: ["houses"],
  },
  {
    title: "residential building d",
    location: "stuttgart",
    year: 2020,
    slug: "residential-building-d",
    image: "/projects/residential-building-d/RBD_Main.png",
    categories: ["housing"],
  },
  {
    title: "school l",
    location: "leonding",
    year: 2024,
    slug: "school-l",
    image: "/projects/school-l/SL_Main.png",
    categories: ["public buildings"],
  },
  {
    title: "vineyard hotel",
    location: "alenquer",
    year: 2024,
    slug: "vineyard-hotel",
    image: "/projects/vineyard-hotel/VY_Main.png",
    categories: ["competitions"],
  },
  {
    title: "senior residence r",
    location: "radosina",
    year: 2024,
    slug: "senior-residence-r",
    image: "/projects/senior-residence-r/SR_Main.png",
    categories: ["housing"],
  },
    {
    title: "casa f",
    location: "durres",
    year: 2025,
    slug: "casa-f",
    image: "/projects/casa-f/CF_Main.png",
    categories: ["houses"],
  },
];

// helper
export function getProject(slug: string) {
  return PROJECTS.find(p => p.slug === slug);
}
