import './QuoteBlock.css'

interface QuoteBlockProps {
  text: string
  size?: 'sm' | 'md' | 'lg'
}

export default function QuoteBlock({ text, size = 'md' }: QuoteBlockProps) {
  return (
    <blockquote className={`quote-block quote-${size}`}>
      <span className="quote-mark">“</span>
      {text}
      <span className="quote-mark">”</span>
    </blockquote>
  )
}
