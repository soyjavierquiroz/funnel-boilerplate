# Cleanup Audit

## Scope

Objetivo: convertir el clon en un boilerplate reutilizable para funnels VSL sin identidad, checkout, tracking, copy ni estilos de marca hardcodeados en componentes.

## Hallazgos

- Metadata HTML apuntaba al dominio y producto anteriores.
- `src/dna.config.ts` contenia checkout real, copy completo, precios y assets del funnel anterior.
- `src/core/config/funnel.config.ts` contenia IDs internos, copy de otro funnel y fallback de tracking no reutilizable.
- Componentes activos tenian textos de CTA, garantia, precios, labels, placeholders y algunos colores de marca fuera de la configuracion.
- El paquete local de video tenia colores de CTA del overlay definidos con clases de color concretas.
- Habia assets binarios heredados en `public/assets`.
- Habia un stack Docker Swarm especifico de otro dominio y un stack generico sin marcar como legacy.

## Acciones aplicadas

- `DNA` ahora contiene identidad, dominio, checkout, video, pricing, copy, tracking, assets, forms y theme.
- `funnel.config.ts` deriva checkout, video, forms, pricing e integrations desde `DNA`.
- Componentes activos consumen copy/tokens desde `DNA` y usan clases semanticas.
- Se reemplazaron assets heredados por `public/assets/funnel-placeholder.svg`.
- Se agrego `.env.example` con variables de runtime/build.
- Se agrego `public/.htaccess` para fallback SPA.
- Se elimino el stack Docker especifico de otro funnel.
- El stack Docker restante quedo marcado como legacy.

## Estado de artefactos

- `dist/`: artefacto generado, ignorado por git.
- `public_html/`: salida de hosting, no pertenece al repo fuente.
- `public/.htaccess`: debe permanecer trackeado para CyberPanel/LiteSpeed.

## Pendientes seguros

- Reemplazar placeholders por copy, video, checkout, tracking, precios y assets reales antes de publicar.
- Confirmar el proveedor de precios dinamicos si se usara `PricingCard`.
- Validar el VSL real en navegador cuando exista un `VITE_VSL_VIDEO_ID`.
