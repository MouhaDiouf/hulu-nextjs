import Image from "next/image";
import HeaderItem from "./HeaderItem";
function Header() {
  return (
    <header className="header">
      <div>
        <HeaderItem />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        className="object-contain"
      />
    </header>
  );
}

export default Header;
