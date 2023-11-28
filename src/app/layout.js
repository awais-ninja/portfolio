import { Roboto } from "next/font/google";
import "@/styles/global.scss";

const roboto = Roboto({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   require("../../node_modules/bootstrap/dist/js/bootstrap.js");
  // }, []);
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
