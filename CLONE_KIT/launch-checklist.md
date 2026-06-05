# Launch Checklist

Checklist previo a publicar un clon.

## Build local

- [ ] `npm run typecheck` pasa.
- [ ] `npm run lint` pasa o solo muestra warnings conocidos.
- [ ] `npm run build` pasa.
- [ ] `dist/` se genera correctamente.

## Contenido

- [ ] La configuracion editable del sitio esta concentrada en `.env`, `src/site/**` y `public/assets/**`.
- [ ] No queda copy accidental del sitio base.
- [ ] No se usan assets heredados `public/assets/msm/` como identidad final del clon.
- [ ] Marca, producto y dominio son correctos.
- [ ] Titulos SEO y description son correctos.
- [ ] Social image carga en URL publica.
- [ ] Precios y moneda son correctos.
- [ ] Garantia y FAQ son correctas.
- [ ] Bonos, value stack y CTA final son correctos.

## Formularios y CRM

- [ ] Formulario ads captura al webhook/lista correcta.
- [ ] Formulario organico captura al webhook/lista correcta si aplica.
- [ ] Campos requeridos coinciden con `DNA.forms.captureFields` desde el site config activo.
- [ ] Confirmacion redirige al destino correcto.
- [ ] WhatsApp ads y organico apuntan al grupo correcto si aplica.

## Checkout

- [ ] `VITE_CHECKOUT_URL` apunta al checkout principal correcto.
- [ ] `VITE_OFFER_CHECKOUT_URL` apunta al checkout de oferta correcto.
- [ ] Botones de oferta usan el checkout real.
- [ ] Si checkout no esta configurado, el CTA aparece deshabilitado.
- [ ] No hay URLs placeholder `example.com/replace-with-checkout-url`.

## Tracking

- [ ] `/` organic no dispara Pixel/CAPI si no corresponde.
- [ ] `/oferta` organic no dispara ads tracking.
- [ ] `/a` ads dispara PageView segun sistema actual.
- [ ] `/a/oferta` ads dispara InitiateCheckout al hacer click en CTA configurado.
- [ ] Meta Pixel ID correcto.
- [ ] TikTok Pixel ID correcto si aplica.
- [ ] CAPI relay correcto si aplica.

## Responsive y navegador

- [ ] Mobile 390px revisado.
- [ ] Tablet revisado.
- [ ] Desktop revisado.
- [ ] No hay overflow horizontal.
- [ ] No hay texto cortado en botones o cards.
- [ ] Video renderiza o muestra placeholder esperado.
- [ ] Assets cargan sin 404.

## Deploy

- [ ] Ejecutar build final.
- [ ] Subir/sincronizar `dist/` al hosting.
- [ ] Confirmar fallback SPA en hosting.
- [ ] Probar dominio final con HTTPS.
- [ ] Probar rutas directas en refresh:
  - `/`
  - `/a`
  - `/oferta`
  - `/a/oferta`
  - `/confirmacion`
  - `/a/confirmacion`

## Post launch

- [ ] Enviar prueba real de lead.
- [ ] Enviar prueba real de checkout si aplica.
- [ ] Verificar eventos en plataformas ads.
- [ ] Verificar logs del CRM/webhook.
- [ ] Guardar capturas de configuracion clave.
