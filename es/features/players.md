# Jugadores

Organiza y gestiona a los jugadores de tu club en VolleyTrack. Esta sección cubre desde el registro hasta la gestión completa de información de los jugadores.

## 📋 Listado de Jugadores

![Jugadores](./images/players.png)

En la pantalla de listado de jugadores, tienes acceso a las siguientes funcionalidades:

### Funcionalidades Principales

- **Agregar**: Registra un nuevo jugador.
- **Eliminar**: Elimina jugadores existentes.
- **Buscar**: Encuentra jugadores registrados.
- **Limpiar**: Restablece los criterios de búsqueda para una nueva consulta.

### Filtros Avanzados

Refina tu búsqueda utilizando filtros como:

- **Posiciones**: Filtra jugadores por sus posiciones.
- **Equipos**: Selecciona jugadores que pertenezcan a equipos específicos.

---

## ➕ Agregar un Nuevo Jugador

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



---

## 📊 Estadísticas del Jugador

Al hacer clic en **"Detalles del jugador"** en el listado de jugadores o en el Dashboard, se abrirá un modal que muestra información detallada y estadísticas del jugador seleccionado.

![Estadísticas del Jugador](./images/modal-player-information.png)

### Encabezado del Modal

- **Avatar**: Círculo de color con la inicial del jugador
- **Nombre del Jugador**: Nombre completo mostrado en el título del modal
- **Botón Cerrar**: Ícono "X" en la esquina superior derecha para cerrar el modal

### Estadísticas de Asistencia y Entrenamientos

El modal muestra dos tarjetas principales con estadísticas consolidadas:

#### Tarjeta de Asistencia

- **Ícono**: Marca de verificación verde
- **Porcentaje**: Tasa de asistencia en los entrenamientos finalizados (ej: 100%)
- **Descripción**: "Asistencia" con explicación "Porcentaje de asistencia en los entrenamientos finalizados"

#### Tarjeta de Entrenamientos

- **Ícono**: Ícono naranja que representa entrenamientos
- **Estadísticas**: Formato "X / Y / Z" donde:
  - X: Número de asistencias
  - Y: Número total de entrenamientos finalizados
  - Z: Otro indicador relacionado
- **Descripción**: "Entrenamientos" con ícono de información
- **Nota**: "Solo se consideran los entrenamientos finalizados en las estadísticas"

### Posición del Jugador

- **Sección**: "Posición"
- **Badge**: Badge gris que muestra la posición del jugador (o "Sin posición" si no hay posición asociada)

### Visión Técnica de los Entrenamientos

Esta sección presenta un gráfico radar que visualiza el desempeño del jugador en cada fundamental:

#### Gráfico Radar

- **Ejes**: Seis ejes que representan los fundamentos:
  - **Saque**: Valor de desempeño en el saque
  - **Recepción**: Valor de desempeño en la recepción
  - **Ataque**: Valor de desempeño en el ataque
  - **Bloqueo**: Valor de desempeño en el bloqueo
  - **Defensa**: Valor de desempeño en la defensa
  - **Levantamiento**: Valor de desempeño en el levantamiento

- **Escala**: Valores de 0 a 100, con marcas en 20, 40, 50, 80 y 100
- **Visualización**: Polígono naranja relleno que conecta los valores de cada fundamental
- **Interpretación**: Cuanto mayor sea el área rellena, mejor será el desempeño general del jugador

### Ranking de Asistencia en los Equipos

Esta sección muestra el desempeño del jugador en cada equipo al que pertenece:

#### Información por Equipo

Para cada equipo relacionado, verás:

- **Avatar del Equipo**: Círculo de color con identificador del equipo
- **Nombre del Equipo**: Nombre completo del equipo
- **Categoría**: Categoría y nivel (ej: Sub-17, Plata)
- **Porcentaje de Asistencia**: Tasa de asistencia del jugador en ese equipo específico
- **Posición en el Ranking**: Badge gris que muestra la posición del jugador en el ranking del equipo (ej: 2º)
- **Estadísticas Detalladas**:
  - **Asistencias**: Formato "X/Y" (asistencias/total de entrenamientos)
  - **Total de Jugadores en el Equipo**: Número total de jugadores registrados en el equipo

