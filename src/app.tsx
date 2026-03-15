import { Canvas } from "@react-three/fiber";

import ShibaLayout from "./models/shiba-layout";

export default function App() {
  const heroBackgroundImage = "/images/good-boy-background.png";

  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-center pt-3 pb-5">
        <img className="w-48" src="/images/logo.svg" />
      </header>

      <div className="relative flex flex-col xl:flex-row flex-1 mx-8 p-8 rounded-xl overflow-hidden gap-8">
        <div
          className="absolute w-full h-full -z-1 top-0 left-0"
          style={{
            background: `rgba(0,0,0,0.5) url("${heroBackgroundImage}") center / cover no-repeat`,
            backgroundBlendMode: "darken",
            filter: "blur(4px)",
          }}
        />
        <div className="flex flex-col gap-6 justify-center items-center flex-1 text-white uppercase text-shadow-lg">
          <h1 className="font-black text-4xl sm:text-8xl">Oupelaye!</h1>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold">We Are Oupelaye Studio</h2>
            <h3>An indie game studio from Quebec, Canada</h3>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <Canvas camera={{ position: [1, 1, 2] }}>
            <ambientLight />

            <ShibaLayout position={[0, -0.5, 0]} />
          </Canvas>
        </div>
      </div>

      <footer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-fit self-center place-items-center py-8 gap-4">
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
        <a href="https://discord.com" target="_blank">
          <img src="/images/discord.svg" />
        </a>
      </footer>
    </div>
  );
}
