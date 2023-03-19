import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Homecard from './Homecard.js';
import {useEffect} from 'react';
import {useStateContext} from '../context'
const Layout = () => {

  const {getAllPatients,connect,address,contract} =  useStateContext();

  const handleContext = async() => {
    await getAllPatients()
  }
  useEffect(() => { 
    handleContext()
  }, [contract,address])
  
  return (
    <div>
        <Grid container>
            <Grid item xs={12} md={12} sm={12} lg={12}>
                <Navbar/>
            </Grid>
            <Grid item xs={12}  md={12} sm={12} lg={12} style={{marginTop:"8vh"}} >
                <Outlet />
            </Grid>
      </Grid>
      <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={connect}>connect</button>

        <Homecard/>
      </div>
        <Footer/>
    </div>
  )
}

export default Layout