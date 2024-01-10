import Image from 'next/image';
import Particlesbg from './particlesbg';

export default function Home() {
  
  return (
    <Particlesbg>
      <main className="opacity-95 flex min-h-screen flex-col items-center justify-between p-5">
        <div className="z-10 my-5 mx-5 max-w-4xl w-full items-center justify-center font-mono text-sm">
          <h1 className="fixed left-0 top-0 flex w-full justify-center text-4xl border-b border-slate-400 bg-gradient-to-b from-zinc-200 pb-6 pt-16 backdrop-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
            Cool font for Memory Battle title
          </h1>
        </div>
        
        <div className="w-full flex flex-col place-items-center">
          <h1 className="text-3xl">Sign In</h1>
        </div>
  
        <div className="relative flex place-items-center">
          Intro animation component
        </div>
        
        <div>
        </div>
      </main>
    </Particlesbg>
  )
}
