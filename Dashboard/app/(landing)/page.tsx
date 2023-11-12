import { ContactIcon } from 'lucide-react'
import { NextPage } from 'next'
import Link from 'next/link'

const Page: NextPage = () => {
  return (
    <main className='flex flex-col w-full h-screen'>
      <div className='flex items-center justify-center flex-1 hero bg-base-200'>
        <div className='text-center hero-content'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold'>Eruva</h1>
            <p className='py-6'>
              Your Intelligent Chatbot Companion, powered by OpenAI for seamless
              customer interactions, from retention to assistance!
            </p>
            <div className='flex flex-col items-center justify-center gap-2'>
              <Link href={'/dashboard'} className='btn btn-primary'>
                Create Your Chatbot
              </Link>
              <Link href={'mailto:hiten@eruva.in'} className='flex items-center justify-center gap-2 btn btn-ghost'>
                {' '}
                <ContactIcon className='w-5 h-5' /> Write me an Email
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className='p-4 footer footer-center bg-base-300 text-base-content'>
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </main>
  )
}

export default Page
