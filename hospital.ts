class Hospital {

    calcularDosis(peso: number , mgPorKg: number): number {
        return peso * mgPorKg;
    }

    calcularIMC(peso: number, altura: number ): number {
        return peso / (altura * altura);
    }


    registrarVisitas(visitasActuales: number, nuevasVisitas: number): number {
        return visitasActuales + nuevasVisitas;
    }   
}

function main() {
    const hospital = new Hospital();
     
    
    const dosis = hospital.calcularDosis(70, 2);
    console.log("Dosis calculada (mg):", dosis);

    const imc = hospital.calcularIMC(70, 1.75);
    console.log("IMC):", imc);

    const totalVisitas = hospital.registrarVisitas(5, 3);
    console.log("Total de visitas registradas:", totalVisitas);
}
main();