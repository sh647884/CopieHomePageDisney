import React from 'react';
import { render } from '@testing-library/react';
import Slides from './Slides';

describe('Slides component', () => {
  const slides = [
    { img: 'slide1.jpg' },
    { img: 'slide2.jpg' },
    { img: 'slide3.jpg' }
  ];
  const imgSlide = 0;
  const transitionClass = 'fade';

  it('should render without errors', () => {
    render(<Slides slides={slides} imgSlide={imgSlide} transitionClass={transitionClass} />);
  });

  it('correct image display', () => {
    const { getByAltText } = render(<Slides slides={slides} imgSlide={imgSlide} transitionClass={transitionClass} />);
    const imgElement = getByAltText('title');
    expect(imgElement.src).toContain(slides[imgSlide].img);
  });

});
