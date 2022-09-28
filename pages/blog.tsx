import { Box } from '@mui/material';
import * as React from 'react';
import { Header } from '../components/utilities/Headers';
import { IComponent } from '../components/utilities/Interfaces';

const Blog: React.FC<IComponent> = (props) => {
    return <Box sx={{width: '70%', display: 'flex', alignItems: 'center'}}>
        <Header
            title="All the shocking news"
            subtitle='Stuff about the blog and all the latest news here.'
        />
    </Box>
}

export default Blog;