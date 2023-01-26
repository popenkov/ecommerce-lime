import { ReceiptDetailedData } from "@src/mock/ReceiptDetailedData";
import { FC, useState } from "react";
import { ChiefReceipts } from "../MainPage/ChiefSection/ChiefReceipts";
import { Rating, ThumbSlider } from "../UI";
import { VideoButton } from "../UI/VideoButton";
import { ReceiptDescription } from "./ReceiptDescription";
import { ReceiptReviews } from "./ReceiptReviews";
import { ReceiptSteps } from "./ReceiptSteps";

import { Styled } from "./styles";

export const ReceiptDetailed: FC = () => {
  const { sliderImages, description, anotherReceipts, videoLink } = ReceiptDetailedData;
  const { title, color, rating } = ReceiptDetailedData.receiptSteps;
  const [activeTab, setActiveTab] = useState(1);

  const handleTabLinkClick = (activeId: number) => {
    setActiveTab((prev) => (prev = activeId));
  };

  return (
    <Styled.Receipt>
      <Styled.ReceiptTopContainer>
        <Styled.SliderContainer>
          <ThumbSlider data={sliderImages} height="314px" />
          <Styled.VideoButtonContainer>
            <VideoButton {...videoLink} />
          </Styled.VideoButtonContainer>
        </Styled.SliderContainer>

        <ReceiptDescription data={description} />
      </Styled.ReceiptTopContainer>

      <Styled.ReceiptBottomContainer>
        <Styled.TabsContainer>
          <Styled.TabsLink onClick={() => handleTabLinkClick(1)} isActive={activeTab === 1}>
            <Styled.Title>{title}</Styled.Title>
          </Styled.TabsLink>
          <Styled.TabsLink onClick={() => handleTabLinkClick(2)} isActive={activeTab === 2}>
            <Styled.RatingButton>
              <Styled.RatingButtonText>Отзывы</Styled.RatingButtonText>

              <Rating data={rating} showReviewsValue={false} />
            </Styled.RatingButton>
          </Styled.TabsLink>
        </Styled.TabsContainer>

        <Styled.TabContentContainer>
          {activeTab === 1 ? (
            <Styled.TabItem>
              <ReceiptSteps />
            </Styled.TabItem>
          ) : (
            <Styled.TabItem>
              <ReceiptReviews />
            </Styled.TabItem>
          )}
        </Styled.TabContentContainer>
      </Styled.ReceiptBottomContainer>

      <Styled.ReceiptsContainer>
        <ChiefReceipts
          title={anotherReceipts.title}
          subtitle={anotherReceipts.subtitle}
          items={anotherReceipts.items}
          buttonHref={anotherReceipts?.button?.href || "#"}
          buttonText={anotherReceipts?.button?.text}
          hasAllItemsLink={true}
        />
      </Styled.ReceiptsContainer>
    </Styled.Receipt>
  );
};
