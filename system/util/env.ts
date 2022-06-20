/**
 * Get env value
 */
export function env(key, defaultValue = null) {
  return process.env[key] || defaultValue;
}
