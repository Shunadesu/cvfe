import avacv from '../assets/avacv.jpg'

const Header = () => {
  return (
    <div className="w-full flex justify-between items-start">
        <div className='flex flex-col gap-2'>
            <p className="font-bold text-[40px] px-4 py-2 bg-blue-500 text-white">Pham Nguyen <br /> Hoai Nam</p>
            <p className='text-[20px]'>Front-end Developer </p>
        </div>
        <div className='flex items-end'>
            <img src={avacv} alt="ava_hoainam" className='w-[150px] h-[200px] object-cover' />
            <div className='w-[35px] h-[35px] bg-blue-500'/>
        </div>
    </div>
  )
}

export default Header