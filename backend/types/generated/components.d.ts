import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageCounterItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_counter_items';
  info: {
    description: '';
    displayName: 'Counter Item';
    icon: 'chart-pie';
  };
  attributes: {
    color: Schema.Attribute.String;
    symbol: Schema.Attribute.String;
    title: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface HomepageFeatureListItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_feature_list_items';
  info: {
    displayName: 'FeatureListItem';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface HomepageServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_homepage_service_cards';
  info: {
    displayName: 'ServiceCard';
  };
  attributes: {
    buttonUrl: Schema.Attribute.String;
    color: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.counter-item': HomepageCounterItem;
      'homepage.feature-list-item': HomepageFeatureListItem;
      'homepage.service-card': HomepageServiceCard;
    }
  }
}
