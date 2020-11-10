import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children, footer }) => (
  <>
    <Header />
    {children}
    {footer ? <Footer /> : false}
  </>
);
