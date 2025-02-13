import React, { Component } from 'react';
import { TextField, Checkbox, Button, Typography, Link, FormControlLabel, Grid, Paper, MenuItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

class SignUp extends Component {
  state = { name: '', email: '', mobile: '', role: '', password: '', agree: false };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Grid container justifyContent="center" alignItems="center" minHeight="100vh" style={{ backgroundColor: '#f1f4fb', padding: '20px', fontFamily: 'Georgia' }}>
        <Paper elevation={10} style={{ padding: '30px', borderRadius: '20px', maxWidth: '1000px', width: '100%', backgroundColor: '#ffffff', fontFamily: 'Georgia' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', fontSize: '25px', marginTop: '20px', fontFamily: "Georgia" }}>
                Create Your ConvertKit Account
              </Typography>
              <Typography variant="body2" style={{ marginBottom: '20px', color: '#6c757d', fontSize: '13px', lineHeight: '18px', marginTop: '15px', fontFamily: "Georgia" }}>
                Sign up to access powerful email marketing tools designed to help you build and nurture your audience with ease.
              </Typography>
              <img src="/Assets/image.png" alt="Illustration" style={{ borderRadius: '10px', width: '420px', marginTop: '30px', height: '300px' }} />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', marginTop: '20px', fontFamily: "Georgia" }}>
                Sign Up
              </Typography>

              <form onSubmit={this.handleSubmit} style={{ marginTop: '20px', fontFamily: "Georgia" }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="Full Name"
                      name="name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={this.state.name}
                      onChange={this.handleChange}
                      required
                      sx={{ fontFamily: "Georgia" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Email Address"
                      name="email"
                      type="email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                      sx={{ fontFamily: "Georgia" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Mobile Number"
                      name="mobile"
                      type="tel"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={this.state.mobile}
                      onChange={this.handleChange}
                      required
                      sx={{ fontFamily: "Georgia" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                      sx={{ fontFamily: "Georgia" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      select
                      label="Role"
                      name="role"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={this.state.role}
                      onChange={this.handleChange}
                      required
                      sx={{ fontFamily: "Georgia" }}
                    >
                      <MenuItem value="User" sx={{ fontFamily: "Georgia" }}>User</MenuItem>
                      <MenuItem value="Admin" sx={{ fontFamily: "Georgia" }}>Admin</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="agree"
                      color="primary"
                      checked={this.state.agree}
                      onChange={this.handleChange}
                    />
                  }
                  label={
                    <Typography variant="body2" sx={{ fontFamily: "Georgia" }}>
                      I agree to the <Link href="#" sx={{ fontFamily: "Georgia" }}>Terms & Conditions</Link>
                    </Typography>
                  }
                  sx={{ fontFamily: "Georgia" }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  style={{ marginTop: '20px', borderRadius: '25px', backgroundColor: '#174193', fontFamily: 'Georgia' }}
                >
                  Create Account
                </Button>

                <Typography variant="body2" style={{ textAlign: 'center', marginTop: '15px', fontFamily: "Georgia" }}>
                  Already have an account? <Link component={RouterLink} to="/signin" sx={{ fontFamily: "Georgia" }}>Sign In</Link>
                </Typography>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default SignUp;
