import React from 'react'
import TogetherDetail from '../../components/TogetherDetail/TogetherDetail'

const TogetherDetailPage=()=> {
  //const { listenIdx } = useParams();
  const listenIdx = 20;
  console.log(listenIdx);
  return (
    <div>
      <TogetherDetail listenIdx ={Number(listenIdx)}/>
    </div>
  )
}

export default TogetherDetailPage
