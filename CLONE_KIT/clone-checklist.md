# Clone Checklist

Usa esta lista al crear un nuevo sitio desde el repo padre.

## 1. Crear repo clon

- [ ] Crear nuevo repo desde el repo padre.
- [ ] Confirmar que el clon conserva historial o registra el repo padre como `upstream`.
- [ ] Instalar dependencias:

```bash
npm install
```

- [ ] Ejecutar una validacion inicial antes de cambiar contenido:

```bash
npm run typecheck
npm run lint
npm run build
```

## 2. Configurar entorno

- [ ] Copiar `CLONE_KIT/env.template` a `.env`.
- [ ] Completar `VITE_DOMAIN`.
- [ ] Completar `VITE_SITE_ID`.
- [ ] Completar `VITE_SITE_TITLE`.
- [ ] Completar `VITE_SITE_DESCRIPTION`.
- [ ] Completar `VITE_SOCIAL_IMAGE`.
- [ ] Completar checkout principal y checkout de oferta.
- [ ] Completar video principal y video de oferta.

## 3. Configurar DNA

Editar `src/dna.config.ts`:

- [ ] `productName`.
- [ ] `domain`.
- [ ] `siteId`.
- [ ] `theme` y `funnelType`.
- [ ] `checkout` y `offer.checkoutUrl`.
- [ ] `tracking`.
- [ ] `seo`.
- [ ] `colors`, `surface`, `text`, `cta`.
- [ ] `assets`.
- [ ] `forms`.
- [ ] `success`.
- [ ] `copy`.
- [ ] `offer`.

## 4. Cambiar marca, copy y assets

- [ ] Reemplazar assets en `public/assets/<site-slug>/`.
- [ ] Actualizar rutas de assets en `DNA.assets`.
- [ ] Actualizar copy de landing `/` y `/a`.
- [ ] Actualizar copy de oferta `/oferta` y `/a/oferta`.
- [ ] Actualizar FAQ, garantia, bonos, value stack y proof.
- [ ] Revisar que no quede copy del sitio base salvo placeholders aceptados.

## 5. Configurar CRM y WhatsApp

- [ ] Definir `VITE_CAPTURE_WEBHOOK_URL`.
- [ ] Definir `VITE_CAPTURE_LIST_SLUG` para ads.
- [ ] Definir `VITE_ORGANIC_CAPTURE_LIST_SLUG` para organico.
- [ ] Definir `VITE_WHATSAPP_GROUP_URL` si la confirmacion ads usa WhatsApp.
- [ ] Definir `VITE_ORGANIC_WHATSAPP_GROUP_URL` si organico usa otro grupo.
- [ ] Probar captura con datos de prueba.
- [ ] Confirmar que el CRM recibe canal/lista esperada.

## 6. Configurar tracking

- [ ] Definir `VITE_META_PIXEL_ID` si aplica.
- [ ] Definir `VITE_TIKTOK_PIXEL_ID` si aplica.
- [ ] Definir `VITE_CAPI_RELAY_URL` si aplica.
- [ ] Confirmar que `/` y `/oferta` organicos no disparan ads tracking.
- [ ] Confirmar que `/a` y `/a/oferta` usan tracking segun configuracion.

## 7. Validar rutas

- [ ] `/`
- [ ] `/a`
- [ ] `/oferta`
- [ ] `/a/oferta`
- [ ] `/confirmacion`
- [ ] `/a/confirmacion`

## 8. Validacion final

```bash
npm run typecheck
npm run lint
npm run build
```

- [ ] Revisar desktop.
- [ ] Revisar mobile.
- [ ] Revisar consola del navegador.
- [ ] Revisar que CTA con checkout vacio quede deshabilitado.
- [ ] Revisar que CTA con checkout real abra el checkout correcto.
