import React from 'react'


const Header = () => {
  return (
    <header>
      <div className="flex justify-between px-24 ">
        <p>logo</p>
        <ul className="flex justify-between w-5/10">
          <li><a href="">ホーム</a></li>
          <li><a href="">寄付金額</a></li>
          <li><a href="">子供達の声</a></li>
          <li><a href="">協力</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header