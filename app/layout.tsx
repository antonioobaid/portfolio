import "./globals.css";

export const metadata = {
  title: "Antonio Portfolio",
  description: "Frontend developer portfolio by Antonio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-500 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
