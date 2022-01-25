import PropTypes from 'prop-types'
import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ image, title: movie_title, text: description }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{movie_title}</h1>
        <p>{description}</p>
      </Text>
    </Content>
  </Wrapper>
);

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default HeroImage;