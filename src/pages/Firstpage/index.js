
import { Menu, MenuItem } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from 'react';
import { baseUrl } from '../../constants';
import './style.scss';

function Firstpage() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='container'>
            <div className='topbar'></div>
            <div className='header'>
                <div style={{flexGrow:2}}></div>
                <div className='header-search' style={{flexGrow:7,display:'flex',justifyContent:'flex-end'}}>
                    <input type='text' />
                    <span>Search</span>
                </div>
                <div className='header-connect' style={{flexGrow:2,display:'flex',justifyContent:'center'}}>
                    <div className='btn-exchange' onClick={handleClick}>
                        <span className='exc-label'>Exchange</span> 
                        <ExpandMore className='exc-icon' size='small' />
                    </div>
                    <span className='btn-connect'>Connect</span>
                </div>
                <div style={{flexGrow:2}}></div>
            </div>
            <div className='content'>
                <div className='content-three-divs'>
                    <div className='total-pending'>
                        <div className='total-div'>
                            <article>total divs</article>
                            <div className='gradient-div'></div>
                        </div>
                        <div className='blank'></div>
                        <div className='pending-div'>
                            <article>pending divs</article>
                            <div className='gradient-div'></div>
                        </div>
                    </div>
                    <div className='queue-position'>
                        <div className='blank'></div>
                        <div className='queue-div'>
                            <article>queue position</article>
                            <div className='gradient-div'></div>
                        </div>
                        <div className='blank'></div>
                    </div>
                </div>
                <div className='content-logo'>
                    <div><img className='logo' alt='' src={baseUrl + 'image/logo.png'} /></div>
                    <div></div>
                </div>
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem className='menu-item' onClick={handleClose}>pcs v1</MenuItem>
                <MenuItem className='menu-item' onClick={handleClose}>pcs v2</MenuItem>
                <MenuItem className='menu-item' onClick={handleClose}>ape swap</MenuItem>
            </Menu>
        </div>
    );
}

export default Firstpage;