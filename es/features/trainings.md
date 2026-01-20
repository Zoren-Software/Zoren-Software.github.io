# Entrenamientos

Gestiona tus entrenamientos con eficiencia en VolleyTrack. Esta sección cubre desde el listado de entrenamientos hasta la edición completa con marcaciones de scouts.

## 📋 Listado de Entrenamientos

![Entrenamientos](./images/trainings.png)

En la pantalla de listado de entrenamientos, tienes acceso a las siguientes funcionalidades:

### Funcionalidades Principales

- **Agregar**: Crea un nuevo entrenamiento.
- **Eliminar**: Elimina entrenamientos existentes.
- **Buscar**: Encuentra entrenamientos registrados.
- **Limpiar**: Restablece los criterios de búsqueda para una nueva consulta.

### Filtros Avanzados

Refina tu búsqueda utilizando filtros como:

- **Equipos**: Filtra por equipos específicos.
- **Usuario**: Identifica quién realizó cambios.
- **Jugadores**: Selecciona entrenamientos que incluyan jugadores específicos.
- **Fecha de Inicio y Fin**: Define un rango de fechas para los entrenamientos.

---

## 📅 Registrar Entrenamientos Futuros

La funcionalidad **"Registrar Entrenamientos Futuros"** permite crear múltiples entrenamientos a la vez, facilitando la planificación y organización de toda la temporada. Esta herramienta es ideal para registrar entrenamientos recurrentes basados en días de la semana y períodos específicos.

![Registrar Entrenamientos Futuros](./images/register-trainings-future.png)

### Cómo Acceder

En la pantalla de listado de entrenamientos, haz clic en el botón **"Registrar Entrenamientos Futuros"** (ícono de calendario) ubicado en la barra de acciones.

### Sección 1: Información Básica

#### Equipo

- **Campo Obligatorio**: Selecciona el equipo para el cual se crearán los entrenamientos.
- **Lista Desplegable**: Elige el equipo deseado en la lista desplegable.
- **Importante**: Todos los entrenamientos creados estarán asociados al equipo seleccionado.

#### Año

- **Campo Obligatorio**: Ingresa el año de referencia para los entrenamientos.
- **Formato**: Escribe el año en formato numérico (ej: 2026).
- **Uso**: El año se utiliza para organizar y filtrar los entrenamientos creados.

### Sección 2: Período y Horarios

#### Fecha de Inicio

- **Campo Obligatorio**: Selecciona la fecha inicial del período de entrenamientos.
- **Formato**: DD/MM/AAAA (ej: 19/01/2026).
- **Selector de Fecha**: Haz clic en el ícono de calendario para abrir el selector de fechas.
- **Uso**: Define el primer día en que se pueden crear entrenamientos.

#### Fecha de Fin

- **Campo Obligatorio**: Selecciona la fecha final del período de entrenamientos.
- **Formato**: DD/MM/AAAA (ej: 31/12/2026).
- **Selector de Fecha**: Haz clic en el ícono de calendario para abrir el selector de fechas.
- **Uso**: Define el último día en que se pueden crear entrenamientos.
- **Nota Informativa**: "Los entrenamientos se crearán en el período entre las fechas seleccionadas"

#### Horario de Inicio

- **Campo Obligatorio**: Define la hora de inicio de los entrenamientos.
- **Formato**: HH:MM (ej: 18:00).
- **Selector de Horario**: Haz clic en el ícono de reloj para abrir el selector de horarios.
- **Aplicación**: Todos los entrenamientos creados tendrán este horario de inicio.

#### Horario de Fin

- **Campo Obligatorio**: Define la hora de finalización de los entrenamientos.
- **Formato**: HH:MM (ej: 19:00).
- **Selector de Horario**: Haz clic en el ícono de reloj para abrir el selector de horarios.
- **Aplicación**: Todos los entrenamientos creados tendrán este horario de finalización.

### Sección 3: Días de la Semana

Selecciona los días de la semana en que se deben crear los entrenamientos:

- **Domingo**: Marca para crear entrenamientos los domingos.
- **Lunes**: Marca para crear entrenamientos los lunes.
- **Martes**: Marca para crear entrenamientos los martes.
- **Miércoles**: Marca para crear entrenamientos los miércoles.
- **Jueves**: Marca para crear entrenamientos los jueves.
- **Viernes**: Marca para crear entrenamientos los viernes.
- **Sábado**: Marca para crear entrenamientos los sábados.

**Consejo**: Puedes seleccionar múltiples días de la semana. Los entrenamientos solo se crearán en los días seleccionados que caigan dentro del período definido.

### Información Importante

El sistema muestra una nota informativa explicando cómo se crearán automáticamente los entrenamientos:

#### Nombres de los Entrenamientos

