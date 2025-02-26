import "@fontsource/laila";
import "@/stylesheets/index.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Join RMIT Shinsei Kendo Club",
  description: "RMIT stuff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

