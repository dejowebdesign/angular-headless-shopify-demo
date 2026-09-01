export interface IMenuType {
  link:string,
  title:string,
  hasDropdown?:boolean,
  megamenu?:boolean,
  dropdownItems?:{
    link: string
    title: string,
    dropdownMenu?:{
      link: string
      title: string,
    }[]
  }[],
}


// Define the menu data type
export interface IMobileMenu{
  title: string;
  link?: string;
  dropdownMenu?: {
    link: string;
    title: string;
  }[];
}
