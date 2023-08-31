import React from 'react'
import DefaultNoPostPic from "../resources/defaultNoImgPost.jpg"
import { Link } from 'react-router-dom'
import DOMPurify from "dompurify";

const Campanii = () => {

  const posts = [
    {
      id: 1,
      title: "Title 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in mollis nunc sed. Morbi enim nunc faucibus a pellentesque. Cras semper auctor neque vitae. Interdum consectetur libero id faucibus nisl tincidunt eget. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Nibh ipsum consequat nisl vel pretium lectus quam. Arcu ac tortor dignissim convallis aenean. Rutrum quisque non tellus orci ac auctor augue. Scelerisque eleifend donec pretium vulputate. \n Elementum integer enim neque volutpat ac. Pulvinar mattis nunc sed blandit libero. Porttitor massa id neque aliquam. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Turpis egestas maecenas pharetra convallis posuere. Aliquet lectus proin nibh nisl condimentum id venenatis. Orci eu lobortis elementum nibh. Urna cursus eget nunc scelerisque viverra mauris. Arcu bibendum at varius vel. Eros in cursus turpis massa tincidunt dui. Erat velit scelerisque in dictum non consectetur a erat. Vulputate dignissim suspendisse in est ante. Fringilla ut morbi tincidunt augue interdum velit euismod. Mi ipsum faucibus vitae aliquet nec ullamcorper. Vel facilisis volutpat est velit egestas dui id ornare arcu. Ligula ullamcorper malesuada proin libero nunc. Odio facilisis mauris sit amet. Ut sem viverra aliquet eget sit amet tellus.",
      img: null,
    },
    {
      id: 2,
      title: "Title 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in mollis nunc sed. Morbi enim nunc faucibus a pellentesque. Cras semper auctor neque vitae. Interdum consectetur libero id faucibus nisl tincidunt eget. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Nibh ipsum consequat nisl vel pretium lectus quam. Arcu ac tortor dignissim convallis aenean. Rutrum quisque non tellus orci ac auctor augue. Scelerisque eleifend donec pretium vulputate. \n Elementum integer enim neque volutpat ac. Pulvinar mattis nunc sed blandit libero. Porttitor massa id neque aliquam. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Turpis egestas maecenas pharetra convallis posuere. Aliquet lectus proin nibh nisl condimentum id venenatis. Orci eu lobortis elementum nibh. Urna cursus eget nunc scelerisque viverra mauris. Arcu bibendum at varius vel. Eros in cursus turpis massa tincidunt dui. Erat velit scelerisque in dictum non consectetur a erat. Vulputate dignissim suspendisse in est ante. Fringilla ut morbi tincidunt augue interdum velit euismod. Mi ipsum faucibus vitae aliquet nec ullamcorper. Vel facilisis volutpat est velit egestas dui id ornare arcu. Ligula ullamcorper malesuada proin libero nunc. Odio facilisis mauris sit amet. Ut sem viverra aliquet eget sit amet tellus.",
      img: null,
    },
    {
      id: 3,
      title: "Title 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in mollis nunc sed. Morbi enim nunc faucibus a pellentesque. Cras semper auctor neque vitae. Interdum consectetur libero id faucibus nisl tincidunt eget. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Nibh ipsum consequat nisl vel pretium lectus quam. Arcu ac tortor dignissim convallis aenean. Rutrum quisque non tellus orci ac auctor augue. Scelerisque eleifend donec pretium vulputate. \n Elementum integer enim neque volutpat ac. Pulvinar mattis nunc sed blandit libero. Porttitor massa id neque aliquam. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Turpis egestas maecenas pharetra convallis posuere. Aliquet lectus proin nibh nisl condimentum id venenatis. Orci eu lobortis elementum nibh. Urna cursus eget nunc scelerisque viverra mauris. Arcu bibendum at varius vel. Eros in cursus turpis massa tincidunt dui. Erat velit scelerisque in dictum non consectetur a erat. Vulputate dignissim suspendisse in est ante. Fringilla ut morbi tincidunt augue interdum velit euismod. Mi ipsum faucibus vitae aliquet nec ullamcorper. Vel facilisis volutpat est velit egestas dui id ornare arcu. Ligula ullamcorper malesuada proin libero nunc. Odio facilisis mauris sit amet. Ut sem viverra aliquet eget sit amet tellus.",
      img: null,
    },
    {
      id: 4,
      title: "Title 4",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in mollis nunc sed. Morbi enim nunc faucibus a pellentesque. Cras semper auctor neque vitae. Interdum consectetur libero id faucibus nisl tincidunt eget. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Nibh ipsum consequat nisl vel pretium lectus quam. Arcu ac tortor dignissim convallis aenean. Rutrum quisque non tellus orci ac auctor augue. Scelerisque eleifend donec pretium vulputate. \n Elementum integer enim neque volutpat ac. Pulvinar mattis nunc sed blandit libero. Porttitor massa id neque aliquam. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Turpis egestas maecenas pharetra convallis posuere. Aliquet lectus proin nibh nisl condimentum id venenatis. Orci eu lobortis elementum nibh. Urna cursus eget nunc scelerisque viverra mauris. Arcu bibendum at varius vel. Eros in cursus turpis massa tincidunt dui. Erat velit scelerisque in dictum non consectetur a erat. Vulputate dignissim suspendisse in est ante. Fringilla ut morbi tincidunt augue interdum velit euismod. Mi ipsum faucibus vitae aliquet nec ullamcorper. Vel facilisis volutpat est velit egestas dui id ornare arcu. Ligula ullamcorper malesuada proin libero nunc. Odio facilisis mauris sit amet. Ut sem viverra aliquet eget sit amet tellus.",
      img: null,
    },
  ]

  return (
    <div className='campanii'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              {/*todo: define how pics are handled*/}
              {post.img ? <img src={`../uploads/${post.img}`} alt="" /> : <img src={DefaultNoPostPic} alt="imagine postare" />}
            </div>
            <div className="content">
              <Link className='link' to={`/campanii/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <div className='description'>
                {post.content}
              </div>
              <Link className='link' to={`/campanii/${post.id}`}>
                <button>Citeste mai mult</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Campanii