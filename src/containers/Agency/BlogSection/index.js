import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Link from 'common/components/Link';
import NextImage from 'common/components/NextImage';
import FeatureBlock from 'common/components/FeatureBlock';
import data from 'common/data/Agency';
import Container from 'common/components/UI/Container';
import BlogSectionWrapper from './blogSection.style';

const BlogSection = ({
  row,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  blogTitle,
  blogMeta,
}) => {
  return (
    <BlogSectionWrapper id="portfolio_section">
      <Container>
        <Box {...sectionHeader}>
          <Text content="PORTFOLIO" {...sectionSubTitle} />
          <Heading
            content="Explore My Portfolio of Customer Projects"
            {...sectionTitle}
          />
        </Box>
        <Box className="row" {...row}>
          {data.blog.map((post, index) => (
            <FeatureBlock
              href={post.url}
              key={`post_key-${index}`}
              id={`post_id-${post.id}`}
              className="blog__post"
              style={{marginTop:10}}
              icon={
                <NextImage
                  src={post.thumbnail_url}
                  alt={`Blog Image ${post.id}`}
                  className="blog__image"
                  layout="fill"
                />
              }
              title={
                <Link href={post.url} {...blogTitle}>
                  {post.title}
                </Link>
              }
              description={<Text content={post.date} {...blogMeta} />}
            />
          ))}
        </Box>
      </Container>
    </BlogSectionWrapper>
  );
};

// BlogSection style props
BlogSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  blogTitle: PropTypes.object,
  blogMeta: PropTypes.object,
};

// BlogSection default style
BlogSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
    color:'white',
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: 'white',
    mb: '10px',
    color:'white'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: 'white',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // Blog post row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-12px',
    mr: '-12px',
  },
  // Blog post title default style
  blogTitle: {
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#ffffff',
    lineHeight: '1.5',
    mb: '10px',
    letterSpacing: '-0.020em',
  },
  // Blog post description default style
  blogMeta: {
    fontSize: '16px',
    lineHeight: '1',
    color: 'rgba(255, 255, 255, 0.5)',
    mb: 0,
  },
};

export default BlogSection;
