import { useCallback, useState } from 'react'

const useOpenState = (): [boolean, () => void, () => void] => {
  const [open, setOpen] = useState(false)
  const handleOpen = useCallback(() => setOpen(true), [setOpen])
  const handleClose = useCallback(() => setOpen(false), [setOpen])

  return [open, handleOpen, handleClose]
}

export default useOpenState
