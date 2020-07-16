import React from 'react'
import './index.scss'
import { Popover } from 'antd'

const shopCar = ({ count, active }) => (
  <Popover placement="bottomRight" title="wenas"  trigger="click">
    <div className="cart-container">
      {count > 0 ?
      <div className="count-form">
        <span>{count}</span>
      </div> : null}
    </div>
  </Popover>
);
export default shopCar