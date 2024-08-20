import Image from 'next/image'

interface PostHeaderProps {
  title: string
  image: string
  author: string
}

export default function PostHeader({ title, image, author }: PostHeaderProps) {
  return (
    <header className="flex md:flex-row flex-col-reverse justify-between md:items-end items-center gap-4 md:my-8 my-4 mx-0 border-b-8 border-[#a07aaa] pb-8">
      <h1 className="md:text-[64px] text-5xl md:text-left text-center text-[#5a097a] m-0">{title}</h1>
      <p>{author}</p>
      <Image src={image} alt={title} width={200} height={150} className="w-[200px] h-[120px] object-cover" />
    </header>
  )
}
