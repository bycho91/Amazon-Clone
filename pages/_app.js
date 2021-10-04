import "tailwindcss/tailwind.css";
import "../src/styles/global.css";
import { Provider } from "react-redux";
// import store from "../src/app/store";
import { Provider as AuthProvider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}

export default MyApp;
