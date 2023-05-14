import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import {
    CommuBestBox,
    Best,
    Text

} from './CommuBest.styled'

function CommuBest({ titleStr } : { titleStr: string}) {
  return (
    <div>
      <CommuBestBox>
        <Best>BEST</Best>
        <Text>{titleStr}</Text>
      </CommuBestBox>
    </div>
  )
}

export default CommuBest
