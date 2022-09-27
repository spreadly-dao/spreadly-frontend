import { Box } from '@mui/material';
import * as React from 'react';
import AbstractButton from './Button';

interface IHeader {
    title: string
    subtitle?: string
    button?: string
}

export const Header: React.FC<IHeader> = (props) => {
    return <Box>
        <h2>{props.title}</h2>
        {props.subtitle && <h5>{props.subtitle}</h5>}
        {props.button && <AbstractButton>{props.button}</AbstractButton>}
    </Box>
}