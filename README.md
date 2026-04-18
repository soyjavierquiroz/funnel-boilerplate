# Boilerplate UI Showcase

Arquitectura temática para funnels y experiencias VSL donde el `core` de negocio queda aislado del diseño visual. La app ahora funciona como un showroom con lobby y dos temas activos: `Expert` y `Panda`.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS con tokens semánticos por tema
- `CoreVideoPlayer` reutilizable para YouTube, Bunny y HTML5
- Captura avanzada de leads con contexto geográfico
- Pricing Hotmart con fallback por producto
- Tracking browser-side para Meta Pixel, TikTok Pixel y CAPI

## Arquitectura Temática

La regla del proyecto es simple: la lógica agnóstica vive en `src/core`, los bloques reutilizables de UI viven en `src/components/common`, y cada piel visual vive dentro de `src/components/themes/<tema>`.

```text
src/
├── App.tsx
├── core/
│   ├── config/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   └── visitor/
├── components/
│   ├── common/
│   │   ├── forms/
│   │   ├── layout/
│   │   └── video-player/
│   └── themes/
│       ├── expert/
│       └── panda/
├── index.css
└── main.tsx
```

### `src/core/`

Contiene todo lo que no debería depender del tema visual.

- `config/funnel.config.ts`: configuración de marca, pricing, media e integraciones.
- `hooks/useHotmartPrices.ts`: acceso al catálogo regionalizado de Hotmart.
- `services/analytics.ts`: capa de tracking.
- `utils/currency.ts`: utilidades de moneda.
- `visitor/`: contexto, tipos y detección/caché de visitante por IP.

### `src/components/common/`

Contiene componentes compartidos y agnósticos a la piel visual.

- `video-player/`: `CoreVideoPlayer` y su infraestructura interna.
- `forms/AdvancedCaptureForm.tsx`: captura de leads reutilizable.
- `forms/SmartPhoneInput.tsx`: input telefónico inteligente.
- `forms/PricingCard.tsx`: pricing común.
- `layout/SectionWrapper.tsx`: layout wrapper compartido.

### `src/components/themes/expert/`

Implementa la experiencia visual estilo Expert.

- `ExpertTheme.tsx`: entrada del tema.
- `MainVSL.tsx`
- `BentoGrid.tsx`
- `BonusStack.tsx`

### `src/components/themes/panda/`

Implementa la experiencia visual estilo Panda.

- `PandaTheme.tsx`: entrada del tema.
- `PandaHero.tsx`
- `PandaFeatures.tsx`
- `PandaBentoGrid.tsx`
- `PandaFooter.tsx`

## Showroom

`src/App.tsx` es ahora un router de showroom con estado local:

```ts
const [currentTheme, setCurrentTheme] = useState<'lobby' | 'expert' | 'panda'>('lobby');
```

Estados disponibles:

- `lobby`: pantalla de bienvenida con selector de temas.
- `expert`: renderiza `ExpertTheme`.
- `panda`: renderiza `PandaTheme`.

Cuando no estamos en el lobby, aparece un botón fijo de `Volver al Lobby` en la esquina inferior derecha.

## Sistema de Tokens

`src/index.css` define variables CSS por tema:

- `theme-showroom`
- `theme-expert`
- `theme-panda`

Los componentes deben consumir clases semánticas como `bg-page`, `bg-surface`, `text-text-main` o `border-border-subtle`. Evita hardcodear hexadecimales dentro de los componentes salvo que sea estrictamente necesario para una composición muy puntual.

## Cómo Crear Un Tema Nuevo

Para añadir un tema nuevo dentro de `/themes`, sigue este flujo:

1. Crea una carpeta nueva en `src/components/themes/<nuevo-tema>/`.
2. Crea un componente de entrada, por ejemplo `NewTheme.tsx`.
3. Usa `src/core` para toda la lógica:
   configuración, hooks, visitor context, analytics, pricing y utilidades.
4. Usa `src/components/common` para toda la UI compartida:
   player, formularios, wrappers y piezas agnósticas.
5. Mantén dentro del tema sólo lo visual y lo compositivo:
   hero, layout, secciones, copy del tema, pruebas visuales y ritmo de página.
6. Registra el nuevo estado en `App.tsx` para que el showroom pueda abrirlo.
7. Si el tema necesita identidad propia, añade un nuevo bloque `:root[data-theme='...']` en `src/index.css`.

### Regla de oro

Si una pieza puede ser usada por más de un tema sin cambiar su intención funcional, debería vivir en `common` o en `core`, no dentro del tema.

## Flujo de Trabajo Recomendado

1. Ajusta `src/core/config/funnel.config.ts`.
2. Construye o modifica componentes compartidos en `src/components/common/` si hacen falta.
3. Compón el tema en `src/components/themes/<tema>/`.
4. Verifica el showroom en `App.tsx`.
5. Ejecuta build.

## Build

Build local con Node:

```bash
npm ci
npm run build
```

Build en Docker:

```bash
docker run --rm \
  -v /opt/webs/boilerplate:/app \
  -w /app \
  node:20-alpine \
  sh -lc 'npm ci && npm run build'
```

## Push

Después de validar el build:

```bash
git status
git add -A
git commit -m "Implement showroom architecture"
git push origin main
```

## Archivos Clave

- `src/App.tsx`: router/showroom.
- `src/core/config/funnel.config.ts`: contrato central del funnel.
- `src/core/visitor/VisitorContext.tsx`: contexto de visitante.
- `src/components/common/video-player/CoreVideoPlayer.tsx`: player reutilizable.
- `src/components/themes/expert/ExpertTheme.tsx`: tema Expert.
- `src/components/themes/panda/PandaTheme.tsx`: tema Panda.
