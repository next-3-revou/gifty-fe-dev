import React, { useState } from 'react';
import { Modal } from 'antd';

import Carousels from '../../component/atom/Carousel'
import front1 from '../../uploads/images/front1.png'
import Forms from '../../component/molecules/Form';
import './styles.css'

const FrontPage = () => {

  const [open, setOpen] = useState(false);
  
	const tesClick = () => {
		setOpen(true);
	}

  const handleOk = () => { 
    setOpen(false);
  }

  const handleCancel = () => { 
    setOpen(false);
  }


  return (
    <>
      <main className="bg-gray-200">
        <section
          className="relative mx-auto flex h-[100dvh] w-full max-w-[425px] flex-1 flex-col bg-white"
          style={{ opacity: 1, transform: "none" }}
        >
          <section className="flex h-full flex-col overflow-x-hidden">
            <div className="container flex h-full flex-col pb-4 pt-6">
              <div className="flex h-full flex-col justify-between">
                <div className="mt-6">
                  <div className="relative pt-20 pb-20">
                    <Carousels images={front1} onClick={() => tesClick()} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <Modal
          title={"SIGN UP"}
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Forms />
        </Modal>
      </main>
    </>

  )
}

export default FrontPage