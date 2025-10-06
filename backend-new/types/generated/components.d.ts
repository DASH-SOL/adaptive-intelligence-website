import type { Schema, Struct } from '@strapi/strapi';

export interface CaseStudiesPageFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_case_studies_page_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface CreativesBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_creatives_benefit_items';
  info: {
    displayName: 'Benefit Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconType: Schema.Attribute.Enumeration<
      [
        'remote',
        'growth',
        'innovation',
        'sustainability',
        'results',
        'collaborative',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface CreativesValueItem extends Struct.ComponentSchema {
  collectionName: 'components_creatives_value_items';
  info: {
    displayName: 'Value Item';
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#FF1292'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface EcoHubCard extends Struct.ComponentSchema {
  collectionName: 'components_eco_hub_cards';
  info: {
    displayName: 'Hub Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconType: Schema.Attribute.Enumeration<['tools', 'research', 'community']>;
    title: Schema.Attribute.String;
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
      'case-studies-page.faq-item': CaseStudiesPageFaqItem;
      'creatives.benefit-item': CreativesBenefitItem;
      'creatives.value-item': CreativesValueItem;
      'eco.hub-card': EcoHubCard;
      'homepage.counter-item': HomepageCounterItem;
      'homepage.feature-list-item': HomepageFeatureListItem;
      'shared.insight': SharedInsight;
      'shared.tag': SharedTag;
    }
  }
}
