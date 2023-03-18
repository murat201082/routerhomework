import React from 'react'
import {Link} from "react-router-dom"

const MainComponent = () => {
  return (
    <div>
    <h1>Ana Sayfamıza Hoşgeldiniz</h1>
    <h3><Link to={'/employee'}>Lütfen Sanatçı Listemizi Seçiniz...</Link>  </h3>
    </div>
  )
}

export default MainComponent