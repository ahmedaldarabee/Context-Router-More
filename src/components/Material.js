import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Button onClick={() => alert("Clicked Successfully!")} variant="contained" size='large'>Contained</Button>
        </Stack>
    );
}
