import {
  AnimateSale,
  Guarantees,
  Hero,
  KnowUs,
  Vacancies,
  WhyUs,
} from "@/components";
import { ModalForm } from "@/components/ModalForm";
import { ModalProvider } from "@/components/store/ModalContext";

export default function Home() {
  return (
    <ModalProvider>
      <main className="flex-1 bg-white">
        <Hero />
        <WhyUs />
        <Guarantees />
        <AnimateSale />
        <Vacancies />
        <KnowUs />
        <ModalForm />
      </main>
    </ModalProvider>
  );
}
