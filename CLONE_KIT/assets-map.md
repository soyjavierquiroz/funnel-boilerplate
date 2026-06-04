# Assets Map

Usa este documento para reemplazar la identidad visual por sitio sin tocar componentes.

## Ubicacion recomendada

Para un clon nuevo, crea una carpeta propia:

```text
public/assets/<site-slug>/
```

Ejemplo:

```text
public/assets/marca-demo/logo.webp
public/assets/marca-demo/hero.webp
public/assets/marca-demo/social.webp
```

Luego referencia esas rutas desde `src/dna.config.ts`.

## Assets principales

| Uso | Config en DNA | Recomendacion |
| --- | --- | --- |
| Logo evento/sitio | `DNA.assets.event.logo` | WebP/PNG, fondo transparente si aplica |
| Hero landing | `DNA.assets.event.hero` | WebP horizontal, buena lectura mobile |
| Imagen social | `DNA.assets.socialImage` y `DNA.seo.socialImage` | 1200x630 |
| Imagen sales letter | `DNA.assets.salesLetterImage` | Editorial, no stock generico |
| Imagen bonus/producto | `DNA.assets.bonusImage` | Producto o recurso real |
| Bundle oferta | `DNA.assets.bundleWideImage` | Composicion de producto/bonos |
| Offer hero/poster | `DNA.offer.heroImage`, `DNA.offer.video.posterImage` | Poster claro para VSL |
| Proof/testimonios | `DNA.offer.proofGrid.items`, `DNA.offer.proofWallLarge` | Imagenes o capturas reales cuando existan |
| Evento agenda | `DNA.assets.event.agendaImages` | Una por bloque de agenda |
| Autoridad | `DNA.assets.event.authorityImage`, `DNA.assets.event.authorityCarousel` | Fotos reales del experto |
| CTA final | `DNA.assets.event.finalCtaImage` | Imagen asociada al resultado |

## Assets existentes en el boilerplate

Los assets actuales bajo `public/assets/msm/` son placeholders del sitio base. En un clon:

- Puedes dejarlos como referencia temporal.
- No los uses como identidad final de otro sitio.
- No cambies rutas en componentes; cambia rutas desde `src/dna.config.ts`.

## Reglas de reemplazo

- Prefiere WebP para imagenes grandes.
- Evita nombres genericos como `image1.webp`; usa nombres de funcion: `hero-main.webp`, `authority.webp`, `proof-01.webp`.
- Verifica mobile y desktop despues de reemplazar imagenes.
- Si falta un asset, usa `public/assets/funnel-placeholder.svg` solo durante configuracion.
- No guardes archivos pesados innecesarios en `public/assets`.

## Checklist de assets

- [ ] Logo actualizado.
- [ ] Hero actualizado.
- [ ] Poster de video actualizado.
- [ ] Social image actualizado.
- [ ] Imagenes de agenda/contenido actualizadas.
- [ ] Imagenes de autoridad actualizadas.
- [ ] Imagenes de proof/testimonios actualizadas.
- [ ] Imagen final CTA actualizada.
- [ ] `alt` text configurado en `DNA`.
