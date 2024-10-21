import React from "react";
import { Box, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Box sx={pageStyle}>
      <main style={mainStyle}>
        <section style={sectionStyle}>
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
        </section>

        <section style={sectionStyle}>
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
        </section>

        <section style={sectionStyle}>
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
        </section>

        <section style={sectionStyle}>
          <Typography variant="h2" sx={{ ...headingStyle, fontSize: '24px' }}>
            What Our Customers Say
          </Typography>    
          <blockquote style={blockquoteStyle}>
            <Typography>
              "Shopping at Our Store has been a fantastic experience! The variety of products is incredible, and I always find what I need."
            </Typography>
            <cite>— Sarah J.</cite>
          </blockquote>          
          <blockquote style={blockquoteStyle}>
            <Typography>
              "I ordered a laptop from here, and it arrived in perfect condition. Excellent service and fast shipping!"
            </Typography>
            <cite>— John D.</cite>
          </blockquote>          
          <blockquote style={blockquoteStyle}>
            <Typography>
              "The customer support team is amazing! They helped me with my order, and I couldn't be happier with my purchase."
            </Typography>
            <cite>— Emily R.</cite>
          </blockquote>
          <blockquote style={blockquoteStyle}>
            <Typography>
              "Our Store always has the best deals! I've saved so much money shopping here, and the quality is top-notch."
            </Typography>
            <cite>— Michael T.</cite>
          </blockquote>
          <blockquote style={blockquoteStyle}>
            <Typography>
              "I love the selection of clothing! Every time I visit, I leave with something stylish and affordable."
            </Typography>
            <cite>— Jessica L.</cite>
          </blockquote>
        </section>
      </main>
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
  padding: "20px",
};

const sectionStyle = {
  margin: "20px 0",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
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
  gap: "20px",
};

const blockquoteStyle = {
  fontStyle: "italic",
  borderLeft: "4px solid #007bff",
  paddingLeft: "10px",
  margin: "10px 0",
  color: "#555",
};
