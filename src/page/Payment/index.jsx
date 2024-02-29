// import React from 'react'
import Forms from '../../component/molecules/Form'

const Payment = () => {

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
                    <Forms type={"payment"} title={"One more to go, add your Payment Information"} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default Payment