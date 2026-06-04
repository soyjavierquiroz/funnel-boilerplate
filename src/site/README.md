# Site Boundary

Esta carpeta sera la frontera entre el core engine del boilerplate y la configuracion activa de cada sitio.

En clones futuros, aqui vivira la configuracion activa del sitio: identidad, copy, assets, checkout, CRM, WhatsApp, tracking, SEO y valores operativos que cambian entre dominios. La app deberia poder leer la configuracion activa desde esta capa sin que los clones tengan que tocar componentes ni servicios core.

Por ahora MSM sigue usando `src/dna.config.ts` como fuente real de configuracion. `src/site/current.ts` solo re-exporta el DNA actual para preparar la separacion sin cambiar comportamiento runtime.

En clones, no modifiques `src/components/**` ni `src/core/**` salvo que el cambio sea agnostico y deba volver al repo padre. Los cambios por sitio deben concentrarse en esta frontera, en variables de entorno y en assets.
