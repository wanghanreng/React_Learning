/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
import React, { useEffect, useState } from "react";
import { View } from '@tarojs/components';
import { AtAvatar, AtList, AtListItem, AtButton } from "taro-ui";
import Taro from "@tarojs/taro";

const Profile = () => {
  // 定义状态变量来获取用户信息
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [username, setUsername] = useState("");

  const checkLoginStatus = () => {
    const isLoggedIn = Taro.getStorageSync("isLoggedIn");
    if (isLoggedIn) {
      setIsLoggedIn(true);
      setAvatarUrl(Taro.getStorageSync("avatarUrl") || "");
      setUsername(Taro.getStorageSync("username") || "");
    } else {
      setIsLoggedIn(false);
      setAvatarUrl("");
      setUsername("未登录");
    }
  }

  const handleLogout = () => {
    // 清除本地存储的用户信息
    Taro.removeStorageSync("isLoggedIn");
    Taro.removeStorageSync("avatarUrl");
    Taro.removeStorageSync("username");

    // 更新状态
    checkLoginStatus();

    // 显示提示并跳转到首页
    Taro.showToast({
      title: "已退出登录",
      icon: "success",
      duration: 2000
    });

    Taro.switchTab({
      url: "/pages/index/index"
    });
  };

  useEffect(() => {
    // 在组件加载时获取用户信息
    checkLoginStatus();
    Taro.eventCenter.on('loginSuccess', checkLoginStatus);
    return () => {
      Taro.eventCenter.off('loginSuccess', checkLoginStatus);
    };
  }, []);

  return (
    <View className="profile">
        <View style={{ padding: "20px", textAlign:"center", backgroundColor:"#ddd" }}>
            <AtAvatar circle image={avatarUrl} size="large" />
            <View style={{ color: "#fff", marginTop: "10px" }}>{username}</View>
        </View>

        {isLoggedIn ? (
          <AtList>
            <AtListItem
              title="我的订单"
              arrow="right"
              iconInfo={{ size: 25, color: "#78AFAF", value: "shopping-cart" }}
            />
            <AtListItem
              title="我的喜欢"
              arrow="right"
              iconInfo={{ size: 25, color: "#FF4949", value: "heart" }}
            />
            <AtListItem
              title="设置"
              arrow="right"
              iconInfo={{ size: 25, color: "#6190E8", value: "settings" }}
            />
            <AtListItem
              title="退出登录"
              arrow="right"
              iconInfo={{ size: 25, color: "#FF4949", value: "logout" }}
              onClick={handleLogout}
            />
            </AtList>
        ) : (
          <View style={{ padding: "20px", textAlign: "center" }}>
            <AtButton type="primary" onClick={() => Taro.navigateTo({ url: "/pages/login/login" })}>
              登录
            </AtButton>
          </View>
        )}
    </View>
  );
};

export default Profile;
