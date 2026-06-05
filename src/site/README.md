# Site Boundary

Esta carpeta sera la frontera entre el core engine del boilerplate y la configuracion activa de cada sitio.

En clones futuros, aqui vivira la configuracion activa del sitio: identidad, copy, assets, checkout, CRM, WhatsApp, tracking, SEO y valores operativos que cambian entre dominios. La app deberia poder leer la configuracion activa desde esta capa sin que los clones tengan que tocar componentes ni servicios core.

Aprender Motores / Maneja Sin Miedo sigue siendo el site config actual de ejemplo/baseline, pero no es la identidad del repo padre ni el default recomendado para clones. La fuente real vive ahora en `src/site/dna.config.ts`. `src/site/current.ts` re-exporta el DNA activo y es el boundary oficial que deben consumir core, paginas y componentes.

`src/dna.config.ts` existe solo como facade temporal de compatibilidad. No lo uses como contrato recomendado en clones nuevos.

En clones, no modifiques `src/components/**` ni `src/core/**` salvo que el cambio sea agnostico y deba volver al repo padre. Los cambios por sitio deben concentrarse en esta frontera, en variables de entorno y en assets.
