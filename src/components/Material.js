import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';

export default function ContainedButtons() {
    return (
        <Stack direction="row" spacing={2}>
            {/* if you want to set icon next to component or around it, try that normally like: */}
            <Button endIcon={<MailIcon />} color='primary' onClick={() => alert("Clicked Successfully!")} variant="outlined" size='large' >Call Me</Button>
            <MailIcon />
        </Stack>
    );
}
