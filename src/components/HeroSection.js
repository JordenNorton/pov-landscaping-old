import React from 'react';
import {Box, Typography, Button, Container} from '@mui/material';
import useTypingEffect from './useTypingEffect'; // Adjust the path as needed

const HeroSection = () => {
    const typingText = useTypingEffect("Transforming your outdoor spaces.", 50);

    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                backgroundImage: 'url(https://images.unsplash.com/photo-1612310952672-75b413b3d72c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    zIndex: 1,
                },
            }}
        >
            <Container
                maxWidth="sm"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    color: 'common.white',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                <img src={`${process.env.PUBLIC_URL}GREENSCAPEnofill.png`} alt="POV Landscaping Logo"
                     style={{maxWidth: '100%', height: 'auto', marginBottom: '-5%'}}/>
                <Typography variant="h5" component="p" gutterBottom >
                    {typingText}
                </Typography>
                <Box
                    sx={{
                        display: 'flex', // Enable flexbox
                        justifyContent: 'center', // Center the buttons horizontally
                        gap: 2, // Creates a gap between the buttons
                        marginTop: '10%', // Adjust as needed
                    }}
                >
                    <Button variant="contained" color="secondary" size="large" sx={{ color: 'white' }}>
                        Learn More
                    </Button>
                    <Button variant="contained" color="primary" size="large" sx={{ color: 'white' }}>
                        Contact Us
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
