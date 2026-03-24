interface HeaderProps {
  title: string;
}

const Header = ({ title } : HeaderProps) => {
  return (
    <div
      className="font-lato w-full h-60 md:h-75 lg:h-90 bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage: `url(/assets/headerimg.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      <h1 className="relative w-8/10 md:w-7/10 mx-auto text-white text-3xl md:text-4xl lg:text-5xl font-black container pt-15 lg:pt-20 z-10">
        {title}
      </h1>
    </div>
  );
};

export default Header;
