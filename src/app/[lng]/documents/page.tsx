
interface BusinessPageProps {
  params: {
    lng: string;
  };
}

const BusinessPage: React.FC<BusinessPageProps> = ({ params }) => {
  return <h1>Documents</h1>
}

export default BusinessPage;
