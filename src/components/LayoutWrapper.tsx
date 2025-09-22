// components/LayoutWrapper.tsx
export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className=" mx-auto">
      {children}
    </div>
  );
}
