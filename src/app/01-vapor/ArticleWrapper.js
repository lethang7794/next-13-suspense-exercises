import React from 'react';

export const dynamic = 'force-dynamic';

async function ArticleWrapper({ children, numOfGames }) {
  return (
    <section className='max-width-wrapper'>
      <header className='library-header'>
        <h1>My games</h1>
        {numOfGames && (
          <p>
            <span className='num-of-games'>{numOfGames}</span> games in library
          </p>
        )}
      </header>
      <div className='game-grid'>{children}</div>
    </section>
  );
}

export default ArticleWrapper;