### Acciones del Modal

- **Cancelar**: Botón gris para cancelar y cerrar el modal
- **Cerrar**: Botón naranja para cerrar el modal

---

---

## 🔄 Relacionamiento Automático con Entrenamientos Futuros

VolleyTrack posee una funcionalidad automática que facilita la gestión de jugadores y entrenamientos, ahorrando tiempo y garantizando la consistencia de los datos.

### Cómo Funciona

Cuando un jugador es relacionado a un equipo que ya posee entrenamientos futuros registrados, el sistema automáticamente:

1. **Agrega el Jugador a los Entrenamientos Futuros**: El jugador es automáticamente incluido en todos los entrenamientos futuros del equipo a partir de la fecha actual.
2. **Mantiene la Sincronización**: El relacionamiento se mantiene automáticamente, garantizando que el jugador aparezca en todos los entrenamientos programados.

### Cuándo Ocurre

Esta automatización ocurre en dos situaciones principales:

#### 1. Al Agregar un Jugador a un Equipo

Cuando relacionas un jugador a un equipo (ya sea durante el registro del jugador o posteriormente):

- ✅ El jugador es automáticamente agregado a todos los entrenamientos futuros del equipo
- ✅ Solo se consideran entrenamientos con fecha igual o posterior a la fecha actual
- ✅ Los entrenamientos pasados o ya finalizados no son afectados

#### 2. Al Remover un Jugador de un Equipo

Cuando eliminas la relación de un jugador con un equipo:

- ✅ El jugador es automáticamente removido de todos los entrenamientos futuros del equipo
- ✅ Solo se afectan entrenamientos con fecha igual o posterior a la fecha actual
- ✅ El historial de asistencia en entrenamientos pasados es preservado

### Beneficios

- **Ahorro de Tiempo**: No es necesario agregar manualmente cada jugador a cada entrenamiento futuro
- **Consistencia**: Garantiza que todos los jugadores del equipo estén siempre sincronizados con los entrenamientos
- **Automatización Inteligente**: El sistema cuida de la sincronización automáticamente, evitando errores manuales
- **Facilita el Trabajo de los Técnicos**: Reduce significativamente el trabajo manual de gestión

### Ejemplo Práctico

1. Registras entrenamientos futuros para el equipo "5 Squadra B" de enero a diciembre de 2026
2. En marzo, agregas un nuevo jugador al equipo "5 Squadra B"
3. El sistema automáticamente agrega este jugador a todos los entrenamientos futuros del equipo a partir de marzo
4. Si eliminas este jugador del equipo en junio, será automáticamente removido de los entrenamientos futuros a partir de junio

::: tip CONSEJO
Esta funcionalidad funciona solo con entrenamientos futuros (con fecha igual o posterior a la fecha actual). Los entrenamientos pasados o ya finalizados no son modificados automáticamente, preservando el historial de asistencia.
:::

---

## 💡 Consejos

- Un jugador puede tener múltiples posiciones asociadas.
- Usa los filtros para encontrar jugadores rápidamente.
- Mantén la información personal actualizada para facilitar la comunicación.
- **Visualiza Estadísticas**: Haz clic en "Detalles del jugador" para ver análisis completos de desempeño.
- **Compara Desempeño**: Usa el gráfico radar para identificar fortalezas y áreas de mejora.
- **Acompaña por Equipo**: Monitorea cómo se desempeña el jugador en diferentes equipos.
- **Relacionamiento Automático**: Al agregar un jugador a un equipo, es automáticamente incluido en los entrenamientos futuros del equipo.

---

## 🔙 Navegación

[← Volver a la página inicial](./index.md)
