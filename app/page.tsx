import {
  AnimateSale,
  Guarantees,
  Header,
  Hero,
  KnowUs,
  Vacancies,
  WhyUs,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1  bg-white">
      <Hero />
      <WhyUs />
      <Guarantees />
      <AnimateSale />
      <Vacancies />
      <KnowUs />
    </main>
  );
}
