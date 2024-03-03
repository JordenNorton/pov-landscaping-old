import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
    return (
        <Container component="section" sx={{ py: 8 }}> {/* Padding for spacing */}
            <Typography variant="h4" component="h2" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1" paragraph>
                POV Landscaping Ltd is dedicated to transforming outdoor spaces into green paradises. With over a decade of experience, our team of skilled landscapers brings expertise and creativity to every project, ensuring personalized and sustainable solutions. Our mission is to create beautiful, functional outdoor living areas that exceed our clients' expectations and enhance their connection with nature.
            </Typography>
            <Typography variant="body1" paragraph>
                We believe in the power of landscaping to improve quality of life and are committed to environmental stewardship and excellence in design. Let us bring your landscaping dreams to life.
            </Typography>
        </Container>
    );
};

export default About;
