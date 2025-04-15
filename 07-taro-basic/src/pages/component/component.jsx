/* eslint-disable jsx-quotes */
import { View } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import Taro from '@tarojs/taro'
import './component.scss'

export default function Component() {
  const handleClick = (path) => {
    Taro.navigateTo({
      url: `/pages/${path}/${path}`
    })
  }

  return (
    <View className='component'>
      <AtList>
        <AtListItem
          title='基础组件'
          arrow='right'
          onClick={() => handleClick('basic')}
        />
        <AtListItem
          title='容器组件'
          arrow='right'
          onClick={() => handleClick('container')}
        />
        <AtListItem
          title='表单组件'
          arrow='right'
          onClick={() => handleClick('form')}
        />
        <AtListItem
          title='媒体组件'
          arrow='right'
          onClick={() => handleClick('media')}
        />
        <AtListItem
          title='skyline组件'
          arrow='right'
          onClick={() => handleClick('skyline')}
        />
        <AtListItem
          title='地图'
          arrow='right'
          onClick={() => handleClick('map')}
        />
        <AtListItem
          title='定位'
          arrow='right'
          onClick={() => handleClick('dingwei')}
        />
        <AtListItem
          title='新闻'
          arrow='right'
          onClick={() => handleClick('news')}
        />
        <AtListItem
          title='Movable'
          arrow='right'
          onClick={() => handleClick('movable')}
        />
        <AtListItem
          title='百度'
          arrow='right'
          onClick={() => handleClick('baidu')}
        />
      </AtList>
    </View>
  )
}
