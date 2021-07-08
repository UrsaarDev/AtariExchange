
import { Grid, Box, Button, Radio } from "@material-ui/core";
import React from 'react';
import { baseUrl } from '../../constants';
import './style.scss';

function Secondpage() {
    const [periodValue, setPeriod] = React.useState('Buy unlocked ATRI');
    const [paymentValue, setPaymentMethod] = React.useState('ETH');
    const [amountValue, setAmount] = React.useState('0');
    const [cryptoAmountValue, setCryptoAmount] = React.useState('0');

    const handleChangePaymentMethod = (event) => {
        setPaymentMethod(event.target.value);
    };
    const handleChangePeriod = (event) => {
        setPeriod(event.target.value);
    };
    const handleChangeAmount = (event) => {
        setAmount(event.target.value);
        setCryptoAmount('0.000000');
    };

    return (
        <Box className='container'>
            <Box className='header'>
                <Box className='logo'>
                    <a href='/'>
                        <img alt='' src={baseUrl + 'forsecond/logo.png'} />
                    </a>
                    <Button className='font2' variant="outlined" color="secondary">
                        connect
                    </Button>
                </Box>
            </Box>
            <Box className='content'>
                <Grid container>
                    <Grid item xs={12} sm={1} md={1} lg={2}></Grid>
                    <Grid item xs={12} sm={10} md={10} lg={8}>
                        <Box>
                            <Box>
                                <Grid className='card-two' container spacing={3}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Box className='card-header font3'>
                                            <Box component='span'>AVAILABLE BALANCE</Box>
                                            <img alt='' className='action' src={baseUrl + 'forsecond/action1.png'} />
                                        </Box>
                                        <Box className='card-content'>
                                            <Box className='grey-border1' mt={2} pb={1.3}>
                                                <Box className='font4' component='span'>Available ETH balance:</Box>
                                                <Box className='card-input' component='span'>0</Box>
                                            </Box>
                                            <Box className='grey-border1' mt={2} pb={1.3}>
                                                <Box className='font4' component='span'>Available USDT balance:</Box>
                                                <Box className='card-input' component='span'>0</Box>
                                            </Box>
                                            <Box className='grey-border1' mt={2} pb={1.3}>
                                                <Box className='font4' component='span'>Available ATRI balance:</Box>
                                                <Box className='card-input' component='span'>0</Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Box className='card-header font3'>
                                            <Box component='span'>YOUR TRANSACTION</Box>
                                            <img alt='' className='action' src={baseUrl + 'forsecond/action2.png'} />
                                        </Box>
                                        <Box className='card-content'>
                                            <Box className='grey-border1' mt={2} pb={1.3}>
                                                <Box className='font4' component='span'>Amount in ATRI:</Box>
                                                <input className='card-input font4 text-right' defaultValue='0' onChange={handleChangeAmount}/>
                                            </Box>
                                            <Box className='grey-border1' mt={2} pb={1.3}>
                                                <Box className='font4' component='span'>Payment method:</Box>
                                                <Box className='float-right radio-group font4'>
                                                    <Radio
                                                        checked={paymentValue === 'ETH'}
                                                        onChange={handleChangePaymentMethod}
                                                        value="ETH"
                                                        name="radio-button-demo"
                                                        inputProps={{ 'aria-label': 'A' }}
                                                    />
                                                    <Box component='span'>ETH</Box>
                                                    <Radio
                                                        checked={paymentValue === 'USDT'}
                                                        onChange={handleChangePaymentMethod}
                                                        value="USDT"
                                                        name="radio-button-demo"
                                                        inputProps={{ 'aria-label': 'B' }}
                                                    />
                                                    <Box component='span'>USDT</Box>
                                                </Box>
                                            </Box>
                                            <Box className='grey-border1' mt={2} pb={1.3}>
                                                <Box className='font4' component='span'>Amount in crypto:</Box>
                                                <Box className='float-right' component='span'>
                                                    <Box component='span'>{cryptoAmountValue}</Box>{'\u00a0'}
                                                    <Box className='eth-string' component='span'>{paymentValue}</Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box className='card-period'>
                                    <Box className='card-header font3'>
                                        <Box component='span'>SELECT YOUR LOCKING PERIOD</Box>
                                        <img alt='' className='action' src={baseUrl + 'forsecond/action3.png'} />
                                    </Box>
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
                                            <Box className='font4' component='span' >You will receive {amountValue} ATRI</Box>
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
                                            <Box className='font4' component='span' >You will receive {parseInt(amountValue)} ATRI</Box>
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
                                            <Box className='font4' component='span' >You will receive {parseInt(amountValue)} ATRI</Box>
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
                                            <Box className='font4' component='span' >You will receive {parseInt(amountValue)} ATRI</Box>
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
                                            <Box className='font4' component='span' >You will receive {parseInt(amountValue)} ATRI</Box>
                                        </Grid>
                                    </Grid>
                                    <Box className='text-center' mt={1}>
                                        <button className='submit-btn font1'>
                                            BUY
                                        </button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={1} md={1} lg={2}></Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Secondpage;