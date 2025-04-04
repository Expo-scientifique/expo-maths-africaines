
import { Container, Typography } from '@mui/material';
import Timeline from '../components/Timeline';

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Mathématiques et Culture Africaine
      </Typography>
      <Typography variant="body1">
        Explorez les mathématiques africaines à travers une frise chronologique interactive.
      </Typography>
      <Timeline />
    </Container>
  );
}
