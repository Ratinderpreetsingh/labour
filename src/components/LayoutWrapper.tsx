// components/LayoutWrapper.tsx
export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto">
      {children}
    </div>
  );
}
