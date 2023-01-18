import React from 'react'
import {useContext} from 'react'
import StoreContext from '../../store'
import Content from './Content'
import Topbar from './Topbar'

const Exchange = () => {

    const store = useContext(StoreContext)

  return (
    <div>
        <Topbar/>
        <Content/>
    </div>
  )
}

export default Exchange