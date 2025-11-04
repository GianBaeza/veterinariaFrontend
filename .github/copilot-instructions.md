# Veterinaria Frontend - AI Agent Instructions

## Project Overview

Next.js 15 (App Router) + TypeScript veterinary management system using pnpm, Tailwind CSS 4, Zod validation, and Zustand state management.

## Architecture Patterns

### Route-Based Access Control

-   **Public routes**: `src/app/(public)/` - Landing, auth, contact (no session required)
-   **Private routes**: `src/app/(priv)/` - Admin panels (turnos, atenciones, prestaciones, etc.)
-   Group folders with `()` are organizational only - not part of URL path

### Feature-Driven Structure

Code is organized by features in `src/feature/(public|priv)/`, each containing:

-   **Components**: Feature-specific UI (`components/`)
-   **Services**: Server actions (`services/server.ts`) and API utilities (`services/apiFetch.ts`)
-   **Schema**: Zod validation schemas (`schema/`)
-   **Constants**: Endpoints, form configs, data (`constants/` or `constantes/`)
-   **Interfaces**: TypeScript types (`interface/`)

Example: `src/feature/(public)/auth/` has auth forms, validation, and API integration fully self-contained.

### Server vs Client Boundaries

-   **Server Actions**: Files with `'use server'` directive handle API calls, cookies, validation
    -   See `src/feature/(public)/auth/services/server.ts` for form validation pattern
    -   `fetchGlobal` in `apiFetch.ts` manages auth tokens from cookies
-   **Client Components**: `'use client'` for interactive UI, animations, hooks
    -   All navigation components, GSAP animations, state management require client directive

### Shared Resources (`src/shared/`)

-   `components/`: Reusable UI (forms, navigation)
-   `constants/`: Route definitions (`ROUTERS_PATH` in `Navbar.ts`)
-   `hooks/`: `useIsMobile()` for responsive logic
-   `ui/`: Specialized components like `ButtonWhatsap`

### Library Components (`src/lib/`)

Custom/third-party integrations:

-   `utils.ts`: `cn()` for className merging (clsx + tailwind-merge)
-   `CurvedLoop.tsx`, `LogoLoop.tsx`: GSAP-based animations
-   shadcn/ui components (configured via `components.json`)

## Development Workflows

### Local Development

```bash
pnpm install
pnpm dev  # Runs on localhost:3000
```

### Docker Environments

-   **Dev**: `docker-compose.dev.yml` + `dockerfile.dev`
-   **Prod**: `docker-compose.prod.yml` + `dockerfile.prod`

### API Integration

-   Backend at `http://localhost:8000/api/` (see `src/feature/(public)/auth/constants/enpoints.ts`)
-   All authenticated requests use Bearer token from cookies via `fetchGlobal()`
-   Form submissions use Server Actions with Zod validation before API calls

## Code Conventions

### Styling

-   Tailwind config extended in `tailwind.ts` with custom colors (primary, secondary, neutral)
-   Font: Inter via Google Fonts (`--font-inter` variable)
-   Use `cn()` from `@/lib/utils` to merge conditional classes

### Type Safety

-   Path alias `@/*` maps to `src/*`
-   Zod schemas define and validate all form data (see `schemaAuth.ts`)
-   Interfaces in dedicated `interface/` folders per feature

### State Management

-   Zustand store in `src/context/globalContext.tsx` (currently manages navbar color)
-   Pattern: `create<Interface>((set) => ({ state, actions }))`

### Naming Patterns

-   Components: PascalCase files (`Navbar.tsx`, `Formulario.tsx`)
-   Constants: UPPER_SNAKE_CASE exports (`ROUTERS_PATH`, `URL_API_AUTH`)
-   Server actions: camelCase async functions (`iniciarSessionConValidacion`)
-   Spanish language used in code (variable names, comments, UI text)

## Key Files to Reference

-   `src/shared/constants/Navbar.ts`: All route paths and menu structures
-   `src/feature/(public)/auth/services/apiFetch.ts`: API call wrapper with auth
-   `src/context/globalContext.tsx`: Global state pattern
-   `middleware.ts`: Route protection (redirects `/home/*` to `/home`)
-   `components.json`: shadcn/ui configuration (New York style, RSC enabled)

## Design Patterns Guide

### When to Use Each Pattern

#### 1. Compound Component Pattern

**Uso actual**: `FormContainer.tsx` (Form.Field, Form.Input, Form.ButtonSubmit)

**Cuándo detectar que debes usarlo**:

