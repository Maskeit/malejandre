export interface Basics {
  name:string;
  label:string;
  image:string;
  email:string;
  phone:string;
  url:string;
  summary:string;
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
}