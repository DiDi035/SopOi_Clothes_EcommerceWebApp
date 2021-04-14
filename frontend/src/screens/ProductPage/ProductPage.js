import React from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Text from "../../components/Text/Text";
import SizeBtn from "../../components/SizeBtn/SizeBtn";
import ColorBtn from "../../components/ColorBtn/ColorBtn";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const ProductPage = ({}) => {
  const { id, typeCustomer, typeClothes, types } = useParams();
  return (
    <div className="proCon">
      <div className="breadCon">
        <Breadcrumb cumbs={[typeCustomer, typeClothes, types]} />
      </div>
      <div className="detailCon">
        <div className="picture">
          <div className="minorPicture">
            <div className="minorItem"></div>
            <div className="minorItem"></div>
            <div className="minorItem"></div>
            <div className="minorItem"></div>
          </div>
          <div className="mainPicture"></div>
        </div>
        <div className="filter">
          <div>
            <div>
              <Text color="dark-grey" fontWeight="normal" fontSize="24px">
                {types.replace("-", " / ")}
              </Text>
            </div>
            <div>
              <Text color="dark-grey" fontWeight="lighter" fontSize="24px">
                $69.00
              </Text>
            </div>
            <div>
              <span className="icon-star"></span>
              <span className="icon-star"></span>
              <span className="icon-star"></span>
              <span className="icon-star"></span>
              <span className="icon-star"></span>
              <Text color="dark-grey" fontSize="12px">
                {" "}
                | 0 review
              </Text>
            </div>
          </div>
          <div className="size">
            <Text color="dark-grey" fontSize="14px" fontWeight="normal">
              Size
            </Text>
            <div className="sizeBtns">
              <SizeBtn size="S" />
              <SizeBtn marginLeft="1rem" size="M" />
              <SizeBtn marginLeft="1rem" size="L" />
              <SizeBtn marginLeft="1rem" size="XL" />
            </div>
          </div>
          <div className="color">
            <Text color="dark-grey" fontSize="14px" fontWeight="normal">
              Color
            </Text>
            <div className="colorBtns">
              <ColorBtn color="#ff5f6d" />
              <ColorBtn marginLeft="1rem" color="rgba(255, 195, 113, 0.5)" />
              <ColorBtn marginLeft="1rem" color="rgba(95, 109, 255, 0.5)" />
              <ColorBtn marginLeft="1rem" color="rgba(255, 161, 95, 0.5)" />
              <ColorBtn marginLeft="1rem" color="rgba(61, 61, 63, 0.5)" />
              <ColorBtn marginLeft="1rem" color="rgba(237, 237, 237, 0.5)" />
            </div>
          </div>
          <div className="quantity">
            <Text color="dark-grey" fontSize="14px" fontWeight="normal">
              Quantity
            </Text>
            <QuantitySelector marginLeft="1rem" />
          </div>
          <PrimaryButton bgColor="#5f6dff">Add to cart</PrimaryButton>
          <hr />
          <div className="modelInfo">
            <Text fontSize="12px" color="dark-grey">
              Model wearing size S
            </Text>
            <Text fontSize="12px" color="dark-grey" fontWeight="lighter">
              - Chest 36"
            </Text>
            <Text fontSize="12px" color="dark-grey" fontWeight="lighter">
              - Length 25.75"
            </Text>
          </div>
        </div>
        <div className="recomend">
          <div className="recommendText">
            <div className="moreFrom">
              <Text color="dark-grey" fontSize="14px">
                More from
              </Text>
            </div>
            <div className="shopName">
              <Text color="greyish-brown" fontSize="14px">
                Zara
              </Text>
            </div>
          </div>
          <div className="recomendImg">
            <div className="recomendImgItem"></div>
            <div className="recomendImgItem"></div>
            <div className="recomendImgItem"></div>
            <div className="recomendImgItem"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
