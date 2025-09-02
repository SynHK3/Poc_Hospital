import Header from "@/components/header/header";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="relative w-full h-[81vh] "> <Image src={IntroDuce} alt="Logo" fill className="object-cover" // hoặc object-contain nếu muốn hiển thị toàn bộ ảnh priority /> <div className="container__content--home"> <div className="content__btn--future--item"> <h1>Book An Appointment</h1> </div> </div> </div>
    </div>
  );
}
