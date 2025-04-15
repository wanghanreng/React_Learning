import { View } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Api() {
  const handleClick = (path) => {
    Taro.navigateTo({
      url: `/pages/${path}/${path}`
    })
  }

  return (
    <View className='api'>
      <AtList>
        <AtListItem
          title='联系人'
          arrow='right'
          onClick={() => handleClick('contact')}
        />
        <AtListItem
          title='设备'
          arrow='right'
          onClick={() => handleClick('device')}
        />
        <AtListItem
          title='其他'
          arrow='right'
          onClick={() => handleClick('other')}
        />
      </AtList>
    </View>
  )
}
