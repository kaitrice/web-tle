import Header from "../layout/Header";

export default function Hero() {
  return (
    <div className="relative bg-cover bg-center min-h-screen flex flex-col text-white bg-home">
        <div className="absolute inset-0 bg-white/10"></div>
        
        <Header />
    </div>
  );
}
