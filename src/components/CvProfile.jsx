import Header from "./Header"
const CvProfile = () => {
  return (
    <div className="relative px-8 flex w-full h-[100vh] justify-center items-center">
        <div className="absolute inset-0 z-0">
            <img src="https://random-image-pepebigotes.vercel.app/api/random-image" alt="random_img" className="w-full h-full object-center opacity-20"/>
        </div>

        <div className="w-[80%] h-[90vh] overscroll-y-auto z-10 border m-10 max-w-[1400px] bg-white">
            <div className="flex flex-col items-center p-10">
                <Header />
            </div>
        </div>
    </div>
  )
}

export default CvProfile