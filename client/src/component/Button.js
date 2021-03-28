import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';



const TabButton = () => {
    return (
        <div>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Select Driver </InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'driver',
                        id: 'driver id',
                    }}
                >

                    <option value={10}>Driver 1</option>
                    <option value={20}>Driver 2</option>
                    <option value={30}>Driver 3</option>
                </Select>
                <Button variant="contained" color="secondary">
                    Refresh
              </Button>
            </FormControl>
        </div>
    )
}


export default TabButton;