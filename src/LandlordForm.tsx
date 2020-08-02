import React from 'react';
import {Breadcrumbs, Grid, Paper, TextField, Typography} from "@material-ui/core";
import {KeyboardDatePicker,} from '@material-ui/pickers';
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function LandlordForm() {

    const { t } = useTranslation();

    const onDateChange = (date: Date | null) => {
        setSelectedDate(date);
    }

    const [selectedDate, setSelectedDate] = React.useState<Date | null>();

    return (

            <Grid container spacing={2} style={{padding: 16}}>
                <Grid item xs={12}>
                    <Breadcrumbs>
                        <Link color="inherit" to="/landlords">{t("landlords")}</Link>
                        <Typography color="textPrimary">{t("new_landlord")}</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3" style={{marginBottom: 20}}>
                        {t("new_landlord")}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction="column">
                        <Grid item xs={12}>
                            <form>
                                <Paper style={{padding: 16}} elevation={3}>

                                    <Typography variant="h6">{t("landlord_id_title")}</Typography>

                                    <TextField margin="normal" fullWidth required id="first_name"
                                               label={t("landlord_first_name")}/>

                                    <TextField margin="normal" fullWidth required id="last_name"
                                               label={t("landlord_last_name")}/>

                                    <KeyboardDatePicker variant="inline" onChange={onDateChange}
                                                        label={t("landlord_dob")}
                                                        value={selectedDate}
                                                        format="dd/MM/yyyy"
                                                        fullWidth
                                                        id="dob"
                                                        margin="normal"/>

                                    <TextField margin="normal" fullWidth required id="landlord_id"
                                                label={t("landlord_id")} placeholder={t("landlord_id_placeholder")}/>

                                    <TextField margin="normal" fullWidth required id="reference"
                                               label={t("landlord_ref")} placeholder={t("landlord_ref_placeholder")}/>
                                </Paper>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={6}>

                </Grid>
            </Grid>
    );
}