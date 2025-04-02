import { Box, Button } from '@mui/material';

export default function Timeline({ data, onSelect }) {
  return (
    <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', p: 2, backgroundColor: '#f19b3f' }}>
      {data.map((item, index) => (
        <Button
          key={index}
          variant="contained"
          onClick={() => onSelect(item)}
          sx={{ backgroundColor: '#d63b1b', minWidth: 150 }}
        >
          {item.year} - {item.title}
        </Button>
      ))}
    </Box>
  );
}