// Define la estructura de un archivo HTML
<html lang="es">

    <head>
        <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="style/estilo.css">
                    <title>Curriculum</title>
                    <script type="text/javascript">
                        function popUp(URL) {window.open(URL, 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=600,height=400,left = 390,top = 50')};
        }
                    </script>
                </head>
// Permite crear la primer sección
                <body>
                    <section id="presentacion">
                        <H2>Ian Donovan Estrada Zuñiga</H2>
                        <div class="perfil">
                            <img class="perfil" src="resources/iluminati.jpg" alt="Fotografía de Ian Donovan Estrada Zuñiga" />
                        </div>

                        <fieldset>
                            <legend><strong>Datos Personales</strong></legend>
                            <p><strong>Correo:</strong> <a href="22011147@itsoeh.edu.mx">22011147@itsoeh.edu.mx</a> </p>
                            <p><strong>Edad:</strong> 19 años</p>
                            <p><strong>Ciudad:</strong> Hidalgo, Mex.</p>
                            <section class="redes">
                                <p><strong>Redes sociales:</strong></p>
                                <a href="https://www.facebook.com/ian.estradazuniga?mibextid=9R9pXO" target="_blank">
                                    <img src="resources/redes/facebook.png" width="30" alt="@ian.rodriguez" />
                                </a>
                                <a title="Instagram" href="https://instagram.com/ianestrada40?utm_source=qr&igshid=OGU0MmVlOWVjOQ==" target="_blank">
                                    <img src="resources/redes/instagram.png" width="30" alt="ian-estrada-40" />
                                </a>
                            </section>
                        </fieldset>
                    </section>
// Permite crear la segunda sección
                    <section id="contenido">
                        <fieldset>
                            <legend><strong>Estudios cursados</strong></legend>
                            <h3>Estudios en Ingeniería en Tecnologías de la Información y Comunicaciones - Instituto Tecnologico superior del Oriente del Estado de Hidalgo</h3>
                            <p>Periodo: 2022-2027</p>
                            <p>Cedula profesional: no me acuerdo</p>
                            <h3>Futuro ingeniero en Tecnologías de la Información y Comunicaciones</h3>
                            <p>Periodo: 2022-2027</p>
                            <p>Cedula profesional: no me acuerdo</p>
                        </fieldset>

                        <fieldset>
                            <legend><strong>Idiomas</strong></legend>
                            <div id="idioma">
                                <div class="col">
                                    <h3>Español</h3>
                                    <p>Nivel nativo</p>
                                </div>
                                <div class="col">
                                    <h3>Ingles</h3>
                                    <p>Nivel B2</p>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend><strong>Herramientas</strong></legend>
                            <table>
                                <tr>
                                    <th scope="col"><strong>Lenguajes de programación</strong></th>
                                    <th scope="col"><strong>Entornos SQL</strong></th>
                                    <th scope="col"><strong>Entornos NoSQL</strong></th>
                                </tr>

                                <tr>
                                    <td>
                                        <li>Python</li>
                                        <li>Java</li>
                                        <li>C++</li>
                                        <li>C#</li>
                                        <li>JavaScript</li>
                                        <li>HTML5</li>
                                        <li>css</li>
                                    </td>

                                    <td>
                                        <li>SQL Server</li>
                                        <li>Oracle</li>
                                        <li>HeidiSQL</li>
                                        <li>PostgreSQL</li>
                                    </td>

                                    <td>
                                        <li>Firestore</li>
                                        <li>Cosmos DB</li>
                                    </td>

                                </tr>

                            </table>
                        </fieldset>

                        <fieldset>
                            <legend><strong>Herramientas</strong></legend>
                            <table>
                                <tr>
                                    <th scope="col"><strong>Introuccion a EOD</strong></th>
                                </tr>
// Permite acceder y manda llamar a los demás programas
                                <tr>
                                    <td>
                                        <li><a href="javascript:popUp('prueba')">Hola Mundo</a></li>
                                    </td>
                                    <td>
                                        <li><a href="javascript:popUp('AdivinaNum.html')">Adivina el numero</a></li>
                                    </td>
                                    <td>
                                        <li><a href="javascript:popUp('Animal')">Adivina el animal</a></li>
                                    </td>
                                    <td>
                                        <li><a href="javascript:popUp('Lenguaje')">Mostrar lenguajes</a></li>
                                    </td>
                                    <td>
                                        <li><a href="javascript:popUp('Clase cola')">Genera una cola</a></li>
                                    </td>
                                    <td>
                                        <li><a href="javascript:popUp('Clase lista')">Busca en una pila</a></li>
                                    </td>
                                    <td>
                                        <li><a href="javascript:popUp('ClaseListaEnlazada')">Busca en una lista enlazada</a></li>
                                    </td>
                                    <td>
                                        <li><a href="javascript:popUp('MenuDeOperaciones')">Obtener información</a></li>
                                    </td>
                                </tr>

                            </table>
                        </fieldset>


                    </section>

                </body>

            </html>
        </></></>;
