import React from "react";
import { Box, Typography, Container, Paper, Grid } from "@mui/material";

const AboutPage = () => {
  return (
    <Box sx={pageStyle}>
      <Container component="main" sx={mainStyle}>
        <Paper elevation={3} sx={sectionStyle}>
          <Typography variant="h2" sx={{ ...headingStyle, fontSize: '24px' }}>
            About Our Store
          </Typography>
          <Box sx={contentStyle}>
            <Typography>
              Welcome to <strong>Our Store</strong>, where quality meets affordability! Founded in 2010, we have 
              grown to be a trusted name in the retail industry, offering a diverse range of products, from stylish 
              clothing to cutting-edge electronics. Our mission is to provide you with an enjoyable shopping experience 
              that keeps you coming back for more.
            </Typography>
          </Box>
        </Paper>

        <Paper elevation={3} sx={sectionStyle}>
          <Typography variant="h2" sx={{ ...headingStyle, fontSize: '24px' }}>
            Our Mission
          </Typography>
          <Box sx={contentStyle}>
            <Typography>
              Our mission is simple: to bring you the best products at the best prices, coupled with 
              exceptional customer service. We continuously strive to enhance our offerings, ensuring that you find 
              exactly what you're looking for every time you visit us.
            </Typography>
          </Box>
        </Paper>

        <Paper elevation={3} sx={sectionStyle}>
          <Typography variant="h2" sx={{ ...headingStyle, fontSize: '24px' }}>
            Meet Our Team
          </Typography>
          <Box sx={contentStyle}>
            <Typography>
              Our dedicated team is at the heart of everything we do. From customer service to product selection, 
              each member plays a vital role in ensuring that you have a fantastic experience. 
              <strong> We’re here to help!</strong>
            </Typography>
          </Box>
        </Paper>

        <Paper elevation={3} sx={sectionStyle}>
          <Typography variant="h2" sx={{ ...headingStyle, fontSize: '24px' }}>
            What Our Customers Say
          </Typography>    
          <Box sx={contentStyle}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography component="blockquote" sx={blockquoteStyle}>
                  "Shopping at Our Store has been a fantastic experience! The variety of products is incredible, and I always find what I need."
                  <cite>— Sarah J.</cite>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutPage;

const pageStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f0f4f8",
};

const mainStyle = {
  flex: 1,
  py: 3,
};

const sectionStyle = {
  marginBottom: 2,
  padding: 2,
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow: 3,
};

const headingStyle = {
  color: "#007bff",
  borderBottom: "2px solid #007bff",
  paddingBottom: "10px",
  marginBottom: "15px",
};

const contentStyle = {
  display: "flex",
  alignItems: "center",
  gap: 2,
};

const blockquoteStyle = {
  fontStyle: "italic",
  borderLeft: "4px solid #007bff",
  paddingLeft: "10px",
  margin: "10px 0",
  color: "#555",
};
