import { Canvas } from "@react-three/fiber";

import ShibaLayout from "./models/shiba-layout";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-center pt-3 pb-5">
        <img className="w-48" src="/images/logo.svg" />
      </header>

      <div className="flex flex-col xl:flex-row flex-1 mx-8 p-8 gap-8">
        <div className="flex flex-col gap-6 justify-center items-center flex-1 text-white uppercase text-shadow-lg text-center">
          <h1 className="font-black text-5xl sm:text-8xl">Oupelaye!</h1>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">We Are Oupelaye Studio</h2>
            <h3>An indie game studio from Quebec, Canada</h3>
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <Canvas camera={{ position: [1, 1, 2] }}>
            <ambientLight />

            <ShibaLayout position={[0, -0.5, 0]} />
          </Canvas>
        </div>
      </div>

      <footer className="flex flex-wrap justify-center items-center p-8 gap-8">
        <a href="mailto:oupelaye.studio@gmail.com" target="_blank">
          <img src="/images/email.svg" />
        </a>
        <a href="https://oupelaye.itch.io" target="_blank">
          <img src="/images/itch.svg" />
        </a>
        <a
          href="https://steamcommunity.com/profiles/76561198728252828/"
          target="_blank"
        >
          <img src="/images/steam.svg" />
        </a>
        <a href="https://youtube.com/@oupelaye.studio" target="_blank">
          <img src="/images/youtube.svg" />
        </a>
        <a href="https://discord.gg/vHWTVD5t" target="_blank">
          <img src="/images/discord.svg" />
        </a>
      </footer>
    </div>
  );
}
