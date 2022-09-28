import { Box } from '@mui/material';
import * as React from 'react';
import { Header } from '../components/utilities/Headers';
import { IComponent } from '../components/utilities/Interfaces';

const TermsAndConditions: React.FC<IComponent> = (props) => {
    return <Box sx={{width: '70%', display: 'flex', alignItems: 'center'}}>
        <Header
            title="Terms & Conditions"
            subtitle='Read all about our terms and conditions'
        />
    </Box>
}

export default TermsAndConditions;