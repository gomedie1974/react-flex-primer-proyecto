* Descripción del proyecto

    Este proyecto es una tienda online desarrollada con React que permite a los usuarios navegar por productos, agregarlos al carrito, completar el proceso de compra y recibir un detalle de su orden. Los datos se almacenan en Firebase Firestore.

* Herramientas utilizadas
    - React
    - React Router DOM
    - Firebase (Firestore)
    - Bootstrap Icons
    - CSS personalizado
    - FormSubmit (para suscripción al newsletter)
    - Vite

* Funcionalidades principales
    - Filtrado de productos por categoría
    - Vista de detalle de cada producto
    - Carrito de compras con suma dinámica
    - Formulario de checkout con validación
    - Almacenamiento de órdenes en Firestore
    - Pantalla final con detalle de compra descargable
    - Footer con formulario de suscripción y mapa de ubicación

* Estructura del proyecto
src/
│
├── components/
│   ├── Cart/
│   ├── CheckoutForm/
│   ├── FinalizarOrdenFin/
│   ├── Footer/
│   ├── Home/
│   ├── ItemDetail/
│   ├── ItemListContainer/
│   ├── ModalOrden/
│   └── NavBar/
│
├── context/
│   └── context.jsx
│
├── firebaseConfig.js
├── App.jsx
└── main.jsx

