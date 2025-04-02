import { useState } from 'react';
import dynamic from 'next/dynamic';
import Timeline from '../components/Timeline';
import { Box, Typography } from '@mui/material';

const ModelViewer = dynamic(() => import('../components/ModelViewer'), { ssr: false });

const data = [
  { year: "-20000", title: "Os d'Ishango", model: "/models/ishango.glb" },
  { year: "-1650", title: "Papyrus de Rhind", model: "/models/rhind.glb" },
  { year: "2020", title: "Village fractal", model: "/models/fractal.glb" }
];

export default function Home() {
  const [selected, setSelected] = useState(data[0]);

  return (
    <Box sx={{ p: 4, backgroundColor: '#fff3e0' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#683c11' }}>
        Les Mathématiques Africaines en Action
      </Typography>
      <Timeline data={data} onSelect={setSelected} />
      <Box sx={{ mt: 4, height: '60vh' }}>
        <ModelViewer modelPath={selected.model} />
      </Box>
    </Box>
  );
}