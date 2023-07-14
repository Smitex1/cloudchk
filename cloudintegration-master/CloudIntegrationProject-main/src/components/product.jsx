

const Product = () => {

  return(
    <div>

      <div className="div1">

        <div className="shop">
          Shop Popular Categories
        </div>

        <div className="PIC">
          <div>
            <img src={require("../components/assets/pic1.avif")} alt="jh" style={{ width: "45%", borderRadius: "20%"}} />

            <img src={require("../components/assets/pic2.avif")} alt="hello" style={{ width: "45%"}}/> 

          </div>
          <div>
            <img src={require("../components/assets/pic3.avif")} alt="hello" style={{ width: "45%"}}/>

            <img src={require("../components/assets/pic4.avif")} alt="hello" style={{ width: "45%", borderRadius:"20px"}}/> 
          </div>
        </div>

      </div>

    </div>
  )
}

export default Product;