import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-[90vh] text-center px-6 gap-6">
      <h1 className="text-5xl">Welcome to Ghost Gym</h1>
      <p>
        We are the ultimate destination for clients to match with personal
        trainers. Our innovative gym concept provides a flexible and
        professional space where trainers can rent facilities to deliver
        personalized fitness sessions tailored to the client`&ampos;`s needs. At
        Ghost Gym, we understand the challenges that clients face.
        That`&ampos;`s why we`&ampos;`ve created a vibrant and inclusive
        community where clients can thrive and take their fitness to the next
        level.
      </p>
      <p>
        Join Ghost Gym today and take your personal training to the next level.
        Whether you are a seasoned fitness guru or new to working out, Ghost Gym
        is your ultimate fitness hub.
      </p>
      <article className="flex gap-7">
        <Link href="/sign-up/client">
          <button className="bg-slate-700 text-white w-28 h-16 text-xl rounded-md">
            Client
          </button>
        </Link>
        <Link href="/sign-up/trainer">
          <button className="bg-slate-700 text-white w-28 h-16 text-xl rounded-md">
            Trainer
          </button>
        </Link>
      </article>
    </main>
  );
}
