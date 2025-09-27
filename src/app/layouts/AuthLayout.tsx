// app/layouts/AuthLayout.tsx
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <>{children}</>; // simple wrapper, no Navbar/Footer
}
