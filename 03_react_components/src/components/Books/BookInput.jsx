// BookInput.jsx
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space, Cascader } from 'antd';

const { Option } = Select;

const BookInput = ({ onAddBook }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const categories = [
    {
      value: 'fiction',
      label: 'Fiction',
      children: [
        {
          value: 'fantasy',
          label: 'Fantasy',
        },
        {
          value: 'mystery',
          label: 'Mystery',
        },
      ],
    },
    {
      value: 'non-fiction',
      label: 'Non-Fiction',
      children: [
        {
          value: 'biography',
          label: 'Biography',
        },
        {
          value: 'self-help',
          label: 'Self-Help',
        },
      ],
    },
  ];

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const newBook = {
      cover: values.cover,
      title: values.title,
      author: values.author,
      category: values.category,
      description: values.description,
    };
    onAddBook(newBook); // 调用BookItem组件的addBook函数
    onClose(); // 关闭抽屉
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        添加书籍
      </Button>
      <Drawer
        title="添加一本新的书籍"
        width={720}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>取消</Button>
            <Button onClick={form.submit} type="primary">
              添加
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark form={form} onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="书名"
                rules={[
                  {
                    required: true,
                    message: '请输入书名',
                  },
                ]}
              >
                <Input placeholder="请输入书名" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="author"
                label="作者"
                rules={[
                  {
                    required: true,
                    message: '请输入作者名',
                  },
                ]}
              >
                <Input placeholder="请输入作者名" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="category"
                label="分类"
                rules={[
                  {
                    required: true,
                    message: '请选择分类',
                  },
                ]}
              >
                <Cascader options={categories} placeholder="请选择分类" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="描述"
                rules={[
                  {
                    required: true,
                    message: '请输入内容简介',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="请输入内容简介" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default BookInput;