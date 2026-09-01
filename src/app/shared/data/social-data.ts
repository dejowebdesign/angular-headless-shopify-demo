export type ISocial =  {
  link: string;
  icon: string;
  name: string;
}

const social_links:ISocial[] = [
  {
    link: "http://facebook.com",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "http://twitter.com",
    icon: "fab fa-twitter",
    name: "Twitter",
  },
  {
    link: "https://www.behance.net/",
    icon: "fab fa-behance",
    name: "Behance",
  },
  {
    link: "https://dribbble.com/",
    icon: "fab fa-dribbble",
    name: "Dribbble",
  },
]

export default social_links;
