class Auto {

    acelerar(velocidadActual: number, incremento: number): number {
        if (incremento <= 0) {
            throw new Error("El incremento debe ser mayor que cero.");
        }

        return velocidadActual + incremento;
    }

    frenar(velocidadActual: number, decremento: number): number {
        if (decremento <= 0) {
            throw new Error("El decremento debe ser mayor que cero.");
        }

        const nuevaVelocidad = velocidadActual - decremento;
        return nuevaVelocidad < 0 ? 0 : nuevaVelocidad;
    }

    recorrer(distancia: number, tiempo: number): number {
        if (distancia <= 0) {
            throw new Error("La distancia debe ser mayor que cero.");
        }

        if (tiempo <= 0) {
            throw new Error("El tiempo debe ser mayor que cero.");
        }

        return distancia / tiempo;
    }
}

function main() {
    const auto = new Auto();

    let velocidad = 0;

    console.log("Velocidad inicial:", velocidad);

    velocidad = auto.acelerar(velocidad, 50);
    console.log("Después de acelerar:", velocidad);

    velocidad = auto.frenar(velocidad, 20);
    console.log("Después de frenar:", velocidad);

    const velocidadMedia = auto.recorrer(100, 2);
    console.log("Velocidad media en el trayecto:", velocidadMedia, "km/h");
}

main()