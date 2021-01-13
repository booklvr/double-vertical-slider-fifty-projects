import React, { useState, useRef, useEffect } from 'react'

const DoubleVerticalSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [transformHeight, setTransformHeight] = useState('')

  const sliderContainer = useRef(null)

  const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.current.clientHeight
    if (direction === 'up') {
      setActiveIndex(activeIndex + 1)
      if (activeIndex >= 3) {
        setActiveIndex(0)
      }
    } else if (direction === 'down') {
      setActiveIndex(activeIndex - 1)
      if (activeIndex <= 0) {
        setActiveIndex(3)
      }
    }

    setTransformHeight(activeIndex * sliderHeight)
  }

  useEffect(() => {
    // console.log('ran again')
  }, [transformHeight])

  return (
    <div ref={sliderContainer} className='slider-container'>
      <div
        className='left-slide'
        style={{
          top: `-${3 * 100}vh`,
          transform: `translateY(${transformHeight}px)`,
        }}
      >
        <div style={{ backgroundColor: '#FD3555' }}>
          <h1>Nature flower</h1>
          <p>all in pink</p>
        </div>
        <div style={{ backgroundColor: '#2A86BA' }}>
          <h1>Bluuue Sky</h1>
          <p>with it's mountains</p>
        </div>
        <div style={{ backgroundColor: '#252E33' }}>
          <h1>Lonely castle</h1>
          <p>in the wilderness</p>
        </div>
        <div style={{ backgroundColor: '#FFB866' }}>
          <h1>Flying eagle</h1>
          <p>in the sunset</p>
        </div>
      </div>
      <div
        className='right-slide'
        style={{ transform: `translateY(-${transformHeight}px)` }}
      >
        <div
          style={{
            backgroundImage:
              'url(' +
              'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80' +
              ')',
          }}
        ></div>
        <div
          style={{
            backgroundImage:
              'url(' +
              'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80' +
              ')',
          }}
        ></div>
        <div
          style={{
            backgroundImage:
              'url(' +
              'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80' +
              ')',
          }}
        ></div>
        <div
          style={{
            backgroundImage:
              'url(' +
              'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80' +
              ')',
          }}
        ></div>
      </div>
      <div className='action-buttons'>
        <button className='down-button' onClick={() => changeSlide('down')}>
          <i className='fas fa-arrow-down'></i>
        </button>
        <button className='up-button' onClick={() => changeSlide('up')}>
          <i className='fas fa-arrow-up'></i>
        </button>
      </div>
    </div>
  )
}

export default DoubleVerticalSlider
