/** Copyright year — static for SSR/client parity (no hydration mismatch). */
export function CopyrightYear() {
  return <>{new Date().getFullYear()}</>;
}
