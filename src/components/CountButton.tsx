type CountButtonProps = {
  method: () => void
  title: string
}

export default function CountButton({ method, title }: CountButtonProps) {
  return (
    <button onClick={method}>
      {`${title === 'increase' ? 'Increase' : 'Decrease'}`}
    </button>
  )
}