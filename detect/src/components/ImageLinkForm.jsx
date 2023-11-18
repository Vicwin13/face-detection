

const ImageLinkForm = () => {
  return (
    <div className="text-center mt-10">
    <form className=" ">     
     <p className="p-4">{'This lens will detect the faces in your photos, try it out'}</p>
      <div className="pattern rounded-md shadow-3xl p-4 md:p-6 w-full md:w-8/12 mx-auto ">
        <input type="text" className="p-2 w-10/12 rounded-md" placeholder="link to image"/>
        <button className="px-4 py-2 ml-4 w-auto md:mt-2 mt-4 shadow-xl rounded-md border-[.5px]">Detect</button>
      </div>
      </form>

    </div>
  )
}

export default ImageLinkForm;
