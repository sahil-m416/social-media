import { Grid, Typography } from '@mui/material'
import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import SearchComp from '../../components/Search/SearchComp'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Misc({ page }) {
    return (
        <>
            <SearchComp />
            <Grid container className="homeContainer">
                <Grid item sm={3}>
                    <Sidebar />
                </Grid>

                <Grid item sm={5}>
                    <Typography sx={{ textAlign: "center", marginTop: "20px" }} variant="h1">404 !!!</Typography>
                    <Typography sx={{ textAlign: "center" }} variant="h3"> Page Under Construction</Typography>
                </Grid>

                <Grid item sm={4}>
                    <Rightbar />
                </Grid>
            </Grid>
        </>
    )
}
