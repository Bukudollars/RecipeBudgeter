import * as React from 'react';
import { Box, Select, FormControl } from '@mui/material';

export default function RecipeSelect() {
    const [recipe, setRecipe] = React.useState('');
    const handleChange = (event) => {
        setRecipe(event.target.value);
    };
    return(
        <Box>
            <Select
                labelId='recipe-select-label'
                id='recipe-select'

            ></Select>
        </Box>
    );
};