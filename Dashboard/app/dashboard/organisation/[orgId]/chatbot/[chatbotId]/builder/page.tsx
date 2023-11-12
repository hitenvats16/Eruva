import React from 'react'

import { getChatbot } from '@/api/server/chatbot'
import VisualBuilderContainer from '@/containers/Builder'
import { notFound } from 'next/navigation'

type PagePropsType = {
  params: {
    orgId: string
    chatbotId: string
  }
}

async function Builder({ params }: PagePropsType) {
  const chatbot = await getChatbot({
    orgId: parseInt(params.orgId),
    chatbotId: parseInt(params.chatbotId),
  })

  if(!chatbot){
    return notFound()
  }

  return <VisualBuilderContainer orgId={parseInt(params.orgId)} chatbot={chatbot} />
}

export default Builder
