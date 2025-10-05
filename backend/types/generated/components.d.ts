import type { Schema, Struct } from '@strapi/strapi';

export interface CaseStudiesFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_case_studies_faq_items';
  info: {
    description: '';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

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

export interface SharedInsight extends Struct.ComponentSchema {
  collectionName: 'components_shared_insights';
  info: {
    displayName: 'Insight';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedTag extends Struct.ComponentSchema {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'case-studies.faq-item': CaseStudiesFaqItem;
      'homepage.counter-item': HomepageCounterItem;
      'homepage.feature-list-item': HomepageFeatureListItem;
      'shared.insight': SharedInsight;
      'shared.tag': SharedTag;
    }
  }
}
