import React, { useContext, useEffect, useState } from 'react'
import Displayproducts from './Displayproducts';
import Announcement from './Announcement';

const Home = () => {



  return (
    <div>
<Announcement/>
<h2 className='tit'>ShoppingKart</h2>
<h3 className='h-p'>Check our new products </h3>

<Displayproducts/>

    </div>
  )
}

export default Home