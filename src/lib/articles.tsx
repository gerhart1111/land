import probivImg from "@/assets/images/probiv.jpg";
import postImg from "@/assets/images/postImg.jpg";
import passEu from "@/assets/images/passEu.jpg";
import solving from "@/assets/images/solving.jpg";
import { StaticImageData } from "next/image";

interface ArticlesProps {
  id: string;
  title: string;
  image: StaticImageData;
  images: string[];
  categories: string[];
  feed: string[];
  description: string[];
  subtitle: string;
  slug: string;
  translateNS: string;
  likes: number;
}

export const articles: ArticlesProps[] = [
  {
    id: "1",
    translateNS: "postSec",
    slug: "post.slug",
    title: "postSec_title",
    subtitle: "postSec_title1",
    description: ["postSec_intro"],
    image: passEu,
    images: [""],
    categories: [
      "postSec_details",
      "postSec_subtitle1",
      "postSec_details1",
      "postSec_details2",
      "postSec_details3",
      "postSec_details4",
    ],
    feed: [
      "postSec_subtitle_feed",
      "postSec_details",
      "postSec_details1",
      "postSec_details2",
    ],
    likes: 189,
  },
  {
    id: "2",
    translateNS: "post",
    slug: "post.slug",
    title: "post_title",
    subtitle: "post_title1",
    description: ["post_intro"],
    image: postImg,
    images: [""],
    categories: [
      "post_subtitle",
      "post_details",
      "post_subtitle1",
      "post_details1",
      "post_subtitle2",
      "post_details2",
      "post_subtitle3",
      "post_details3",
      "post_subtitle4",
      "post_details4",
      "post_subtitle5",
      "post_details5",
    ],
    feed: [
      "post_subtitle_feed",
      "post_details",
      "post_details1",
      "post_details2",
    ],
    likes: 117,
  },

  {
    id: "3",
    translateNS: "postThird",
    slug: "post.slug",
    title: "postThird.title",
    subtitle: "postThird.title1",
    description: ["postThird.intro"],
    image: solving,
    images: [""],
    categories: [
      "postThird.title2",
      "postThird.details1",
      "postThird.details2",
      "postThird.details3",
      "postThird.details4",
      "postThird.details5",
      "postThird.details6",
      "postThird.details7",
    ],
    feed: [
      "postThird.subtitle.feed",
      "postThird.details",
      "postThird.details1",
      "postThird.details2",
    ],
    likes: 87,
  },
  {
    id: "4",
    translateNS: "postFourth",
    slug: "post.slug",
    title: "postFourth_title",
    subtitle: "postFourth_title1",
    description: ["postFourth_intro"],
    image: probivImg,
    images: [""],
    categories: [
      "postFourth_title2",
      "postFourth_details1",
      "postFourth_details2",
      "postFourth_details3",
      "postFourth_details4",
      "postFourth_details5",
      "postFourth_details6",
      "postFourth_details7",
    ],
    feed: [
      "postFourth_subtitle_feed",
      "postFourth_details",
      "postFourth_details1",
      "postFourth_details2",
    ],
    likes: 257,
  },
];
