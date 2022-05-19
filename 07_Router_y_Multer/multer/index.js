const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//Rutas: en una app normal/grande vamos a tener demasiadas rutas. No se pueden hacer las rutas una por una. 

// <<< ANTES >>>

//productos
app.get('/productos', (req, res) => {
    res.json({  
        message: 'Todos los productos'
    });
});

//categorias
app.get('/categorias', (req, res) => {
    res.json({  
        message: 'Todas las categorias'
    });
}
);

// <<< AHORA >>>