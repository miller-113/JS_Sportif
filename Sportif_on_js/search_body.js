let search_body = `<!DOCTYPE html>
<!--FIRST SEC-->
  <div class="parent-home">
<!--    <img src="./src/img/home.png" alt="">-->
    <span class="home"><a href="./">HOME</a> > SHORTS</span>
    <span class="title search"><input class="hide_placeholder" type="text" placeholder="SEARCH"> </span>
  </div>
<!--SECOND SECTION-->
  <div class="product-section flex">
<!--    LEFT NAV-BAR-->
    <div class="border nav flex">
      <div>
        <div class="flex space-between">
          <div class="nav-title">SIZE</div>
          <div class="arrowOpenDetail">ᐯ</div>
        </div>
        <div id="size-box" class="hide-content flex">
        </div>
      </div>

      <div>
        <div class="flex space-between">
          <div class="nav-title">COLOR</div>
          <div class="arrowOpenDetail">ᐯ</div>
        </div>
        <div id="colors-box" class="hide-content flex">
          <span class="size-box color-pr-detail black" data-color="black"></span>
          <span class="size-box color-pr-detail brown" data-color="brown"></span>
          <span class="size-box color-pr-detail blue" data-color="blue"></span>
          <span class="size-box color-pr-detail green" data-color="green"></span>
          <span class="size-box color-pr-detail grey" data-color="grey"></span>
          <span class="size-box color-pr-detail orange" data-color="orange"></span>
          <span class="size-box color-pr-detail white" data-color="white"></span>
          <span class="size-box color-pr-detail red_color" data-color="red"></span>
        </div>
      </div>

      <div>
        <div class="flex space-between">
          <div class="nav-title">BOTTOMS</div>
          <div class="arrowOpenDetail">ᐯ</div>
        </div>
        <div class="hide-content"></div>
      </div>
      <div>
        <div class="flex space-between">
          <div class="nav-title">INSEAM</div>
          <div class="arrowOpenDetail">ᐯ</div>
        </div>
        <div class="hide-content"></div>
      </div>
      <div>
        <div class="flex space-between">
          <div class="nav-title">SUSTAINABLE FABRIC</div>
          <div class="arrowOpenDetail">ᐯ</div>
        </div>
        <div class="hide-content"></div>
      </div>

      <div>
        <div class="flex space-between">
          <div class="nav-title">COLLECTION</div>
          <div class="arrowOpenDetail">ᐯ</div>
        </div>
        <div class="hide-content"></div>
      </div>
    </div>
<!--PRODUCTS THERE-->
    <div class="border product-place ">

      <div class="box-pagination">
      </div>
    </div>  
  </div>


</body>
</html>`

