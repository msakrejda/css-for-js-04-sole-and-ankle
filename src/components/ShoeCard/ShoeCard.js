import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Flair variant={variant} />
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          {variant === 'on-sale'
            ? <OriginalPrice>{formatPrice(price)}</OriginalPrice>
            : <Price>{formatPrice(price)}</Price>}
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {variant === 'on-sale' && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Flair = ({
  variant
}) => {
  if (variant === 'default') {
    return null;
  }
  if (variant === 'new-release') {
    return <NewFlair>Just Released!</NewFlair>
  }
  if (variant === 'on-sale') {
    return <SaleFlair>Sale</SaleFlair>
  }
}

const BaseFlair = styled.div`
  position: absolute;
  top: 16px;
  right: -4px;
  color: ${COLORS.white};
  font-size: 0.8rem;
  font-weight: bold;
  padding: 8px;
  border-radius: 2px;
  background-color: var(--bg-color);
`;

const NewFlair = styled(BaseFlair)`
  --bg-color: ${COLORS.secondary};
`;

const SaleFlair = styled(BaseFlair)`
  --bg-color: ${COLORS.primary};
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``;
const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: ${COLORS.gray[700]};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
