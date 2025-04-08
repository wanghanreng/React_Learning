/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import { AtForm, AtInput, AtButton, AtList, AtListItem, AtTabs, AtTabsPane, AtFloatLayout, AtSwipeAction, AtModal } from 'taro-ui';
import Taro from '@tarojs/taro';
import './account.scss';

const Account = () => {
  const [records, setRecords] = useState([]);
  const [isAddingRecord, setIsAddingRecord] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);
  const [formData, setFormData] = useState({
    amount: '',
    type: '支出',
    date: new Date().toISOString().split('T')[0],
    note: ''
  });

  // 从本地存储加载数据
  useEffect(() => {
    const storedRecords = Taro.getStorageSync('accountRecords');
    if (storedRecords) {
      setRecords(JSON.parse(storedRecords));
    }
  }, []);

  // 保存数据到本地存储
  const saveRecords = (newRecords) => {
    Taro.setStorageSync('accountRecords', JSON.stringify(newRecords));
    setRecords(newRecords);
  };

  // 添加新记录
  const handleSubmit = () => {
    if (!formData.amount) {
      Taro.showToast({
        title: '请输入金额',
        icon: 'none'
      });
      return;
    }

    const newRecord = {
      ...formData,
      id: Date.now(),
      amount: parseFloat(formData.amount)
    };

    const newRecords = [newRecord, ...records];
    saveRecords(newRecords);
    setIsAddingRecord(false);
    setFormData({
      amount: '',
      type: '支出',
      date: new Date().toISOString().split('T')[0],
      note: ''
    });
  };

  // 计算总收支
  const calculateTotal = () => {
    const income = records
      .filter(record => record.type === '收入')
      .reduce((sum, record) => sum + record.amount, 0);
    const expense = records
      .filter(record => record.type === '支出')
      .reduce((sum, record) => sum + record.amount, 0);
    return { income, expense, balance: income - expense };
  };

  const totals = calculateTotal();
  const tabList = [{ title: '全部' }, { title: '收入' }, { title: '支出' }];

  const filteredRecords = () => {
    switch (currentTab) {
      case 1:
        return records.filter(record => record.type === '收入');
      case 2:
        return records.filter(record => record.type === '支出');
      default:
        return records;
    }
  };

  return (
    <View className='account-page'>
      <View className='account-summary'>
        <View className='summary-item'>
          <Text className='label'>收入</Text>
          <Text className='amount income'>¥{totals.income.toFixed(2)}</Text>
        </View>
        <View className='summary-item'>
          <Text className='label'>支出</Text>
          <Text className='amount expense'>¥{totals.expense.toFixed(2)}</Text>
        </View>
        <View className='summary-item'>
          <Text className='label'>结余</Text>
          <Text className='amount balance'>¥{totals.balance.toFixed(2)}</Text>
        </View>
      </View>

      <AtTabs current={currentTab} tabList={tabList} onClick={setCurrentTab}>
        {tabList.map((tab, index) => (
          <AtTabsPane current={currentTab} index={index} key={index}>
            <AtList>
              {filteredRecords().map(record => (
                <AtSwipeAction
                  key={record.id}
                  options={[{
                    text: '删除',
                    style: {
                      backgroundColor: '#FF4949'
                    }
                  }]}
                  onClick={() => {
                    setRecordToDelete(record);
                    setIsModalOpen(true);
                  }}
                >
                  <AtListItem
                    title={record.note || '无备注'}
                    note={record.date}
                    extraText={`¥${record.amount.toFixed(2)}`}
                    iconInfo={{
                      size: 25,
                      color: record.type === '收入' ? '#78c06e' : '#f76a24',
                      value: record.type === '收入' ? 'add-circle' : 'subtract-circle',
                    }}
                  />
                </AtSwipeAction>
              ))}
            </AtList>
          </AtTabsPane>
        ))}
      </AtTabs>

      <View className='add-button'>
        <AtButton type='primary' onClick={() => setIsAddingRecord(true)}>
          添加记录
        </AtButton>
      </View>

      <AtFloatLayout
        isOpened={isAddingRecord}
        title='添加记录'
        onClose={() => setIsAddingRecord(false)}
      >
        <AtForm>
          <AtInput
            name='amount'
            title='金额'
            type='number'
            placeholder='请输入金额'
            value={formData.amount}
            onChange={(value) => setFormData({ ...formData, amount: value })}
          />
          <AtInput
            name='type'
            title='类型'
            type='text'
            placeholder='收入/支出'
            value={formData.type}
            onChange={(value) => setFormData({ ...formData, type: value })}
          />
          <AtInput
            name='date'
            title='日期'
            type='date'
            value={formData.date}
            onChange={(value) => setFormData({ ...formData, date: value })}
          />
          <AtInput
            name='note'
            title='备注'
            type='text'
            placeholder='请输入备注'
            value={formData.note}
            onChange={(value) => setFormData({ ...formData, note: value })}
          />
          <AtButton type='primary' onClick={handleSubmit}>提交</AtButton>
        </AtForm>
      </AtFloatLayout>

      <AtModal
        isOpened={isModalOpen}
        title='确认删除'
        cancelText='取消'
        confirmText='确认'
        onClose={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={() => {
          if (recordToDelete) {
            const newRecords = records.filter(record => record.id !== recordToDelete.id);
            saveRecords(newRecords);
            setRecordToDelete(null);
          }
          setIsModalOpen(false);
        }}
        content='确定要删除这条记录吗？'
      />
    </View>
  );
};

export default Account;
