import React from 'react';

import range from 'lodash.range';
import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton/LibraryGameCardSkeleton';
import ArticleWrapper from './ArticleWrapper';

export const dynamic = 'force-dynamic';

async function VaporExerciseLoading() {
  return (
    <ArticleWrapper>
      {range(12).map((game) => (
        <LibraryGameCardSkeleton key={game.slug} game={game} />
      ))}
    </ArticleWrapper>
  );
}

export default VaporExerciseLoading;
