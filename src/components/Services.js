import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Container } from '@mui/material';

const servicesList = [
    { title: 'Garden Design', description: 'Custom garden layouts tailored to your space and preferences.' },
    { title: 'Patio Construction', description: 'High-quality patio builds to enhance your outdoor living area.' },
    { title: 'Lawn Maintenance', description: 'Regular upkeep services to keep your lawn green and healthy.' },
    // Add more services as needed
];

const ServiceCard = ({ title, description }) => (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
                {title}
            </Typography>
            <Typography>
                {description}
            </Typography>
        </CardContent>
    </Card>
);

const Services = () => {
    return (
        <Container component="section" sx={{ py: 8 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Our Services
            </Typography>
            <Grid container spacing={4}>
                {servicesList.map((service, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <ServiceCard title={service.title} description={service.description} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Services;
