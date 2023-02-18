interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  email: string;
  backgroundInformation: string;
  role: string;
  heroImage: Image;
  name: string;
  profilePic: Image;
  //   address: string;
}

export interface Social extends SanityBody {
  _type: "social";
  linkToProfile: string;
  title: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Project extends SanityBody {
  _type: "project";
  linkToProfile: string;
  title: string;
  linkToRepo: string;
  summary: string;
  technologies: Technology[];
  //   image:Image;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  dateEnded: date;
  dateStarted: date;
  companyImage: Image;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}
