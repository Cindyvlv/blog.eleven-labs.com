import { Meta, StoryFn } from '@storybook/react';
import { LayoutTemplateDecorator } from '@storybook-decorators';
import React from 'react';

import { PostPreviewList, PostPreviewListProps } from '@/components';
import NewsletterBlockStories from '@/components/NewsletterBlock/NewsletterBlock.stories';
import * as PostPreviewListStories from '@/components/PostPreviewList/PostPreviewList.stories';
import { PostListPage } from '@/pages';

export default {
  title: 'Pages/PostList',
  component: PostListPage,
  args: {
    subHeader: {
      introBlock: {
        title: 'Ravi de te voir',
        description: 'Explorons de nouveaux savoirs',
      },
      choiceCategoryLabel: 'Quels articles veux-tu lire ?',
      choiceCategories: [
        { isActive: true, label: 'Tous' },
        { label: 'Javascript' },
        { label: 'PHP' },
        { label: 'Agile' },
        { label: 'Architecture' },
        { label: 'Bonnes pratiques' },
      ],
    },
    title: 'Tous nos articles',
    postPreviewList: React.createElement<PostPreviewListProps>(PostPreviewList, {
      ...PostPreviewListStories.default.args,
      ...PostPreviewListStories.PostPreviewListWithPagination.args,
    } as PostPreviewListProps),
    newsletterBlock: NewsletterBlockStories.args,
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
  decorators: [LayoutTemplateDecorator],
} as Meta<typeof PostListPage>;

const Template: StoryFn<typeof PostListPage> = (args) => <PostListPage {...args} />;

export const Overview = Template.bind({});
