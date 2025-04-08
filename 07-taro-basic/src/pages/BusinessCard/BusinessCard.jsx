import { View, Text, Input, Button, Image } from '@tarojs/components'
import { useState } from 'react'
import './BusinessCard.scss'

export default function BusinessCard() {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    phone: '',
    email: ''
  })

  const [showCard, setShowCard] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleGenerate = () => {
    if (Object.values(formData).some(value => !value)) {
      // 简单的表单验证
      return
    }
    setShowCard(true)
  }

  const handleClear = () => {
    setFormData({
      name: '',
      position: '',
      company: '',
      phone: '',
      email: ''
    })
    setShowCard(false)
  }

  return (
    <View className='business-card'>
      <View className='form-container'>
        <View className='form-item'>
          <Text>姓名：</Text>
          <Input
            type='text'
            value={formData.name}
            onInput={e => handleInputChange('name', e.detail.value)}
            placeholder='请输入姓名'
          />
        </View>
        <View className='form-item'>
          <Text>职位：</Text>
          <Input
            type='text'
            value={formData.position}
            onInput={e => handleInputChange('position', e.detail.value)}
            placeholder='请输入职位'
          />
        </View>
        <View className='form-item'>
          <Text>公司：</Text>
          <Input
            type='text'
            value={formData.company}
            onInput={e => handleInputChange('company', e.detail.value)}
            placeholder='请输入公司'
          />
        </View>
        <View className='form-item'>
          <Text>电话：</Text>
          <Input
            type='number'
            value={formData.phone}
            onInput={e => handleInputChange('phone', e.detail.value)}
            placeholder='请输入联系方式'
          />
        </View>
        <View className='form-item'>
          <Text>邮箱：</Text>
          <Input
            type='text'
            value={formData.email}
            onInput={e => handleInputChange('email', e.detail.value)}
            placeholder='请输入邮箱'
          />
        </View>
        <View className='button-group'>
          <Button type='primary' onClick={handleGenerate}>生成名片</Button>
          <Button onClick={handleClear}>清空</Button>
        </View>
      </View>

      {showCard && (
        <View className='card-preview'>
          <View className='card-header'>
            <Image
              className='avatar'
              src='https://img0.baidu.com/it/u=1034143402,1188598187&fm=253&fmt=auto&app=138&f=JPEG?w=919&h=800'
              mode='aspectFill'
            />
            <View className='basic-info'>
              <Text className='name'>{formData.name}</Text>
              <Text className='position'>{formData.position}</Text>
              <Text className='company'>{formData.company}</Text>
            </View>
          </View>
          <View className='card-footer'>
            <Text className='contact'>电话：{formData.phone}</Text>
            <Text className='contact'>邮箱：{formData.email}</Text>
          </View>
        </View>
      )}
    </View>
  )
}
