import {
    type ChangeEvent,
    type Dispatch,
    type FC,
    type SetStateAction,
    useEffect,
    useRef,
    useState,
    memo,
} from "react";
import Button from "../Button";

type TProps = {
    isShowTooltip?: boolean;
    max: number;
    min: number;
    onChange?: Dispatch<SetStateAction<number[]>>;
    step: number;
    value: number[];
};

const PriceSlider: FC<TProps> = ({
    isShowTooltip = false,
    max,
    min,
    onChange,
    step,
    value,
}) => {
    const [minValue, setMinValue] = useState(value[0]);
    const [maxValue, setMaxValue] = useState(value[1]);
    const [minTooltip, setMinTooltip] = useState(value[0]);
    const [maxTooltip, setMaxTooltip] = useState(value[1]);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const minInputRef = useRef<HTMLInputElement | null>(null);
    const maxInputRef = useRef<HTMLInputElement | null>(null);
    const minTooltipRef = useRef<HTMLDivElement | null>(null);
    const maxTooltipRef = useRef<HTMLDivElement | null>(null);
    const zIndexMin = "10";
    const zIndexMax = "20";

    useEffect(() => {
        if (trackRef && trackRef.current) {
            const minLeft = `${((minValue - min) / (max - min)) * 100}%`;
            const maxRight = `${((max - maxValue) / (max - min)) * 100}%`;
            trackRef.current.style.left = minLeft;
            trackRef.current.style.right = maxRight;

            if (isShowTooltip && minTooltipRef && minTooltipRef.current) {
                minTooltipRef.current.style.left = minLeft;
                minTooltipRef.current.style.transform = `translateX(-${minLeft})`;
            }
            if (isShowTooltip && maxTooltipRef && maxTooltipRef.current) {
                maxTooltipRef.current.style.right = maxRight;
                maxTooltipRef.current.style.transform = `translateX(${maxRight})`;
            }
        }
    }, [max, maxValue, min, minValue, isShowTooltip]);

    const handleChangeMin = (event?: ChangeEvent<HTMLInputElement>) => {
        if (minInputRef && minInputRef.current && maxInputRef && maxInputRef.current) {
            minInputRef.current.style.zIndex = zIndexMax;
            maxInputRef.current.style.zIndex = zIndexMin;
        }
        if (minTooltipRef && minTooltipRef.current && maxTooltipRef && maxTooltipRef.current) {
            minTooltipRef.current.style.zIndex = zIndexMax;
            maxTooltipRef.current.style.zIndex = zIndexMin;
        }
        const value = Number(event?.target.value);
        const newMinValue = Math.min(value, maxValue); // Не дозволяємо перетинатися з maxValue
        setMinValue(newMinValue);
        setMinTooltip(newMinValue);
        onChange?.([newMinValue, maxValue]);
    };

    const handleChangeMax = (event?: ChangeEvent<HTMLInputElement>) => {
        if (minInputRef && minInputRef.current && maxInputRef && maxInputRef.current) {
            minInputRef.current.style.zIndex = zIndexMin;
            maxInputRef.current.style.zIndex = zIndexMax;
        }
        if (minTooltipRef && minTooltipRef.current && maxTooltipRef && maxTooltipRef.current) {
            minTooltipRef.current.style.zIndex = zIndexMin;
            maxTooltipRef.current.style.zIndex = zIndexMax;
        }
        const value = Number(event?.target.value);
        const newMaxValue = Math.max(value, minValue); // Не дозволяємо перетинатися з minValue
        setMaxValue(newMaxValue);
        setMaxTooltip(newMaxValue);
        onChange?.([minValue, newMaxValue]);
    };

    return (
        <div className="price-slider">
            <h3 className="price-slider__title">Price Range</h3>
            <div className="price-slider__container">
                <div className="price-slider__track--initial"></div>
                <div className="price-slider__track" ref={trackRef}></div>
                <input
                    className="price-slider__input price-slider__input-min"
                    max={max}
                    min={min}
                    name="min"
                    onChange={handleChangeMin}
                    ref={minInputRef}
                    step={step}
                    type="range"
                    value={minValue}
                />
                <input
                    className="price-slider__input price-slider__input-max"
                    max={max}
                    min={min}
                    name="max"
                    onChange={handleChangeMax}
                    ref={maxInputRef}
                    step={step}
                    type="range"
                    value={maxValue}
                />
                {isShowTooltip && (
                    <>
                        <div className="price-slider__wapper-tooltip" ref={minTooltipRef}>
                            <div className="price-slider__tooltip price-slider__tooltip-min">
                                {minTooltip}
                            </div>
                        </div>
                        <div className="price-slider__wapper-tooltip" ref={maxTooltipRef}>
                            <div className="price-slider__tooltip price-slider__tooltip-max">
                                {maxTooltip}
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="price-slider__range-min-max">
                Price: <span className="price-slider__range-min-max--brand">${minValue} - ${maxValue}</span>
            </div>
            <Button>Filter</Button>
        </div>
    );
};

export default memo(PriceSlider);