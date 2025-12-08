class Estudiante {

    agregarNota(promedio: number , nuevaNota: number): number {
        if (promedio < 0 || nuevaNota < 0) {
            throw new Error("Lasnotas no pueden ser negativas.");
        }

        return (promedio + nuevaNota) / 2;
    }

    aprobar(nota: number, minima: number): boolean {
        if (nota < 0 || minima < 0) {
            throw new Error("Las notas no pueden ser negativas.");

        }
        return nota >= minima;
    }   

    calcularFaltas(faltasActuales: number, nuevasFaltas: number): number {
        if (faltasActuales < 0 || nuevasFaltas < 0) {
            throw new Error("Las faltas no pueden ser negativas.");
        }

        return faltasActuales + nuevasFaltas;
    }

}
function main() {
    const estudiante = new Estudiante();
    let promedio = 95;


    console.log("promedio inicial:", promedio);

    promedio = estudiante.agregarNota(promedio, 85);
    console.log("Nuevo promedio", promedio);
    
    const aprobado = estudiante.aprobar(promedio, 60);
    console.log("El estudiante aprueba?", aprobado);

    let faltas = 2;
    console.log("Faltas actuales:", faltas);

    faltas = estudiante.calcularFaltas(faltas, 3);
    console.log("totak de faltas:", faltas);
}