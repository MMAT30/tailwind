import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-slate-50 h-screen w-screen text-center">
      <div className="text-4xl py-4">Tailwind CSS</div>
      <div className="mx-4">
        <div className="row row-col text-center md:grid md:grid-cols-3 md:gap-4">
          <Link href={"/fundamentals"}>
            <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
              Fundamentals
            </div>
          </Link>

          <Link href={"/mini1"}>
            <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
              Mini App 1
            </div>
          </Link>

          <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
            3
          </div>
          <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
            4
          </div>
          <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
            5
          </div>
          <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
            6
          </div>
          <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
            7
          </div>
          <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
            8
          </div>

          <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
            9
          </div>
          <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
            10
          </div>
          <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
            11
          </div>
          <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
            12
          </div>
          <div className="border-2 border-slate-400 bg-white scale-100 rounded-md my-4 p-4 shadow-xl hover:scale-105 transition duration-300">
            13
          </div>
        </div>
      </div>
    </main>
  );
}
