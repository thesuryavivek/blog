// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import CountriesAppImage from "./assets/countries_app.png";
import DevNetworkImage from "./assets/dev_network.png";

export const SITE_TITLE = "Surya Vivek";
export const SITE_DESCRIPTION = "Welcome to my website!";

// Projects
export type ProjectType = {
  name: string;
  desc: string;
  tech: string[];
  deployedUrl: string;
  githubUrl: string;
  image: ImageMetadata;
};

export const DEV_NETWORK: ProjectType = {
  name: "Dev Network",
  desc: "A social media app excusively for developers to post stuff and chat with one another.",
  deployedUrl: "https://social-media-demo-five.vercel.app/",
  githubUrl: "https://github.com/thesuryavivek/Dev-Network",
  image: DevNetworkImage,
  tech: [
    "tRPC",
    "Next.js",
    "Tailwind CSS",
    "Websockets",
    "OAuth",
    "MySQL",
    "Primsa",
    "TypeScript",
  ],
};

export const COUNTRIES_APP: ProjectType = {
  name: "Countries App",
  desc: "A frontend application that consumes a third party REST API to display and filter the data.",
  image: CountriesAppImage,
  deployedUrl: "https://rest-countries-fem-svelte.netlify.app/",
  githubUrl: "https://github.com/thesuryavivek/countries-svelte-FEM",
  tech: ["Svelte", "Tailwind CSS", "TypeScript"],
};
