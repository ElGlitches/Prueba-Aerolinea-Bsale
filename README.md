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

### Ruta de despliege de la API
    https://prueba-aerolinea-bsale-production.up.railway.app/flights/1/passengers

response:
```
 {
    "data": {
        "flightId": 3,
        "takeoffDateTime": 1688766182,
        "takeoffAirport": "Aeropuerto El Tepual, Chile",
        "landingDateTime": 1688772962,
        "landingAirport": "Aeropuerto Internacional Arturo Merino Benitez, Chile",
        "airplaneId": 2,
        "passengers": [
            {
                "passengerId": 1,
                "dni": "348373603",
                "name": "Leticia",
                "age": 65,
                "country": "Chile",
                "boardingPassId": 481,
                "purchaseId": 20,
                "seatTypeId": 2,
                "seatId": null,
                "seat": null
            }
        ]
    }
 }
```