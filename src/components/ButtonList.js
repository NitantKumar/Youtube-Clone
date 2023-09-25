import React from 'react'
import Button from './Button'

const list = ["All", "JavaScript", "Gaming", "Music", "Anime", "Data Structures", "Cars", "Manga", "Sitcoms", "Fitness", "Sports", "BodyBuilding", "Nutrition", "Nature", "Philosophy"];

const ButtonList = () => {
  return (
    <div className='flex overflow-x-scroll scrollbar-hide'>
      {
        list.map((item, index) => (<Button key = {index} name = {item}/>))
      }
    </div>
  )
}

export default ButtonList