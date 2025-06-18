import React , { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function Challenge() {
  const [hight,setHight] = useState(80);

  const changeHight = (e) => {
    return e.target.checked ? setHight(140) : setHight(80);
  } 

  return (
    <div>

      {/* First Box! */}
      <Accordion>
        
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>

        <AccordionDetails> Hello Ahmed Nayel Al Darabee </AccordionDetails>
      </Accordion>

      {/* Second Box! */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>

        <AccordionDetails> 
          Send Your CV as a software engineer student 
          <Switch onChange={ (e) => changeHight(e) } color='secondary' {...label} />
        </AccordionDetails>
      </Accordion>
      
      <div style={{height: hight}} className='w-full text-gray-50 bg-purple-600 flex items-center justify-center capitalize'>
          Good Job!
      </div>
    </div>
  );
}