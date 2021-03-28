import React, { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";




const CustomerForm = (props) => {

    const onSubmit = (data) => console.log(JSON.stringify(data));

    return (
        <div>
            <Grid
                container
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={12} lg={6}>
                    <Card
                        className="p-4 mb-4"
                        style={{
                            height: 765,
                            transform: "rotateX(15deg)",
                        }}
                    >
                        <Container component="main" fixed>
                            <form
                                className={classes.form}
                                noValidate
                                onSubmit={(e) => onSubmit(e)}
                            >
                                <Grid container spacing={4}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            type="text"
                                            variant="outlined"
                                            fullWidth

                                            label="customer id"
                                            name="customer"


                                        />
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Submit Request
                                   </Button>
                                </Grid>
                            </form>


                        </Container>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}


export default CustomerForm;