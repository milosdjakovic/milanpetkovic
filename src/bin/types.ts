export type Language = "en" | "rs";

export type Locale = "en" | "sr-Latn";

export interface EventData {
  date: string;
  time: string;
  place: string;
  town: string;
  link: string;
}

export interface AlbumData {
  cover: string;
  latest?: boolean;
  year: string;
  rs: {
    title: string;
    songs: string[];
  };
  en: {
    title: string;
    songs: string[];
  };
}

export interface VideoData {
  id: string;
  title: {
    rs: string;
    en: string;
  };
  url: string;
}

export interface PublicationData {
  title: string;
  url: string;
  source: string;
}