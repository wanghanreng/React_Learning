/* eslint-disable react/prop-types */
import { Modal, Button, Row, Col } from 'antd';

const BookDetail = ({ visible, onClose, title, author, category, description, cover }) => {
  return (
    <Modal
      title="书籍详情"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          关闭
        </Button>
      ]}
      width={600} // 设置模态框宽度
    >
      <div style={{ padding: '20px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <img src={cover} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
          </Col>
          <Col span={16}>
            <h2>{title}</h2>
            <p><strong>作者:</strong> {author}</p>
            <p><strong>分类:</strong> {category}</p>
            <p className="detail-description">{description}</p> {/* 使用详情弹窗中的描述样式 */}
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default BookDetail;