let productBody = `
<!--FIRST SEC-->
  <div class="parent-home">
    <span class="home"><a href="#"><a href="./"><span class="homeBtn">HOME</span></a></a> > <a href="#"><span class="productCategoryBtn">Product</span></a> > <a href="#"><span class="productName">PRODUCT</span></a>

  </div>
  <!--SECOND SECTION-->
  <div class="flex section-detail">
    <div>
      <div class="mainPhotoPr"><div class="mainPhotoWrrap"><img src="./src/img/shorts46.png" alt="test"></div></div>
      <div class="slider">
        <div class="sliderItem active-border"><img  src="./src/img/shorts1.png" alt="test"></div>
        <div class="sliderItem"><img src="./src/img/shorts46.png" alt="test"></div>
      </div>
      </div>
    <div>
      <div class="title-detail">Sportif's Original Short
        <span class="small-text">ITEM # 670170</span>
      </div>
<!--      stars-->
      <div class="formItem">
        <div class="ratingUpd">
          <div class="ratingBody">
            <div class="ratingActive"></div>
            <div class="ratingItems">
              <input type="radio" class="ratingItem" value="1" name="rating">
              <input type="radio" class="ratingItem" value="2" name="rating">
              <input type="radio" class="ratingItem" value="3" name="rating">
              <input type="radio" class="ratingItem" value="4" name="rating">
              <input type="radio" class="ratingItem" value="5" name="rating">
            </div>
          </div><span class="additional-text font18 labelRating">REVIEWS THERE</span>
        </div>
      </div>
<!--      price-->
      <div class="card-price margin50"><b>As low as</b> <h1>$40.99</h1></div>

<!--      COLORS THERE-->
      <div class="color-details"></div>
        <div class="font18">COLOR:</div>
        <div id="colors" class="hide-content flex offAround">
          <span class="size-box color-pr-detail black" data-color="black"></span>
          <span class="size-box color-pr-detail brown" data-color="brown"></span>
          <span class="size-box color-pr-detail blue" data-color="blue"></span>
          <span class="size-box color-pr-detail green" data-color="green"></span>
          <span class="size-box color-pr-detail grey" data-color="grey"></span>
          <span class="size-box color-pr-detail orange" data-color="orange"></span>
          <span class="size-box color-pr-detail white" data-color="white"></span>
        </div>

      <!--      SIZE THERE-->
      <div class="size-detail margin20">
        <div class="font18">SIZE:</div>
        <div id="sizes" class="hide-content flex">
          <span class="size-box size-pr-detail">30</span>
          <span class="size-box size-pr-detail">32</span>
          <span class="size-box size-pr-detail">34</span>
          <span class="size-box size-pr-detail">36</span>
          <span class="size-box size-pr-detail">38</span>
          <span class="size-box size-pr-detail">40</span>
          <span class="size-box size-pr-detail">42</span>
          <span class="size-box size-pr-detail">44</span>
          <span class="size-box size-pr-detail">46</span>
        </div>
      </div>
      <div class="buttonsDetailAddBagAndWhitelist">
        <div class="btn-detail">ADD TO BAG</div>
        <div class="btn-detail-whitelist">ADD TO WHITELIST</div>
      </div>
      <div class="parent-fa">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-pinterest"></a>
        <a href="#" class="link"><img src="./src/img/link1.png" alt=""> </a>
      </div>
      <h1 class="worry-free">- Worry Free Shopping -</h1>
      <div class="flex worry-free-under">
        <div>FREE PRIORITY SHIPPING ON ORDERS $99+*</div>
        <div>FREE RETURNS & EXCHANGES*</div>
      </div>
    </div>
  </div>

  <!--    THIRD SECTION (DETAIL PR)-->
  <div class="title margin50 text-align">
    DETAILS
  </div>
  <div class="additional-text additional-text-detail">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dicta dolorum iste molestias necessitatibus non praesentium quasi temporibus totam. Culpa illum, itaque magni molestias officia recusandae temporibus ut voluptatum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dicta dolorum iste molestias necessitatibus non praesentium quasi temporibus totam. Culpa illum, itaque magni molestias officia recusandae temporibus ut voluptatum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dicta dolorum iste molestias necessitatibus non praesentium quasi temporibus totam. Culpa illum, itaque magni molestias officia recusandae temporibus ut voluptatum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dicta dolorum iste molestias necessitatibus non praesentium quasi temporibus totam. Culpa illum, itaque magni molestias officia recusandae temporibus ut voluptatum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dicta dolorum iste molestias necessitatibus non praesentium quasi temporibus totam. Culpa illum, itaque magni molestias officia recusandae temporibus ut voluptatum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dicta dolorum iste molestias necessitatibus non praesentium quasi temporibus totam. Culpa illum, itaque magni molestias officia recusandae temporibus ut voluptatum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dicta dolorum iste molestias necessitatibus non praesentium quasi temporibus totam. Culpa illum, itaque magni molestias officia recusandae temporibus ut voluptatum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dicta dolorum iste molestias necessitatibus non praesentium quasi temporibus totam. Culpa illum, itaque magni molestias officia recusandae temporibus ut voluptatum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dicta dolorum iste molestias necessitatibus non praesentium quasi temporibus totam. Culpa illum, itaque magni molestias officia recusandae temporibus ut voluptatum.
  </div>

  <!-- Fourth SECTION REVIEWS -->
  <div class="black bck-grey">
    <div class="title margin20 text-align clr-white">
      REVIEWS
    </div>
    <div class="box-review-wrap">
      <div class="box-review">
        <div class="rating-detail">
          <div>Comfort</div>

          <div class="formItem">
            <div class="ratingUpd font3rem">
              <div class="ratingBody">
                <div class="ratingActive"></div>
                <div class="ratingItems">
                  <input type="radio" class="ratingItem" value="1" name="rating">
                  <input type="radio" class="ratingItem" value="2" name="rating">
                  <input type="radio" class="ratingItem" value="3" name="rating">
                  <input type="radio" class="ratingItem" value="4" name="rating">
                  <input type="radio" class="ratingItem" value="5" name="rating">
                </div>
              </div></span>
            </div>
          </div>
          <div>Fir</div>
          <div class="formItem ">
            <div class="ratingUpd font3rem">
              <div class="ratingBody">
                <div class="ratingActive"></div>
                <div class="ratingItems">
                  <input type="radio" class="ratingItem" value="1" name="rating">
                  <input type="radio" class="ratingItem" value="2" name="rating">
                  <input type="radio" class="ratingItem" value="3" name="rating">
                  <input type="radio" class="ratingItem" value="4" name="rating">
                  <input type="radio" class="ratingItem" value="5" name="rating">
                </div>
              </div></span>
            </div>
          </div>
          <div>Overall</div>
          <div class="formItem">
            <div class="ratingUpd font3rem">
              <div class="ratingBody">
                <div class="ratingActive"></div>
                <div class="ratingItems">
                  <input type="radio" class="ratingItem" value="1" name="rating">
                  <input type="radio" class="ratingItem" value="2" name="rating">
                  <input type="radio" class="ratingItem" value="3" name="rating">
                  <input type="radio" class="ratingItem" value="4" name="rating">
                  <input type="radio" class="ratingItem" value="5" name="rating">
                </div>
              </div></span>
            </div>
          </div>
          <div>Quality</div>
          <div class="formItem">
            <div class="ratingUpd font3rem">
              <div class="ratingBody">
                <div class="ratingActive"></div>
                <div class="ratingItems">
                  <input type="radio" class="ratingItem" value="1" name="rating">
                  <input type="radio" class="ratingItem" value="2" name="rating">
                  <input type="radio" class="ratingItem" value="3" name="rating">
                  <input type="radio" class="ratingItem" value="4" name="rating">
                  <input type="radio" class="ratingItem" value="5" name="rating">
                </div>
              </div></span>
            </div>
          </div>
        </div>
        <div class="commentary-detail">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium adipisci aperiam, assumenda dignissimos doloribus exercitationem fugiat inventore laudantium necessitatibus neque perspiciatis possimus provident quasi quibusdam quo ullam voluptas.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium adipisci aperiam, assumenda dignissimos doloribus exercitationem fugiat inventore laudantium necessitatibus neque perspiciatis possimus provident quasi quibusdam quo ullam voluptas.
        </div>
      </div>
      <div class="box-review"></div>
      <div class="box-review"></div>
      <div class="box-review"></div>
      <div class="box-review"></div>
      <div class="box-review"></div>
    </div>
  </div>

  <!-- FIFTH SECTION(RATING & FORM FOR COMMENT) -->
  <div class="title margin80 text-align additional-title-detail">
    You're Reviewing:
  </div>
  <div class="title text-align">
    Sportif's Original Short
  </div>
  <h1 class="text-align">Your Rating</h1>

  <div class="rating">
    <div class="overall">
      <div>OVERALL</div>
      <div class="formItem">
        <div class="ratingUpd font5rem">
          <div class="ratingBody">
            <div class="ratingActive"></div>
            <div class="ratingItems">
              <input type="radio" class="ratingItem" value="1" name="rating">
              <input type="radio" class="ratingItem" value="2" name="rating">
              <input type="radio" class="ratingItem" value="3" name="rating">
              <input type="radio" class="ratingItem" value="4" name="rating">
              <input type="radio" class="ratingItem" value="5" name="rating">
            </div>
          </div></span>
        </div>
      </div>
    </div>
    <div class="comfort">
      <div>COMFORT</div>
      <div class="formItem">
        <div class="ratingUpd font5rem">
          <div class="ratingBody">
            <div class="ratingActive"></div>
            <div class="ratingItems">
              <input type="radio" class="ratingItem" value="1" name="rating">
              <input type="radio" class="ratingItem" value="2" name="rating">
              <input type="radio" class="ratingItem" value="3" name="rating">
              <input type="radio" class="ratingItem" value="4" name="rating">
              <input type="radio" class="ratingItem" value="5" name="rating">
            </div>
          </div></span>
        </div>
      </div>
    </div>
    <div class="quality">
      <div>QUALITY</div>
      <div class="formItem">
        <div class="ratingUpd font5rem">
          <div class="ratingBody">
            <div class="ratingActive"></div>
            <div class="ratingItems">
              <input type="radio" class="ratingItem" value="1" name="rating">
              <input type="radio" class="ratingItem" value="2" name="rating">
              <input type="radio" class="ratingItem" value="3" name="rating">
              <input type="radio" class="ratingItem" value="4" name="rating">
              <input type="radio" class="ratingItem" value="5" name="rating">
            </div>
          </div></span>
        </div>
      </div>
    </div>
    <div class="fit">
      <div>FIT</div>
      <div class="formItem">
        <div class="ratingUpd font5rem">
          <div class="ratingBody">
            <div class="ratingActive"></div>
            <div class="ratingItems">
              <input type="radio" class="ratingItem" value="1" name="rating">
              <input type="radio" class="ratingItem" value="2" name="rating">
              <input type="radio" class="ratingItem" value="3" name="rating">
              <input type="radio" class="ratingItem" value="4" name="rating">
              <input type="radio" class="ratingItem" value="5" name="rating">
            </div>
          </div></span>
        </div>
      </div>
    </div>
  </div>

  <!--FORM FOR COMMENTARY  -->
  <div class="form-detail margin80 text-align">
    <form action="#">
      <input type="text" name="name" placeholder="NAME">
      <input type="text" name="summarry" placeholder="SUMMARY"><br>
      <textarea placeholder="REVIEW" name="textarea-detail" id="textarea-detail" cols="30" rows="10" ></textarea><br>
      <button type="submit">SUBMIT</button>
    </form>
  </div>
`

