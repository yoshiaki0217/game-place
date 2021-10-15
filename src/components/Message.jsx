import React from 'react'

const Message = () => {
  const MessageData = [
    {
      name: 'yoshiaki',
      img: '/image/',
      message: 'よしあきよしあきよしあきよしあきよしあき'
    },
    {
      name: 'kazuki',
      img: '/image/',
      message: 'かずきかずきかずきかずきかずきかずきかずき'
    },
  ];

  return (
    <section>
      <ul>
        {MessageData.map((messageData,index) => {
          return (
            <li>
              <a href="aaa">
                <p>
                  <img src="" alt="" />
                </p>
                <p>{messageData.name }</p>
                <p>{ messageData.message }</p>
              </a>
            </li>
          );
        })}

      </ul>
    </section>
  )
}

export default Message