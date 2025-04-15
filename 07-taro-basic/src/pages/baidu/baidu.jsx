/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
import React from "react";
import { View, WebView } from "@tarojs/components";
import "./baidu.scss";

const Baidu = () => {
  const handleLoad = () => {
    console.log('网页加载完成');
  };

  const handleError = () => {
    console.log('网页加载失败');
  };

  return (
    <View className="baidu">
      <WebView
        src="https://www.baidu.com"
        onLoad={handleLoad}
        onError={handleError}
      />
    </View>
  );
};

export default Baidu;
