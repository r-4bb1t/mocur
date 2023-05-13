export default function Footer() {
  return (
    <footer className="w-full h-80 flex justify-center relative">
      <div className="w-full h-80 flex justify-center overflow-y-hidden">
        <img
          src="/white.png"
          className="mask-hexagon-2 w-[500px] [mask-size:500px] mt-8"
        />
        <div className="absolute inset-x-0 pt-16 h-80 w-full flex flex-col items-center justify-center gap-8 z-10 overflow-y-hidden">
          <div className="flex flex-col items-center">
            <img src="/logo.svg" className="mb-4" />
            <p className="font-bold">2023 SKYCC: Pairing 해커톤 참가작</p>
            <p>Copyright © 호랑개발단 2023 - All right reserved</p>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              <div className="tooltip" data-tip="웹 프론트엔드 - 현채">
                <div className="w-12 h-12 mask mask-hexagon">
                  <a
                    className="btn p-0 border-none bg-[#e3e3e3]"
                    href="https://github.com/r-4bb1t"
                    target="_blank"
                  >
                    <img src="/avatars/hyunchae.svg" className="object-cover" />
                  </a>
                </div>
              </div>
              <div className="tooltip" data-tip="백엔드 - 종헌">
                <div className="w-12 h-12 mask mask-hexagon">
                  <a
                    className="btn p-0 border-none bg-[#e3e3e3]"
                    href="https://github.com/Talkwarrior"
                    target="_blank"
                  >
                    <img src="/avatars/jongheon.svg" className="object-cover" />
                  </a>
                </div>
              </div>
              <div className="tooltip" data-tip="기획 - 가은">
                <div className="w-12 h-12 mask mask-hexagon">
                  <a
                    className="btn p-0 border-none bg-[#e3e3e3]"
                    href="https://github.com/ege114366"
                    target="_blank"
                  >
                    <img src="/avatars/gaeun.svg" className="object-cover" />
                  </a>
                </div>
              </div>
              <div className="tooltip" data-tip="앱 프론트엔드 - 민서">
                <div className="w-12 h-12 mask mask-hexagon">
                  <a
                    className="btn p-0 border-none bg-[#e3e3e3]"
                    href="https://github.com/ChoChoMinSeo"
                    target="_blank"
                  >
                    <img src="/avatars/minseo.svg" className="object-cover" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
