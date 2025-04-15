/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './news.scss'; // 引入 SCSS 文件

class News extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      newsList: [],
      page: 1,
      refreshing: false,
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchNews(1, true); // 第一次加载第 1 页的数据
  }

  fetchNews = async (pageNum, isRefresh = false) => {
    try {
      const response = await Taro.request({
        url: 'https://apis.tianapi.com/generalnews/index',
        method: 'GET',
        data: {
          key: 'd3175447f8a94cfb526d25e2cbdb0601', // 请确保API KEY有效
          page: pageNum,
        },
      });

      console.log('Response:', response.data); // 记录API响应

      // 确保API返回成功且数据结构正确
      if (!response || response.data.code !== 200 || !response.data.result || !response.data.result.newslist) {
        throw new Error('返回数据为空或请求失败');
      }

      const newsData = response.data.result.newslist || []; // 从响应中提取 newslist
      this.setState(
        (prevState) => ({
          newsList: isRefresh ? newsData : [...prevState.newsList, ...newsData],
        }),
        () => {
          console.log('Updated newsList:', this.state.newsList); // 验证更新后的状态
        }
      );
    } catch (error) {
      console.error('Fetch news error:', error); // 记录错误
      const errorMsg = error.message || '获取新闻失败';
      this.setState({ error: errorMsg });
      Taro.showToast({
        title: errorMsg,
        icon: 'none',
        duration: 2000,
      });
    } finally {
      this.setState({ refreshing: false, loading: false });
    }
  };

  onRefresh = () => {
    this.setState({ refreshing: true, page: 1 }, () => {
      this.fetchNews(1, true);
    });
  };

  onLoadMore = () => {
    const { loading, page } = this.state;
    if (!loading) {
      this.setState({ loading: true, page: page + 1 }, () => {
        this.fetchNews(page + 1); // 请求下一页数据
      });
    }
  };

  render() {
    const { newsList, refreshing, loading, error } = this.state;

    // 显示错误消息
    if (error) {
      return <View className="error-message">{error}</View>;
    }

    // 如果没有数据且没有在加载中
    if (newsList.length === 0 && !loading) {
      return <View>没有数据，请稍后再试</View>;
    }

    return (
      <ScrollView
        scrollY
        refresherEnabled
        refresherTriggered={refreshing}
        onRefresherRefresh={this.onRefresh}
        onScrollToLower={this.onLoadMore}
        style={{ height: '100vh' }}
      >
        <View className="news-list">
          {newsList.map((news) => (
            <View className="news-item" key={news.id}>
              {news.picUrl && (
                <Image className="news-image" src={news.picUrl} mode="aspectFill" />
              )}
              <View className="news-content">
                <Text className="news-title">{news.title}</Text>
                {/* {news.description && <Text className="news-description">{news.description}</Text>} */}
                <View className="news-meta">
                  <Text className="news-source">{news.source}</Text>
                  <Text className="news-ctime">{news.ctime}</Text>
                </View>
              </View>
            </View>
          ))}
          {loading && <Text className="loading-text">加载中...</Text>}
        </View>
      </ScrollView>
    );
  }
}

export default News;
