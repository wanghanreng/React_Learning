/* eslint-disable react/jsx-no-undef */
import { View, MovableArea, MovableView } from '@tarojs/components'
import './movable.scss'

export default function MovablePage() {
  return (
    <View className='movable-page'>
      <MovableArea className='movable-area'>
        <MovableView
          className='movable-block'
          direction='all'
        />
      </MovableArea>
    </View>
  )
}
