import { useEffect,useState } from 'react'
import { Socket } from 'socket.io-client'

import { createSocket } from '../sockets'

export default function useBot({ chatId }: { chatId: string }) {
  const [socket, setSocket] = useState<Socket>()

  useEffect(() => {
    const socketInit = createSocket('http://localhost:8080', { chatId })
    socketInit.connect()
    setSocket(socketInit)
    return () => {
      socketInit.disconnect()
    }
  }, [chatId])

  return {
    socket
  }
}
