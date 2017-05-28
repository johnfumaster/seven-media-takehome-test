import React from 'react';
import {shallow} from 'enzyme';
import ShowTile from '../ShowTile';

const data = {
  "id" : "0",
  "image_url" : "images/tile.jpg",
  "image_alt" : "Steve Peacocke, Dan Ewing, Johnny Ruffo, Bonnie Sveen",
  "show_name" : "Home and Away",
  "link_url" : "//au.tv.yahoo.com/home-and-away/",
  "logoAltText": "Channel 7",
  "logoSrc": "images/logo.png"
};

it('renders without crashing', () => {
  shallow(<ShowTile linkUrl={data.link_url} showName={data.show_name} logoAltText={data.logoAltText} logoSource={data.logoSrc} displayLogo={true} imageSource={data.image_url} imageAltText={data.image_alt} isLinkExternal={true}/>);
});

it('Does not render the logo when displayLogo is false', () => {
  const component = shallow(<ShowTile linkUrl={data.link_url} showName={data.show_name} logoAltText={data.logoAltText} logoSource={data.logoSrc} displayLogo={false} imageSource={data.image_url} imageAltText={data.image_alt} isLinkExternal={true}/>);
  const result = component.find('.show-tile--logo').exists();

  expect(result).toEqual(false);
});

it('Has a link with an aria-label to say it will open an external link when isLinkExternal is true', () => {
  const component = shallow(<ShowTile linkUrl={data.link_url} showName={data.show_name} logoAltText={data.logoAltText} logoSource={data.logoSrc} displayLogo={false} imageSource={data.image_url} imageAltText={data.image_alt} isLinkExternal={true}/>);
  const link = component.find('.show-tile a[aria-label]');
  expect(link.exists()).toEqual(true);
  expect(link.prop('aria-label')).toEqual('this link will open a new window')
});
