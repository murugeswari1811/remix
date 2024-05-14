import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/hero";

export const meta: MetaFunction = () => {
  return [
    { title: "My Project" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
    <div>
      <Hero/>
    </div>
    </>
  );
}
