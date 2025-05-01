export function Button({ children, className, asChild }) {
  if (asChild) return children;
  return <button className={`rounded-xl px-4 py-2 bg-blue-600 text-white ${className}`}>{children}</button>;
}
