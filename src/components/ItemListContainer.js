import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function ProductCard({ title, description, imageUrl }) {
  return (
    <Paper style={{ padding: '10px', margin: '10px', backgroundColor: '#1a1a1a', color: 'white' }}>
      <Typography variant="h6">{title}</Typography>
      <img src={imageUrl} alt={title} style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }} />
      <Typography variant="body2" style={{ marginTop: '10px' }}>{description}</Typography>
    </Paper>
  );
}

function ItemListContainer() {
  const { categoryId } = useParams();
  
  const products = [
    {
      title: 'Smartwatch Futurista',
      description: 'Un reloj inteligente con funcionalidades avanzadas y un diseño innovador.',
      imageUrl: 'https://i.blogs.es/1a8f0d/captura-de-pantalla-2019-02-25-a-las-18.01.07/840_560.jpg' 
    },
    {
      title: 'Auriculares Inalámbricos',
      description: 'Auriculares de alta calidad con cancelación de ruido y sonido envolvente.',
      imageUrl: 'https://elrincondechina.com/wp-content/uploads/2020/11/Red-Magic-CyberPods-TWS-2-erdc.jpg'
    },
  ];

  const offers = [
    {
      title: 'Play Station 5 Futurista',
      description: 'Una consola con tope de Hardware y Software capaz de revolucionar la realidad.',
      imageUrl: 'https://i0.wp.com/clipset.com/wp-content/uploads/2019/11/sony-ps5.jpg'
    },
  ];

  const itemsToShow = categoryId === '1' ? products : categoryId === '2' ? offers : [];

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <Typography variant="h4" gutterBottom style={{ color: 'cyan', textAlign: 'center' }}>
        {categoryId === '1' ? 'Nuestros Productos' : 'Nuestras Ofertas'}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {itemsToShow.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <ProductCard title={item.title} description={item.description} imageUrl={item.imageUrl} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export { ItemListContainer };