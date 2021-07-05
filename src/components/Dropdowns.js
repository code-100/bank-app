import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


// Styling-------------------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


function Dropdowns(props) {
    const classes = useStyles();
    const [city, setCity] = React.useState('MUMBAI');
    const [query, setQuery] = React.useState('ifsc');


    // Event Listeners-------------------------------------------------------------------------------

    const handleCityChange = (event) => {
        props.onSelectCity(event.target.value);
        setCity(event.target.value);
    };

    const handleQueryChange = (event) => {
        props.onSelectQuery(event.target.value);
        setQuery(event.target.value);
    };

    // Rendering the components-------------------------------------------------------------------------------
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    onChange={handleCityChange}
                    defaultValue="MUMBAI"
                >
                    <MenuItem value={"MUMBAI"}>Mumbai</MenuItem>
                    <MenuItem value={"DELHI"}>Delhi</MenuItem>
                    <MenuItem value={"LUCKNOW"}>Lucknow</MenuItem>
                    <MenuItem value={"BANGALORE"}>Bangalore</MenuItem>
                    <MenuItem value={"HYDERABAD"}>Hyderabad</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                value={query}
                onChange={handleQueryChange}
                defaultValue="ifsc"
                >
                    <MenuItem value={"ifsc"}>IFSC</MenuItem>
                    <MenuItem value={"branch"}>Branch</MenuItem>
                    <MenuItem value={"bank_name"}>Bank Name</MenuItem>
                </Select>
            </FormControl>

        </div>
    )

}

export default Dropdowns;