-   ✅ Componente con múltiples partes relacionadas que deben trabajar juntas
-   ✅ Necesitas flexibilidad en el orden y composición de elementos
-   ✅ Quieres encapsular lógica compartida pero permitir personalización
-   ✅ El componente se usa en múltiples lugares con diferentes configuraciones

**Ejemplo del proyecto**:

```tsx
// Bien: Compound Component (src/shared/components/form/FormContainer.tsx)
<Form action={handleSubmit}>
    <Form.Field>
        Nombre:
        <Form.Input name="nombre" />
    </Form.Field>
    <Form.ButtonSubmit>Enviar</Form.ButtonSubmit>
</Form>
```

#### 2. Props Configuration Pattern

**Uso actual**: `Formulario.tsx` en auth (recibe array de configuración)

**Cuándo detectar que debes usarlo**:

-   ✅ Formularios con estructura fija pero campos dinámicos
-   ✅ Necesitas validación, estilos y comportamiento consistentes
-   ✅ La configuración viene de constantes/datos externos
-   ✅ Menos control granular pero más consistencia

**Ejemplo del proyecto**:

```tsx
// Bien: Props Configuration (src/feature/(public)/auth/components/Formulario.tsx)
<Formulario
    formulario={[
        { name: 'usuario', label: 'Usuario', type: 'text' },
        { name: 'password', label: 'Contraseña', type: 'password' },
    ]}
    formAccion={iniciarSessionConValidacion}
/>
```

#### 3. Server Action Pattern

**Uso actual**: `server.ts` en auth

**Cuándo detectar que debes usarlo**:

-   ✅ Necesitas validación con Zod antes de enviar datos
-   ✅ Manejas cookies, autenticación o datos sensibles
-   ✅ Integración con API backend
-   ✅ Necesitas feedback de errores del servidor

**Señales en el código**:

```tsx
// Detecta: función async con FormData + validación Zod
export async function iniciarSessionConValidacion(
    prevState: any,
    formData: FormData,
): Promise<{ success: boolean; errors?: Record<string, string> | null }>
```

#### 4. Custom Hook Pattern

**Uso actual**: `useIsMobile()`, `useViewport()`

**Cuándo detectar que debes usarlo**:

-   ✅ Lógica reutilizable con estado (useState, useEffect)
-   ✅ Múltiples componentes necesitan el mismo comportamiento
-   ✅ Detección de viewport, scroll, eventos del navegador
-   ✅ Prefijo `use` + retorna valores/funciones

**Ejemplo del proyecto**:

```tsx
// Bien: Custom Hook (src/shared/hooks/useIsMobile.tsx)
const isMobile = useIsMobile() // Reutilizable en Navbar, Cards, etc.
```

### Tabla de Decisión Rápida

| Necesitas...                             | Patrón a usar       | Archivo de referencia   |
| ---------------------------------------- | ------------------- | ----------------------- |
| Formulario flexible con composición      | Compound Component  | `FormContainer.tsx`     |
| Formulario con configuración desde datos | Props Configuration | `Formulario.tsx` (auth) |
| Validación + API + Server-side logic     | Server Action       | `server.ts` (auth)      |
| Lógica reutilizable con estado           | Custom Hook         | `useIsMobile.tsx`       |
| Estado global de aplicación              | Zustand Store       | `globalContext.tsx`     |
| Animaciones complejas                    | GSAP Component      | `CurvedLoop.tsx`        |

### Señales de Code Smell

❌ **No mezcles patrones en el mismo componente**:

```tsx
// Mal: Compound Component con props de configuración
<Form fields={config}>
    {' '}
    {/* Elige uno u otro */}
    <Form.Field>...</Form.Field>
</Form>
```

❌ **No uses Server Actions en Client Components directamente**:

```tsx
// Mal: 'use server' en archivo con 'use client'
// Separar en archivos distintos
```

❌ **No uses props configuration para formularios muy dinámicos**:

```tsx
// Mal: Demasiada lógica condicional en config
// Mejor usar Compound Component
```

## Special Considerations

-   **Responsive Design**: Use `useIsMobile()` hook instead of CSS-only breakpoints for conditional rendering
-   **Animations**: GSAP library used for complex animations (see `CurvedLoop`, `ScrollReveal`)
-   **Form Handling**: Always validate with Zod schemas before server actions
-   **Material Tailwind**: Available via `@material-tailwind/react` but selectively used
-   **Spanish Codebase**: Maintain Spanish for variables, comments, and user-facing text
