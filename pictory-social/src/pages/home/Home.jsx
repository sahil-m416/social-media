import React from 'react'
import "./home.css"
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Grid } from '@mui/material'
import ResponsiveAppBar from '../../components/AppBar/ResponsiveAppBar'
import MUIAppBar from '../../components/AppBar/MUIAppBar'
import SearchComp from '../../components/Search/SearchComp'
export default function Home() {
    return (
        <>
            {/* <ResponsiveAppBar /> */}
            <SearchComp />
            <Grid container className="homeContainer">
                <Grid item sm={3}>
                    <Sidebar />
                </Grid>

                <Grid item sm={5}>
                    <Feed />
                </Grid>

                <Grid item sm={4}>
                    <Rightbar />
                </Grid>
            </Grid>
        </>
    )
}