# Usando las Funcionalidades de VolleyTrack

## Página de Inicio

![Página de Inicio](./images/home.png)

En la pantalla principal, tienes acceso rápido a las tres funcionalidades principales:

- **Registrar Jugadores**
- **Registrar Equipos**
- **Registrar Entrenamientos**

## Entrenamientos

![Entrenamientos](./images/trainings.png)

Gestiona tus entrenamientos con las siguientes opciones:

- **Agregar**: Crea un nuevo entrenamiento.
- **Eliminar**: Elimina entrenamientos existentes.
- **Buscar**: Encuentra entrenamientos registrados.
- **Limpiar**: Restablece los criterios de búsqueda para una nueva consulta.
- **Filtros Avanzados**: Refina tu búsqueda utilizando filtros como:
  - **Equipos**: Filtra por equipos específicos.
  - **Usuario**: Identifica quién realizó cambios.
  - **Jugadores**: Selecciona entrenamientos que incluyan jugadores específicos.
  - **Fecha de Inicio y Fin**: Define un rango de fechas para los entrenamientos.

### Editar Entrenamiento / Información del Entrenamiento

Al hacer clic en **Editar** en un entrenamiento existente, serás dirigido a un formulario dividido en tres pasos. Navega entre los pasos usando los botones **Anterior** y **Siguiente** y, al finalizar, haz clic en **Guardar**. También puedes usar los botones **Finalizar Entrenamiento** o **Cancelar Entrenamiento** según sea necesario.

#### Paso 1: Información Esencial

![Editar Entrenamiento - Información Esencial](./images/training-info-part-1.png)

1.1. **Nombre**: Ingresa o edita el nombre del entrenamiento para identificación.

1.2. **Fecha del Entrenamiento**: Selecciona la fecha del entrenamiento usando el selector de fecha en formato **DD/MM/AAAA**.

1.3. **Hora de Inicio**: Define la hora de inicio del entrenamiento en formato de 12 horas (ej: 4:08 PM).

1.4. **Hora de Fin**: Define la hora de finalización del entrenamiento en formato de 12 horas (ej: 5:08 PM).

1.5. **Descripción del Entrenamiento**: Agrega una descripción detallada sobre el contenido y objetivos del entrenamiento.

1.6. **Estado del Entrenamiento**: Selecciona el estado actual del entrenamiento:
   - **PENDING**: Entrenamiento programado, aún no realizado.
   - **FINISHED**: Entrenamiento finalizado.
   - **CANCELLED**: Entrenamiento cancelado.

1.7. **Fundamentos**: Gestiona los fundamentos generales relacionados con el entrenamiento:
   - Visualiza los fundamentos ya asociados en la tabla.
   - Elimina fundamentos haciendo clic en el ícono de **papelera** en la columna "ACCIONES".

1.8. **Fundamentos Específicos**: Gestiona los fundamentos específicos del entrenamiento:
   - Visualiza los fundamentos específicos ya asociados en la tabla.
   - Elimina fundamentos específicos haciendo clic en el ícono de **papelera** en la columna "ACCIONES".

1.9. **Relacionar Equipo**: Asocia un equipo al entrenamiento:
   - Si ya hay un equipo relacionado, se mostrará en la tabla.
   - Elimina la relación haciendo clic en el ícono de **papelera** en la columna "ACCIONES".

1.10. **Jugadores Relacionados**: Visualiza los jugadores que forman parte del equipo relacionado:
   - Cada jugador se muestra con avatar, nombre, teléfono y posiciones.
   - Los jugadores se incluyen automáticamente cuando se relaciona un equipo.

1.11. **Jugadores Independientes**: Agrega jugadores que no forman parte del equipo relacionado:
   - Haz clic en **"BUSCAR Y SELECCIONAR JUGADORES INDEPENDIENTES"** para abrir la búsqueda.
   - Escribe el nombre del jugador en el campo de búsqueda.
   - Haz clic en **"+ Agregar Jugador Independiente"** para incluir al jugador en el entrenamiento.
   - Los jugadores independientes agregados aparecerán en la sección "Jugadores Independientes Agregados".

#### Paso 2: Llamada del Entrenamiento

![Editar Entrenamiento - Llamada del Entrenamiento](./images/training-info-part-2.png)

2.1. **Métricas del Entrenamiento - Intención de Presencia**: Visualiza las estadísticas de confirmación de los jugadores:
   - **Confirmados**: Cantidad y porcentaje de jugadores que confirmaron asistencia.
   - **Pendientes**: Cantidad y porcentaje de jugadores que aún no han respondido.
   - **Rechazados**: Cantidad y porcentaje de jugadores que rechazaron la invitación.
   - **Total de Personas en el Equipo**: Número total de personas relacionadas con el entrenamiento.

