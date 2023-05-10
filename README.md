# Prueba-Aerolinea-Bsale

# API de Check-In de Aerolínea

Esta API proporciona puntos finales para obtener información sobre vuelos y pasajeros en el sistema de check-in de una aerolínea.

## Empezando

Para comenzar con la API, sigue los siguientes pasos:

### Prerrequisitos

Asegúrate de tener instalados los siguientes elementos en tu máquina:

- Node.js (versión v14.18.1)
- MySQL 

### Instalación

1. Clona el repositorio:

   git clone https://github.com/ElGlitches/Prueba-Aerolinea-Bsale.git

2. Instala las dependencias:

    npm install

3. Inicia la API:
    node app.js

### EndPoints de la API
    .GET /flights/:id/passengers: 
    Obtiene la información de los pasajeros de un vuelo específico.

