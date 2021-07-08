
import { Box } from "@material-ui/core";
import React from 'react';
import { baseUrl } from '../constants';
import '../pages/Firstpage/style.scss';

function CardHeader(props) {
    return  <Box className='card-header font3'>
                <Box component='span'>{props.title}</Box>
                <img alt='' className='action' src={baseUrl + props.src} />
            </Box>
    ;
}

export default CardHeader;