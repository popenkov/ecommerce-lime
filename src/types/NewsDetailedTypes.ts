import { ImageType, LinkType, NewsType } from "./commonTypes";

export type NewsDetailedType = {
  image: string;
  title: string;
  text: {
    [key: string]: string;
  };
  slider: ImageType[];
  socialMedia: LinkType[];
  otherNews: NewsType;
};
