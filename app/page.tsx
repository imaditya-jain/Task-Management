import Link from 'next/link'

const Home = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[var(--background)]'>
      <div className='flex flex-col items-center gap-6 text-center px-4'>
        <p className='inter text-[var(--primary)] text-sm font-semibold tracking-wide'>TASKFLOW</p>
        <h1 className='sora text-5xl sm:text-6xl font-bold text-[var(--foreground)]' style={{ lineHeight: 1.08 }}>
          Stay on top of<br />your tasks.
        </h1>
        <p className='inter text-[var(--muted)] text-lg max-w-md leading-8'>
          Create, organize, and track everything you need to get done — all in one place.
        </p>
        <div className='flex gap-3'>
          <Link href='/auth/register' className='inter h-[45px] px-6 rounded-[8px] bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white font-semibold text-sm flex items-center shadow-[0_16px_32px_rgba(109,40,217,0.22)]'>
            Get Started
          </Link>
          <Link href='/auth/login' className='inter h-[45px] px-6 rounded-[8px] border border-[var(--border)] text-[var(--foreground)] font-semibold text-sm flex items-center'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
