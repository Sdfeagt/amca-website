import React from 'react'
import BoardSlide from './BoardSlide'

import "../styles/Board.css"

const Board = () => {
  const President = {
    src: "DeepankerPic.png",
    alt: "Deepanker",
    name: "Deepanker Kanjarla",
    role: "President",
    phone: "+358 406 623 447",
    mail: "deepanker.kanjarla@aalto.fi"
  }

  const Social = {
    src: "PatriciaPic.png",
    alt: "Patricia",
    name: "Patricia Sarkkinen",
    role: "Head of Social Media and Marketing",
    phone: "+358 45 164 0640",
    mail: "patricia.sarkkinen@aalto.fi"
  }

  const IT = {
    src: "RafalPic.png",
    alt: "Rafal",
    name: "Rafal Ciechanski",
    role: "Head of IT",
    phone: "+358 44 964 2175",
    mail: "rafal.ciechanski@aalto.fi"
  }

  const Treasurer = {
    src: "KabirPic.png",
    alt: "Kabir",
    name: "Kabir Bissessar",
    role: "Treasurer",
    phone: "+358 40 363 4086",
    mail: "kabir.bissessar@aalto.fi"
  }

  const Operations = {
    src: "BiaPic.png",
    alt: "Bia",
    name: "Beatriz Glaser",
    role: "Head of Operations",
    phone: "+358 44 244 1163",
    mail: "beatriz.glaser@aalto.fi"
  }
  return (
    <div className='BoardPage'>
      <h1>Board of 2022</h1>
      <BoardSlide member={President}/>
      <BoardSlide member={Social}/>
      <BoardSlide member={IT}/>
      <BoardSlide member={Treasurer}/>
      <BoardSlide member={Operations}/>
      </div>
  )
}

export default Board