import React, { Fragment } from "react";
import PropTypes from "prop-types";
import FeatureBlockWrapper, {
  IconWrapper,
  ContentWrapper,
  ButtonWrapper,
} from "./featureBlock.style";

const FeatureBlock = ({
  className,
  icon,
  title,
  button,
  description,
  iconPosition,
  listItems,
  additionalContent,
  wrapperStyle,
  iconStyle,
  contentStyle,
  btnWrapperStyle,
  href,
  ...props
}) => {
  // Add all classes to an array
  const addAllClasses = ["feature__block"];

  // Add icon position class
  if (iconPosition) {
    addAllClasses.push(`icon_${iconPosition}`);
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // check icon value and add
  const Icon = icon && (
    <IconWrapper className="icon__wrapper" {...iconStyle}>
      {icon}
    </IconWrapper>
  );

  // Handle onClick event for navigation
  const handleClick = () => {
    if (href) {
      window.location.href = href; // Navigate to the href
    }
  };

  return (
    <FeatureBlockWrapper
      className={addAllClasses.join(" ")}
      {...wrapperStyle}
      {...props}
      onClick={handleClick} // Attach the onClick handler
      style={{ cursor: href ? "pointer" : "default" }} // Add pointer cursor if href exists
    >
      {Icon}

      {title || description || listItems || button ? (
        <Fragment>
          <ContentWrapper className="content__wrapper" {...contentStyle}>
            {title}
            {description}
            {button && (
              <ButtonWrapper className="button__wrapper" {...btnWrapperStyle}>
                {button}
              </ButtonWrapper>
            )}
            {listItems}
          </ContentWrapper>
          {additionalContent}
        </Fragment>
      ) : (
        ""
      )}
    </FeatureBlockWrapper>
  );
};

FeatureBlock.propTypes = {
  className: PropTypes.string,
  title: PropTypes.element,
  description: PropTypes.element,
  button: PropTypes.element,
  iconPosition: PropTypes.oneOf(["top", "left", "right"]),
  wrapperStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  btnWrapperStyle: PropTypes.object,
  href: PropTypes.string, // Add href to PropTypes
};

FeatureBlock.defaultProps = {
  iconPosition: "top",
};

export default FeatureBlock;
