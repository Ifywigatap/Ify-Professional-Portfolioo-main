import { Link, useRouteError } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-white">
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-xl mt-4 mb-2">Oops! Page Not Found.</p>
      <p className="text-gray mb-8">The page you are looking for does not exist or has been moved.</p>
      <Button to="/">
        Go Back Home
      </Button>
    </div>
  );
}