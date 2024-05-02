import Business from "@/components/pages/Business/Business";

interface BusinessPageProps {
  params: {
    lng: string;
  };
}

const BusinessPage: React.FC<BusinessPageProps> = ({ params }) => {
  return (
    <Business lng={params.lng}/>
    )
}

export default BusinessPage;
