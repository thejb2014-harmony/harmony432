# Harmony432 - Project TODO

## Fase 1: Herramientas Principales
- [x] Afinador 432 Hz con detección de frecuencia en tiempo real
- [x] Conversor de Audio 440Hz → 432Hz
- [x] Sintetizador con teclado interactivo
- [x] Soporte MIDI completo en todas las herramientas
- [x] Análisis FFT y visualización de espectro
- [x] Grabación y playback MIDI
- [x] Exportación de archivos .mid

## Fase 2: Contenido y Educación
- [x] Blog con artículos educativos
- [x] Página de contacto con newsletter
- [x] Sección de testimonios
- [x] Guía de inicio rápido
- [x] Meta tags SEO y Open Graph
- [x] Schema JSON-LD para posicionamiento

## Fase 3: Diseño y UX
- [x] Diseño esotérico/mágico con paleta púrpura-azul
- [x] Efectos de luz mágica y gradientes místicos
- [x] Logo profesional con geometría sagrada
- [x] Navegación intuitiva con botones de retorno
- [x] Responsive design para móvil y desktop
- [x] Copywriting persuasivo orientado a conversión

## Fase 4: Backend y Base de Datos
- [x] Actualización a web-db-user (backend + BD)
- [x] Esquema de base de datos para newsletter
- [x] Tabla newsletter_subscribers con email, fecha, estado
- [x] Procedimiento tRPC para suscripción
- [x] Integración de formulario con backend
- [x] Tests vitest para newsletter subscription
- [x] Corrección de conflicto en Home.tsx

## Fase 5: Funcionalidades Avanzadas (Pendientes)
- [ ] Envío automático de emails de confirmación
- [ ] Sistema de notificaciones a propietario (thejb2014@gmail.com)
- [ ] Gestión de suscriptores (dashboard admin)
- [ ] Desuscripción automática
- [ ] Analytics y tracking de conversión
- [ ] Integración con servicio de email (SendGrid, Mailgun, etc)
- [ ] Sistema de referidos/afiliados
- [ ] Monetización (Stripe, membresías premium)

## Estado Actual
- Aplicación web completamente funcional con 3 herramientas profesionales
- Backend implementado con tRPC y PostgreSQL
- Newsletter con almacenamiento en base de datos
- Tests unitarios pasando correctamente
- Servidor de desarrollo ejecutándose sin errores
- Listo para checkpoint y publicación

## Notas Técnicas
- Stack: React 19 + TypeScript + Vite + Express + tRPC + PostgreSQL
- Web Audio API para procesamiento de audio
- Web MIDI API para controladores externos
- LocalStorage para presets del sintetizador
- Tailwind CSS 4 con estilos personalizados
- Drizzle ORM para gestión de base de datos

## Fase 6: Integración de Email con Resend
- [x] Instalar dependencia resend
- [x] Agregar RESEND_API_KEY a variables de entorno
- [x] Crear función sendNewsletterNotification en server
- [x] Integrar envío de email en newsletter.subscribe
- [x] Escribir tests vitest para envío de email
- [ ] Agregar registros DNS en Hostalia (DKIM, SPF, DMARC)
- [ ] Verificar dominio harmony432.es en Resend
- [ ] Verificar dominio harmony432.es en Manus
- [ ] Probar suscripción con notificación a thejb2014@gmail.com
- [ ] Publicar proyecto en harmony432.es

## Fase 7: Páginas Legales y Footer
- [x] Crear página Política de Privacidad (RGPD completo)
- [x] Crear página Política de Cookies
- [x] Crear página Aviso Legal
- [x] Crear página Términos y Condiciones
- [x] Actualizar footer con enlaces a páginas legales
- [x] Quitar enlaces rotos del footer (Documentación, Comunidad, Descargas, Precios)
- [x] Probar navegación en todas las páginas legales
- [ ] Guardar checkpoint final

## Fase 8: Integración de Google AdSense
- [x] Agregar código de AdSense en index.html
- [x] Verificar que AdSense carga sin errores
- [x] Guardar checkpoint
