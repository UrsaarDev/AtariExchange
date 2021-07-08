
import { Box,Button } from "@material-ui/core";
import React from 'react';
import { baseUrl } from '../constants';
import '../pages/Firstpage/style.scss';

function Header(props) {
    return  <Box className='header'>
                <Box className='logo'>
                    <a href='/'>
                        <img alt='' src={baseUrl + 'image/logo.png'} />
                    </a>
                    <Button className='font2' variant="outlined" color="secondary">
                        connect
                    </Button>
                </Box>
            </Box>
    ;
}

export default Header;