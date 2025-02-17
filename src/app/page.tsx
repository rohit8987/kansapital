import { Suspense } from "react";
import Header from "~/components/header";
import MainContent from "~/components/main";
import Section from "~/components/Section";

export default function Home() {
  return (
    <Suspense fallback="">
      <Header />
      <MainContent />
      <Section />
    </Suspense>
  );
}
