import { Box, PostPageProps } from '@eleven-labs/design-system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { PATHS } from '@/constants';
import { getPathFile } from '@/helpers/assetHelper';
import { getUrl } from '@/helpers/getUrlHelper';
import { generatePath } from '@/helpers/routerHelper';
import { useBreadcrumb } from '@/hooks/useBreadcrumb';
import { useContactCard } from '@/hooks/useContactCard';
import { useDateToString } from '@/hooks/useDateToString';
import { usePostsForCardList } from '@/hooks/usePostsForCardList';
import { useSeoPost } from '@/hooks/useSeoPost';
import { PostPageData } from '@/types';

export const usePostPage = (post: PostPageData): Omit<PostPageProps, 'variant' | 'summary' | 'children'> => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { getDateToString } = useDateToString();
  useSeoPost({
    title: post.title,
    post,
  });
  const contactCard = useContactCard();
  const breadcrumb = useBreadcrumb({ categoryName: post.categories[0] });
  const relatedPostsForCardList = usePostsForCardList({
    posts: post.relatedPosts,
  });

  const authors: PostPageProps['header']['authors'] & PostPageProps['footer']['authors'] = post.authors.map(
    (author) => ({
      username: author.username,
      name: author.name,
      description: <Box dangerouslySetInnerHTML={{ __html: author.content }} />,
      avatarImageUrl: author.avatarImageUrl,
      link: {
        label: t('common.post.footer.author.link_label'),
        hrefLang: i18n.language,
        href: generatePath(PATHS.AUTHOR, { lang: i18n.language, authorUsername: author.username }),
      },
    })
  );

  return {
    breadcrumb,
    cover: {
      src: post.cover?.path ? getPathFile(post.cover.path) : getPathFile('/imgs/cover-article.jpg'),
      alt: '',
    },
    header: {
      title: post.title,
      date: getDateToString({ date: post.date }),
      readingTime: post.readingTime,
      authors,
      shareLinks: {
        urlToShare: getUrl(location.pathname),
        shares: {
          twitter: true,
          facebook: true,
          linkedIn: true,
        },
      },
    },
    footer: {
      title: t('common.post.footer.author.title'),
      authors,
    },
    contactCard,
    relatedPostList: {
      relatedPostListTitle: t('common.post.related_post_list.title'),
      posts: relatedPostsForCardList,
    },
  };
};
