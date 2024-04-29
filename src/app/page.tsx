import Link from 'next/link';
const href = '/login';
export default function Home() {
  return (
    <div className='w-screen h-screen bg-blue-300 flex justify-center items-center text-white'>
      <div className='w-full max-w-[600px] mx-auto'>
          <h1 className='text-6xl mb-4'>The Foopingtons</h1>
        <p className='text-2xl text-white/60 mb-4'>This will document the journey Joshua Lopes and Victoria Gonzalez have been on for the past 6 years. Learn more about the Foopington history</p>
        <div>
          <Link href={href}>
          <button className='bg-blue-400 px-4 py-2 rounded-lg text-xl'>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
