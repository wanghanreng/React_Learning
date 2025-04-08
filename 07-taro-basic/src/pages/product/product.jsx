/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
import React, { useState, useEffect } from "react";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { AtCard, AtButton } from "taro-ui";
import Taro, { useRouter } from '@tarojs/taro';

import "./product.scss";

const recommendProducts = [
    {
      id: 1,
      title: '高端咖啡机',
      price: '1299.00',
      image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
      description: '高端咖啡机，香醇出众',
    },
    {
      id: 2,
      title: '智能手表',
      price: '899.00',
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
      description: '智能手表，运动必备',
    },
    {
      id: 3,
      title: '充电宝',
      price: '199.00',
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      description: '大容量快充移动电源',
    },
];

const Product = () => {
    const router = useRouter();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const { id } = router.params;
        const productId = parseInt(id);
        const foundProduct = recommendProducts.find(p => p.id === productId);

        if (foundProduct) {
            setProduct({
                ...foundProduct,
                images: [foundProduct.image, foundProduct.image, foundProduct.image]
            });
        } else {
            Taro.showToast({
                title: '商品不存在',
                icon: 'none',
                duration: 2000
            });
            setTimeout(() => {
                Taro.navigateBack();
            }, 2000);
        }
    }, [router.params]);

    if (!product) {
        return <View>加载中...</View>;
    }

    const handleBuy = () => {
        console.log("购买商品：", product.id);
    };

    return (
        <View className="product">
            <Swiper
              className="product-swiper"
              indicatorColor="#999"
              indicatorActiveColor="#333"
              circular
              indicatorDots
              autoplay
            >
                {product.images.map((image, index) => (
                    <SwiperItem key={index}>
                        <Image className="product-image" src={image} mode="aspectFill" />
                    </SwiperItem>
                ))}
            </Swiper>

            <View className="product-info">
                <View className="product-title">{product.title}</View>
                <View className="product-price">¥{product.price}</View>
            </View>

            <AtCard title="商品详情">
                <View className="product-description">{product.description}</View>
            </AtCard>

            <View className="product-action">
                <AtButton type="primary" onClick={handleBuy}>
                    立即购买
                </AtButton>
            </View>
        </View>
    );
};

export default Product;
