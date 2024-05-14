import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import store from '~/redux/store'
import { Provider } from 'react-redux'
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
// import './tailwind.css'

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        
      </head>
      <body>
        <Provider store={store}>
          {children}
        <ScrollRestoration />
        <Scripts />
        </Provider> 
      </body>
    </html>
  );
}

export default function App() {
      return <Outlet />;
}
