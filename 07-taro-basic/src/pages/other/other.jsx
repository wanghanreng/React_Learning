/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, Input, Button, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './other.scss';

const Other = () => {
  const [inputText, setInputText] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const [downloadStatus, setDownloadStatus] = useState('');

  // 复制文本到剪贴板
  const handleCopy = async () => {
    try {
      await Taro.setClipboardData({
        data: inputText
      });
      setCopyStatus('复制成功！');
      setTimeout(() => setCopyStatus(''), 2000);
    } catch (error) {
      setCopyStatus('复制失败：' + error.message);
    }
  };

  // 截屏功能
  const handleScreenshot = async () => {
    try {
      await Taro.showToast({
        title: '正在截屏...',
        icon: 'loading',
        duration: 1000
      });
      const res = await Taro.captureScreen();
      await Taro.showToast({
        title: '截屏成功！',
        icon: 'success',
        duration: 2000
      });
    } catch (error) {
      Taro.showToast({
        title: '截屏失败：' + error.message,
        icon: 'none',
        duration: 2000
      });
    }
  };

  // 获取蓝牙适配器状态
  const getBluetoothState = () => {
    Taro.getBluetoothAdapterState({
      success: (res) => {
        Taro.showModal({
          title: '蓝牙适配器状态',
          content: `蓝牙是否可用：${res.available}\n是否正在搜索设备：${res.discovering}`,
          showCancel: false
        });
      },
      fail: (err) => {
        Taro.showToast({
          title: '获取蓝牙状态失败：' + err.errMsg,
          icon: 'none',
          duration: 2000
        });
      }
    });
  };

  // 下载并保存图片
  const handleDownloadImage = async () => {
    const imageUrl = 'https://wanghanreng.oss-cn-guangzhou.aliyuncs.com/35dc4987-baef-4caa-8047-94a35bd23d23_777.jpg';
    try {
      setDownloadStatus('正在下载...');
      const downloadRes = await Taro.downloadFile({
        url: imageUrl
      });

      if (downloadRes.statusCode === 200) {
        await Taro.saveImageToPhotosAlbum({
          filePath: downloadRes.tempFilePath
        });
        setDownloadStatus('图片已保存到相册！');
        setTimeout(() => setDownloadStatus(''), 2000);
      } else {
        throw new Error('下载失败');
      }
    } catch (error) {
      setDownloadStatus('保存失败：' + error.message);
    }
  };

  return (
    <View className='other'>
      <View className='section'>
        <Text>剪贴板功能</Text>
        <Input
          type='text'
          placeholder='请输入要复制的文本'
          value={inputText}
          onInput={e => setInputText(e.detail.value)}
        />
        <Button onClick={handleCopy}>复制文本</Button>
        {copyStatus && <Text className='status-text'>{copyStatus}</Text>}
      </View>

      <View className='section'>
        <Text>截屏功能</Text>
        <Button onClick={handleScreenshot}>截取屏幕</Button>
      </View>

      <View className='section'>
        <Text>系统设置</Text>
        <Button onClick={getBluetoothState}>获取蓝牙状态</Button>
      </View>

      <View className='section'>
        <Text>图片下载</Text>
        <Button onClick={handleDownloadImage}>下载示例图片</Button>
        {downloadStatus && <Text className='status-text'>{downloadStatus}</Text>}
      </View>
    </View>
  );
};

export default Other;
