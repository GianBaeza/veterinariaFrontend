## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Veterinaria Frontend

Este proyecto es el frontend de una aplicación para la gestión de una veterinaria, desarrollado con **Next.js** y **TypeScript**.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

-   **Node.js** (versión 18 o superior)
-   **pnpm** (gestor de paquetes, puedes instalarlo con `npm install -g pnpm`)
-   **Docker** (opcional, para la versión dockerizada)

---

## Levantar el proyecto localmente

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio:**

    ```bash
    git clone https://github.com/GianBaeza/veterinariaFrontend.git
    cd veterinariaFrontend/veterinaria-frontend
    ```

2. **Instalar dependencias:**

    ```bash
    pnpm install
    ```

3. **Ejecutar el servidor de desarrollo:**

    ```bash
    pnpm dev
    ```

4. **Abrir en el navegador:**
   Ve a [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

---

## Dockerizar el proyecto

Si prefieres ejecutar el proyecto en un contenedor Docker, sigue estos pasos:

1. **Construir la imagen Docker:**
   Asegúrate de estar en el directorio raíz del proyecto (`veterinaria-frontend`) y ejecuta:

    ```bash
    docker build -t veterinaria-frontend:latest .
    ```

2. **Ejecutar el contenedor:**

    ```

    ```

3. **Abrir en el navegador:**
   Ve a [http://localhost:3000](http://localhost:3000).

---

## Usar Docker Compose (Producción)

Para un entorno de producción, puedes usar el archivo `docker-compose.prod.yml` incluido en el proyecto:
Este proyecto es el frontend de una aplicación para la gestión de una veterinaria, desarrollado con **Next.js** y **TypeScript**.

1. **Levantar los servicios:**

    Antes de comenzar, asegúrate de tener instalados los siguientes programas:

    - **Node.js** (versión 18 o superior)
    - **pnpm** (gestor de paquetes, puedes instalarlo con `npm install -g pnpm`)
    - **Docker** (opcional, para la versión dockerizada)

    ***

    ````bash

    Sigue estos pasos para ejecutar el proyecto en tu máquina local:

    1. **Clonar el repositorio:**
    	```bash
    	git clone https://github.com/GianBaeza/veterinariaFrontend.git
    	cd veterinariaFrontend/veterinaria-frontend
    	```

    2. **Instalar dependencias:**
    	```bash
    	pnpm install
    	```

    3. **Ejecutar el servidor de desarrollo:**
    	```bash
    	pnpm dev
    	```

    4. **Abrir en el navegador:**
    	Ve a [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

    ---

    docker-compose -f docker-compose.prod.yml up -d

    Si prefieres ejecutar el proyecto en un contenedor Docker, sigue estos pasos:

    1. **Construir la imagen Docker:**
    	Asegúrate de estar en el directorio raíz del proyecto (`veterinaria-frontend`) y ejecuta:
    	```bash
    	docker build -t veterinaria-frontend:latest .
    	```

    2. **Ejecutar el contenedor:**
    	```bash
    	docker run -p 3000:3000 veterinaria-frontend:latest
    	```

    3. **Abrir en el navegador:**
    	Ve a [http://localhost:3000](http://localhost:3000).

    ---

    ````

    Para un entorno de producción, puedes usar el archivo `docker-compose.prod.yml` incluido en el proyecto:

    1. **Levantar los servicios:**

        ```bash
        docker-compose -f docker-compose.prod.yml up -d
        ```

    2. **Verificar los contenedores en ejecución:**

        ```bash
        docker ps
        ```

    3. **Abrir en el navegador:**
       Ve a [http://localhost:3000](http://localhost:3000).

    ***

    En el archivo `package.json` encontrarás los siguientes scripts útiles:

    - `pnpm dev`: Inicia el servidor de desarrollo.
    - `pnpm build`: Genera una versión optimizada para producción.
    - `pnpm start`: Inicia el servidor en modo producción (requiere haber ejecutado `pnpm build` previamente).

    ***

2. **Verificar los contenedores en ejecución:**

    - Si encuentras problemas con las dependencias, intenta limpiar la caché de pnpm:

        ```bash
        pnpm store prune
        ```

    - Asegúrate de que el puerto `3000` esté libre antes de levantar el proyecto.

    ***

    ¡Gracias por usar Veterinaria Frontend! 🐾

    ```bash
    docker ps
    ```

3. **Abrir en el navegador:**
   Ve a [http://localhost:3000](http://localhost:3000).

---

## Scripts disponibles

En el archivo `package.json` encontrarás los siguientes scripts útiles:

-   `pnpm dev`: Inicia el servidor de desarrollo.
-   `pnpm build`: Genera una versión optimizada para producción.
-   `pnpm start`: Inicia el servidor en modo producción (requiere haber ejecutado `pnpm build` previamente).

---

## Notas adicionales

-   Si encuentras problemas con las dependencias, intenta limpiar la caché de pnpm:

    ```bash
    pnpm store prune
    ```

-   Asegúrate de que el puerto `3000` esté libre antes de levantar el proyecto.

---

¡Gracias por usar Veterinaria Frontend! 🐾
