/** Convierte un objeto plano en FormData para pasar a Server Actions. */
export function toFormData(values: Record<string, unknown>): FormData {
  const fd = new FormData();
  for (const [key, value] of Object.entries(values)) {
    if (value === undefined || value === null) continue;
    if (typeof value === "boolean") {
      fd.append(key, value ? "true" : "false");
    } else {
      fd.append(key, String(value));
    }
  }
  return fd;
}
