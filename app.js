const express = require("express");
const { query, pool } = require("./db");
const app = express();

app.get("/flights/:id/passengers", async (req, res) => {
    const flightId = req.params.id;
    const sql = `SELECT passenger.passenger_id, passenger.dni, passenger.name, passenger.age, passenger.country, 
              boarding_pass.boarding_pass_id, boarding_pass.purchase_id, boarding_pass.seat_type_id, boarding_pass.seat_id, 
              seat.type, seat.row, seat.column, flight.flight_id, flight.takeoff_date_time, flight.takeoff_airport, 
              flight.landing_date_time, flight.landing_airport, flight.airplane_id 
              FROM passenger
              JOIN boarding_pass ON boarding_pass.passenger_id = passenger.passenger_id
              JOIN flight ON flight.flight_id = boarding_pass.flight_id
              LEFT JOIN seat ON seat.seat_id = boarding_pass.seat_id 
              WHERE flight.flight_id = ?
              AND boarding_pass.boarding_pass_id IS NOT NULL`;

    try {
        const rows = await query(sql, [flightId]);

        if (!rows.length) {
            return res.status(404).json({ data: {} });
        }

        const passengers = rows.map((row) => {
            const {
                passenger_id,
                dni,
                name,
                age,
                country,
                boarding_pass_id,
                purchase_id,
                seat_type_id,
                seat_id,
                type,
                row: seatRow,
                column,
            } = row;

            // Validar y asignar valores predeterminados si faltan datos obligatorios
            const passengerData = {
                passengerId: passenger_id || null,
                dni: dni || null,
                name: name || null,
                age: age || null,
                country: country || null,
                boardingPassId: boarding_pass_id || null,
                purchaseId: purchase_id || null,
                seatTypeId: seat_type_id || null,
                seatId: seat_id || null,
                seat: seat_id ? { type, row: seatRow, column } : null,
            };

            return passengerData;
        });

        const {
            flight_id,
            takeoff_date_time,
            takeoff_airport,
            landing_date_time,
            landing_airport,
            airplane_id,
        } = rows[0];

        const data = {
            flightId: flight_id || null,
            takeoffDateTime:
                takeoff_date_time instanceof Date
                    ? takeoff_date_time.getTime() / 1000
                    : null,
            takeoffAirport: takeoff_airport || null,
            landingDateTime:
                landing_date_time instanceof Date
                    ? landing_date_time.getTime() / 1000
                    : null,
            landingAirport: landing_airport || null,
            airplaneId: airplane_id || null,
            passengers: passengers,
        };

        res.json({ data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: "internal server error" });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
