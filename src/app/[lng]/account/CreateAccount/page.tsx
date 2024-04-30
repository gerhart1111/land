import ContentPage from '@/components/pages/Content'

interface CreateAccountProps {
  params: {
    lng: string;
  };
}

export default function CreateAccount ({params}: CreateAccountProps) {
  return  (
    <ContentPage lng={params.lng}
  />)
  
}