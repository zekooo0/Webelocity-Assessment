import Image from "next/image";
import "./Theme.scss";
export default function Theme() {
  return (
    <div className="theme">
      <button>
        <Image src="/images/sun.svg" alt="sun" width={20} height={20} />
      </button>
    </div>
  );
}
