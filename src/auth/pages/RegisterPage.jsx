import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
       <AuthLayout title='Create account'>
            <form>
                <Grid container>
                <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                            label="Name"
                            type="text"
                            placeholder="Your full name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                            label="Mail"
                            type="email"
                            placeholder="mail@google.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid  item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                            label="Password"
                            type="password"
                            placeholder="Password"
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>
                                Create account
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            Sign in
                        </Link>
                    </Grid>
                </Grid>
            </form>
       </AuthLayout>
    )
}
