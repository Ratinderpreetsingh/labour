// components/LayoutWrapper.tsx
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:container">
      {children}
    </div>
  );
}
