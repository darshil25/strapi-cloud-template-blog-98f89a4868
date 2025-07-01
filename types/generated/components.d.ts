import type { Schema, Struct } from '@strapi/strapi';

export interface ReusableHeadingBlock extends Struct.ComponentSchema {
  collectionName: 'components_reusable_heading_blocks';
  info: {
    displayName: 'HeadingBlock';
  };
  attributes: {
    heading: Schema.Attribute.String;
  };
}

export interface ReusableImageTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_reusable_image_text_blocks';
  info: {
    displayName: 'ImageTextBlock';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_position: Schema.Attribute.Enumeration<['left', 'right']>;
    text: Schema.Attribute.Blocks;
  };
}

export interface ReusableMediaSection extends Struct.ComponentSchema {
  collectionName: 'components_reusable_media_sections';
  info: {
    displayName: 'DualMediaLayout';
  };
  attributes: {
    media1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    media1_position: Schema.Attribute.Enumeration<['left', 'right']>;
    media2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ReusableMultiMediaBlock extends Struct.ComponentSchema {
  collectionName: 'components_reusable_multi_media_blocks';
  info: {
    displayName: 'MultiMediaBlock';
  };
  attributes: {
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ReusableQuoteBlock extends Struct.ComponentSchema {
  collectionName: 'components_reusable_quote_blocks';
  info: {
    displayName: 'QuoteBlock';
  };
  attributes: {
    author: Schema.Attribute.String;
    quote: Schema.Attribute.String;
  };
}

export interface ReusableRichTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_reusable_rich_text_blocks';
  info: {
    displayName: 'RichTextBlock';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface ReusableSingleMediaBlock extends Struct.ComponentSchema {
  collectionName: 'components_reusable_single_media_blocks';
  info: {
    displayName: 'SingleMediaBlock';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ReusableYoutubeVideo extends Struct.ComponentSchema {
  collectionName: 'components_reusable_youtube_videos';
  info: {
    displayName: 'YoutubeVideo';
  };
  attributes: {
    youtubeVideoUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'reusable.heading-block': ReusableHeadingBlock;
      'reusable.image-text-block': ReusableImageTextBlock;
      'reusable.media-section': ReusableMediaSection;
      'reusable.multi-media-block': ReusableMultiMediaBlock;
      'reusable.quote-block': ReusableQuoteBlock;
      'reusable.rich-text-block': ReusableRichTextBlock;
      'reusable.single-media-block': ReusableSingleMediaBlock;
      'reusable.youtube-video': ReusableYoutubeVideo;
    }
  }
}
