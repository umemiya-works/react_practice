type CountButtonProps = {
  count: number,
  method: () => void
}

export default function CountButton({ count, method }: CountButtonProps) {
  return (
    <button onClick={method}>
      count is {count}
    </button>
  )
}