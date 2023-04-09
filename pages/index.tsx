import Layout from '@/components/layout'
import Image from 'next/image'


export default function Home() {
  return (
    <Layout pageTitle={'Home'}>
      <Image src={'/assets/profile.png'} alt={'Profile'} width={200} height={200} />
      <h1 className='text-3xl font-bold underline'>INI HOME BRO</h1>
    </Layout>
  )
}
