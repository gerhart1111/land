import Career from "@/components/pages/Career/Career";

interface CareerPageProps {
  params: {
    lng: string;
  };
}

const CareerPage: React.FC<CareerPageProps> = ({ params }) => {
  return (
    <Career lng={params.lng}/>
    )
}

export default CareerPage;