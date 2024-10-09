import React from 'react';

interface IBookGenre {
  genre: string;
}

export default function BookGenre({ genre }: IBookGenre) {
  const genreBgColors: { [key: string]: string } = {
    romance: 'bg-genres-romance',
    fantasy: 'bg-genres-fantasy',
    thriller: 'bg-genres-thriller',
    mystery: 'bg-genres-mystery',
    humor: 'bg-genres-humor',
    suspense: 'bg-genres-suspense',
    classics: 'bg-genres-classics',
    gothic: 'bg-genres-gothic',
    paranormal: 'bg-genres-paranormal',
    ['literary fiction']: 'bg-genres-literaryFiction',
    ['historical fiction']: 'bg-genres-historicalFiction',
    ['young adult']: 'bg-genres-youngAdult',
    ['rom-com']: 'bg-genres-romcom',
    ['cozy fantasy']: 'bg-genres-cozyFantasy',
    ['magical realism']: 'bg-genres-magicalRealism',
    ['dark academia']: 'bg-genres-darkAcademia',
    ['dark romance']: 'bg-genres-darkRomance',
  };

  const genreTextColors: { [key: string]: string } = {
    romance: 'text-genres-romanceText',
    fantasy: 'text-genres-fantasyText',
    thriller: 'text-genres-thrillerText',
    mystery: 'text-genres-mysteryText',
    humor: 'text-genres-humorText',
    suspense: 'text-genres-suspenseText',
    classics: 'text-genres-classicsText',
    gothic: 'text-genres-gothicText',
    paranormal: 'text-genres-paranormalText',
    ['literary fiction']: 'text-genres-literaryFictionText',
    ['historical fiction']: 'text-genres-historicalFictionText',
    ['young adult']: 'text-genres-youngAdultText',
    ['rom-com']: 'text-genres-romcomText',
    ['cozy fantasy']: 'text-genres-cozyFantasyText',
    ['magical realism']: 'text-genres-magicalRealismText',
    ['dark academia']: 'text-genres-darkAcademiaText',
    ['dark romance']: 'text-genres-darkRomanceText',
  };

  const genreTranslations: { [key: string]: string } = {
    romance: 'Romance',
    fiction: 'Fiction',
    fantasy: 'Fantasy',
    thriller: 'Thriller',
    mystery: 'Mystery',
    humor: 'Humor',
    adult: 'Adult',
    suspense: 'Suspense',
    classics: 'Classics',
    dark: 'Dark',
    gothic: 'Gothic',
    paranormal: 'Paranormal',
    ['literary fiction']: 'Literary Fiction',
    ['historical fiction']: 'Historical Fiction',
    ['young adult']: 'Young Adult',
    ['rom-com']: 'Rom-Com',
    ['cozy fantasy']: 'Cozy Fantasy',
    ['magical realism']: 'Magical Realism',
    ['dark academia']: 'Dark Academia',
    ['dark romance']: 'Dark Romance',
  };

  return (
    <div
      className={`${genreBgColors[genre]} ${genreTextColors[genre]} rounded-full w-fit px-2 py-1 text-xs mr-2 mt-2`}
    >
      {genreTranslations[genre]}
    </div>
  );
}
