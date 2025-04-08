import { View } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import Taro from '@tarojs/taro'
import './discover.scss'

export default function Discover() {
  const handleClick = (path) => {
    Taro.navigateTo({
      url: `/pages/${path}/${path}`
    })
  }

  return (
    <View className='discover'>
      <AtList>
        <AtListItem
          title='记账'
          arrow='right'
          onClick={() => handleClick('account')}
        />
        <AtListItem
          title='名片'
          arrow='right'
          onClick={() => handleClick('BusinessCard')}
        />
        <AtListItem
          title='音乐'
          arrow='right'
          onClick={() => handleClick('music')}
        />
      </AtList>
    </View>
  )
}
