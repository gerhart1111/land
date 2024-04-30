import HomePage from "@/components/pages/Home";

export default function Home({ params: { lng } }: any) {
  return <HomePage lng={lng} />;
}
