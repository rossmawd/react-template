import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate('/')}>Home Page</Button>;
}
