# Clone Checklist

Usa esta lista al crear un nuevo sitio desde el repo padre.

El repo padre no es Aprender Motores / Maneja Sin Miedo. Ese sitio queda como baseline historico dentro del site config activo hasta completar la extraccion.

## 1. Crear repo clon

- [ ] Crear nuevo repo desde el repo padre.
- [ ] Confirmar que el clon conserva historial o registra el repo padre como `upstream`.
- [ ] Leer `CLONE_KIT/operational-safety.md` antes de configurar captura, tracking o deploy.
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
- [ ] Confirmar que `.env` no contiene dominios, webhooks, Pixel, TikTok, WhatsApp o checkout de Aprender Motores/MSM.

## 3. Configurar Site Config

Editar `src/site/dna.config.ts` o los archivos bajo `src/site/**` exportados por `src/site/current.ts`:

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

Nota: `src/dna.config.ts` queda solo como facade temporal de compatibilidad. No lo uses como contrato del clon.

## 4. Cambiar marca, copy y assets

- [ ] Reemplazar assets en `public/assets/<site-slug>/`.
- [ ] Actualizar rutas de assets en `DNA.assets`.
- [ ] Actualizar copy de landing `/` y `/a`.
- [ ] Actualizar copy de oferta `/oferta` y `/a/oferta`.
- [ ] Actualizar FAQ, garantia, bonos, value stack y proof.
- [ ] Revisar que no quede copy del sitio base salvo placeholders aceptados.
- [ ] Confirmar que no se usen assets heredados `public/assets/msm/` como identidad final del clon.
- [ ] Confirmar que existe una carpeta propia `public/assets/<site-slug>/` para la identidad final del clon.

## 5. Configurar CRM y WhatsApp

- [ ] Definir `VITE_CAPTURE_WEBHOOK_URL`.
- [ ] Definir `VITE_CAPTURE_LIST_SLUG` para ads.
- [ ] Definir `VITE_ORGANIC_CAPTURE_LIST_SLUG` para organico.
- [ ] Configurar server env `CAPTURE_ALLOWED_ORIGINS`.
- [ ] Configurar server env `CAPTURE_ADS_WEBHOOK_URL` y `CAPTURE_ORGANIC_WEBHOOK_URL`, o `CAPTURE_WEBHOOK_URL` como fallback.
- [ ] Probar `public/capture.php` con `CAPTURE_DRY_RUN=true`.
- [ ] Definir `VITE_WHATSAPP_GROUP_URL` si la confirmacion ads usa WhatsApp.
- [ ] Definir `VITE_ORGANIC_WHATSAPP_GROUP_URL` si organico usa otro grupo.
- [ ] Probar captura con datos de prueba.
- [ ] Confirmar que el CRM recibe canal/lista esperada.
- [ ] Confirmar que ningun lead de prueba llega a Aprender Motores/MSM.

## 6. Configurar tracking

- [ ] Definir `VITE_META_PIXEL_ID` si aplica.
- [ ] Definir `VITE_TIKTOK_PIXEL_ID` si aplica.
- [ ] Definir `VITE_CAPI_RELAY_URL` si aplica.
- [ ] Confirmar que CAPI Relay, CRM, Pixel, TikTok y WhatsApp pertenecen al clon.
- [ ] Confirmar que `/` y `/oferta` organicos no disparan ads tracking.
- [ ] Confirmar que `/a` y `/a/oferta` usan tracking segun configuracion.

## 7. Revisar deploy legacy

- [ ] No ejecutar `deploy.sh` sin revisar dominio, destino, permisos y cache.
- [ ] Si se usa `deploy.sh`, documentar que el flujo pertenece al clon y ejecutar solo con `ALLOW_SITE_SPECIFIC_DEPLOY=1`.
- [ ] Si se usa `docker-stack-boilerplate.yaml`, revisar dominio, rutas, volumenes, env, servicios, redes y certificados.

## 8. Validar rutas

- [ ] `/`
- [ ] `/a`
- [ ] `/oferta`
- [ ] `/a/oferta`
- [ ] `/confirmacion`
- [ ] `/a/confirmacion`

## 9. Validacion final

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
