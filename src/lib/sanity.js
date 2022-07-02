
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  token: process.env.REACT_APP_SANITY_TOKEN,
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client); 
export const urlFor = (source) => {
  if(source === undefined) return null
  if(source && source.asset !== undefined){
    return builder.image(source); 
  } 
} 