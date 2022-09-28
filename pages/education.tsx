import { Box } from '@mui/material';
import * as React from 'react';
import { Header } from '../components/utilities/Headers';
import { IComponent } from '../components/utilities/Interfaces';

const Education: React.FC<IComponent> = (props) => {
    return <Box sx={{width: '70%', display: 'flex', alignItems: 'center'}}>
        <Header
            title="Learn with us"
            subtitle='Provide a platform for your users via Sprealdy and earn rewards for the revenu you generate.'
        />
    </Box>
}

export default Education;