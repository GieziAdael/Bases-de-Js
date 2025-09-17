## Descripción del proyecto

Esta pequeña aplicación web muestra **oportunidades laborales recomendadas según la edad** que ingrese el usuario.  
El flujo de uso es sencillo:

1. El usuario escribe su **nombre (opcional)** y su **edad** en un formulario.
2. Al enviar los datos, un script en **JavaScript** evalúa la edad y:
   - Si la persona es **mayor de 17 años**, sugiere áreas de trabajo formales (por ejemplo: Frontend, Backend, DevOps, etc.).
   - Si la persona tiene **entre 15 y 17 años**, muestra opciones de **trabajos informales o de iniciación** (por ejemplo: trabajos freelance, aprendizaje en Frontend básico, diseño UI/UX).
   - Si la edad es **menor de 15 años**, indica que el acceso a oportunidades laborales es muy limitado.

El resultado se despliega dinámicamente en la misma página en forma de **lista con categorías y tecnologías sugeridas**.

---

### Tecnologías utilizadas
- **HTML5**: estructura de la página y formulario.
- **JavaScript (puro)**: lógica para procesar la edad, generar un diccionario de áreas laborales y renderizar los resultados.


---

### Cómo ejecutarlo
1. Descarga o clona el repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa los datos en el formulario y haz clic en **“Enviar Datos sensuales”** para ver las recomendaciones.

Tambien puedes usarlo desde GitHub Pages

---

### Objetivo didáctico
Este proyecto es un **ejercicio práctico de JavaScript**, ideal para:
- Aprender a **capturar datos de un formulario**.
- Manipular el **DOM** para mostrar resultados dinámicos.
- Practicar el uso de **objetos y condicionales** en JS.
