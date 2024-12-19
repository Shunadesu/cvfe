import Header from "./Header"
const CvProfile = () => {
  return (
    <div className="relative px-8 flex w-full h-[100vh] justify-center items-center">
        <div className="absolute inset-0 z-0">
            <img src="https://random-image-pepebigotes.vercel.app/api/random-image" alt="random_img" className="w-full h-full object-center opacity-20"/>
        </div>

        <div className="w-full h-[950px] overscroll-y-auto z-10 border m-10 max-w-[1400px] bg-white">
            <Header />
        </div>
    </div>
  )
}

export default CvProfile