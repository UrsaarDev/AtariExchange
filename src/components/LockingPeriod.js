
import { Box, Grid, Radio } from "@material-ui/core";
import React from 'react';
import '../pages/Firstpage/style.scss';

function LockingPeriod(props) {
    const [periodValue, setPeriod] = React.useState('Buy unlocked ATRI');

    const handleChangePeriod = (event) => {
        setPeriod(event.target.value);
    };

    return  <Box>
                <Grid className='grey-border2' container spacing={3}>
                    <Grid item md={6}>
                        <Radio
                            checked={periodValue === 'Buy unlocked ATRI'}
                            onChange={handleChangePeriod}
                            value="Buy unlocked ATRI"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <Box className='font4' component='span' pl={2.4}>Buy unlocked ATRI</Box>
                    </Grid>
                    <Grid className='text-right' item xs={12} sm={12} md={6}>
                        <Box className='font4' component='span' >You will receive {props.amountValue} ATRI</Box>
                    </Grid>
                </Grid>
                <Grid className='grey-border2' container spacing={3}>
                    <Grid item md={6}>
                        <Radio
                            checked={periodValue === 'Lockup 1 month'}
                            onChange={handleChangePeriod}
                            value="Lockup 1 month"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <Box className='font4' component='span' pl={2.4}>Lockup 1 month</Box>
                    </Grid>
                    <Grid className='text-right' item xs={12} sm={12} md={6}>
                        <Box className='font4' component='span' >You will receive {parseInt(props.amountValue)} ATRI</Box>
                    </Grid>
                </Grid>
                <Grid className='grey-border2' container spacing={3}>
                    <Grid item md={6}>
                        <Radio
                            checked={periodValue === 'Lockup 3 months'}
                            onChange={handleChangePeriod}
                            value="Lockup 3 months"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <Box className='font4' component='span' pl={2.4}>Lockup 3 months</Box>
                    </Grid>
                    <Grid className='text-right' item xs={12} sm={12} md={6}>
                        <Box className='font4' component='span' >You will receive {parseInt(props.amountValue)} ATRI</Box>
                    </Grid>
                </Grid>
                <Grid className='grey-border2' container spacing={3}>
                    <Grid item md={6}>
                        <Radio
                            checked={periodValue === 'Lockup 6 months'}
                            onChange={handleChangePeriod}
                            value="Lockup 6 months"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <Box className='font4' component='span' pl={2.4}>Lockup 6 months</Box>
                    </Grid>
                    <Grid className='text-right' item xs={12} sm={12} md={6}>
                        <Box className='font4' component='span' >You will receive {parseInt(props.amountValue)} ATRI</Box>
                    </Grid>
                </Grid>
                <Grid className='grey-border2' container spacing={3}>
                    <Grid item md={6}>
                        <Radio
                            checked={periodValue === 'Lockup 12 months'}
                            onChange={handleChangePeriod}
                            value="Lockup 12 months"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <Box className='font4' component='span' pl={2.4}>Lockup 12 months</Box>
                    </Grid>
                    <Grid className='text-right' item xs={12} sm={12} md={6}>
                        <Box className='font4' component='span' >You will receive {parseInt(props.amountValue)} ATRI</Box>
                    </Grid>
                </Grid>
                <Box className='text-center' mt={1}>
                    <button className='submit-btn font1'>
                        BUY
                    </button>
                </Box>
            </Box>
    ;
}

export default LockingPeriod;