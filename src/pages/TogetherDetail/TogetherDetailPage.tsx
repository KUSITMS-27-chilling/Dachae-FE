import React from 'react'
import { useParams } from 'react-router-dom'
import TogetherDetail from '../../components/TogetherDetail/TogetherDetail'

function TogetherDetailPage() {
  const { listenIdx } = useParams();

  return (
    <div>
      <TogetherDetail listenIdx ={Number(listenIdx)}/>
    </div>
  )
}

export default TogetherDetailPage
