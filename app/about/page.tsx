import Image from "next/image";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import aboutImage from "../../public/about-image.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webnotes - ჩვენს შესახებ",
  description:
    "Webnotes ქმნის ინოვაციურ ვებსაიტებს, SEO ოპტიმიზაციას და AI ინტეგრაციებს თქვენი ბრენდის გასაძლიერებლად. ჩვენი მიზანია შექმნათ უნიკალური, თანამედროვე და მომხმარებელზე ორიენტირებული ციფრული გამოცდილება.",
};
const page = () => {
  return (
    <section className="container mb-[64px]">
      <Breadcrumbs link="/about" text="ჩვენს შესახებ" />
      <div className="relative w-full max-sm:h-[380px] h-[500px] rounded-[24px] overflow-hidden">
        <Image
          src={aboutImage}
          className="h-[530px] max-sm:h-full mt-[32px] rounded-[24px] w-full object-cover"
          alt="about image webp"
        />
        <div className="absolute max-sm:h-[300px] overflow-hidden bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-[#333]/75 to-transparent"></div>
      </div>
      <div className="flex text-[#333]/80 mt-12 flex-col gap-2">
        <h1 className="text-xl max-sm:text-lg text-[#333] upper-case font-bold mb-2 tracking-wide">
          {" "}
          ⚡ ჩვენი ხედვა
        </h1>
        <p className="tracking-wide max-sm:text-sm">
          ჩვენ ვხედავთ ვებსაიტს, როგორც ბიზნესისთვის აუცილებელ ციფრულ ინსტრუმენტს — პლატფორმას,
          რომელიც ინფორმაციის მიწოდებასთან ერთად ქმნის ეფექტურ კომუნიკაციას მომხმარებელთან.
          უნიკალური დიზაინის, გამართული ფუნქციონალისა და თანამედროვე ტექნოლოგიების გამოყენებით
          იქმნება სრულფასოვანი და პროფესიონალური ონლაინ სივრცე, რომელიც სათანადოდ წარმოაჩენს ბრენდს.
        </p>

        <h2 className="text-xl max-sm:text-lg text-[#333] upper-case font-bold tracking-wide mt-8 mb-2">
          🎯 ჩვენი მიზანი
        </h2>
        <p className="tracking-wide max-sm:text-sm">
          ჩვენი მიზანია შევქმნათ ვებსაიტები, რომლებიც არა მხოლოდ ვიზუალურად მიმზიდველია, არამედ
          ტექნიკურად გამართული და მომხმარებელზე ორიენტირებული. ვთავაზობთ სრულყოფილ სერვისს —
          სტრატეგიული დაგეგმვიდან დიზაინამდე და ფუნქციონალის ინტეგრაციამდე. თითოეული პროექტი არის
          ინდივიდუალური, მორგებული თქვენი ბიზნესის მიზნებზე, რათა უზრუნველვყოთ გამორჩეული ციფრული
          გამოცდილება და რეალური შედეგები. ვებსაიტებს ვამზადებთ ან WordPress-ის პლატფორმაზე, ან
          სრულად კოდით, თქვენი ბიუჯეტისა და საჭიროებების შესაბამისად.
        </p>

        <h2 className="text-xl max-sm:text-lg text-[#333] upper-case font-bold tracking-wide mt-8 mb-2">
          🎁 საჩუქარი
        </h2>
        <p className="tracking-wide max-sm:text-sm">
          ვებსაიტის კოდით დამზადების შემთხვევაში (და არა wordpress-ით) გთავაზობთ სრულიად უფასოდ
          თანამედროვე AI ტექნოლოგიის ინტეგრირებას. თქვენ იხდით მხოლოდ ვებსაიტის დამზადების საფასურს
          — AI არის ჩვენი საჩუქარი თქვენთვის! ეს შეიძლება იყოს პერსონალიზირებული ჩეთბოტი, ან სხვა
          ფუნქციონალი, რომელიც თქვენს ვებსაიტს უფრო ინოვაციურსა და ეფექტურს გახდის.
        </p>
      </div>
    </section>
  );
};

export default page;
