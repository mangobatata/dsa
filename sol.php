<?php
$s = "hello world";

function algo(string $s)
{
    $ns = []; // Declaramos el arreglo adentro de la función

    // El ciclo se detiene al llegar a 0
    for ($i = strlen($s) - 1; $i >= 0; $i--) {
        // Agregamos la letra actual al arreglo $ns
        $ns[] = $s[$i];
    }

    // Convertimos el arreglo de letras de nuevo a un texto (como el join de Python)
    return implode("", $ns);
}

echo algo($s); // Imprime: dlrow olleh
