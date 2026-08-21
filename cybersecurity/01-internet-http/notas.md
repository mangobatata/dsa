Vamos por partes, porque cada capa se apoya en la anterior: Internet te lleva hasta un servidor, HTTP es el idioma que hablan ahí, y las cookies/sessions/JWT son formas de que el servidor "recuerde" quién sos entre una petición y otra (porque HTTP, por sí solo, no recuerda nada).

## Cómo viaja una petición por Internet

Cuando escribís una URL, pasan tres cosas antes de que veas algo en pantalla: tu navegador necesita saber a qué dirección IP corresponde ese dominio, necesita abrir una conexión confiable con esa máquina, y recién ahí puede mandar la petición real.## HTTP: el idioma de esa conversación

HTTP (HyperText Transfer Protocol) define el formato de esa petición y esa respuesta: el cliente manda un método (`GET`, `POST`, `PUT`, `DELETE`...), una URL, headers, y a veces un body; el servidor responde con un código de estado (`200`, `404`, `500`...), headers propios, y un body.

El detalle clave, sobre todo para lo que viene después: **HTTP es stateless**. Cada petición es independiente — el servidor no sabe por sí solo si la petición de ahora vino del mismo cliente que la de hace 5 segundos. Si querés que el servidor "recuerde" que ya iniciaste sesión, necesitás algún mecanismo extra. Ahí entran las cookies.

## Cookies

Una cookie es simplemente un pedacito de texto que el servidor le pide al navegador que guarde y le reenvíe en cada petición futura. El servidor la crea con el header `Set-Cookie` en su respuesta; el navegador la guarda y, automáticamente, la incluye en el header `Cookie` de cada petición siguiente a ese mismo dominio.

Por sí sola, una cookie es solo almacenamiento del lado del cliente con reenvío automático. Lo que la hace útil para autenticación es *qué* guardás ahí adentro — y ahí se bifurcan dos enfoques: sessions y JWT.

## Sessions (el enfoque clásico, con estado)El punto clave: la cookie de sesión no lleva información, es solo una llave (un ID aleatorio). Toda la información real — quién sos, tus permisos, etc. — vive en el servidor. Eso significa que el servidor tiene **control total**: puede invalidar una sesión al instante (por ejemplo, en un logout o si detecta actividad sospechosa) simplemente borrando esa entrada de su almacenamiento.

## JWT (el enfoque sin estado)

Un JWT (JSON Web Token) invierte la idea: en vez de que el servidor guarde el estado y le dé al cliente solo una llave, el servidor le da al cliente el estado mismo, pero firmado criptográficamente para que no se pueda alterar sin que se note. Un JWT tiene tres partes separadas por puntos: `header.payload.signature` — el payload lleva los datos (ej. `userId`, `role`, fecha de expiración), y la firma garantiza que nadie lo modificó.## El trade-off, en términos de seguridad

Esto es lo interesante para vos que vas hacia ciberseguridad: la diferencia entre sessions y JWT no es solo técnica, es una decisión de dónde ponés el riesgo.

- **Revocación**: con sessions, matás el acceso al instante borrando la entrada del servidor. Con JWT, el token es válido hasta que expira por sí solo — a menos que armes una capa extra (lista negra, tiempos de expiración muy cortos + refresh tokens), no podés "apagarlo" en el momento.
- **Escalabilidad**: sessions necesitan que todos tus servidores compartan el mismo almacenamiento (o pegajosidad de sesión). JWT no necesita eso, porque cualquier servidor puede verificar la firma por su cuenta — es más natural para arquitecturas distribuidas.
- **Dónde vive el riesgo si roban el token**: si alguien roba una cookie de sesión, puede usarla hasta que la invalidés. Si alguien roba un JWT, puede usarlo hasta que expire — y no tenés forma de pararlo antes. Por eso el *storage* del lado del cliente importa tanto: guardar el JWT en `localStorage` lo expone a robo por XSS (cualquier script inyectado puede leerlo); guardarlo en una cookie con `HttpOnly` lo protege de XSS pero lo expone a CSRF si no configurás `SameSite` correctamente.

Esa última parte — pensar "¿qué puede robar un atacante y qué puede hacer con eso?" — es exactamente el tipo de razonamiento adversario que mencionaste que querés desarrollar. Si querés, la próxima podemos tomar un escenario concreto (por ejemplo, "diseñá el login de una API REST") y razonar juntos qué mecanismo elegir y por qué, en vez de que te dé la respuesta directa.