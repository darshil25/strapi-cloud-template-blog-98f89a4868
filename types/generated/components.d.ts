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
    displayName: 'MediaSection';
  };
  attributes: {
    media1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    media1_position: Schema.Attribute.Enumeration<['left', 'right']>;
    media2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'reusable.heading-block': ReusableHeadingBlock;
      'reusable.image-text-block': ReusableImageTextBlock;
      'reusable.media-section': ReusableMediaSection;
      'reusable.quote-block': ReusableQuoteBlock;
      'reusable.rich-text-block': ReusableRichTextBlock;
    }
  }
}