- **Formato Automático**: Los entrenamientos recibirán nombres provisionales en el formato "Nombre del entrenamiento #1", "Nombre del entrenamiento #2", etc.
- **Edición Posterior**: Podrás cambiar el nombre de cada entrenamiento individualmente en la edición del entrenamiento.
- **Personalización**: Después de la creación, edita cada entrenamiento para dar nombres más descriptivos.

#### Descripciones de los Entrenamientos

- **Campo Vacío Inicialmente**: Los entrenamientos se crearán sin descripción.
- **Adición Posterior**: Podrás agregar descripciones detalladas en la edición de cada entrenamiento.
- **Recomendación**: Describe el contenido y objetivos de cada entrenamiento después de la creación.

#### Fundamentos de los Entrenamientos

- **No Definidos Inicialmente**: Los fundamentos no se asociarán automáticamente.
- **Definición en la Edición**: Los fundamentos deben definirse individualmente en la edición de cada entrenamiento.
- **Importante**: Recuerda asociar los fundamentos relevantes a cada entrenamiento después de la creación.

### Acciones del Modal

- **Cancelar**: Botón blanco con texto gris para cancelar la operación y cerrar el modal sin crear entrenamientos.
- **Registrar**: Botón naranja con texto blanco para confirmar y crear los entrenamientos según la configuración definida.

### Proceso de Creación

1. **Validación**: El sistema valida todos los campos obligatorios antes de crear los entrenamientos.
2. **Generación Automática**: Los entrenamientos se crean automáticamente para cada día seleccionado que esté dentro del período definido.
3. **Estado Inicial**: Todos los entrenamientos se crean con estado "Agendado" (PENDING).
4. **Asociación**: Todos los entrenamientos se asocian automáticamente al equipo seleccionado.
5. **Jugadores**: Los jugadores del equipo relacionado se incluyen automáticamente en cada entrenamiento creado.

### Consejos de Uso

- **Planificación Anual**: Usa esta funcionalidad para planificar toda la temporada de una vez.
- **Entrenamientos Recurrentes**: Ideal para entrenamientos que ocurren regularmente en los mismos días de la semana.
- **Personalización Posterior**: Después de crear los entrenamientos en masa, edita cada uno individualmente para agregar descripciones, fundamentos y otra información específica.
- **Verificación**: Después de crear los entrenamientos, verifica el listado para confirmar que todos se crearon correctamente.
- **Ahorro de Tiempo**: Esta funcionalidad ahorra tiempo significativo al evitar la creación manual de cada entrenamiento.

---

## 🔄 Relacionamiento Automático de Jugadores

VolleyTrack posee una funcionalidad automática que sincroniza jugadores con entrenamientos futuros, facilitando el trabajo de los técnicos.

### Cómo Funciona

Cuando los entrenamientos futuros ya están registrados en el sistema, el relacionamiento de jugadores con estos entrenamientos es gestionado automáticamente:

#### Al Agregar un Jugador a un Equipo

Cuando un jugador es relacionado a un equipo que posee entrenamientos futuros:

- ✅ El jugador es **automáticamente agregado** a todos los entrenamientos futuros del equipo
- ✅ Solo se consideran entrenamientos con fecha igual o posterior a la fecha actual
- ✅ El jugador aparecerá automáticamente en la llamada de todos los entrenamientos futuros

#### Al Remover un Jugador de un Equipo

Cuando un jugador es removido de un equipo:

- ✅ El jugador es **automáticamente removido** de todos los entrenamientos futuros del equipo
- ✅ Solo se afectan entrenamientos con fecha igual o posterior a la fecha actual
- ✅ El historial de asistencia en entrenamientos pasados es preservado

### Beneficios

- **Automatización Completa**: No es necesario relacionar manualmente cada jugador a cada entrenamiento futuro
- **Sincronización Automática**: El sistema mantiene la consistencia entre equipos y entrenamientos automáticamente
- **Ahorro de Tiempo**: Reduce significativamente el trabajo manual de los técnicos
- **Consistencia de Datos**: Garantiza que todos los jugadores del equipo estén siempre sincronizados

### Ejemplo Práctico

1. Registras entrenamientos futuros para el equipo "5 Squadra B" de enero a diciembre de 2026
2. En marzo, agregas un nuevo jugador al equipo "5 Squadra B"
3. El sistema automáticamente agrega este jugador a todos los entrenamientos futuros del equipo a partir de marzo
4. El jugador aparecerá automáticamente en la llamada de todos los entrenamientos futuros
5. Si eliminas este jugador del equipo en junio, será automáticamente removido de los entrenamientos futuros a partir de junio

::: tip CONSEJO IMPORTANTE
Esta funcionalidad funciona solo con entrenamientos futuros (con fecha igual o posterior a la fecha actual). Los entrenamientos pasados o ya finalizados no son modificados automáticamente, preservando el historial de asistencia y garantizando la integridad de los datos históricos.
:::

---

## ✏️ Editar Entrenamiento / Información del Entrenamiento

 / Información del Entrenamiento

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





---

## 🔙 Navegación

[← Volver a la página inicial](./index.md)
