import * as React from 'react';
import { Box, TextField } from '@mui/material';

function AddRecipe() {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <h1>Add Recipe</h1>
            <TextField 
                id="recipe-name"
                label="Recipe Name"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                id="recipe-description"
                label="Recipe Description"
                variant="outlined"
                fullWidth
                margin='normal'
                multiline
            />

            
        </Box>
    );
};
export default AddRecipe;