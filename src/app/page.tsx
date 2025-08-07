import Image from "next/image";
import logo from './favicon.ico';
import cyberpunk from './imgs/img.webp';
import profile_pic from './imgs/profile.jpg';
import { ThemeToggle } from "../components/ui/Button";

export default function Home() {
  return (
    <>
    <div className="main-content bg-gray-100 dark:bg-gray-800 h-screen">
      <header className="shadow-xl bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-100 p-6">
        <div className="main_container flex justify-between items-center max-w-260 mx-auto">
          <div className="brand_logo flex gap-2 items-center justify-center">
            <Image src={logo} width={35} height={35} alt=""/>
            <h4 className="font-bold text-xl">Next App</h4>
          </div>
          <div className="profile_data flex gap-4 justify-center items-center">
            <div className="profile_img">
              <Image src={profile_pic} className="max-w-9 min-w-9 max-h-9 min-h-9 object-cover border border-gray-400 dark:border-gray-200 rounded-4xl" width={20} height={20} alt=""/>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="article_content_wrap overflow-hidden">
        <div className="main_container flex justify-between items-center max-w-260 mx-auto">
          <Image src={cyberpunk} className="mt-20 rounded-2xl shadow-lg block overflow-hidden" width={1000} height={400} alt=""/>
        </div>
      </div>
    </div>
    </>
  );
}
