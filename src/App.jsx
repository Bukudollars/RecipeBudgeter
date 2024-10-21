import * as React from 'react';
import { Box, Container } from '@mui/material';
import NavBar from './NavBar';
import DataTable from './DataTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipe from './AddRecipe';

export default function App() {
    const drawerWidth = 240;
    const [appBarHeight, setAppBarHeight] = React.useState(0);
    const appBarRef = React.useRef(null);

    React.useEffect(() => {
        if (appBarRef.current) {
            setAppBarHeight(appBarRef.current.clientHeight);
        }
    }, []);

    return (
        <Router>
            <Box>
                <NavBar drawerWidth={drawerWidth} appBarRef={appBarRef}/>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, 
                        p: 3, 
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        mt: `${appBarHeight}px`,
                        ml: { sm: `${drawerWidth}px`}
                    }}
                    
                >
                    <Routes>
                        <Route path="/" element={<DataTable />} /> 
                        <Route path="/add-recipe" element={<AddRecipe />} />
                        {/* <Route path="/recipe-select" element={<RecipeSelect />} /> */}
                    </Routes> 
                </Box>
                
            </Box>
        </Router>
        
    );
};