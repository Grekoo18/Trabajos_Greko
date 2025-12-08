class Banco {

    depositar (saldo: number, monto: number): number {

        if (monto <= 0) {
            throw new Error("El monto a depositar debe ser mayor que cero.");
        }   

        return saldo + monto;
    }

    retirar (saldo: number, monto: number): number {
        if (monto > saldo) {
            throw new Error("Fondos insuficientes.");
        }   

        if (monto <= 0) {
            throw new Error("El monto a retirar debe ser mayor que cero.");
        }
        return saldo - monto;
    }


    transferir (saldoOrigen: number, monto: number):  number {
        if (monto > saldoOrigen) {
            throw new Error("No se puede transferir mas del saldo disponible.");
        }

        if (monto <= 0) {
            throw new Error("El monto a transferir debe ser mayor que cero.");
        }

        return saldoOrigen - monto; 
    }
    
    consultarSaldo (saldo: number): number {
        if (saldo < 0) {
            throw new Error("El saldo no puede ser negativo.");
        }                       
        return saldo;
    }   

}

function main() {   


    const banco = new Banco ();

    let saldo = 100;

    console.log ("saldo inicial:" , saldo);
    saldo = banco.depositar (saldo, 90);

    console.log ("Despues de depositar:" , saldo);
    saldo = banco.retirar (saldo, 40);

    console.log ("despues de transferir:" , saldo);
    saldo = banco.transferir (saldo , 70);

    console.log("Saldo final:" , banco.consultarSaldo(saldo));

}
main ();