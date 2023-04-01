// The homepage of the application

import { useState,useEffect } from "react"
import { Loader, Card, Forms } from "../components"

const RenderCards = ({data, title}) => {
  if(data?.length > 0 ) {
  return data.map((post) => <Card key={post._id} {...post} />)
  }
  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">
      {title}
    </h2>
  )
}

const Home = () => {

  const [loading,setLoading] = useState(false)
  const [allPosts, setAllPosts] = useState(null)
  const [searchText, setSearchText] = useState('')

    return (
      <section className="max-1-7x1 mx-auto">
        <div>
          <h1 className="font-extrabold text-[#22238] text-[32px]">Showcase Room</h1>
          <p className="mt-2 text-[#666e75] text-[14px] max-w[500px]">Take a look at a compilation of visually breathtaking pictures generated by PixelWit</p>
        </div>

        <div className="mt-16">
          <Forms />
        </div>

        <div className="mt-12">
          {loading ? (
            <div>
              <Loader />
            </div>
          ) : (
            <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing Results for <span className="text-[#222328]"> {searchText} </span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1g gap-3">

            </div>
            </>
          )}
        </div>
      </section>
    )
  }
  
  export default Home