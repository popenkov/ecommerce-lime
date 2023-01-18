import { Accordion } from "@src/components/UI/Accordion";
import { FormCheckbox } from "@src/components/UI/FormCheckbox";
import { catalogData, CheckboxType, LinkType } from "@src/mock/CatalogData";
import { FC, useState } from "react";

import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import { Styled } from "./styles";

export const Filter: FC = () => {
  const { filters } = catalogData;
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeChange = (value: number) => {
    console.log(value);
    setRangeValue((prev) => {
      return (prev = value);
    });
  };
  return (
    <Styled.Filter>
      {filters.map((filter) => {
        let renderData;
        const type = filter.type;

        if (type === "links") {
          const data = filter?.items as LinkType[];
          renderData = data.map((link) => {
            return (
              <Styled.FilterLink to={link.href} key={link.id} isActive={link.isActive}>
                {link.name}
              </Styled.FilterLink>
            );
          });
        } else if (type === "range") {
          return (
            <Slider
              key={filter.type}
              min={filter?.range?.minPrice}
              max={filter?.range?.minPrice}
              value={rangeValue}
              onChange={handleRangeChange}
            />
            // <div class="slidecontainer" id="bigslider">
            //   <input type="range" min="1" max="100" className="slider" />
            // </div>
          );
        } else if (type === "checkboxes") {
          const data = filter?.items as CheckboxType[];
          renderData = data.map((link) => {
            return (
              <FormCheckbox
                text={link.text}
                id={link.inputValue}
                name={link.inputName}
                value={link.inputValue}
                isChecked={link.isChecked}
                key={link.id}
              />
            );
          });
        }
        return (
          <Styled.FilterContainer key={filter.title}>
            <Accordion title={filter.title}>{renderData}</Accordion>;
          </Styled.FilterContainer>
        );
      })}
    </Styled.Filter>
  );
};
