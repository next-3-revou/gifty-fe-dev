import { Avatar} from 'antd';

import user from '../../uploads/images/user.png'
import { TextGeneral, TextLabel } from '../../component/atom/Text';
import TabPanel from '../../component/atom/Tabs';

const Profiles = () => {
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
                          <div className="relative pb-5">
                            <div className="profile-sections pb-5 border-b-2 border-[#969696]">
                              <div className="profile-section profile-section-avatars pb-2">
                                <Avatar size={125} src={user} />
                              </div>
                              <div className="profile-section profile-section-details text-black pb-2">
                                <TextGeneral label={"John Doe"} size={"text-xl"} textcolor={"text-black"} />
                                <TextLabel props={"text-sm"} label={"@johndoe"} />
                              </div>
                              <div className="profile-section profile-section-followers text-black flex justify-evenly">
                                <div className="follow">
                                  <TextGeneral label={"0"} size={"text-xl"} textcolor={"text-black"} />
                                  <TextLabel props={"text-sm"} label={"Following"} />
                                </div>
                                <div className="follow">
                                  <TextGeneral label={"0"} size={"text-xl"} textcolor={"text-black"} />
                                  <TextLabel props={"text-sm"} label={"Follower"} />
                                </div>
                              </div>
                            </div>
                            <div className="profiles-tab">
                              <TabPanel />
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </section>
  </main>
  )
}

export default Profiles