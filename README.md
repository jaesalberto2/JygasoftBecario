# JygasoftBecario
En este repositorio se encuentran los entregables del tiempo como becario en la empresa jygasoft solutions and technology sa de cv

Qué es HTTP:

Es un protocolo de comunicación ampliamente utilizado para conectar dos o mas servidores permitiendo la navegación web mediante sitios web, este protocolo en palabras simples
son un conjunto de reglas utilizadas para lograr la comunicación y permitiendo así crear sitios web, formularios, descargar imágenes, videos etc., es importante mencionar que el protocolo http es complementado habitualmente por una regla extra evolucionándolo a HTTPS incluyendo así una encriptación para que la información entre el emisor y el receptor no pueda ser interceptada por un tercero en el camino a su destino.

Códigos de estado:
200: Solicitud exitosa (OK). 
201: Nuevo recurso creado (Created). 
400: Petición incorrecta (Bad Request). 
401: Autenticación requerida (Unauthorized). 
404: Recurso no encontrado (Not Found). 
500: Error del servidor (Internal Server Error).

Qué es REST:

Es un estilo para implementar la comunicación entre sistemas, para, por ejemplo actualizar o consultar una base de datos desde un sitio web, este estilo de comunicación 
se caracteriza principalmente por 5 métodos:
GET: Recupera información de un recurso
POST: Crea un nuevo recurso.
PUT: Actualiza un recurso existente.
DELETE: Elimina un recurso.
PATCH: Realiza modificaciones parciales en un recurso.
usualmente se utiliza el formato JSON o XML para comunicarse entre sistemas, para generar un estándar de comunicación.


Qué es JSON:

Es un formato de escritura para comunicarse entre sistemas generando un estándar, este formato permite la comunicación entre sistemas sin generar errores
el tener un estándar permite tener reglas apropiadas al consultar o generar cambios en los sistemas, se adjunta un ejemplo de un texto en formato JSON para observar su estructura:


{
  "nombre": "Juan Pérez",
  "edad": 30,
  "correo": "juan.perez@example.com",
  "activo": true,
  "telefonos": ["+52-449-123-4567", "+52-449-987-6543"],
  "direccion": {
    "calle": "Av. Principal 123",
    "ciudad": "Ciudad Ejemplo",
    "codigoPostal": "20000"
  },
  "hobbies": [
    { "nombre": "Fútbol", "nivel": "Intermedio" },
    { "nombre": "Fotografía", "nivel": "Avanzado" }
  ],
  "fechaRegistro": "2024-06-15T14:30:00Z"
}


nótese que se compone de unas llaves principales para delimitar los elementos dentro del texto, los nombres de los atributos se encierran entre comillas y separan el valor
del atributo con dos puntos, el valor del atributo también esta entre comillas y se separa del siguiente par de elementos con una coma, en caso de tener elementos múltiples
se agregan llaves corchetes y llaves para insertar cada uno de los elementos en el atributo