2.2. **Métricas del Entrenamiento - Presencia Real**: Visualiza las estadísticas de asistencia efectiva:
   - **Presentes**: Cantidad y porcentaje de jugadores que asistieron.
   - **Ausentes**: Cantidad y porcentaje de jugadores que no asistieron.

2.3. **Barras de Progreso**: Acompaña visualmente las métricas a través de barras de progreso:
   - **Respuestas de Intención de Presencia**: Barra naranja que muestra el porcentaje de respuestas recibidas.
   - **Presencia en el Entrenamiento**: Barra verde que muestra el porcentaje de presencia real.

2.4. **Jugadores Relacionados - Gestión Individual**: Para cada jugador listado, puedes:
   - Visualizar información: nombre, posición y teléfono de contacto.
   - **Intención de Presencia**: 
     - Visualizar el estado actual (Confirmado, Pendiente o Rechazado).
     - Haz clic en **"Confirmar"** para marcar la intención como confirmada.
     - Haz clic en **"Rechazar"** para marcar la intención como rechazada.
   - **Presencia Real**:
     - Visualizar el estado actual (Presente o Ausente).
     - Haz clic en **"Marcar como Presente"** para registrar la presencia.
     - Haz clic en **"Marcar como Ausente"** para registrar la ausencia.

#### Paso 3: Marcaciones de Scouts

![Editar Entrenamiento - Marcaciones de Scouts](./images/training-info-part-3.png)

3.1. **Selección de Jugador**: En el panel lateral izquierdo:
   - Utiliza el filtro **"FILTRAR POR POSICIÓN"** para filtrar jugadores por posición específica.
   - Selecciona un jugador de la lista para visualizar y editar sus scouts.
   - El jugador seleccionado será destacado visualmente.

3.2. **Filtro de Fundamentos**: En el panel superior derecho:
   - Utiliza el filtro **"FILTRAR FUNDAMENTOS"** para enfocarte en fundamentos específicos durante la marcación.

3.3. **Marcación de Scouts por Fundamentos**: Para cada fundamento (Saque, Recepción, Ataque, Bloqueo, Defensa, Levantamiento):
   - **Botones de Evaluación**: Haz clic en los botones de colores para registrar las acciones:
     - **A+** (Verde): Acciones positivas/excelentes - incrementa el contador.
     - **B+** (Amarillo): Acciones regulares/neutras - incrementa el contador.
     - **C+** (Rojo): Acciones negativas/errores - incrementa el contador.
   - **Lista de Resultados**: Visualiza los resultados específicos registrados:
     - Cada resultado se muestra con un indicador de color (verde, naranja o rojo).
     - Los resultados se categorizan automáticamente según el tipo de acción.
   - **Total**: Visualiza el total de acciones registradas para el fundamento.
   - **Feedback Específico**: Agrega observaciones técnicas específicas para el fundamento en el campo de texto disponible.

3.4. **Observaciones Técnicas Generales**: Al final de la página:
   - Agrega observaciones generales sobre el rendimiento del jugador en el campo de texto **"Observaciones Técnicas Generales"**.

![Editar Entrenamiento - Estadísticas de Scouts](./images/training-info-part-3-statistics.png)

3.5. **Visualización de Estadísticas**: Al cambiar a la pestaña **"Estadísticas"**, tendrás acceso a:

3.6. **Resumen de la Evaluación**:
   - **Total de Evaluaciones**: Número total de acciones registradas para el jugador.
   - **Eficiencia (A)**: Porcentaje de acciones clasificadas como excelentes.
   - **Regular (B)**: Porcentaje de acciones clasificadas como regulares.
   - **Errores (C)**: Porcentaje de acciones clasificadas como errores.

3.7. **Rendimiento por Fundamentos**: Visualiza el rendimiento del jugador en cada fundamento:
   - Cada fundamento muestra una barra de progreso visual.
   - La barra muestra la distribución entre acciones positivas (verde) y regulares/errores (naranja/rojo).
   - Un valor numérico indica la cantidad total de acciones registradas.

3.8. **Gráfico Radar**: Visualiza el rendimiento del jugador de forma gráfica:
   - El gráfico radar presenta seis ejes, uno para cada fundamento.
   - Los valores numéricos se trazan en cada eje.
   - El área rellena representa el perfil de rendimiento general del jugador.

