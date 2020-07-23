import React from 'react'
import './index.scss'
import { Modal } from 'antd'
export const ModalInfo = ({ visible }) => {
    return (
        <Modal
          title="Info"
          visible={visible}
          onCancel={!visible}
          footer={[
              <button>Hola</button>,
              <button>Salir</button>
          ]}
        >
          <p>Some contents...</p>
        </Modal>
    )
}