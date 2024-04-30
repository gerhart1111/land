export enum CareerStatus {
  Unemployed = 'Unemployed',
  Employee = 'Employee',
  SelfEmployed = 'Self employed',
  BusinessOwner = 'Business Owner',
  Student = 'Student',
  Retired = 'Retired',
}

export type CareerStatusType = keyof typeof CareerStatus;

interface LocationInterface {
  address: string;
  placeId: string;
  street: string;
  zip: string;
  city: string;
  state: string;
  country?: string;
  lat: string;
  lng: string;
}

export interface Media {
  id: string;
  urls: string[];
  publicId: string;
  linkToOriginal: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deleted?: boolean;
  albumId: string;
}

interface UserProfileInterface {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  careerStatus: CareerStatusType;
  avatar: Media | null;
  phoneNumber: string;
  location: LocationInterface;
  birthday: Date | string;
  links: Array<LinksArray> | undefined;
}

interface LinksArray {
    linkName: string | null | undefined;
    linkValue: string | null | undefined;
}

interface UserProfileForm {
  firstname: string;
  lastname: string;
  email: string;
  careerStatus: CareerStatusType;
  avatar: Media | null;
  phoneNumber: string;
  streetAddress: string;
  birthday: Date;
  linkedin: string;
  github: string;
  facebook: string;
}

export type { UserProfileInterface, UserProfileForm, LocationInterface, LinksArray };
