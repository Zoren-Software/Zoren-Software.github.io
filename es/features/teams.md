# Equipos

Gestiona tus equipos de forma eficiente en VolleyTrack. Esta sección cubre todas las funcionalidades relacionadas con la gestión de equipos.

## 📋 Listado de Equipos

![Equipos](./images/teams.png)

En la pantalla de listado de equipos, tienes acceso a las siguientes funcionalidades:

### Funcionalidades Principales

- **Agregar**: Crea un nuevo equipo.
- **Eliminar**: Elimina equipos existentes.
- **Buscar**: Localiza equipos registrados.
- **Limpiar**: Restablece los criterios de búsqueda para una nueva consulta.

### Filtros Avanzados

Utiliza filtros adicionales para refinar tu búsqueda:

- **Posiciones**: Filtra jugadores por sus posiciones.
- **Usuario**: Verifica quién realizó cambios.
- **Jugadores**: Encuentra equipos que incluyan jugadores específicos.

---

## 📊 Estadísticas del Equipo

Al hacer clic en **"Ver Estadísticas"** en el listado de equipos o en el Dashboard, se abrirá un modal que muestra información detallada y estadísticas del equipo seleccionado.

![Estadísticas del Equipo](./images/modal-team-information.png)

### Encabezado del Modal

- **Avatar del Equipo**: Círculo de color con número o inicial del equipo
- **Nombre del Equipo**: Nombre completo mostrado en el título del modal
- **Categoría**: Categoría y nivel del equipo (ej: Adulto, Oro)
- **Botón Cerrar**: Ícono "X" en la esquina superior derecha para cerrar el modal

### Visión General del Equipo

El modal muestra tres tarjetas principales con estadísticas consolidadas:

#### Tarjeta de Asistencia Promedio

- **Ícono**: Marca de verificación verde
- **Porcentaje**: Tasa promedio de asistencia de los jugadores (ej: 83%)
- **Descripción**: "Asistencia Promedio" con explicación "Promedio de asistencia de los jugadores en los entrenamientos finalizados"

#### Tarjeta de Jugadores

- **Ícono**: Ícono azul que representa personas
- **Total**: Número total de jugadores registrados en el equipo (ej: 2 Jugadores)
- **Descripción**: "Total de jugadores en el equipo"

#### Tarjeta de Entrenamientos

- **Ícono**: Ícono naranja que representa entrenamientos
- **Estadísticas**: Formato "X/Y Entrenamientos" donde:
  - X: Número de entrenamientos finalizados
  - Y: Número total de entrenamientos registrados
- **Descripción**: "Solo se consideran los entrenamientos finalizados en las estadísticas" con ícono de información

### Jugadores del Equipo

Esta sección lista todos los jugadores del equipo con sus estadísticas individuales.

#### Información por Jugador

Para cada jugador del equipo, verás:

- **Posición en el Ranking**: Badge de color que muestra la posición del jugador en el ranking del equipo (ej: 1º, 2º)
- **Avatar**: Círculo de color con la inicial del jugador
- **Nombre**: Nombre completo del jugador
- **Posición**: Posición del jugador en el equipo (ej: Armador, Punta)
- **Porcentaje de Asistencia**: Tasa de asistencia del jugador (ej: 100%, 67%)
- **Estadísticas**: Formato "X/Y" (asistencias/total de entrenamientos)
- **Entrenamientos Pendientes**: Información sobre entrenamientos programados (ej: "89 Entrenamientos Pendientes")

#### Visión Técnica de los Entrenamientos por Jugador

Cada jugador tiene su propia sección con gráfico radar:

- **Gráfico Radar Individual**: Muestra el desempeño del jugador en cada fundamental:
  - **Saque**: Valor de desempeño en el saque
  - **Recepción**: Valor de desempeño en la recepción
  - **Ataque**: Valor de desempeño en el ataque
  - **Bloqueo**: Valor de desempeño en el bloqueo
  - **Defensa**: Valor de desempeño en la defensa
  - **Levantamiento**: Valor de desempeño en el levantamiento

