import { useCallback, useEffect, useState, useRef, FC } from "react";

import { Styled } from "./styles";

type RangeSliderProps = {
  min: number;
  max: number;
  onChange: any;
};

export const RangeSlider: FC<RangeSliderProps> = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement | null>(null);

  const getPercent = useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <Styled.Container>
      <Styled.ThumbsContainer>
        <Styled.ThumbLeft
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
        />
        <Styled.ThumbRight
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
        />
      </Styled.ThumbsContainer>

      <Styled.Slider>
        <Styled.InputsContainer>
          <Styled.LeftValue type="text" value={minVal} />
          <Styled.InputsDivider />
          <Styled.RightValue type="text" value={maxVal} />
        </Styled.InputsContainer>

        <Styled.RangeSliderContainer>
          <Styled.Track />
          <Styled.Range ref={range} />
        </Styled.RangeSliderContainer>
      </Styled.Slider>
    </Styled.Container>
  );
};
