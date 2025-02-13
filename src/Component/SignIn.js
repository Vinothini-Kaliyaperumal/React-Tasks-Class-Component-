import React, { Component } from 'react';
import { TextField, Checkbox, Button, Typography, Link, FormControlLabel, Box, Grid, Paper, Divider, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // React Router Link
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

class SignIn extends Component {
  state = { name: '', password: '', agree: false };

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
      <Grid container justifyContent="center" alignItems="center" minHeight="100vh" style={{ backgroundColor: '#f1f4fb', padding: '20px' }}>
        <Paper elevation={10} style={{ padding: '30px', borderRadius: '20px', maxWidth: '1000px', width: '100%', backgroundColor: '#ffffff' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', fontSize: '25px', marginTop: '20px', fontFamily:"Georgia" }}>
  Welcome Back! <br /> Sign in to Continue
</Typography>
<Typography variant="body2" style={{ marginBottom: '20px', color: '#6c757d', fontSize: '13px', lineHeight: '18px', marginTop: '15px', fontFamily:"Georgia" }}>
  Sign in to manage your campaigns and streamline your email marketing <br></br>with ConvertKit.  
</Typography>


              <img src="/Assets/image.png" alt="Illustration" style={{ borderRadius: '10px', width: '420px', marginTop: '30px', height: '300px' }} />
            </Grid>

            <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', marginTop: '20px', fontFamily:"Georgia" }}>
  Sign In to Your Account
</Typography>
              <Box display="flex" alignItems="center" gap={4} marginTop={2}>
                <Button startIcon={<GoogleIcon />} sx={{ backgroundColor: "#f5f5f5", color: "black", paddingX: 2, paddingY: 1, borderRadius: 2, "&:hover": { backgroundColor: "#f5f5f5" } , fontFamily:"Georgia"}}>
                  Sign in with Google
                </Button>
                <IconButton sx={{ backgroundColor: "#f5f5f5", color: "black", borderRadius: 2, "&:hover": { backgroundColor: "#f5f5f5" } }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={{ backgroundColor: "#f5f5f5", color: "black", borderRadius: 2, "&:hover": { backgroundColor: "#f5f5f5" } }}>
                  <AppleIcon />
                </IconButton>
              </Box>

              <Box display="flex" alignItems="center" gap={2} width="100%" marginTop={2}>
                <Divider sx={{ flexGrow: 1 }} />
                <Typography variant="body2" sx={{ color: "gray", fontWeight: 500 , fontFamily:"Georgia"}}>Or</Typography>
                <Divider sx={{ flexGrow: 1 }} />
              </Box>

              <form onSubmit={this.handleSubmit} style={{ marginTop: '20px', fontFamily:"Georgia" }}>
                <TextField 
  label="User Name" 
  name="name" 
  variant="outlined" 
  fullWidth 
  margin="normal" 
  value={this.state.name} 
  onChange={this.handleChange} 
  required 
  sx={{ fontFamily: "Georgia" }} 
/>

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

<FormControlLabel
  control={<Checkbox name="agree" color="primary" checked={this.state.agree} onChange={this.handleChange} />}
  label={
    <Typography variant="body2" sx={{ fontFamily: "Georgia" }}>
      Don't have an account? <Link component={RouterLink} to="/signup">Sign Up Here</Link>
    </Typography>
  }
/>


                <Button type="submit" variant="contained" fullWidth style={{ marginTop: '20px', borderRadius: '25px', backgroundColor: '#174193', fontFamily: 'Georgia' }}>Get Started</Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default SignIn;
