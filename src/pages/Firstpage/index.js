
import { Grid, Box } from "@material-ui/core";
import React from 'react';
import CardHeader from '../../components/CardHeader';
import './style.scss';
import AvailableBalance from "../../components/AvailableBalance";
import Transaction from "../../components/Transaction";
import LockingPeriod from "../../components/LockingPeriod";
import Header from "../../components/Header";

function Firstpage() {
    const [amountValue, setAmount] = React.useState('0');
    return (
        <Box className='container'>
            <Header />
            <Box className='content'>
                <Grid container>
                    <Grid item xs={12} sm={1} md={1} lg={2}></Grid>
                    <Grid item xs={12} sm={10} md={10} lg={8}>
                        <Box>
                            <Box>
                                <Grid className='card-two' container spacing={3}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <CardHeader title='AVAILABLE BALANCE' src='image/action1.png'/>
                                        <AvailableBalance />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <CardHeader title='YOUR TRANSACTION' src='image/action2.png'/>
                                        <Transaction mythis={this} amountValue={amountValue} setAmount={setAmount}/>
                                    </Grid>
                                </Grid>
                                <Box className='card-period'>
                                    <CardHeader title='SELECT YOUR LOCKING PERIOD' src='image/action3.png'/>
                                    <LockingPeriod mythis={this}/>
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

export default Firstpage;