const cartDetailPage = `
<div class="parent-home">
    <span class="home"><a href="#"><a href="./"><span class="homeBtn">HOME</span></a></a> > <a href="#"><span class="productName">PRODUCT</span></a></span>

  </div>
  <div class="wrpappPage">
    <h1 class="text-align basketTitle">YOUR CART (count ITEMS)</h1>
    <table class="tableCart">
      <thead>
        <tr>
          <th colspan="2">Item</th><th>Price</th><th>Quantity</th><th>Total</th>
        </tr>
      </thead>
      <tbody class="tableBody">

        <tr>
          <td><img src="./src/img/pants1.png" alt=""></td>
          <td>
            <div class="cartPrBrand">Sportif USA</div>
            <div class="cartPrName">TEst name</div>
            <div class="cartPrcolor">chosen color</div>
            <div class="cartPrSize">chosen size</div>
            <a href="#" class="cartPrBtnChange">Change</a>
          </td>
          <td><div class="cartPrPrice">20$</div></td>
          <td><span class="arrowCartQuantity">&#11015;</span><span class="quantityBetweenArrow"> 1 <span class="arrowCartQuantity">&#11014;</span> </span></td>
          <td class="totalPricePrCart">Total price</td>
        </tr>

        <tr>
          <td><img src="./src/img/pants1.png" alt=""></td>
          <td>
            <div class="cartPrBrand">Sportif USA</div>
            <div class="cartPrName">TEst name</div>
            <div class="cartPrcolor">chosen color</div>
            <div class="cartPrSize">chosen size</div>
  <!--          <div class="cartPrSize"></div>-->
            <a href="#" class="cartPrBtnChange">Change</a>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><img src="./src/img/pants1.png" alt=""></td>
          <td>
            <div class="cartPrBrand">Sportif USA</div>
            <div class="cartPrName">TEst name</div>
            <div class="cartPrcolor">chosen color</div>
            <div class="cartPrSize">chosen size</div>
  <!--          <div class="cartPrSize"></div>-->
            <a href="#" class="cartPrBtnChange">Change</a>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div class="subTotal">
      <ul class="cart-totals">
        <li class="cart-total">
          <div class="cart-total-label"><strong>Subtotal</strong>:</div>
          <div class="cart-total-value">Our value to past</div>
        </li>
        <li class="cart-total">
          <div class="cart-total-label"><strong>Shipping:</strong></div>
          <div class="cart-total-value underline"><a href="#">Add info</a></div>
        </li>
        <li class="cart-total">
          <div class="cart-total-label"><strong>Discount code:</strong></div>
          <div class="cart-total-value underline"><a href="#">Add discount code</a></div>
        </li>
        <li class="cart-total">
          <div class="cart-total-label"><strong>Grand total:</strong></div>
          <div class="cart-total-value">Our value to past</div>
        </li>
        <li>
          <div class="checkoutAction cartPrCheckout"><a href="#">CHECK OUT NOW</a></div>

        </li>
      </ul>
    </div>
  </div>
`