
interface ArticlesMainPageProps {
    params: {
      lng: string;
    };
  }

const ArticlesMainPage: React.FC<ArticlesMainPageProps> = ({params}) =>  {
    return <h2>Articles</h2>
  }

  export default ArticlesMainPage;