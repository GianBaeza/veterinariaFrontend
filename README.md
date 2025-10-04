
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
