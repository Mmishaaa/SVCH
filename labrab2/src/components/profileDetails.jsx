import React from "react";
import { Box, Typography } from "@mui/material";

function ProfileDetails({ profile }) {
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '600px',
      margin: 'auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    profileInfo: {
      display: 'grid',
      gap: '10px',
      textAlign: 'left',
    },
    title: {
      textAlign: 'center',
      color: '#007bff',
    }
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h1" sx={{ fontSize: '32px', ...styles.title }}>
        Profile Page
      </Typography>
      <Box sx={styles.profileInfo}>
        <Typography>
          <strong>First Name:</strong> {profile.firstName}
        </Typography>
        <Typography>
          <strong>Last Name:</strong> {profile.lastName}
        </Typography>
        <Typography>
          <strong>Nickname:</strong> {profile.nickname}
        </Typography>
        <Typography>
          <strong>Description:</strong> {profile.description}
        </Typography>
        <Typography>
          <strong>City:</strong> {profile.city}
        </Typography>
        <Typography>
          <strong>Age:</strong> {profile.age}
        </Typography>
        <Typography>
          <strong>Favourite meal:</strong> {profile.meal}
        </Typography>
        <Typography>
          <strong>Occupation:</strong> {profile.occupation}
        </Typography>
        <Typography>
          <strong>Hobbies:</strong> {profile.hobbies}
        </Typography>
        <Typography>
          <strong>Relationship Status:</strong> {profile.relationshipStatus}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProfileDetails;
