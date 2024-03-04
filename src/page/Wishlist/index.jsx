import React from 'react'
import CardWishlist from '../../component/molecules/CardWishlist'
import lock from '../../uploads/images/lock.png'
import team from '../../uploads/images/team.png'
import Breadcrumb from '../../component/atom/Breadcrumb'

const Wishlist = () => {
  return (
    <main className="bg-gray-200">
    <section
      className="relative mx-auto flex h-[100dvh] w-full max-w-[425px] flex-1 flex-col bg-white"
      style={{ opacity: 1, transform: "none" }}
    >
      <section className="flex h-full flex-col overflow-x-hidden">
        <div className="container flex h-full flex-col pb-4 pt-6">
          <div className="flex h-full flex-col justify-between">
            <div className="mt-6">
              <div className="relative pb-20">
                <Breadcrumb />
                <div className="wish-ask text-black">
                    <p>What type of wishlist you want to create ? </p>
                </div>
                <CardWishlist images={lock} cardTitle={"Private Wishlist" } cardDesc={"A Private wishlist only for you"} />
                <CardWishlist images={team} cardTitle={"Collaboration Wishlist" } cardDesc={"Share with friends"} />                
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
  )
}

export default Wishlist