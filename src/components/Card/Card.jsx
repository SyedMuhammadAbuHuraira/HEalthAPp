import { Card } from 'antd'
import React from 'react'

const CardComp = ({title,ChartComponent,Bottom}) => {
  return (
    <Card className=" bg-white rounded-xl border-[1px] border-border p-5 shadow-lg ">
    <div>
        <h1 className='text-lg mb-2'>{title}</h1>
    </div>
    <div>
        {ChartComponent}
    </div>
    <div>
      {Bottom}
    </div>
    </Card>
  )
}

export default CardComp
