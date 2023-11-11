function ordenarNumeros() {
    const arrayNum = [];

    for (let i = 0; i < 5; i++) {
        const num = ingresarNumero();
        arrayNum.push(num);
    }

    arrayNum.sort((a, b) => a - b);

    alert("Números ordenados: " + arrayNum.join(', '));
}

function ingresarNumero() {
    let num;
    do {
        num = prompt("Ingrese un número");
    } while (isNaN(num) || num.trim() === "");

    return Number(num);
}

ordenarNumeros();
        }
    }
    alert(arrayNum);
}

