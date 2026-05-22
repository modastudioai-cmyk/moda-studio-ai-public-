/**
 * Copy to intake-config.js (do not commit secrets). Deploy intake-config.js to GitHub Pages.
 *
 * STRATEGY_INTAKE_WEBHOOK_SECRET must match Supabase Edge Function secret:
 *   supabase secrets set STRATEGY_INTAKE_WEBHOOK_SECRET="..."
 */
window.MODA_SUPABASE_FUNCTIONS_ORIGIN = 'https://YOUR_PROJECT_REF.supabase.co';
window.MODA_STRATEGY_INTAKE_ENDPOINT =
  'https://YOUR_PROJECT_REF.supabase.co/functions/v1/strategy-intake-submit';
window.MODA_STRATEGY_INTAKE_WEBHOOK_SECRET = 'replace-with-production-webhook-secret';
