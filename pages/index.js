import Head from "next/head";
import { Container, Typography, Paper, Box, Button, Stack } from "@mui/material";
import IshangoViewer from "../components/IshangoViewer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frise mathématique</title>
      </Head>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
          <Typography variant="h4" gutterBottom color="primary">
            Bâton d'Ishango
          </Typography>
          <Typography variant="body1" paragraph>
            Découvert en RDC, cet os gravé est considéré comme l’un des premiers outils mathématiques. 
            Il montre des motifs de doublage et des nombres premiers.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <IshangoViewer />
          </Box>
        </Paper>
        <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
          <Button variant="contained" color="secondary">-20000</Button>
          <Button variant="outlined" color="primary">-1650</Button>
        </Stack>
      </Container>
    </>
  );
}