- **Escala**: Valores de 0 a 100, con marcas en 20, 40, 60, 80 y 100
- **Visualización**: Polígono naranja relleno que conecta los valores de cada fundamental
- **Comparación**: Permite comparar el desempeño entre diferentes jugadores del mismo equipo

### Funcionalidades del Modal

- **Visualización Detallada**: Accede a estadísticas completas de cada jugador del equipo
- **Comparación de Desempeño**: Compara el desempeño de los jugadores a través de los gráficos radar
- **Ranking Interno**: Ve la posición de cada jugador en el ranking de asistencia del equipo
- **Análisis Técnico**: Identifica fortalezas y áreas de mejora de cada jugador

### Acciones del Modal

- **Cancelar**: Botón gris para cancelar y cerrar el modal
- **Cerrar**: Botón naranja para cerrar el modal

---

---

## 🔄 Relacionamiento Automático con Entrenamientos Futuros

VolleyTrack posee una funcionalidad automática que facilita la gestión de jugadores y entrenamientos, ahorrando tiempo y garantizando la consistencia de los datos.

### Cómo Funciona

Cuando agregas o remueves un jugador de un equipo que ya posee entrenamientos futuros registrados, el sistema automáticamente:

1. **Al Agregar un Jugador**: El jugador es automáticamente incluido en todos los entrenamientos futuros del equipo a partir de la fecha actual.
2. **Al Remover un Jugador**: El jugador es automáticamente removido de todos los entrenamientos futuros del equipo a partir de la fecha actual.

### Detalles Importantes

- ✅ **Solo Entrenamientos Futuros**: La automatización afecta solo entrenamientos con fecha igual o posterior a la fecha actual
- ✅ **Preserva Historial**: Los entrenamientos pasados o ya finalizados no son modificados, preservando el historial de asistencia
- ✅ **Sincronización Automática**: El relacionamiento se mantiene automáticamente, garantizando consistencia
- ✅ **Ahorro de Tiempo**: No es necesario agregar o remover manualmente cada jugador de cada entrenamiento

### Ejemplo Práctico

**Escenario 1 - Agregando un Jugador:**
1. El equipo "5 Squadra B" posee entrenamientos futuros registrados de enero a diciembre de 2026
2. En marzo, agregas un nuevo jugador al equipo
3. El sistema automáticamente agrega este jugador a todos los entrenamientos futuros del equipo a partir de marzo
4. El jugador aparecerá automáticamente en la llamada de todos los entrenamientos futuros

**Escenario 2 - Removiendo un Jugador:**
1. Un jugador forma parte del equipo "5 Squadra B" y está relacionado a los entrenamientos futuros
2. En junio, eliminas este jugador del equipo
3. El sistema automáticamente remueve este jugador de todos los entrenamientos futuros a partir de junio
4. El jugador no aparecerá más en la llamada de los entrenamientos futuros, pero el historial de asistencia en entrenamientos pasados es preservado

::: tip CONSEJO
Esta funcionalidad automatiza y facilita el trabajo de los técnicos, eliminando la necesidad de relacionar manualmente cada jugador a cada entrenamiento futuro. ¡El sistema cuida de toda la sincronización automáticamente!
:::

---

## 💡 Consejos

- Usa los filtros avanzados para encontrar equipos específicos rápidamente.
- Verifica el historial de cambios a través del filtro de usuario.
- Relaciona jugadores a los equipos para facilitar la gestión de entrenamientos.
- **Visualiza Estadísticas**: Haz clic en "Ver Estadísticas" para ver análisis completos del equipo.
- **Compara Jugadores**: Usa los gráficos radar para comparar el desempeño de los jugadores del equipo.
- **Monitorea Asistencia**: Acompaña la asistencia promedio del equipo e identifica jugadores que necesitan atención.
- **Relacionamiento Automático**: Al agregar o remover jugadores de un equipo, el sistema automáticamente actualiza los entrenamientos futuros.

---

## 🔙 Navegación

[← Volver a la página inicial](./index.md)
