import React, {useState} from "react"
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

const Header = () => {
    const isLoggedIn = useSelector(state=> state.isLoggedIn);
    const [headerValue, setHeaderValue] = useState(null);
    return (
        <AppBar sx={{background:"white"}} position="sticky">
        <Toolbar>
            <Typography color="primary" variant="h4">
               Travel Moments
            </Typography>
            {isLoggedIn && <Box display="flex" marginLeft="auto" marginRight="auto">
                <Tabs textColor="secondary"
                      indicatorColor="secondary"
                      value={headerValue}
                      onChange={(e, headerValue) => setHeaderValue(headerValue)}>

                    <Tab label="All Blogs" to="/posts" LinkComponent={Link}/>
                    <Tab LinkComponent={Link} to="/myPosts" label="My Blogs"/>
                </Tabs>
            </Box>}

                <Box display="flex" marginLeft="auto">

                    {!isLoggedIn && <> <Button
                        LinkComponent={Link} to="/auth"
                        variant="outlined"
                        sx={{margin: 1}}>
                        Login
                    </Button>

                        <Button
                        LinkComponent={Link} to="/auth"
                        variant="contained"
                        sx={{margin:1}}>
                        Sign Up
                        </Button> </> }

                    { isLoggedIn && <Button
                        LinkComponent={Link} to="/auth"
                        variant="text"
                        sx={{margin: 1}}>
                        Log Out
                    </Button>}

                </Box>
        </Toolbar>
    </AppBar>
    )
}

export default Header;