3.9. **Sugerencias de Mejora**:
   - **Mejor Fundamentos**: Muestra el fundamento con mejor rendimiento y su porcentaje.
   - **Necesita Mejorar**: Muestra el fundamento que necesita más atención y su porcentaje.

3.10. **Acciones Finales**: Utiliza los botones en el pie de página:
   - **Guardar Scouts**: Guarda las marcaciones de scouts realizadas.
   - **Finalizar Entrenamiento**: Finaliza el entrenamiento después de completar todas las marcaciones.
   - **Cancelar Entrenamiento**: Cancela el entrenamiento y descarta los cambios.
   - **Guardar**: Guarda el progreso sin finalizar el entrenamiento.



## Equipos

![Equipos](./images/teams.png)

Gestiona tus equipos a través de las siguientes funcionalidades:

- **Agregar**: Crea un nuevo equipo.
- **Eliminar**: Borra equipos existentes.
- **Buscar**: Encuentra equipos registrados.
- **Limpiar**: Restablece los criterios de búsqueda para una nueva consulta.
- **Filtros Avanzados**: Utiliza filtros adicionales, como:
  - **Posiciones**: Filtra jugadores por sus posiciones.
  - **Usuario**: Verifica quién realizó cambios.
  - **Jugadores**: Encuentra equipos que incluyan jugadores específicos.

## Jugadores

![Jugadores](./images/players.png)

Organiza y gestiona a los jugadores con las siguientes funcionalidades:

- **Agregar**: Registra un nuevo jugador.
- **Eliminar**: Elimina jugadores existentes.
- **Buscar**: Encuentra jugadores registrados.
- **Limpiar**: Restablece los criterios de búsqueda para una nueva consulta.
- **Filtros Avanzados**: Refina tu búsqueda utilizando filtros como:
  - **Posiciones**: Filtra jugadores por sus posiciones.
  - **Equipos**: Selecciona jugadores que pertenezcan a equipos específicos.

### Agregar un Nuevo Jugador

Al hacer clic en **Agregar**, serás dirigido a un formulario dividido en pasos. Navega entre los pasos usando los botones **Anterior** y **Siguiente** y, al finalizar, haz clic en **Guardar**.

#### 1. Información Esencial

![Agregar Jugador](./images/player-informations-1.png)

1.1. **Nombre**: Ingresa el nombre completo del jugador para una identificación precisa.

1.2. **Correo Electrónico**: Proporciona un correo válido que se utilizará para el inicio de sesión y recuperación de cuenta.

#### 2. Información Personal

![Agregar Jugador](./images/player-informations-2.png)

2.1. **Fecha de Nacimiento**: Ingresa la fecha en formato **DD/MM/AAAA**.

2.2. **Celular**: Introduce el número con código de área, por ejemplo: **(11) 91234-5678**.

2.3. **CPF**: Ingresa el número de CPF sin puntos ni guiones, solo los números.

2.4. **RG**: Ingresa el número de RG, pudiendo incluir puntos y dígito verificador.

#### 3. Permisos

![Agregar Jugador](./images/player-permissions.png)

3.1. **Nivel de Acceso**: Define el rol del usuario en la plataforma:

- **Entrenador**: Para usuarios que gestionarán equipos y entrenamientos.
- **Jugador**: Para atletas que seguirán su rendimiento.

#### 4. Posición

![Agregar Jugador](./images/player-positions.png)

4.1. **Posiciones**: Selecciona la posición del jugador en el equipo:

- **Central**: Responsable de bloqueos y ataques rápidos por el centro de la red.
- **Armador** (Levantador): Organiza las jugadas y distribuye los pases.
- **Líbero**: Especialista en recepción y defensa, no participa en el ataque.
- **Opuesto**: Principal atacante del equipo, normalmente finaliza las jugadas.
- **Punta** (Receptor/Ataque): Actúa en los extremos, apoyando en ataque y recepción.

4.2. **Relacionar**: Luego de seleccionar una posición, haz clic en **Relacionar** para asociar al jugador. Un jugador puede tener múltiples posiciones.

4.3. **Eliminar**: Para quitar una posición asociada, haz clic en el ícono de **papelera** en la sección de acciones correspondiente.

#### 5. Equipos

![Agregar Jugador](./images/player-teams.png)

5.1. **Equipos**: Selecciona los equipos a los que pertenece el jugador. Haz clic en **Relacionar** para asociarlo.

Estas funcionalidades te permiten gestionar eficientemente tus equipos y entrenamientos dentro de **VolleyTrack**.
