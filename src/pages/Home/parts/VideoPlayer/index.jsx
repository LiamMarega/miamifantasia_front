import React from "react"
import "./styles.scss"
import {motion} from "framer-motion"

function VideoPlayer() {
  const cardVariants2 = {
    offscreen: {
      opacity: 0,
      x: 200,
      width: "100%",
      minWidth: "100vw",
    },
    onscreen: {
      opacity: 1,
      x: 0,
      width: "100%",
      minWidth: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      transition: {
        type: "spring",

        duration: 1,
      },
    },
  }

  return (
    <div className='containerVideoPlayer flex'>
      <motion.div initial='offscreen' whileInView='onscreen'>
        <motion.div variants={cardVariants2}>
          <iframe
            src='https://www.youtube.com/embed/FpYzkzYtliU'
            title="95m O'PARI Luxury Yacht"
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default VideoPlayer
