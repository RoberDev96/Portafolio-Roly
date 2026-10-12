# Constructora Gámez y Asociados SURL - Portafolio Web

Sitio web profesional de **Constructora Gámez y Asociados SURL**, empresa constructora liderada por el **Ing. Rolando Gámez Rodes** (Ingeniero Civil, Universidad de Matanzas Camilo Cienfuegos).

## 📋 Descripción

Este es el portafolio web oficial que presenta los servicios, proyectos, experiencia y precios de la constructora. El sitio está diseñado para mostrar la capacidad técnica de la empresa en proyectos de ingeniería, arquitectura, remodelaciones y construcción en general, con un enfoque especial en visualizaciones 3D de "antes y después" para que los clientes puedan ver el resultado final antes de construir.

## ✨ Características Principales

- **Catálogo de servicios completo**: 12 categorías de servicios (proyectos, diseño 3D, diseño estructural, decoración, remodelación, asesoría, dictámenes técnicos, venta de materiales, carpintería, presupuestos)
- **Galería "Antes y Después"**: Comparativas reales vs propuestas 3D para 8 ambientes (fachada, sala-comedor, cocina, baño, dormitorios, área bajo escalera, habitación infantil)
- **Selector de opciones 3D**: Múltiples propuestas de diseño para fachada y cocina (Opción A / Opción B)
- **Lista de precios transparente**: Precios publicados para servicios principales
- **Currículum completo del ingeniero**: Experiencia profesional, obras realizadas, proyectos de ingeniería, formación académica, docencia e investigación
- **Diseño responsive**: Funciona en móviles, tablets y escritorio
- **Modo oscuro automático**: Se adapta a la preferencia del sistema
- **Accesibilidad**: Navegación por teclado, atributos ARIA, zoom de imágenes con tecla Escape

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica y accesible |
| **CSS3** | Estilos modernos con Custom Properties (variables CSS), Grid, Flexbox |
| **JavaScript (Vanilla ES6+)** | Interactividad: zoom de imágenes, cambio de propuestas 3D, modal |
| **Google Fonts** | Tipografías: *Archivo* y *Archivo Narrow* |
| **Sin dependencias externas** | No frameworks, no build step, solo archivos estáticos |

## 📁 Estructura del Proyecto

```
portafolio-Roly/
├── index.html          # Página principal
├── style.css           # Estilos completos
├── script.js           # Interactividad (zoom, cambio de imágenes 3D)
├── img/
│   ├── logo.png                    # Logotipo de la empresa
│   ├── fachada-antes.jpg           # Fotos reales "Antes"
│   ├── fachada-despues.jpg         # Propuestas 3D "Después"
│   ├── sala-comedor-antes.jpg
│   ├── sala-comedor-despues.jpg
│   ├── cocina-antes.jpg
│   ├── cocina-despues1.jpg         # Opción A
│   ├── cocina-despues2.jpg         # Opción B
│   ├── bajo-escalera-antes.jpg
│   ├── bajo-escalera-despues.jpg
│   ├── bano-antes.jpg
│   ├── bano-despues.jpg
│   ├── dormitorio-principal-antes.jpg
│   ├── dormitorio-principal-despues.jpg
│   ├── habitacion-infantil-antes.jpg
│   └── habitacion-infantil-despues.jpg
└── README.md           # Este archivo
```

## 🚀 Cómo Ejecutar Localmente

Al ser un sitio estático sin dependencias, solo necesitas abrir `index.html` en tu navegador:

```bash
# Opción 1: Doble clic en index.html

# Opción 2: Servidor local simple (recomendado para evitar problemas de CORS con fuentes)
npx serve .
# o
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## 🌐 Despliegue en GitHub Pages

1. Sube este repositorio a GitHub
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. Branch: `main` / `master`, Folder: `/ (root)`
5. Tu sitio estará disponible en `https://tuusuario.github.io/nombre-repo/`

> **Nota**: Las fuentes de Google Fonts requieren conexión a internet. Para uso completamente offline, descarga las fuentes y úsalas localmente.

## 📱 Secciones del Sitio

| Sección | ID / Anchor | Descripción |
|---------|-------------|-------------|
| Hero / Inicio | — | Logotipo, eslogan y botones de acción (WhatsApp, servicios, antes/después, precios, currículum) |
| Servicios | `#servicios` | Grid de 12 tarjetas con todos los servicios ofrecidos |
| Antes y Después | `#antes-despues` | 8 comparativas con fotos reales vs renderizados 3D |
| Lista de Precios | `#precios` | Tabla con precios de servicios principales |
| Servicio Llave en Mano | — | Descripción del servicio integral |
| Cómo Trabajamos | — | 3 pasos: Visita → Proyecto → Ejecución |
| Sobre el Ingeniero | `#curriculum` | Perfil profesional resumido |
| Currículum Detallado | — | 6 tarjetas: experiencia, obras, proyectos, formación, docencia, reconocimientos |
| Contacto | `#contacto` | WhatsApp, Teléfono/Telegram, Correo electrónico |

## 🎨 Personalización

### Colores (CSS Custom Properties)

```css
:root {
  --bg: #fbfaf7;      /* Fondo principal */
  --ink: #141414;     /* Texto principal */
  --mut: #5b5b55;     /* Texto secundario/muted */
  --card: #fff;       /* Fondo de tarjetas */
  --line: #dcd9d0;    /* Bordes y líneas */
  --or: #f26a0f;      /* Color de marca (naranja) */
  --blk: #000;        /* Negro puro */
  --on: #fff;         /* Blanco puro */
}
```

El modo oscuro se activa automáticamente con `prefers-color-scheme: dark` o añadiendo `data-theme="dark"` al `<html>`.

### Cambiar Información de Contacto

Edita la sección `#contacto` en `index.html`:

```html
<a href="https://wa.me/TU_NUMERO"><b>WhatsApp</b><small>+XX XXXXXXXX</small></a>
<a href="tel:+XX XXXXXXXX"><b>Teléfono y Telegram</b><small>+XX XXXXXXXX</small></a>
<a href="mailto:tu@email.com"><b>Correo</b><small>tu@email.com</small></a>
```

### Actualizar Precios

Modifica la tabla en la sección `#precios` de `index.html`.

### Añadir/Modificar Proyectos "Antes y Después"

1. Añade las imágenes a la carpeta `img/`
2. Duplica un bloque `.ba-item` en `index.html`
3. Actualiza rutas `src`, textos `alt`, y botones `.ba-alt` si hay múltiples opciones

## 📞 Contacto

**Constructora Gámez y Asociados SURL**  
Ing. Rolando Gámez Rodes  
📱 WhatsApp: [+53 50942924](https://wa.me/5350942924)  
📞 Tel/Telegram: +53 51155893  
✉️ Email: [rgamezd1985@gmail.com](mailto:rgamezd1985@gmail.com)

---

## 📄 Licencia

Este proyecto es código propietario de **Constructora Gámez y Asociados SURL**. Todos los derechos reservados. Las imágenes, logotipo y contenido son propiedad de la empresa.

---

*Desarrollado para mostrar la trayectoria y servicios de una empresa constructora con más de 10 años de experiencia en Cuba y el extranjero.*