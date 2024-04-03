// Define la interfaz para un perfil, por ejemplo, LinkedIn o GitHub
export interface Profile {
  network: string;
  username: string;
  url: string;
}

// Define la interfaz para la ubicación
export interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

// Extiende la interfaz Basics con las nuevas interfaces
export interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  blender:string;
  location: Location; // Aquí Location es un objeto, no un array
  profiles: Profile[]; // Aquí Profiles es un array de objetos Profile
}


export interface Work {
  name: string;
  startDate: string;
  endDate: string;
  position: string;
  summary: string;
  highlights: string[];
  thumb:string;
  logo:string;
}
export interface Volunter{
  altSummary: string;
  educationSummary: string;
}
export interface Education{
  institution:string;
  url:string;
  area:string;
  studyType:string;
  startDate:string;
  endDate:string;
  score:string;
  courses:string[];
}

export interface Skills{
  name:string;
  level:string;
  keyworkds:string[];
}

export interface Languages{
  language:string;
  fluency:string;
}

export interface Projects{
  name:string;
  startDate:string;
  endDate:string;
  description:string;
  highlights:string[];
  url:string;
  src: string;
  thumb:string;
}