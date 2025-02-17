import { Suspense } from "react";
import MainContent from "~/components/main";
import Section from "~/components/Section";

export default function Home() {
  return (
    <Suspense fallback="">
      <MainContent />
      <Section />
    </Suspense>
  );
}
