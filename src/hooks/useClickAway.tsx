import { useEffect, useRef } from 'react'

const useClickAway = (onClose: () => void | null) => {
  const ref = useRef(null)

  useEffect(() => {
    const escapeListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.()
      }
    }

    const clickListener = (e: MouseEvent) => {
      if (!(ref.current! as any)?.contains?.(e.target)) {
        onClose?.()
      }
    }

    document.addEventListener('click', clickListener)
    document.addEventListener('keyup', escapeListener)
    return () => {
      document.removeEventListener('click', clickListener)
      document.removeEventListener('keyup', escapeListener)
    }
  }, [onClose])

  return ref
}

export default useClickAway
