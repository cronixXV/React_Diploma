import { Button, Stack, Box, Typography } from '@mui/material';
import useStore from './store';

function App() {
  const { count, increase } = useStore();

  return (
    <>
      <Stack
        width="100vw"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Box>
          <Typography>Count: {count}</Typography>
          <Button variant="contained" onClick={increase}>
            Increase
          </Button>
        </Box>
      </Stack>
    </>
  );
}

export default App;
