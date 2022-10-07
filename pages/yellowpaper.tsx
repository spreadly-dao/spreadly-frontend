import { Box } from '@mui/material';
import * as React from 'react';
import { IComponent } from '../components/utilities/Interfaces';

const Yellowpaper: React.FC<IComponent> = (props) => {
    return <Box sx={{width: '70%', display: 'flex', alignItems: 'center'}}>
        Yellow paper here
    </Box>
}

export default Yellowpaper;