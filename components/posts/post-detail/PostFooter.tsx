interface PostFooterProps {
  tags: string[]
}

export default function PostFooter({ tags }: PostFooterProps) {
  return (
    <footer className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span className="px-4 py-2 bg-white rounded-xl text-sm" key={index}>
          {tag}
        </span>
      ))}
    </footer>
  )
}
